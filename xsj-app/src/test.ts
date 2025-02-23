

function getName(name: string | number){
    console.log(name)
}

/**
 * 下面这种写法等价于
 * let lastIndex: number | undefined = undefined;
 */
let lastIndex: number;

lastIndex = 10;
// lastIndex = "布布是步驴";

// 声明userId的第一个参数必须是一个有id的对象，name字段可选，并且规定他们的类型
// function userId({ id }: { id: string; name?: string }){
//     return id;
// };

// userId({ id: "abc"});

type Person = {
    id: string; 
    name?: string;
}

function userId({ id }: Person): string {
    return id;
};

userId({ id: "abc"});

// 数组的类型
let arr: number[] = [1, 2, 3];


// 函数的类型
// arr.forEach
// forEach(callbackfn: (value: number, index: number, array: number[]) => void, thisArg?: any): void;


// 普通函数
function add1(a: number, b: number): number {
    return a + b;
}
const add2 = function(a: number, b: number): number {
    return a + b;
}

// 箭头函数
const add3 = (a: number, b: number): number => {
    return a + b;
}

/**
 * 弱类型 -> JS是弱类型，let a = "123", a = { id: 27}
 * 强类型 -> 变量的类型是不能改的 let a = "123"; a = 12; 编译不通过
 * typescript增加的是类型标注和检查
 */



// 类型推断，从有限的信息里推断
let welcome = "布布是步驴";
function userId2({ id }) {
    return id;
};
userId2({ id: "ZhangSan" });
userId2({ id: { name: "ZhangSan" }  })


// 函数的类型
// const add2 = function(a: number, b: number): number {
//     return a + b;
// }


// Function这种类型太宽泛，没有价值
// let add4: Function = (a, d, c) => {

// }

// 定义一个函数
type FourCalcularor = (a: number, b: number) => number;

let str: string = "这是一个字符串";
const add: FourCalcularor = (a, b) => {
    return a + b;
}
const minus: FourCalcularor = (a, b) => {
    return a - b;
}

const persons = [{ name: "ZhangSan", age: 20}, { name: "LiSi", age: 18}];
persons.forEach((item) => {
    console.log(item.age + 10);
});

const numberArr = [1, 2, 3];
numberArr.forEach((item) => {

})

const strArr = ["1", "2", "3"];
strArr.forEach((item) => {

});


// 例子
function printData<T>(arg1: T): T{
    console.log(arg1);
    return arg1;
}
const a = printData(1);
const b = printData("布布是步驴");

function printData2(arg1){
    console.log(arg1);
    return arg1;
}
let c = printData2(2);
c = "13"

