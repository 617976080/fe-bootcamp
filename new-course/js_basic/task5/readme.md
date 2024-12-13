# JS Basic Task One - JS入门(Part1: 基础语法)

## 必学内容

+ [JavaScript教程](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/First_steps)
    + JavaScript教程部分：从头看到JavaScript调试
先看【JavaScript第一步】、【JavaScript基础】、【JavaScript对象介绍】

看起来内容很多，但是像什么if、else、运算符、表达式每个语言都一样，学习的时候重点理解概念，语法不必强记，一开始生疏的时候就多翻手册就好，用多了自然会记得。对于数组、字符串之类的有很多函数，也不需要去看他们的例子，只要有个印象，大概有哪些能力就可以了，后面自然后慢慢熟练起来，也可以用的时候再看。

## 课程任务

### 任务一
下面的问题先思考， 然后运行验证，发现错误后可以根据给出的关键词去找资料。
遇到没有见过的对象、函数就到MDN上查一下， 快速了解。
一些思考的点可以尝试回答， 不必要花时间去找资料， 主要看下有没有一些灵感。

参考： https://developer.mozilla.org/zh-CN/docs/Glossary/Falsy
#### 判断当 a 等于不同值时下列代码输出什么

```javascript
let a = "";
a = "a";
a = null;
a = undefined;
a = 0;
a = NaN;
if (a) {
  console.log(1);
} else {
  console.log(2);
}
```
参考： https://developer.mozilla.org/zh-CN/docs/Glossary/Type_Conversion

```javascript
// 如果==更换为===会是什么样的结果
let a = "";
if (a == 0) {
  console.log(1);
}
a = "1";
if (a == 1) {
  console.log(1);
}
a = undefined;
if (a == null) {
  console.log(1);
}
if (a == NaN) {
  console.log(1);
}
```

**关键词： 类型转换、严格等于**
**思考： 我们写代码的时候， 使用==还是===比较好呢**

#### 判断下列代码的输出

```javascript
var a = [1, 2, 3];
var b = a;
b[1] = 0;
console.log(a);
```

**关键词：基本数据类型和值引用类型**

**思考：既然有这样的问题， 写代码的时候要注意什么。 函数参数传递以及在函数内部使用一个数组、对象的时候要注意什么** 

#### 说出下列输出的值。
````javascript
var a = '';
var b = 'test';
var x = a && b;// x = ''
var y = a || b;// y = 'test'
console.log(x);
console.log(y);

var p = a || (x = 1);// 1 -> x, 1 -> p
var q = b && (b = 2);// 2 -> b, 2 -> q
console.log(x);
console.log(q);
````

**思考：写代码的时候建议写这种代码吗？**

#### 思考下面的代码运行情况。
```javascript
var a = [1, 2, 3, 4, 5, 6];
var cnt1 = 0;
for(var i = 0; i < a.length; ++i){
    a.splice(1, 1);
    cnt1++;
}
console.log(cnt1); // 输出多少？
console.log(a); // a是怎样的？

var cnt2 = 0;
for(var i = 0, l = a.length; i < l; ++i){
    a.splice(0, 1);
    cnt2++;
}
console.log(cnt2); // 输出多少？
```

# 对象
遥控器（集合）：
- 属性：圆的，方的， 长、宽
- 方法：打开投屏，关闭投屏，换电源

const、let、var - 关键字， 声明变量

为什么需要对象？
数据和操作更加结构化和内聚


JS -> 主要在浏览器里运行
* 自定义对象
* 浏览器内置对象 - document、window

# 录屏大纲
* 函数
  * 分类
    * 内置函数。
    * 自定义函数。
  * 函数是一种特殊的对象。（不重要）
  * 函数的基本定义和结构
  * 输出、输出、副作用
  * 形参 -> 函数中使用、实参
* dom
* 全局函数、全局对象
* 闭包问题 -> 感性理解
* 模板字符串