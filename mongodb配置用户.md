## mongodb下配置信息

mongodb数据库默认绑定本地127.0.0.1端口,因此没有使用用户管理,所以也产生了不少问题,这里是常见的配置信息


#### 1. ``` mongodb.conf ``` 文件配置

	dbpath = (数据库二进制文件保存路径)
	logpath = (数据库日志保存路径)
	port = (端口号)
	nohttpinterface = (布尔值)
	auth = (布尔值)


#### 2. 创建用户

	// 创建超级用户
	db.createUser({user:"user_name",pwd:"password",roles:[{role:"root",db:"admin"}]})

创建指定数据库用户

	// 先使用数据库
	use db_name

	// 然后创建仅有读写权限的用户
	db.createUser({user:"user_name",pwd:"password",roles:[{role:"readWrite",db:"db_name"}]})


登录方法
		
	// 登录指定端口
	mongo localhost:27018
	// 使用用户分配的数据库
	use db_name
	// 登录
	db.auth("user_name","password")

	登录成功返回1,失败返回0

用户角色说明

	读写权限：
		read/readWrite 读写库的权限
	数据库管理角色：
		dbAdmin  某数据库管理权限
	    userAdmin  某数据库用户的管理权限，包括创建用户，授权的管理
	    dbOwner     某数据库的所有者，拥有该库的所有权限，包括readWrite，dbAdmin和userAdmin权限
	备份和恢复角色：
		bakcup
		restore
	所有数据库角色：
		readAnyDatabase
	    readWriteAnyDatabase
	    dbAdminAnyDatabase
	    userAdminAnyDatabase
	超级用户角色：
		root