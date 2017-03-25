#wordpress评论功能实现

wordpress作为博客,相当一部分互动来源于访客评论与留言,wordpress可以自由定义每一个页面/文章是否可以单独接受评论.这里演示如何自定义一个留言板

为了防止恶意打开评论文件,因此在文件头部添加代码:

		if (isset($_SERVER['SCRIPT_FILENAME']) && 'comments.php' == basename($_SERVER['SCRIPT_FILENAME']))   
        die ('Please do not load this page directly. Thanks!'); 

###1. 相关函数
> comments_open()判断是否开启评论
have_comments()判断当前页面是否有评论
wp_list_comments()输出评论列表
comment_form()自定义form表单
comment_template()输出评论模板(一般在文章页)

###2. 参数详解 wp_list_comments

	wp_list_comments()

	> avatar_size => 48  定义头像大小单位px
	> style => ul  评论输出样式 div  ul  (使用div输出的时候,bootstrap样式乱飞,输出的位置不固定,个人建议ul即可,列表但是没有ul>li标签)
	> reply_text => 顶头文本
	> callback => 'my_comments_callfun'
	
	$arr = array(
		'avatar_size'=>48,
		'style'=>'ul',
		'replay_text'=>'',
		'callback'=>'my_comments_callfun'
	);
	自定义输出列表样式


	//定义评论输出框的显示模板,获取返回的comment变量(这里使用bootstrap布局)
	function my_comments_callfun($comment){
		?>
		<div class="col-md-6 col-sm-12">
			<div class="panel panel-success">
				<div class="panel-heading clearfix">
					<strong class="pull-left"><?php 
						$title = get_comment_author();
						if(strlen($title)>20){
							echo wp_trim_words($title,17,'...');
							//echo mb_strimwidth($title,0,18,'...','utf-8');
						}else{
							echo $title;
						}
						//这里将表单提交的姓名信息,作为留言板的标题输出,如果长度过长则截取
					?></strong>
					<small class="pull-right"><?php comment_date();?></small>
				</div>
				<div class="panel-body">
					//留言正文
					<?php comment_text();?>
				</div>
				<div class="panel-footer clearfix">
					<span class="pull-right zan">
						//这里是为了增加点赞功能而添加的一个隐藏项目,用来保存当前评论的ID
						<span class="hidden comment_id"><?php comment_ID();?></span>
						// 点赞的标志
						<span class="glyphicon glyphicon-heart <?php 
							$id_check = get_comment_ID().'comment_zan';
							if( substr($_COOKIE[$id_check],0,1)){
								echo 'yes';
							}
						?>"></span> 
						// 点赞的数量
						<span class="zan_count"><?php echo get_comment_meta(get_comment_ID(),'zan',true);?></span>
					</span>
				</div>
			</div>
		</div>
		<?php
	}
	

	wp_list_comments($arr);
###3. comment_form 参数详解
由于不知如何去除wordpress提交评论必须传入的两个参数,因此在使用时仍需沿用其默认的两个表单name

	//参数1 form表单ID
	//参数2 form表单class
	//参数3 提交按钮ID
	//参数4 提交按钮class
	//参数5 提交按钮name
	//参数6 提交按钮文本
	//fields 表单(默认是name email url)这里置空,方便自定义样式
	//comment_field  表单(默认是textarea评论输入框在上,因此,自定义将其放置在最后)
	//comment_notes_before/comment_notes_after  评论表单上方描述
	//title_reply 表单头文字
	// 这里因为是作为留言本,不提供嵌套回复,所以不设置回复相关的内容
	$arr=array(
		'id_form'=>'liuyan_id',
		'class_form'=>'',
		'id_submit'=>'liuyan_submit_id',
		'class_submit'=>'btn btn-primary',
		'name_submit'=>'submit',
		'label_submit'=>'发布留言',
		'fields'=>'',
		'comment_field'=>'
					<div class="row">
						<div class="col-md-6">
							<div class="input-group">
								<span class="input-group-addon">留言标题</span>
								<input type="text" name="author" id="author" class="form-control" placeholder="请输入您的意见,建议20字以内">
							</div>
						</div>
						<div class="col-md-6">
							<div class="input-group">
								<span class="input-group-addon">您的邮箱</span>
								<input type="email" name="email" id="email" class="form-control" placeholder="您的邮箱不会被公开">
							</div>
						</div>
					</div>
					<br>
					<div class="input-group">
					<span class="input-group-addon">内容主体</span>
						<textarea name="comment" id="comment" rows="5" class="form-control" placeholder="这里输入留言信息"></textarea>
					</div><br>
					',
		'comment_notes_before'=>'',
        'comment_notes_after'=>'',
		'title_reply'=>''
	);
	
	comment_form($arr);

###4.基本样式已成
可以在文章页和页面调用comments_template('comments-page.php');

即可看到我们定义的表单样式和评论列表样式(下一篇,对评论进行点赞操作)
