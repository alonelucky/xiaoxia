# windows7下增加服务项

#### 1. win+R  -> regedit

#### 2. 注册表中依次查找

HKEY_LOCAL_MACHINE
	->SYSTEM
		->CurrentControlSet
			->Services 

#### 3. 右键新建->项

#### 4. 为该项创建对应值
“DisplayName”，字符串值，对应服务名称；
“Descrīption”，字符串值，对应服务描述；
“ImagePath”，字符串值，对应该服务程序所在的路径；　　
“ObjectName”，字符串值，值为“LocalSystem”，表示本地登录；
“ErrorControl”，DWORD值，值为“1”；　　
“Start”，DWORD值，值为2表示自动运行，值为3表示手动运行，值为4表示禁止；
“Type”，DWORD值，应用程序对应10，其他对应20。


#### 5. 保存,重启