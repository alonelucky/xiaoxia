## mysql创建用户及权限设置

#### 1. grant
查看用户权限:
1. show grants; // 查看当前用户权限
2. show grants for username@localhost; // 查看已知用户权限

###### 普通权限:

	grant 权限 on 数据库对象 to 用户@访问地址 by密码
# 

	权限:
		1. select
		2. instert
		3. update
		4. delete
	
###### 数据库操作权限
	grant 创建、修改、删除 MySQL 数据表结构权限。
# 

	权限;
		1. create
		2. alter
		3. drop
		4. references
		5. index

###### 常见数据库命令操作
	1. grant all on *.* to username@"%" by password
	2. flush privileges
# 
	创建远程连接的用户,可以访问操作所有数据库

去除已设定的权限:
1. 在mysql下的user表中去除或更新表内容

	> use mysql;
	> select user,host from user;
	> delete from user where user="username" and host="localhost";
	> update user set host="" where user="username";

	
2. revoke

	> revoke all on *.* from username@localhost;