## mysql练习

1. 创建数据库

		mysql> create database database_name;

2. 删除数据库

		mysql> drop database database_name;

3. 创建表

		mysql> create table table_name(
			 > id int not null auto_increment,
			 > author varchar(10) not null,
			 > title varchar(50) not null,
			 > content text,
			 > create_date date,
			 > primary key ( id )
			 > )engine=InnoDB default charset=utf8;
	>1. 创建id为整型,不为空,自动增加
	>2. 作者为长度为10的字符串,不为空
	>3. 标题为不为空的长度为100的字符串
	>4. 内容为长文本类型
	>5. 创建时间为时间类型
	>6. 设置id为主键
	>7. 设置mysql存储引擎为InnoDB,字符集为utf-8
		
4. 删除表

		mysql> drop table table_name;
	删除table_name的表
5. 增加数据

		mysql> insert into table_name
			 > (author,title,content,create_date)
			 > values
			 > ('Tomy','Read book','',now());
	增加数据作者为Tomy 标题为Read book 内容为null 时间为当前时间
		
6. 查询数据

		mysql> select id,author,title,create_date
			 > from table_name
			 > where id > 2 limit 2 offset 5;
		// binary 区分大小写匹配
		// limit 限制显示数据条数
		// offset 数据偏移条数 
	查询id 大于2的行,展示从第6条开始的两条数据的id,作者,标题,创建时间

7. 删除数据

		mysql> delete from test_table where id = 1;
	删除id为1的数据行
	
	注:

		mysql> dalete from test_table;
	没有注明查询条件的话,默认清空当前表中所有数据

8. 修改数据

		mysql> update table_name set author='New data' where id = 2;
	修改id为2行的作者为New data

		mysql> update table_name set author='New name',title='Learning' where id =3;
	修改id为3的数据行的作者和标题

9. Like查询模糊数据

		mysql> select * from table_name where author like '%o';
	查询table_name表中作者字段以字母o结尾的数据

		mysql> select * from table_name where author like 't%';
	查询table_name表中作者字段以字母t起始的数据

10. 多个查询语句

		mysql> select * from table_name where author like 'www%'
			 > union all
			 > select * from table_name where author like '%cn';

	union 两个参数:all 输出所有查询结果,包括重复数据
				 :distinct 排除重复数据并输出(默认值)
				