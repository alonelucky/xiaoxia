# wordpress主题开发之四
### ——首页模版及调用options表数据
---
### 一、主题模板创建

1. 必须文件：

		style.css
		index.php

2. 文件内容：

	style.css
		/*
		Theme Name: 主题名称
		Theme URI: 主题介绍的网址
		Description: 主题简短介绍
		Version:1.0.0 版本号
		Author: 作者名
		Author URI: 作者的网址
		Tag: 标签，多个用英文逗号隔开
		*/

3. 基础文件：

		index.php --&gt; 主页模版
		style.css --&gt; 主要样式表
		header.php
		footer.php
		slider.php
		404.php
		archive.php
		search.php
		tag.php
		single.php
		page.php
		screenshot.png --&gt; 主题缩略图

### 二、首页模版

1. 	header.php

			&lt;!doctype html&gt;
			&lt;html&gt;
			&lt;head&gt;
			&lt;meta charset="&lt;? bloginfo('charset');?&gt;"&gt;
			&lt;meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1"&gt;
			&lt;meta name="viewport" content="width=device-width,initial-scale=1.0"&gt;
			&lt;link rel="stylesheet" href="&lt;? bloginfo('stylesheet_url');?&gt;"&gt;
			&lt;title&gt;&lt;? bloginfo('name');?&gt; - &lt;? bloginfo('description');?&gt;&lt;/title&gt;
			&lt;/head&gt;

2. 	footer.php

			&lt;/body&gt;
			&lt;script src="&lt;?php bloginfo('stylesheet_directory'); ?&gt;/js/modernizr.js"&gt;&lt;/script&gt; 
			&lt;script src="&lt;?php bloginfo('stylesheet_directory'); ?&gt;/js/main.js"&gt;&lt;/script&gt;
			&lt;/html&gt;

3. 	index.php

			&lt;?php get_header();?&gt;
			&lt;body&gt;

			&lt;?php 
			if (is_home()) {?&gt;
				判断是否为主页，如果是则显示
			&lt;?php	} 
			?&gt;

			&lt;?php 
				if( have_posts() ){               //判断是否有文章
					while( have_posts() ){
						the_post();				 //有文章输出
			?&gt;
			
			&lt;h3&gt;&lt;a href="&lt;? the_permalink(); ?&gt;"&gt;&lt;?php the_title();?&gt;&lt;/a&gt;&lt;/h3&gt; //输出文章标题，标题链接
			&lt;span&gt;发布时间：&lt;?php the_time('Y-m-d'); ?&gt;作者：&lt;?php the_author();?&gt;&lt;/span&gt;
			
			&lt;p&gt;&lt;!--控制显示博客摘要   0 从头开始截取，300结束，以省略号结尾--&gt;
			&lt;? echo mb_strimwidth(strip_tags(apply_filters('the_content', $post-&gt;post_content)), 0, 300,"......"); ?&gt;
			&lt;/p&gt;

			&lt;span&gt;&lt;a href="&lt;?php the_permalink() ?&gt;"&gt;了解更多&lt;/a&gt;&lt;/span&gt;	

			&lt;?php
				}
			}else{
				echo "没有文章";					//没有文章输出
			}
			?&gt;

			&lt;ul&gt;
				&lt;li&gt;&lt;?php previous_post_link('&lt;span&gt;上一篇：%link&lt;/span&gt;');?&gt;&lt;/li&gt;
				&lt;li&gt;&lt;?php next_post_link('&lt;span&gt;下一篇：%link&lt;/span&gt;');?&gt;&lt;/li&gt;
			&lt;/ul&gt;

			&lt;?php get_footer();?&gt;

### 三、options表操作

1. 添加自定义数据

页面访问次数

		&lt;?php echo $view;?&gt;					//输出数据	
		&lt;?php
			$view = get_option('view');			//定义、添加参数到数据表
			update_option('view',$view+1);		//更新数据
		?&gt;

学习模板基本函数，并且练习如何往数据表中添加参数和数据，并且调用输出。