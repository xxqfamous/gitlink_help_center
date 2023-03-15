# 确实开源帮助中心

## 贡献文档方式
#### 1.复刻主仓库
![](https://gitlink.org.cn/api/attachments/412462)
<br/>

#### 2.进入复刻仓库编辑文档
![](https://gitlink.org.cn/api/attachments/412465)

<br/>

可采用如下两种方式编辑：
* 克隆复刻仓库到本地后，在**gitlink_help_center/docs**文件夹下新建文件夹或markdown文档，依次执行
```bash
 git add <新增文件>
 git commit <新增文件> -m "提交信息"
 git push
```
* 在gitlink代码仓库页面进行编辑，然后点击“提交变更”
![](https://gitlink.org.cn/api/attachments/412426)

<br/>

#### 3.向主仓提交合并请求
![](https://gitlink.org.cn/api/attachments/412466)

<br/>

## 页面目录——仓库目录示意图

<br/>

1.如下图左边为帮助中心侧边栏一级目录展示效果，右边为代码仓库文件夹目录：
![](https://gitlink.org.cn/api/attachments/412473)

<br/>

2.如下图左边为帮助中心侧边栏点击一级目录“Test1”后展开效果，右边为点击代码仓库文件夹“test1”后md文件目录：
![](https://gitlink.org.cn/api/attachments/412474)

## 创建markdown文档
* 创建第一篇文档
在**docs/test1**目录下创建hello.md

	```bash
	# Hello
	
	This is my **first  document**!
	```

* 配置侧边栏

	```bash
	---
	sidebar_label: 'Hi!'      <!--定义侧边栏标签名称-->
	sidebar_position: 3     <!--定义侧边栏层级位置-->
	---
	
	# Hello
	
	This is my **first document**!
	```

<br/>

* 链接

	支持使用 url 路径或相对文件路径的常规 Markdown 链接
	```
	git操作 [git](/git).
	```
	```
	git操作 [git](./git.md).
	```

<br/>

* 图片

	支持常规markdown图片，在**static/img/gitlink.png**中添加一个图像.png并在Markdown中显示它：
	```
	![gitlink logo](/img/gitlink.png)
	```


