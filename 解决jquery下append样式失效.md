##解决jquery下append后IE下样式失效

使用jquery为我们操作DOM提供了非常大的便利,比如添加删除标签及内容

$(a).append(b);

有时在IE浏览器下,只能显示标签而样式全部丢失,查找后在append后使用trigger('create'),重新加载样式表,即可解决:

		$('#id').triger('create');