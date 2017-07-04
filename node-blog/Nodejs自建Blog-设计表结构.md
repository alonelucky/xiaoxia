# Nodejs自建Blog-设计表结构

## 1. 表名
1. 用户表
2. 文章表
3. 分类表
4. 评论表
5. 站点信息表

## 2. 用户表结构

1. id/_id
2. username
3. password
4. nickname
5. email
5. create_at
6. update_at
7. last_login_at

## 3. 文章表结构

1. id/_id
2. author   [ref:users]
2. title
3. sumary
4. content
5. comments  [ref:comments]
6. creat_at
7. update_at

## 4. 评论表结构

1. id/_id
2. author	[ref:users]
3. post   	[ref:posts]
4. content
4. create_at
5. update_at

## 5. 站点信息表结构

1. id/_id
2. name
3. value
4. create_at
5. update_at

|id|name|value|
|---|---|
|1|smtp|{email:'123@132.com',passwd:'123465'}|
|2|site_name| 小码农博客 |
 