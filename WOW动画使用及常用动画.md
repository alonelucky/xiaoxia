## WOW动画使用及常用动画

#### 1. 调用wow
###### 1. 引入文件
			
		<link href="animate.css" rel="stylesheet" type="text/css"/>
		<script src="wow.js"></script>
###### 2. 添加class及标签属性
		
		<div class="wow slideInLeft" data-wow-duration="2s" data-wow-delay="1s">Conetnt</div>

属性:

| 属性名 | 含义 |
| ------:|:------|
|data-wow-duration|动画执行时间|
|data-wow-delay|动画延迟执行时间|
|data-wow-offset|元素的位置露出后距离底部多少像素执行|
|data-wow-iteration|动画执行次数|

class:

| 类名 | 含义 |
| ------:|:------|
|wow|动画执行的必须函数,可在js中自定义|
|rollIn|从左到右、顺时针滚动、透明度从100%变化至设定值|
|slideInUp|从下往上、上来后固定到设定位置、透明度为设定值不变（up是从下往上）（如果元素在最下面，会撑开盒子高度）|
|slideInDown|从上往下、上来后固定到设定位置、透明度为设定值不变|
|slideInLeft|从左往右、上来后固定到设定位置、透明度为设定值不变|
|slideInRight|从右往左、上来后固定到设定位置、透明度为设定值不变|
|bounceIn|从原位置出现，由小变大超出设定值，再变小小于设定值，再回归设定值、透明度从100%变化至设定值|
|bounceInUp|从下往上、窜上来以后会向上超出一部分然后弹回去、透明度为设定值不变|
|bounceInDown|从上往下、掉下来以后会向下超出一部分然后弹跳一下、透明度为设定值不变|
|bounceInLeft|	从左往右、移过来以后会向右超出一部分然后往左弹一下、透明度为设定值不变|
|bounceInRight|从右往左、移过来以后会向左超出一部分然后往右弹一下、透明度为设定值不变|
|lightSpeedIn|从右往左、头部先向右倾斜，又向左倾斜，最后变为原来的形状、透明度从100%变化至设定值|
|pulse|原位置放大一点点在缩小至原本大小、透明度为设定值不变（配合动画执行次数属性效果更佳）|
|flipInX|原位置后仰前栽、透明度从100%变化至设定值|
|flipInY|原位置左右旋动、透明度从100%变化至设定值|
|bounce|上下抖动、透明度为设定值不变（配合动画执行次数和动画持续时间属性可以实现剧烈抖动亦或是慢慢抖）|
|shake|左右抖动、透明度为设定值不变（配合动画执行次数和动画持续时间属性可以实现剧烈抖动亦或是慢慢抖）|
|swing|从右往左、头部先向右倾斜，又向左倾斜，最后变为原来的形状、透明度为设定值不变|
|bounceInU|原位置不变、直接从不显示到显示（无过过渡效果）|
|wobble|原位置不变、类似于一个人站在那左右晃头、透明度为设定值不变|




###### 3. 初始化

	<script>
		new WOW().init();
	</script>

#### 2. 自定义设置

	var wow = new WOW({
	    boxClass: 'wow',
	    animateClass: 'animated',
	    offset: 0,
	    mobile: true,
	    live: true
	});
	wow.init();

参数:

| 属性 | 类型 | 默认值 | 说明 |
| ------:| ------ | ------|:------|
|boxClass| 字符串 |wow| 需要执行动画的元素的 class|
|animateClass|str|animated|animation.css 动画的 class|
|offset|int|0|距离可视区域多少开始执行动画|
|mobile|bool|true|是否在移动设备上执行动画|
|live|bool|true|异步加载的内容是否有效|