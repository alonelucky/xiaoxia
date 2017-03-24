#wordpress 实现文章次数不重复统计
利用如下函数即可实现,文章阅读次数的统计,

		add_action('wp_head','my_post_views');

		function my_post_views(){
			if(is_single()){
				//获取当前文章ID
				global $post;
				$id = $post->ID;
				$views = get_post_meta($id,'views',true);
				if(!update_post_meta($id,'views',true)){
					add_post_meta($id,'views',1,true);
				}
			}
		}

该代码即可实现文章阅读量统计,但是每次刷新就会更新一次,这样的阅读量并不准确,需要相对准确阅读量的话,需要使用cookie来控制;

1. 使用php设置cookie
	
	setcookie()函数允许在html之前设置,因此,需要修改header.php的内容

	代码如下:

		global $post;
		$id = $post->ID;
		//获取当前文章ID
		设置cookie和过期时间(秒)
		setcookie($id, 1,time()+3600*24*30);

	因此之前的统计代码也需要略作修改:

		function my_post_views(){
			if(is_single()){
				//获取当前文章ID
				global $post;
				$id = $post->ID;
				//判断当前ID是否在cookie中存在
				if(!$_COOKIE[$id]){
					$views = get_post_meta($id,'views',true);
					if(!update_post_meta($id,'views',true)){
						add_post_meta($id,'views',1,true);
					}
				}
			}
		}

如此便实现了相对准确的文章浏览量的统计,