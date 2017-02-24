# javascript练习一

javascript事件委托制作简易计算器.

使用的函数,eval(),事件委托srcElement(IE下),target,使用js原生方法写计算器

1. 首先布局界面

```html
<div id="calc">
		<div class="res">
			<p id="input2"></p>
			<p id="inmath"></p>
			<p id="input1"></p>
			<p id="res"></p>
		</div>
		<div class="btnarea"> 
			<input type="button" value="C" class="btn btn-default btn-lg"/>
			<input type="button" value="←" class="btn btn-default btn-lg"/>
			<input type="button" value="+/-" class="btn btn-default btn-lg"/>
			<input type="button" value="/" class="btn btn-default btn-lg math"/>
			<br/>
			<input type="button" value="7" class="btn btn-default btn-lg num"/>
			<input type="button" value="8" class="btn btn-default btn-lg num"/>
			<input type="button" value="9" class="btn btn-default btn-lg num"/>
			<input type="button" value="+" class="btn btn-default btn-lg math"/>
			<br/>
			<input type="button" value="4" class="btn btn-default btn-lg num"/>
			<input type="button" value="5" class="btn btn-default btn-lg num"/>
			<input type="button" value="6" class="btn btn-default btn-lg num"/>
			<input type="button" value="-" class="btn btn-default btn-lg math"/>
			<br/>
			<input type="button" value="1" class="btn btn-default btn-lg num"/>
			<input type="button" value="2" class="btn btn-default btn-lg num"/>
			<input type="button" value="3" class="btn btn-default btn-lg num"/>
			<input type="button" value="*" class="btn btn-default btn-lg math"/>
			<br/>
			<input type="button" value="0" class="btn btn-default btn-lg num"/>
			<input type="button" value="." class="btn btn-default btn-lg num dot"/>
			<input type="button" value="=" class="btn btn-default btn-lg"/>
			<input type="button" value="%" class="btn btn-default btn-lg"/>
			<br/>
		</div>
	</div>
```

2. 写样式,加载bootstrap和Jquery(此处只作为bootstrap的依赖加载,谁让人家布局样式快)

   ```css
   html,body{
   		width:100%;height:100%;
   		}
   #calc{
   		width:100%;	height:100%;
   		}
   .res{
   		height:33%;width:100%;background:#ccc;padding:1em;
   		}
   .res p{
   		height:20%;text-align:right;font-size:2em;
   		}
   input[type=button]{
   		width:23.33%;height:18%;font-size:2em;margin:1px;
   		}
   .btnarea{
   		margin:0 auto;width:100%;height:65%;
   		}
   .math{
   		background-color:#FFCC33;
   		}
   ```

3. 添加功能(js逻辑部分,拆开写):

   1)	获取对象,有两个文本放置区域,input2用于存放输入运算符之前的数字,input1则代表可输入区域

   ```javascript
   var calc = document.getElementById('calc'),
   	input1  = document.getElementById('input1'),
   	input2  = document.getElementById('input2'),
       res  = document.getElementById('res'),
       inmath = document.getElementById('inmath');
   ```

   2)  建立事件委托

   ```javascript
   calc.onclick = function(e){
   		var e = e || windows.event;
   		var target = e.target || e.srcElement;
     //其余逻辑....
   		}
   ```

   3)  判断点击位置

   如果点击位置的value值为C,则将所有内容清空

   ```javascript
   if( target.value == 'C' ){
   	//如果点击的位置的value值为C,则清空输入区域的内容
   	input1.innerHTML = '';
   	input2.innerHTML = '';
   	inmath.innerHTML = '';
   	res.innerHTML = '';
   	}
   ```

   如果点击位置为back,则将输入字符长度减1

   ```javascript
   if(  target.value == 'Back' ){
   	//如果点击的位置的value值为Back,则回删一个字符
   	var inVal = input1.innerHTML;
   	//利用substr函数截取并赋值到输入框组
   	input1.innerHTML = inVal.substr(0,inVal.length-1);
   	}
   ```

   判断当点击等号时,如果可输入区域为空则不反应,如果可输入区域有值,则直接对两组数字进行运算

   ```javascript
   if(target.value == '='){
   	//计算并输出结果
   	if(!input1.innerHTML == ""){
   	//处理并输出结果,注意传入参数的顺序,第一次输入的数据是input2的数据
   	res.innerHTML = eval(input2.innerHTML+''+inmath.innerHTML+''+input1.innerHTML);
   	}
   ```

   判断当点击%号时,如何处理数字问题,判断结果区域是否已经有%,如果有则不处理,如果没有,再处理

   ```javascript
   if(target.value == '%'){
   	//对小数进行%处理
   	//判断结果是否已经有%,如果没有再执行
   	resIndex =res.innerHTML.indexOf('%');
   	if( (res.innerHTML == '') && (input1.innerHTML !== '') ){
   		//当结果框没有值时但是input1框有值,则对input1中的值进行小数化
   		input1.innerHTML = input1.innerHTML*100+'%';
   	}else if( resIndex = -1){
   		//如果结果框已经有%,则说明已经点击过本次按钮,则不处理,如果没有则处理
   		res.innerHTML = res.innerHTML*100+'%';
   	}
   }
   ```

   判断当点击'.'是,的处理,当输入框没有值的时候直接输出'0.'(这个是所有计算器都默认的),当有值时判断是否已经有'.',如果没有则加上一个,如果有则不处理

   ```javascript
   if( target.className.indexOf('dot') != -1 ){
   	if(input1.innerHTML == ''){
   		//当inpu1中没有值时,输出'0.'
   		input1.innerHTML = '0'+target.value;
   	}else{
   		//当input中有值时,则只增加一个'.'
   		input1.innerHTML = input1.innerHTML+'.';
   	}
   }
   ```

   判断是否输入数字,是就将数字以字符串形式串接

   ```javascript
   if(target.className.indexOf('num') != -1){
   	//只接受输入数字和.
   	input1.innerHTML += target.value;
   }
   ```

   判断运算符号,(尚不完善,但可以作为参考),具体功能看注释内容

   ```javascript
   if(target.className.indexOf('math') != -1){
   	//根据使用情况判断,运算符在以下情况的不同作用
   	if( input2.innerHTML == ''){
   		//判断是否有第一次输入,如果没有则将输入数据赋值到input2中,同时清空input1,并输入运算符号
   		input2.innerHTML = input1.innerHTML;
   		input1.innerHTML = '';
   		inmath.innerHTML = target.value;
   	}else if(input1.innerHTML == ''){
   		//判断input1是否为空,如果为空,则只更改运算符号
   		inmath.innerHTML = target.value;
   	}else if(res.innerHTML !==''){
   		//判断结果框是否为空,如果不为空,则将结果赋值到input2中,并清空input1和结果,再输出运算符号
   		input2.innerHTML = res.innerHTML;
   		inmath.innerHTML = target.value;
   		input1.innerHTML = '';
   		res.innerHTML = '';
   	}
   }
   ```

以上所有判断均在calc.onclick()执行的匿名函数中,我自己都吓坏了,好长的判断序列,暂时不知道如何解决,但是肯定可以简写的,欢迎指导雅正