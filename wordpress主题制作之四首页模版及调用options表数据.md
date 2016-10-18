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

		index.php --> 主页模版
		style.css --> 主要样式表
		header.php
		footer.php
		slider.php
		404.php
		archive.php
		search.php
		tag.php
		single.php
		page.php
		screenshot.png --> 主题缩略图

### 二、首页模版

1. 	header.php

			<!doctype html>
			<html>
			<head>
			<meta charset="<? bloginfo('charset');?>">
			<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
			<meta name="viewport" content="width=device-width,initial-scale=1.0">
			<link rel="stylesheet" href="<? bloginfo('stylesheet_url');?>">
			<title><? bloginfo('name');?> - <? bloginfo('description');?></title>
			</head>

2. 	footer.php

			</body>
			<script src="<?php bloginfo('stylesheet_directory'); ?>/js/modernizr.js"></script> 
			<script src="<?php bloginfo('stylesheet_directory'); ?>/js/main.js"></script>
			</html>

3. 	index.php

			<?php get_header();?>
			<body>

			<?php 
			if (is_home()) {?>
				判断是否为主页，如果是则显示
			<?php	} 
			?>

			<?php 
				if( have_posts() ){               //判断是否有文章
					while( have_posts() ){
						the_post();				 //有文章输出
			?>
			
			<h3><a href="<? the_permalink(); ?>"><?php the_title();?></a></h3> //输出文章标题，标题链接
			<span>发布时间：<?php the_time('Y-m-d'); ?>作者：<?php the_author();?></span>
			
			<p><!--控制显示博客摘要   0 从头开始截取，300结束，以省略号结尾-->
			<? echo mb_strimwidth(strip_tags(apply_filters('the_content', $post->post_content)), 0, 300,"......"); ?>
			</p>

			<span><a href="<?php the_permalink() ?>">了解更多</a></span>	

			<?php
				}
			}else{
				echo "没有文章";					//没有文章输出
			}
			?>

			<ul>
				<li><?php previous_post_link('<span>上一篇：%link</span>');?></li>
				<li><?php next_post_link('<span>下一篇：%link</span>');?></li>
			</ul>

			<?php get_footer();?>

### 三、options表操作

1. 添加自定义数据

页面访问次数

		<?php echo $view;?>					//输出数据	
		<?php
			$view = get_option('view');			//定义、添加参数到数据表
			update_option('view',$view+1);		//更新数据
		?>

学习模板基本函数，并且练习如何往数据表中添加参数和数据，并且调用输出。