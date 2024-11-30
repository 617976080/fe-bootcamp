# HTML&CSS Basic Task Two - CSS入门(part1:基本练习)
## 必学内容
学习https://developer.mozilla.org/zh-CN/docs/Learn/CSS
内容比较多和散，先大概阅读以下，有个基本的了解，其中比较复杂的是CSS的布局，其他的比较容易理解。
以下是建议先跳过的部分：
* CSS基础 - 处理不同方向的文本：很少用。
* CSS基础 - 图像、媒体和表单元素：用的不多，后面再看。
* CSS基础 - 样式化表格：实际中主要用组件库做表格，不会裸用表格，价值不高。
* CSS基础 - 高级区块效果：花里胡哨的，实际用的少，学会了再看，就是几个属性而已。
* CSS基础 - 组织CSS：前期用的不多，后续再看。
* CSS基础 - 基本的CSS理解： 跳过
* CSS基础 - 创建精美的信纸：跳过
* CSS基础 - 一个漂亮的盒子： 跳过
* 样式化文本 - 作业：排版社区大学首页：跳过。


阅读完【CSS第一步】、【CSS基础】、【样式化文本】后完成任务一和任务二。
然后阅读完CSS排版后完成任务三
## 课程任务
### 任务一
在开发过程中大部分情况使用class选择器，少数情况使用后代选择器和id选择器，important和style尽量不要使用
判断每一段文字的颜色，可以在本地用一个html文件保存代码验证一下自己的推测是否正确
·this is root
·this is class
·this is important
·this is style
·this is h1
·this is h1 too
```html
<style>
.root{
  color:black;
}
h1{
  color:blue;
}
.root h1{
  color:#ffc
}
.root>h1{
  color:red;
}
.root~h1{
  color:green;
}
.root+h1{
  color:#ddd;
}
.class{
  color:pink!important;
}
.important{
  color:pink;
}
</style>
<div class='root'> 
  this is root
   <h1 class='class'>this is class</h1>
   <h1 class='important'>this is important</h1>
   <h1 style='color:grey'>this is style</h1>
  <h1>this is h1</h1>
  <div>
     <h1> this is h1 too</h1>
  </div>
</div>
<h1>this is h1 outside root</h1>
<h1>this is h1 outside root too</h1>
```
### 任务二
1. 当我们将鼠标放在连接上、点击过链接时， 链接的状态不同时， 会有不同的样式， 我们期望任何时候链接都是黑色无下划线的。请用伪类实现（下面的样例代码没有给出所有的类）
2. 我们希望实现一个有两层边框的div（大小、边框样式自定）， 不允许在two-color-border内再加html元素，而是使用伪元素实现。
```html
<style>
a{}
a:hover{}
/* ...*/
.two-color-border{}
</style>
<a href="https://www.baidu.com">baidu</a>
<div class="two-color-border"></div>
```
### 任务三
使用HTML + CSS实现同级目录下task.png中的小页面。
链接： https://blog.csdn.net/a617976080?spm=1000.2115.3001.5343
素材在sassets目录下
