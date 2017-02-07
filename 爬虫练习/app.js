var express = require('express');
var superagent = require('superagent'),
	cheerio = require('cheerio');

var app = express();

app.get('/',function(req,res){
	res.send('hello world');
});


app.get('/pa',function(req,res,next){
	
	var paHref = 'https://cnodejs.org/';
	superagent.get(paHref)
		.end(function(err,sres){
			
			if(err){
				return next(err);
			}
		
			var $ = cheerio.load(sres.text);
			var items = [];
			$('#topic_list .topic_title').each(function(idx,element){
				var $element = $(element);
				items.push({
					title:$element.attr('title'),
					href:$element.attr('href')
				});
			});
			
		res.send(items);
	});
});

app.listen(80,function(){
	console.log('app is running!');
});