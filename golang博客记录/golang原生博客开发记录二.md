# golang原生博客记录

##### 1. 静态资源处理

FileServer和ServeFile
	
	// 返回值为http.Handler
	http.FileServer(http.Dir("public"))
	
	http.Handle("/",http.FileServer(http.Dir("public")))

由于自带的静态资源管理用不习惯..于是决定,自己写一个


	