#wordpress文章赞踩功能 - Ajax实现
利用wordpress预留的```wp_ajax_```和```wp_ajax_nopriv```钩子,来实现ajax操作,该钩子函数位于wp-admin/admin-ajax.php文件中,使用方法如下:

1. 在js传递的数据中包含action=my_ajax_name,该数据用来绑定到```wp_ajax_```后面,
	传递方法为post,例如:

		$.ajax({
			type:'post',
			data:'canshu=canshu1&action=mu_ajax_name',
			url: 'http://localhost/wp-admin/admin-ajax.php',
			success:function(data){
				console.log(data);
			}
		});
	
	url参数可利用php生成,是否暴露到前台,我也不太清楚如何简单的传递到外部js文件中

	参考:

		wp_enqueue_script();
		wp_localize_script();
	这两个函数结合起来貌似可以,但是后期又不知道该如何传递页面信息到外部文件,各取所需吧,因为这里后面要使用文章ID来存入cookie,放置多次评论,所以选择直接放在页面上

	调用例如:

	```add_action('wp_ajax_my_ajax_name','my_ajax_function');```
 
	后面定义需要执行的ajax函数 

2. 设置cookie值

	利用js来设置和获取cookie,因为需要在点击页面的时候调用,所以不应该,一开始就设置cookie;

	代码:

		//获取时间
		var date = new Date();  
		//设置cookie过期时间(毫秒)
		var expires = date.getTime()+3600*24*30*1000;
		//,当用户点击成功的时候,设置cookie
		document.cookie="<?php echo get_the_ID();?>zan=1,expires="+expires;

3. 完整代码:

	js,利用jquery的$.ajax函数完成调用(使用php函数包裹);
		
		
		$('.btn').click(function(){
			//当用户点击的时候获取到本地cookie
			var checkCookie = document.cookie;
			//如果不能在cookie中找到对应文章id+zan的cookie,就执行ajax,否则不执行
			if(!(checkCookie.indexOf('<?php echo get_the_ID();?>zan=1')>0)){
					//执行ajax
					$.ajax({
						type:'POST',
						//参数传入文章ID+zan
						data:"zc=c&post=<?php echo get_the_ID();?>&action=my_ajax_zan",
						//url为固定的站点根目录下的源文件
						url:'<?php bloginfo('url');?>/wp-admin/admin-ajax.php',
						//成功调用返回数据,并将返回数据传出到页面,然后设置cookie值
						success:function(data){
							$('a.btn-danger span').text(data);
							var date = new Date();
							var expires = date.getTime()+3600*24*30*1000;
							document.cookie="<?php echo get_the_ID();?>cai=1,expires="+expires;
						}
					});
				}
			});


	php接收代码:

		add_action('wp_ajax_my_ajax_zan','my_ajax_zan_fun');
	
		function my_ajax_views_fun(){
			//该参数判断前台传入的是哪个按钮,zc  赞和踩,获取传入的值
			$post_zc = $_POST['zc'];
			$post_id = $_POST['post'];
			//判断传入值和id是否为空
			if($post_zc&&$post_id){
				//取出已有的zan
				$zan = get_post_meta($post_id,'zan',true);
				//判断该字段能否更新成功,
				if(!update_post_meta($post_id,'zan',($zan+1))){
					//不成功则添加一条属性,值为1
					add_post_meta($post_id,'zan',1,true);
				}
				//返回views 的值
				echo get_post_meta($post_id,'zan',true);	
			}
			
		}	