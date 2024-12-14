# JS Basic Task One - JS入门(Part1: 基础语法)

## 必学内容
对应JavaScript第一步：https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript

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

```javascript
var a = 1;
// 创建了一个数组，[1, 2, 3]
// 数组的地址，赋值给了object
var object = [1, 2, 3]; 
```

**关键词：基本数据类型和值引用类型**

**思考：既然有这样的问题， 写代码的时候要注意什么。 函数参数传递以及在函数内部使用一个数组、对象的时候要注意什么** 