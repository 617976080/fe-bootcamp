# HTML&CSS Basic Task Two - CSS入门(part1:基本练习)
## 课程大纲
- HTML怎么拆解
- 介绍CSS的选择器 
    - 单个
- CSS属性
    - 继承：文本类、背景
    - 非继承：布局相关 
- 值和单位
    - 枚举
    - px
- HTML元素
    - 块状元素：传统的盒模型
    - 行内元素：没有宽高
- CSS盒模型
- 水平居中- 最简单的方式
- 圆角属性
- 定位
- 浏览器默认样式
- 溢出
    - 单行文本溢出
    - 多行文本溢出
- 盒模型 - 两种模式
    - content-box模式
    - border-box模式
- BFC - 都不会遇到

- 布局定位展示相关属性
    - postion: relative、fixed、absolute、static
    - top、bottom、left、right
        - relative
        - absolute
        - fixed - IOS11 Safair fiexed不起作用
    - zIndex: 默认是0
    - display： inline、block、none、flex
    - box-sizing: content-box、border-box
- 浏览器指纹技术
## 参考连接
学习[CSS - 菜鸟教程](https://www.runoob.com/css/css-examples.html)中的：
  - css教程
  - css简介
  - css id和class选择器：前端主要使用class选择器，id选择器了解即可
  - css创建：了解html如何引用外部css文件
  - css背景
  - css文本
  - css字体
  - css link
  - css ul
  - css 盒子模型
  - css border
  - css outline 了解即可
  - css margin
  - css padding
  - css分组和嵌套
  - css 尺寸
  - css display
  - css position
  - css overflow
  - css 对齐
  - css组合选择符
  - css 伪类
  - css 伪元素

依次完成任务一、任务二、任务三
### 任务一
使用HTML + CSS实现同级目录下task.png中的小页面。
链接： https://blog.csdn.net/a617976080?spm=1000.2115.3001.5343
素材在sassets目录下

### 任务二
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

### 任务三
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
