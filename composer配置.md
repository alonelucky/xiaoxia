## windows下配置composer
### 1. 配置php环境
我使用的是phpstudy其他环境除路径外，其他类似
    
1. 我的电脑 --> 属性 --> 高级系统设置 --> 高级 --> 环境变量

2. 在系统变量中找到path变量 --> 编辑其值 --> 添加路径 c:\phpstudy\php55n;

        注：此步骤注意最后的分号（英文）不能少

3. 在系统变量中新建

        变量名：PHP_HOME
        值：c:\phpstudy\php55n
            此步骤不需要分号
4. 配置检测
    1. 打开cmd dos命令行 
            win + R 打开运行  -->  cmd
    2. 输入 php -v
            显示 php 5.5.30 ·····
    3. php环境变量配置成功

### 2. 配置composer
我参考的是国内镜像站phpcomposer.com
1. 下载安装composer-setup.exe
        https://getcomposer.org/Composer-Setup.exe
2. php环境变量配置完成后，安装composer会自动识别php路径，一路next到最后即可。
3. 此时composer -v仍不能正常显示
4. 需要cmd下运行如下语句
        php -r "readfile('https://getcomposer.org/installer');" | php

        注意： 如果收到 readfile 错误提示，请使用 http 链接或者在 php.ini 中开启 php_openssl.dll 
5. composer -v
   显示
        composer version 1.2.2
6. composer环境配置完成

### 3. 以上内容也是百度参考了几篇文章结合自己实际情况配置完成的，参考链接
   ##### phpcomposer官网windows下composer配置
    http://docs.phpcomposer.com/00-intro.html#Downloading-the-Composer-Executable
