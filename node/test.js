var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

// 创建获取响应类型的函数
function getMime(extname){
	// 利用同步读取文件获取到mime.json中的json数据
	mimeObj = JSON.parse(fs.readFileSync('./mime.json').toString());
	// 返回对应的文件响应类型
	return mimeObj[extname];
}

http.createServer(function(req,res){
	// 不处理站点图标请求
	if(req.url == '/favicon.ico'){
		return;
	}
	// 获取URL传入的路径
	var pathname = url.parse(req.url).pathname;
	// 获取文件类型(文件后缀)
	var extname = path.extname(pathname);
	// 读取文件
	fs.readFile('./static/'+pathname,function(err,data){
		// 获取返回的响应类型值
		mime = getMime(extname);

		// 写相应头为相应类型
		res.writeHead(200,{'Content-type':mime+',charset=utf8'});
		// 相应结束返回读取的文件
		res.end(data);
		
	});
	
}).listen(3000);



