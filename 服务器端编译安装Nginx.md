## 服务器端编译安装Nginx

在centos7下安装的

### 1. 安装依赖项
1. 安装make

		yum -y install gcc automake autoconf libtool make
2. 安装g++

		yum install gcc gcc-c++

3. 安装PCRE

		wget ftp://ftp.csx.cam.ac.uk/pub/software/programming/pcre/pcre-8.37.tar.gz 
		tar -zxvf pcre-8.37.tar.gz
4. 安装zlib

		wget http://zlib.net/zlib-1.2.8.tar.gz
		tar -zxvf zlib-1.2.8.tar.gz
5. 下载/安装openssl(必须使用源码)

	wget https://www.openssl.org/source/openssl-1.0.1t.tar.gz
	tar -zxvf openssl-1.0.1t.tar.gz

### 2. 安装nginx
	
	wget http://nginx.org/download/nginx-1.12.0.tar.gz
	tar -zxvf nginx-1.12.0.tar.gz
	cd nginx-1.12.0

配置安装选项

	./configure --sbin-path=/usr/local/nginx/nginx \
	--conf-path=/usr/local/nginx/nginx.conf \
	--pid-path=/usr/local/nginx/nginx.pid \
	--with-http_ssl_module \
	--with-pcre=/root/pcre-8.37 \
	--with-zlib=/root/zlib-1.2.8 \
	--with-openssl=/root/openssl-1.0.1t

运行make与安装

	make
	make install

--with-pcre=/root/pcre-8.37 \
--with-zlib=/root/zlib-1.2.8 \
--with-openssl=/root/openssl-1.2.2l

均指的是之前下载解压的源码路径

### 3. 至此,基本安装成功了

注意事项:
	1. 卸载Apache
	2. 配置nginx环境变量