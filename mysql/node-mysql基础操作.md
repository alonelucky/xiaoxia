## node-mysql基础操作

#### 1. 安装mysql模块

	npm install mysql

#### 2. 创建mysql.js
	var mysql = require('mysql');
	
	var connection = mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'root',
		database:'node'
	});
	
利用mysql模块的createConnection函数,配置好相应参数即可连接mysql数据库,

	connection.connect();
	console.log('数据库连接成功');

建立连接

	connection.query(sql,function(err,res){
		if(err){
			console.log(err);
		}else{
			console.log(res);
		}
	});
运行sql语句,返回数据信息

	connection.end();
	console.log('数据库关闭');

关闭数据库连接