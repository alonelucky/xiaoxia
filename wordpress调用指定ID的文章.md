#wordpress调用指定ID的文章

利用wordpress函数get_post()，调用指定ID的文章链接、标题及内容。

	<?php
		$post_id = 1; // 文章ID，可以在WP后台找到
		echo get_post( $post_id )->post_content; // 输出文章的内容
	?>
其它参数：

	// 调用方法：
	echo get_post( $post_id )->post_title; // 输出文章的标题
	// post_author      ：文章作者的编号
	// post_data        ：文章发表的日期和时间（YYYY-MM-DD HH-MM-SS)
	// post_data_gmt    ：文章发表的格林尼治标准时间（GMT） （YYYY-MM-DD HH-MM-SS)
	// post_content     ：文章内容
	// post_title       ：文章标题
	// post_category    ：文章类别的编号。注意：该值在WordPress 2.1之后的版本总为0。定义文章的类别时可使用 get_the_category()函数。
	// post_excerpt     ：文章摘要
	// post_status      ：文章状态（publish|pending|draft|private|static|object|attachment|inherit|future）
	// comment_status   ：评论状态（open|closed|registered_only）
	// ping_status      ：pingback/trackback状态（open|closed）
	// post_password    ：文章密码
	// post_name        ：文章的URL嵌套
	// to_ping          ：要引用的URL链接
	// pinged           ：引用过的链接
	// post_modified    ：文章最后修改时间（YYYY-MM-DD HH-MM-SS)
	// post_modified_gmt：文章最后修改GMT时间（YYYY-MM-DD HH-MM-SS)
	// post_parent      ：父级文章编号（供附件等）
	// guid             ：文章的一个链接。注意：不能将GUID作为永久链接（虽然在2.5之前的版本中它的确被当作永久链接），也不能将它作为文章的可用链接。GUID是一种独有的标识符，只是目前恰巧成为文章的一个链接。
	// post_type        ：（字符）（日志 | 页面 | 附件）

[原文地址](http://zmingcx.com/wordpress-get_post-call.html)

