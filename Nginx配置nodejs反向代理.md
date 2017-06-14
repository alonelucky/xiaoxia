## Nginx配置nodejs反向代理

简单放下对哥哥参数的理解

##### 1.配置自己的node信息
 在nginx的conf文件夹下增加文件nginx.node.conf(文件名无所谓,得自己明白是做什么用的,也可以直接写在nginx.conf中)


	upstream my_node_demo{
		server 127.0.0.1:3000;
		keepalive 65;
	}

配置node应用所监听的端口和超时时间


##### 2. 配置反向代理


	server{
		# 监听8090端口
		listen 8090;
		# 绑定的域名
		server_name mynode.demo;
		# 日志文件,注意文件夹的斜杠必须为右斜杠
		access_log "D:/Visual-NMP-x64/logs/Nginx/node_demo.log";
		# 非静态资源,设置反向代理
		location / {
			proxy_set_header X-Real-IP $remote_addr;
			proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
			proxy_set_header Host $http_host;
			proxy_set_header X-Nginx-Proxy true;
			# 这里代理的是之前定义的node的名称
			proxy_pass http://my_node_demo; 
		}
		# 静态资源,则劫持处理使用nginx处理
		# (使用正则表达式)
		location ~ .*\.(gif|js|css|png|jpg|jpeg|ico|txt|bmp|html)$ {
			# 静态资源根目录 
		    root C:/Users/Administrator/Desktop/xiaoxia/node-learning/node-demo/public;  
		    access_log off;
		    expires max;
		}
	}



##### 4. 在nginx中引入配置文件

在nginx文件的http{}中增加(建议加在最后)

	include nginx.node.conf

##### 5. 配置443 SSL端口反向代理

其余配置如上,更改server中的参数

	server {
		# 监听443端口,使用安全连接
		listen 443;
		# 开启ssl
		ssl on;	
		# 证书存放位置
		ssl_certificate '';
		# 证书秘钥存放位置
		ssl_certificate_key '';
		# ssl版本
		ssl_portocols TLSv1 TLSv1.1 TLSv1.2;
		# 开启ssl密码
		ssl_prefer_server_ciphers on;
		# ssl密码(证书提供商提供)
		ssl_ciphers ;
		# 绑定域名 
		server_name www.demo.com;
		.....
	}
	# 设置80端口永久重定向到443
	server {
		listen 80;
		server_name www.demo.com;
		return 301 https://$server_name$require_uri;
	}