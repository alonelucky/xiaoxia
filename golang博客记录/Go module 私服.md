## Go module 私服

#### 1. 背景

golang 1.11.0 之后 `go` 提供 mod 内置包管理工具

但是实际应用时，由于网络等原因造成请求部分网站托管模块时无法响应，导致无法使用，使用ss代理有时又会产生新的问题，
又或者由于依赖过多，致使go mod 网络处理时长过久等原因，于是便有了go mod 私服项目 [Athens](https://github.com/gomods/athens)

#### 2. 服务部署
+ 拉取代码
```
# progromeRoot
git clone https://github.com/gomods/athens
cd athens/cmd/proxy
go install
```
+ 检查安装
```
$GOPATH/bin/proxy version
```
+ 部署
使用任何常用的进程守护工具均可，此处 pm2 实例
```
# 默认配置文件端口为3000/3001 有冲突修改配置文件
pm2 start ./proxy -- -config_file=progromeRoot/config.dev.toml
```
+ (可选)配置nginx 代理
```
# 简单配置
server {
    listen 80;
    server_name your.domain.com;
    location / {
        proxy_pass http://127.0.0.1:3000;
    }
}
```
#### 3. 本地使用
服务配置完成后
```
host: http://your.domain.com
port: 80
```
修改本地环境变量
```
# go mod /go get 使用的代理
export GOPROXY=http://your.domian.com

# 不需要使用代理的域名
export NO_PROXY=github.com,$NO_PROXY
```
#### 4. 小结
此文是go mod 私服配置简版，该项目支持模块缓存，默认是使用内存，有兴趣的可以自行研究配置
