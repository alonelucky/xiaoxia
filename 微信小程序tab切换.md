## 微信小程序tab切换

直接上代码:


##### 1. 布局 wxml:

	  <view class="nav_1 {{active_1?'default':'active'}}" bindtap="qiehuan">1</view>
	  <view class="nav_1 {{active_2?'default':'active'}}" bindtap="qiehuan">2</view>
	
	  <view class="item_1 {{active_1?'hidden':'default'}}">我是一</view>
	  <view class="item_2 {{active_2?'hidden':'default'}}">我是二</view>
##### 2. 样式 wxss:


	.hidden{display: none;}
	.active{color: red;}

##### 3. 逻辑 js


	data: {
	    active_1:false,
	    active_2:true
	  },

	qiehuan:function(e){
    var active1 = this.data.active_1;
    var active2 = this.data.active_2;
    this.setData({
      active_1:!active1,
      active_2:!active2
    });


##### 4. 利用其数据绑定及修改

为标签绑定事件,事件触发则获取当前(数据的值)状态,并将其取反后赋值