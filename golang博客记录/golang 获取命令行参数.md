#golang 获取命令行参数

#### 1. os 包

	fmt.Println(os.Args)

	for _,v := range os.Args{
		fmt.Println(v)
	}

#### 2. flag 包

	// 无需指定参数
	flag.Parse()
	fmt.Println(flag.Args())

	// 指定参数
	num := flag.Int("n",8000,"请输入请求次数")	
	url	:= flag.String("u","","请输入访问地址")
			// 均有三个参数
			// 1. 名字(命令行使用)
			// 2. 默认值
			// 3. 提示信息
			// flag.Parse() 不知作用,但是都可以输出
	fmt.Println(*num)
	fmt.Println(*url)
