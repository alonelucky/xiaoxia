# 心知天气API调用
借用官方后台给用的代码,后端使用php调用.调用代码如下
​    
```php
<?php
	$location = 'Beijing'; // 地址可以是拼音,英文,汉字,经纬度
	$uid = ''; // USer ID
	$key = ''; // user Key

	// 获取当前时间戳，并构造验证参数字符串
	$keyname = 'ts='.time().'&ttl=300&$uid'.$uid;
	
	// 使用 HMAC-SHA1 方式，以 API 密钥（key）对上一步生成的参数字符串（raw）进'行加密
	$sig = base64_encode(hash_hmac('sha1',$keyname,$key,true));

	// 将上一步生成的加密结果用 base64 编码，并做一个 urlencode，得到签名sig
	$signedname = $keyname.'&sig='.urlencode($sig);

	// 最终构造出可由前端进行调用的 url
	$myurl = "https://api.thinkpage.cn/v3/weather/now.json?location=".$location."&".$signedname;

	echo $myurl;
?>
```
此文件单独保存,如weather.php

## 1.jQuery调用
1. 引入jquery.min.js文件

2. 利用$.get();函数调用jsonp解决跨域问题

3. 代码如下:

   ```javascript
           var url = '<?php echo $natureurl;?>';
           weathers=$.get({
               'url': url,
               'dataType': 'jsonp',   
               'success':function(res){
                   
   				console.log(res.results[0]);
               }
           });
   ```

## 2.AngularJS调用
1. 引入angular.min.js文件
2. 创建ng-app和ng-controller
3. 利用$http.jsonp解决AngualrJS跨域调用问题
4. 代码如下:

   ```javascript
   var myApp = angular.module('myApp',[]);
   //定义ng-app
   myApp.controller('myCtrl',function($scope,$http){
   //定义ng-controller
   	$http.get('weather.php').success(function(res){
   		$scope.myUrl = res+'&callback=JSON_CALLBACK';
   	//定义get调用weather.php,并处理返回值
   		$http.jsonp($scope.myUrl).success(
   			function(res){
   				$scope.weather = res;
   				//将返回值赋予$scope下
   				console.log($scope.weather.results[0]);
   			}
   		);
   	});
   });
   ```