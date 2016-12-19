##linux下配置安装nodejs

（非广告）virmach 美国VPS主机7.5刀/年（折合软妹币52.129；按软妹付款为54多），
配置如下：

|CPU|RAM|硬盘|带宽/流量|IP|DDoS保护|
| --- | --- |
|1核|128M|10G SSD|1Gbps/250Gbp|一个|10Gbps|

个人觉得还可以，就买了一个练习配置，因为内存不大，所以打算配置nodejs练练手，就当学习了。下边是linux配置，非购买使用流程。

1. 根据提供的IP:22使用putty链接
2. 用户名root  密码\*\*\*\*\*
![登陆图片](img/virmach001.png)
3. 该主机自带了python2.7.3
![登陆图片](img/virmach002.png)
4. 于是安装node就省去了很大一步（注：还得在本地虚拟机从零测试安装）
 ```cd /usr/local/```
 在这个文件夹下（当然哪个文件夹都可以），下载nodejs资源包
 本来想服务器在国外，下载国外的node资源应该不错，于是乎找到下载地址（官网的）
 https://nodejs.org/dist/v6.9.2/node-v6.9.2-linux-x86.tar.xz

 运行 ```wget --no-check-certificate https://nodejs.org/dist/v6.9.2/node-v6.9.2-linux-x86.tar.xz```
 no-check-certificate是阻止wget下载前验证
 下载成功 ，而且网速还不错
 ![登陆图片](img/virmach003.png)

 解压 ```tar node-v6.9.2-linux-x86.tar.xz```
 格式错误。于是只能拐回国内链接
 同样运行 ```wget --no-check-certificate https://nodejs.org/dist/v6.2.0/node-v6.2.0-linux-x86.tar.gz```

 ![登陆图片](img/virmach004.png)

 下载成功，网速依旧。
 解压 ```tar node-v6.9.2-linux-x86.tar.xz```

5. 解压文件包并重命名文件夹（详情搜索mv命令）
 ``` mv node-v6.9.2-linux-x86 node```
6. 配置临时环境变量
```export PATH=/usr/local/python/bin:/usr/local/node/bin:$PATH```
该环境变量为临时变量，关闭ssh窗口即失效
所以需要配置永久环境变量，修改etc/profile文件
7. ```cd /etc/```
 ```vim profile```
 ![登陆图片](img/virmach005.png)
 增加变量路径 ```:wq```保存退出
8. node环境配置成功
 ![登陆图片](img/virmach006.png)

剩下的后期继续更新。
