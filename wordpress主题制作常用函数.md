#wordpress主题制作常用函数

##调用页面：
> get_header();调用头部文件header.php
> 
> get_footer();调用脚部文件footer.php
> 
> get_sidebar();调用小工具栏sidebar.php
> 
> get_option('home');调用主页路径
> 
> get_links();获取友情链接（需要link manager插件）

##调用博客信息：
> bloginfo();

参数 name（博客名称）、stylesheet_url（css文件路径）、
version（WP版本）、url（博客地址）、charset（博客网页编码）、description（博客描述）、wp_title（日志/页面标题）、stylesheet_directory（主题所在路径）

> wp_register();获取注册链接（已登录则显示管理站点）
> 
> wp_loginout();获取退出链接（未登录则显示登陆）


##调用文章属性：
> the_tag(); 调用文章标签
> 
> the_content();调用文章内容

	<?php
		 echo mb_strimwidth(strip_tags(apply_filters('the_content', $post->post_content)), 0, 300,"......"); 
	?>
	文章截取指定长度。
	mb_strimwidth();
	参数如下：
	1. $string           被截取的字符串（文章）
	2. 0                 从0开始
	3. 300               到300截至
	4. ······（省略号）   超过截取位置的替代字符串
	5. 设置字符编码（非必须）   


> |the_time();|调用文章时间
> 
> the_title();调用文章标题
> 
> the_permalink();调用文章链接
> 
> the_category();调用文章分类
> 
> wp_list_cat();调用文章分类
> 
> the_author();调用文章作者
> 
> the_ID();调用文章ID
> 
> edit_post_link();显示文章编辑链接
> 
> single_cat_title();显示分类名称
> 
> get_post_meta();获取文章自定义参数
> 
> update_post_meta();更新自定义参数
> 
> add_post_meta();添加自定义参数
> 
> delete_post_meta();删除自定义参数
> 

##Functions.php文件常用函数：
> register_sidebar(); 注册小工具

	<?php
		register_sidebar(
			array(
				'name'           =>'侧边栏',
				'before_widget'  =>'<div class="sidebar">',
				'after_widget'   =>'</div>',
				'before_title'   =>'<h2>',
				'after_title'    =>'</h2>'
				)		
		);
	?>

> dynamic_sidebar();在sidebar.php中可多次书写调用

	<?php
		dynamic_sidebar();默认无参数只调用第一个侧边栏
		dynamic_sidebar('侧边栏');添加参数调用多个侧边栏
	?>
	

> is_dynamic_sidebar();

	<?php
		if(is_dynamic_sidebar()){
			dynamic_sidebar();
		}else{
	?>
	
	自定义侧边栏（直接书写在sidebar.php中的侧边栏）
	
	<?php }
	?>

##页面分类目录列表、页面调用
	wp_list_pages('sort_column=menu_order&title_li=&depth=2&include=');
	调用页面生成（li > a标签）

	<?php
		$args=array(
				'orderby' => 'name',
				'order' => 'ASC'
		);
		$categories=get_categories($args);
		foreach($categories as $category) {
				echo ' <li class="list-group-item">';
				echo ' <a href="'.get_category_link($category->term_id ).'">'.$category->name.'</a>';
				echo ' </li>';
		}
	?>
	调用分类，逐个获取参数,函数get_category();


	