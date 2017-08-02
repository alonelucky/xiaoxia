# golang原生博客记录

##### 1. 创建简单的http服务

	package main

	import(
		"fmt"
		"net/http"
		"log"
	// 	"io"
	)

	// 首页函数
	// 传递两个参数
	// 1. w 响应函数,用于处理
	// 2. r 请求信息,使用指针传递,便于处理消息
	func showIndex(w http.ResponeWriter,r *http.Request){
	    // 如果不是首页不做处理(因为每个路由都会被 ```/``` 处理)
	    if r.URL.path != "/"{
	        return
	    }
		w.Write([]byte("hello blog"))
		// io.WriteString(w,"hello blog")
	}

	// 主函数
	func main(){
		
		// 创建首页访问
		http.Handle("/",http.HandlerFunc(showIndex))
		// http.HandleFunc("/",showIndex)
		// 建议使用上面的,方便使用中间件(后边会讲)
		// 监听端口
		log.Fatal(http.ListenAndServe(":8000",nil))
	
	}

运行,访问页面便会输出hello blog

##### 2. 路由中间件使用

golang 中Handler接口提供了ServeHttp(w,r)函数来接收传递的w和r

    type Handler interface {
        ServeHTTP(ResponseWriter, *Request)
    }

因此,在这里作为中间件的原理

    type HandlerFunc func(ResponseWriter, *Request)

中间件函数示例

    func middle(next http.Handler) http.Handler {
        return http.HandlerFunc(func(w http.ResponeWriter,r *http.Request){
            // 处理逻辑
            fmt.Println("middle logs")
            // 向下传递
            next.ServeHttp(w,r)
        })
    }


    // 原来的http请求中
    http.Handle("/",middle(http.HandlerFunc(showIndex)))

ps: 有点难看,,,,/后期看看能不能原生来个中间件函数
