# JS Basic Task Three - JS入门(Part3: 常见交互练习)
### 练习一：使用数组常用API
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

阅读上面的资料，完成下面函数的内容的实现，API（Application Interface）
```javascript
var arr = ["a", "b", "c"];
arr.forEach(function(item){
    console.log(item);
});

function myForEach(array, callback){
  for(var i = 0; i < array.length; i++){
    callback(array[i], i);
  }
}
myForEach(arr, function(item){
  console.log(item);
});
```
```javascript
// 1. 返回一个数组每个元素的2倍
var a = [1, 2, 3];
// 糟糕的写法，传入后实际上原来的数组的值也被改变了
function getArrayEveryNumberDouble(data){
    // ......
}
console.log("原来的数组", a);
console.log("每个数字变成两倍的数组", getArrayEveryNumberDouble(a));

// 2. 求一个数组中所有元素的乘积，试着用不同的方法来做，尽量让代码简洁易读
function getResult(arr){
  // ...
}
console.log(getResult([1, 2, 3])); // 输出6
// 3. 数组转对象
function convertMapToList(optionsList){
  //...
}
var data = {
  man: '男',
  woman: '女'
}
var list = convertMapToList(data);
console.log(list);
// 4. 数组转对象
function convertListToMap(optionsList){
  //...
}
var optionsList = [
  {
    value: 'man',
    label: '男',
  },
  {
    value: 'woman',
    label: '女'
  }
]
var optionsMap = convertListToMap(optionsList);
console.log(optionsMap);
/**
输出：
{
  man: '男',
  woman: '女'
}
**/
```
### 练习二：认识this、原型和bind、call、apply
https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Object_prototypes - 导师带着学
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this - 很复杂，导师带着学
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind - 绑定
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call - 导师带着学
https://developer.mozilla.org/zh-CN/docs/Glossary/Scope - 作用域
关键字
```javascript
var arr = ["a", "b", "c"];
arr.forEach(function(item){
    console.log(item);
});


// 1. 实现arr.myForEach
var myForEach = function(callbackFn){
  console.log("debug:", this)
  for(var i = 0; i < this.length; i++){
    callbackFn(this[i], i);
  }
}

const arr2 = ["d", "e", "f"];
arr2.myForEach = myForEach;
arr.myForEach = myForEach;

arr.myForEach(function(item, index){
  console.log(item, index);
});
arr2.myForEach(function(item, index){
  console.log(item, index);
});

// 2. this指向的问题
const fakeForEach = arr.myForEach;
fakeForEach(function(item){
  console.log(item);
});

// 3. 如何解决this指向的问题，解法1 - bind函数
arr.myForEach = function(callbackFn){
  for(var i = 0; i < this.length; i++){
    callbackFn(arr[i], i);
  }
}.bind(arr);
const fakeForEach = arr2.myForEach;
fakeForEach(function(item){
  console.log(item);
});


// 4. var和let的作用域区别 - 以及bind函数的运用
for(var i = 0; i < 10; i++){
  setTimeout(function(){
    console.log(i);
  }, 1000);
}
for(let i = 0; i < 10; i++){
  setTimeout(function(){
    console.log(i);
  }, 1000);
}

for(var i = 0; i < 10; i++){
  setTimeout(function(i){
    console.log(i);
  }.bind(null, i), 1000);
}

// 5. call的运用
/* 在html里加上一个无序列表
<ul id="list">
  <li>item1</li>
  <li>item2</li>
</ul>
*/
var listItems = document.getElementById('list').children;
// 提问： 这个listItems是什么类型？



// 6. 初步认识原型 - 原型的作用
Array.prototype.myGlobalForEach = function(callbackFn){
  for(var i = 0; i < this.length; i++){
    callbackFn(this[i], i);
  }
}

const arr2 = ["d", "e", "f"];
arr2.myGlobalForEach(function(item){
    console.log(item);
});
```


### 练习三： 实现一个简单选项卡
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of - for of语法
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions#%E5%87%BD%E6%95%B0%E4%BD%9C%E7%94%A8%E5%9F%9F - 温习下，这次会用到嵌套函数
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions#%E9%97%AD%E5%8C%85 - 闭包，有点晦涩，导师带着学
 
建议自主思考30min，超过时间没有思路直接看答案。
参考tab.gif实现， 注意默认有一个初始选项卡是展示的（比如例子里默认展示最新这个tab）
