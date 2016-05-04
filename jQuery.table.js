;(function($){

	$.fn.table = function(canshu){	//定义插件名、传入函数的参数
		var moren = {				//书写默认参数
			ecloClass:'eclo',
			ocloClass:'oclo',
			hovrClass:'hclo'
		}

		var canshu = $.extend(moren,canshu);

		this.each(function(){										//表格隔行变色
			$(this).find('tr:even').addClass(canshu.ecloClass);
			$(this).find('tr:odd').addClass(canshu.ocloClass);
			$(this).find('tr').mouseover(function(){
				$(this).addClass(canshu.hovrClass);
			}).mouseleave(function(){
				$(this).removeClass(canshu.hovrClass);				//鼠标滑过改变颜色
			});


			$(this).find('td').dblclick(function(){			//双击编辑表格内容
				var thisTd = $(this).text();
				var $this = $(this);
				var input = '<input type="text" class="newInput">';
				$(this).html(input);
				var $input = $('.newInput');
				$input.css({
					width:'200px',
					height:'50px',
					background:'#555',
					fontSize:'35px',
					color:'#fff'
				}).val(thisTd);

				$input.blur(function(){
					var newText = $input.val();
					$input.remove();
					$this.text(newText);
				});
			});
		});


	}

})(jQuery);
