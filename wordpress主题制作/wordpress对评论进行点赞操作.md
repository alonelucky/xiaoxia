#wordpress对评论进行点赞操作

留言表单样式已经具备,因为没有回复嵌套,因此需要简单的交互,也可以减少许多垃圾评论.

实现功能和文章点赞差不多,需要用到
>1.	 ```wp_ajax_``` 
>2. php获取js设置的cookie


###1. 前端代码实现如下:
利用js中的window对象,来将获取到的对象绑定,并在ajax取到返回值时使用

	jQuery(document).ready(function($){
			//获取cookies对象
			var checkCookie = document.cookie;
			// 当点击时触发
			$('span.zan').click(function(){
				// 获取当前点击的值,将当前变量存储到window中
				window.comment = $(this);
				//获取当前评论id
				$id = window.comment.find('.comment_id').text();
				// 如果当前cookie中存在当前评论值,则传入参数'zan=0'取消赞,并取消样式
				$id_check = $id+'comments=1';
				//如果cookie中存在 idcomments=1 即当前用户点击过赞
				if( ( checkCookie.indexOf($id_check) ) > 0 ){
					// 移除yes样式属性
					window.comment.find('.glyphicon').removeClass('yes');
					//发送ajax,设置 cookie 中 idcomments 值为 0
					$.ajax({
						type:'post',
						data:'zan=0&id='+$id+'&action=Xblog_comment_liuyan',
						url:'<?php bloginfo('url');?>/wp-admin/admin-ajax.php',
						success:function(data){
							window.comment.find('.zan_count').text(data);
							var date = new Date();
							var expires = date.getTime()+3600*24;
							document.cookie=$id+'comment_zan=0,expires='+expires;
						}
					});
				}else{
					// 如果cookie中不存在,则添加yes属性样式
					window.comment.find('.glyphicon').addClass('yes');
					// 发送ajax ,并设置cookie中idcommentsde 值为1
					$.ajax({
						type:'post',
						data:'zan=1&id='+$id+'&action=Xblog_comment_liuyan',
						url:'<?php bloginfo('url');?>/wp-admin/admin-ajax.php',
						success:function(data){
							window.comment.find('.zan_count').text(data);
							var date = new Date();
							var expires = date.getTime()+3600*24;
							document.cookie=$id+'comment_zan=1,expries='+expires;
						}
					});
				}
			});
		});

###2. php接收并处理
	
	// 添加ajax动作钩子,登陆/未登录均可调用
	add_action('wp_ajax_nopriv_Xblog_comment_liuyan','Xblog_comment_liuyan_fun');
	add_action('wp_ajax_Xblog_comment_liuyan','Xblog_comment_liuyan_fun');
	// ajax接收/处理函数
	function Xblog_comment_liuyan_fun(){
		// 获取传入的当前评论ID
		$id = $_POST['id'];
		// 获取传递来的zan的值
		$zan_can = $_POST['zan'];
		// 获取数据表中的赞的值
		$zan = get_comment_meta($id,'zan',true);
		//获取数据表中存储的class属性
		$class = get_comment_meta($id,'_class',true);
		// 如果是取消赞
		if($zan_can=='0'){
			// 将当前赞的数量减一
			if($zan>0){
				if($zan){
					if(!update_comment_meta($id,'zan',($zan-1))){
						add_comment_meta($id,'zan',0,true);
					}
				}
				echo get_comment_meta($id,'zan',true);
			}else{
				echo '0';
			}
		}
		
		if($zan_can=='1'){
			// 存储数值
			if(!update_comment_meta($id,'zan',($zan+1))){
				add_comment_meta($id,'zan',1,true);
			}
			// 只返回数值即可
			echo get_comment_meta($id,'zan',true);
		}
		// 结束此次ajax调用
		wp_die();
	}

###3.前端测试,成功