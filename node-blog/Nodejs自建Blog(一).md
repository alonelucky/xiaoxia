# Nodejs自建Blog(一)
## 1. 运行环境及项目依赖
1. node
2. npm
3. mongodb
3. express(主要依赖)
4. swig(模板引擎)
5. mongoose(数据库操作)
6. body-parser(获取post请求)
7. express-session(处理session)
8. formidable(文件上传也能异步获取post数据)
9. bluebird(Promise库)

## 2. 前端页面搭建
受原有wordpress影响,部分文件名借用wordpress的命名规范
1. index.html(首页)
2. single.html(文章页)
3. user.html(用户信息页)
4. admin.html(后台首页)
5. category.html(分类页)
6. editor.html(文章编辑页,使用markdown解析)
7. list.html(各类列表页)
8. table.html(各类表格列表页)
9. footer.html(页面底部)
10. header.html(页面头部)
11. sidebar.html(侧边栏)
12. ...

##### swig部分语法
1. 基本标签
	{% %} 模板标签,模板的引用逻辑,js代码等均用此标签
	{{ }} 变量输出使用此标签

2. 模板继承与引入


首先在使用layout的页面引入

latout中代码

	block indexBody
	endblock

用以定义继承的部分 为 indexBody

然后在index.html中引入

	extends './layout.html'

	{% block indexBody %}
	<h2>我是自由输出,定义在index页面的</h2>
	{% endblock %}

普通引入文件

	include 'footer.html'	
	

3. express中的设置

	
	// 设置模板引擎读取
	app.engine('html',swig.renderFile);
	// 设置模板引擎
	app.set('views engine','swig');
	// 设置模板路径(express默认路径为views文件夹下)
	app.set('views',__dirname+'/views');
	// swig引擎的默认设置(缓存默认开启)
	swig.setDefaults({
		cache:false
	});


## 3. 登录和注册
使用bootstrap的模态框创建,ajax提交信息
处理路由

#### 登录:
api/login

#### 注册:
api/sign

#### 保持登录状态
session
和
mongoose

##### 保存值(login=true,user={userId,NickName,权限});

## 4. 保持会话登录

利用mongodb保存会话信息,保持会话时间 

模块:contact-mongo,需结合session模块使用

配置

	mongoStore = require('connect-mongo')(session);

	app.use(session({
		secret:'my_self_name',
		store: new mongoStore({
			url:'momgodb://localhost/blog',
			collection:'sessions'
		})
	}));

便可自动将session存入数据库中,保持用户的登录状态


## 5. 利用中间件向下传递数据

本项目中利用中间件逐步向下传递数据进行验证,比如登录逻辑,
	
	中间件
		1. 查找对应用户信息(向下传递该用户信息)
		2. 对比数据

	app.use('/login',check_one,check_two)

	check_one(req,res,next){
		model.findOne()
			.then((data)=>{
				// 将其绑定在向下传递的参数中req,res均可,其他路由是获取不到的,因此可以放心使用
				req.mydata=data
			});
	}
