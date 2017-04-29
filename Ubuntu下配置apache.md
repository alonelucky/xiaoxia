##Ubuntu下配置apache
以在Ubuntu 要配置 \var\www\linuxidc 目录为 linuxidc.com为例

####1. 打开：\etc\hosts文件：sudo vi \etc\hosts
添加：127.0.0.1 linuxidc.com

####2. 打开： \etc\apache2\sites-available\000-default
在头部添加：NameVirtualHost *:80

####3. 在目录：etc\apache2\sites-available\下新建一个为：‘linuxidc’的文件(sudo touch linuxidc)
编辑该文件内容：
<VirtualHost *:80>
ServerName linuxidc.com
ServerAlias *.linuxidc.com
DocumentRoot "/var/www/linuxidc/"
ErrorLog "/var/log/apache2/edunuke_errors.log"
CustomLog "/var/log/apache2/edunuke_accesses.log" common
</VirtualHost>

####4. 重启apache:sudo /etc/init.d/apache2 restart