## Mongoose学习记录

个人记录而已:仅供交流


1. mongodb为非关系型数据库,在传统SQL数据库中一些较方便的查询功能:例如同时查询两张表的数据,外键等.个人感觉mongoose是在仿照传统数据库的方法来操作mongodb,并增加了许多实用的功能.(ODM)
2. 记录

#### 学习记录

###### 1. 创建连接数据库

	// 第一步引包
	const mongoose = require('mongoose');
	// 第二步连接数据库,默认端口号27017
	mongoose.connect('mongodb://localhost/test'); 
	// 返回一个db对象,默认数据库常开
	const db = mongoose.connection;

###### 2. 创建数据结构
类似于传统数据库,使用之前需要规定需要使用的字段

	// 定义表结构
	const Schema = mongoose.Schema;
	var userSchema = new Schema({
		'username':String,
		'password':String,
		'age':Number,
		'hobby':Array,
		create_at:Date
	});

mongodb中默认每个文档均自动生成一个ObjectId();,因此默认使用mongodb的id
	
###### mongoose中的表字段类型	
	String   文本
	Number   数字
	Date     日期
	Buffer   二进制
	Boolean  布尔值
	Mixed     
	ObjectId 对象
	Array    数组


###### 3. 创建数据模型

	//创建数据模型
	var userModel = db.model('User',userSchema);

userModel即为数据模型,对于该集合(表)的操作,均可借助该模型上的方法来进行.

###### 4. 创建实例(即创建一条数据)
方法1. 
	
	var user1 = new userModel({username:'xiaogang'});

	user1.password='123456';

	user1.save();
	
此时,查看数据库,已经添加了一条数据
	
方法2. 

	var user2 = userModel.create({username:'xiaohong',password:'123'});

这样也添加了一条数据.
该方法的回调函数中返回该数据对象本身

###### 5. 为user增加新的方法
增加新方法,必须在创建模型之前

	userSchema.methods.findId(){
		return this._id;
	}

创建实例之后,就可以调用该放法,返回自己的ID;

	console.log(user1.findId());
	// 结果
	5935086d45f73d02655b694f

###### 6. 利用promise解决回调嵌套问题
这里使用的是  Bluebird

	mongoose.Pormise = require('bluebird');	

引包之后就可以直接使用;

	userModel.find({})
		.then(function(arr){
			console.log(err);
		});

	// 结果
	[ { _id: 5935085645f73d02655b694b, name: 'xiaohong' },
	  { _id: 59350191545b611a04d43480, name: 'xiaoli', age: 15 },
	  { _id: 5935085145f73d02655b694a, name: 'xiaoyiyu' },
	  { _id: 5935086a45f73d02655b694e, name: '帝王' },
	  { _id: 5935086d45f73d02655b694f, name: '帝王' } ]


