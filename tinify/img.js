var tinify = require('tinify');
var fs = require('fs');
var gulp = require('gulp');
tinify.key='H0r2iCRdXAMoFrt2pXRZJpytIbGL33Ns';


var imgNameArr;


imgNameArr = fs.readdirSync('img');

for(var i=0;i<imgNameArr.length;i++){
	source = tinify.fromFile('img/'+imgNameArr[i]);
	source.toFile('a/'+imgNameArr[i]);
}

