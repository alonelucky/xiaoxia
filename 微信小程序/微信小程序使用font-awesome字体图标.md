## 微信小程序使用font-awesome字体图标

#### 1. 下载[font-awesome](http://www.fontawesome.com.cn/#modal-download)字体包

得到如下文件:

	-font-awesome
		|
		+css
			-font-awesome.css
			-font-awesome.min.css
		+fonts
			-FontAwesome.otf
			-fontawesome-webfont.eot
			-fontawesome-webfont.svg
			-fontawesome-webfont.ttf
			-fontawesome-webfont.woff
			-fontawesome-webfont.woff2
		+less
		|
		+scss
		HELP-US-OUT.txt		


#### 2. 上传 ```./fonts/fontawesome-webfont.ttf``` 到网站https://transfonter.org/,选择base64编码,转换(convert)后下载


#### 3. 下载文件,复制下载文件 ```stylesheet.css``` 中的代码到小程序 ```app.wxss```中


#### 4. 复制 ```./css/font-awesome.css```,复制里面的css(去掉@font-face部分)到微信小程序中的 ```app.wxss``` 中

#### 5. 然后再程序中直接引用就可以了,
	<text class="fa fa-eye"></text>