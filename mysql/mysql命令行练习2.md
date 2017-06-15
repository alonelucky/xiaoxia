## mysql练习

####1. 排序 order by

		mysql> SELCET * FROM table_name ORDER BY author ASC;
	排序:asc正序
		desc 倒序

	将table_name表中的数据按照作者名称倒序排列
####2. 分组

		mysql> select author,count(*) from table_name group by author;
	将表中数据按照作者名字统计

		+--------+----------+
		| author | count(*) |
		+--------+----------+
		| Jick   |        1 |
		| John   |        1 |
		| To     |        1 |
		| Tomy   |        2 |
		| 小      |        2 |
		+--------+----------+
			
	分组数据再归纳

		mysql> select author,count(*) from table_name group by author with rollup;

		+--------+----------+
		| author | count(*) |
		+--------+----------+
		| Jick   |        1 |
		| John   |        1 |
		| To     |        1 |
		| Tomy   |        2 |
		| 小      |        2 |
		| NULL   |        7 |
		+--------+----------+		

####3. 连接多个表的查询结果
	
	a) 创建新数据表并设置外键
		
		mysql> create table table_name2(
			 > id int not null auto_increment,
			 > author_id int not null,
			 > comments text not null,
			 > create_date date,
			 > primary key (id),
			 > foreign key (author_id) references test_table(id),
			 > )engine=InnoDB default charset=utf8;
 
		mysql> select a.id,a.author,b.comments from table_name a inner join table_name2 b on a.id = b.author_id;

		+----+--------+----------+
		| id | author | comments |
		+----+--------+----------+
		|  3 | 小      | like     |
		|  4 | Tomy   | like     |
		|  4 | Tomy   | love     |
		+----+--------+----------+
	
####4. 索引
1. 普通索引
	1. 创建索引


	2. 修改表结构(添加索引)
	3. 创建表时指定索引
	4. 删除索引

2. 唯一索引

####5. 处理重复数据
####6. 导入数据
####7. 导出数据
####8. SQL注入