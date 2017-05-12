## 利用fs遍历图片,使用tinify压缩
gulp前端自动化中有压缩图片的工具gulp-imagemin等,但是压缩效果并不很理想,之前发现的tinypng.com网站提供许多压缩接口(puby,java,python,php,nodejs等)和插件(photo,wordpress等),当然这个是付费的.免费配额为500张图片/每月。个人觉得轻度使用是足够的。

#### 1. 官方站点提供了常规调用方法
安装:

	npm install --save tinify
调用:

	var tinify = require('tinify');
	tinify.key='your key ';
这个是提供邮箱即可获得秘钥,在此我就不贴出来了,秘钥链接:https://tinypng.com/developers

收到邮件后,点击即可获取(可能在垃圾邮件中)

压缩操作:

	var source = tinify.fromFile("unoptimized.jpg");
	source.toFile("optimized.jpg");

#### 2. 利用fs获得文件数组
但是,只提供一次操作一个文件,比较繁复.于是利用node自带的fs文件系统模块,获取到文件,并遍历操作

	fs.readdir() 异步获取
	fs.readdirSync() 同步获取
	该函数传参数为文件夹名,返回值均为文件名数组,因为在本地操作,而且是需要获取到图片后才操作,所以选择同步获取

代码如下:
	
	fileNameArr = fs.readdirSync('img');

	fileNameArr.forEach(function(fileName){
		source = tinify.fromFile("img/"+fileName);
		source.toFile("a/"+fileName);
	});

这样就好了.
		