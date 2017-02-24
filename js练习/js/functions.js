
var calc = document.getElementById('calc'),
	input1  = document.getElementById('input1'),
	input2  = document.getElementById('input2'),
	res  = document.getElementById('res'),
	inmath = document.getElementById('inmath');

calc.onclick = function(e){
	var e = e || windows.event;
	var target = e.target || e.srcElement;
	
	//获取事件,兼容IE
	if( target.value == 'C' ){
		//如果点击的位置的value值为C,则清空输入区域的内容
		input1.innerHTML = '';
		input2.innerHTML = '';
		inmath.innerHTML = '';
		res.innerHTML = '';
	}else if(  target.value == '←' ){
		//如果点击的位置的value值为Back,则回删一个字符
		var inVal = input1.innerHTML;
		//利用substr函数截取并赋值到输入框组
		input1.innerHTML = inVal.substr(0,inVal.length-1);
	}else if(target.value == '='){
		//计算并输出结果
		if(!input1.innerHTML == ""){
			//处理并输出结果,注意传入参数的顺序,第一次输入的数据是input2的数据
			res.innerHTML = eval(input2.innerHTML+''+inmath.innerHTML+''+input1.innerHTML);

		}else{
			console.log(eval('2+20%'));
		}
	}else  if(target.value == '%'){
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
	}else if( target.className.indexOf('dot') != -1 ){
		if( input1.innerHTML ){
			
		}
		
		if(input1.innerHTML == ''){
			//当inpu1中没有值时,输出'0.'
			input1.innerHTML = '0'+target.value;
		}else{
			//当input中有值时,则只增加一个'.'
			input1.innerHTML = input1.innerHTML+'.';
		}
	}else if(target.className.indexOf('num') != -1){
		//防止点击输入框对输入值进行修改
		input1.innerHTML += target.value;
	}else if(target.className.indexOf('math') != -1){
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
}
