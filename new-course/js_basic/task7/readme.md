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
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call - 导师带着学

关键字
```javascript
var arr = ["a", "b", "c"];
arr.forEach(function(item){
    console.log(item);
});


arr.myForEach = function(callbackFn){
  for(var i = 0; i < this.length; i++){
    callbackFn(arr[i], i);
  }
}

// 实现这个
arr.myForEach(function(item){
  console.log(item);
});

arr.myForEach(function(item, index){
  console.log(item, index);
});

```

### 练习三： 实现一个简单选项卡
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of - for of语法
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions#%E5%87%BD%E6%95%B0%E4%BD%9C%E7%94%A8%E5%9F%9F - 温习下，这次会用到嵌套函数
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions#%E9%97%AD%E5%8C%85 - 闭包，有点晦涩，导师带着学
 
建议自主思考30min，超过时间没有思路直接看答案。
参考tab.gif实现， 注意默认有一个初始选项卡是展示的（比如例子里默认展示最新这个tab）
