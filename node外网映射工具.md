## node外网映射工具


#### 1. localtunnel

本地全局安装:
	
	npm install localtunnel -g

使用:

	lt --port 80
	your url is: https://uonjoofejf.localtunnel.me

端口为本地端口,返回一个url即为外网url,毕竟服务器在国外,比较慢

自定义二级域名:

	lt --subdomain myselfname --port 80
	your url is: https://myselfname.localtunnel.me


自定义映射服务器:

	lt --host http://www.net:2000 --port 80

http://www.net:2000为服务器端的域名及开放的端口

#### 2. 服务器端安装

拉取项目并安装:

	git clone git://github.com/defunctzombie/localtunnel-server.git
	cd localtunnel-server
	npm install

直接在服务器端运行:

	bin/server --port 2000

客户端使用时需要--host指定主机及端口