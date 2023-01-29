<template>
  <div class="advance">     <a></a> <p></p> <h2></h2>
    <h1>TypeScript进阶</h1>
    <h2>声明文件</h2>
      <p>declare var/let/const 声明变量/常量</p>
      <p>declare function 声明函数</p>
      <p>declare class 声明 class</p>
      <p>declare enum 声明枚举变量</p>
      <p>declare namespace 声明命名空间(空间下必须有属性才生效)</p>
      <p>详情可见 jQuery.js.ts 文件 \ 以及readme.md文件</p>
    <h2>内置对象</h2>
      <p>内置对象是指根据标准在全局作用域（Global）上存在的对象</p>
      <p>`ECMAScript` 标准提供的内置对象有 Boolean、Error、Date、RegExp 等。</p>
      <p>`DOM` 和 `BOM` 提供的内置对象有：Document、HTMLElement、Event、NodeList 等</p>
    <h2>字符串字面量类型</h2>
      <p>字符串字面量类型用来约束取值只能是某几个字符串中的一个。(限定字符串的取值)</p>
    <h2>元组</h2>
      <p>数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象</p>
    <h2>枚举</h2>
      <p>枚举（Enum）类型用于取值被限定在一定范围内的场景</p>
      <p>枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射</p>
      <p><a>常数项和计算所得项</a></p>
      <p>枚举项有两种类型：常数项（constant member）和计算所得项（computed member）</p>
      <p>常数项：</p>
      <p>没有初始值且上一位枚举成员是常数项 --》 在这种情况下，当前枚举成员的值为上一个枚举成员的值加 1</p>
      <p><a>所有其它情况的枚举成员被当作是需要计算得出的值</a></p>
      <p>常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员 编译阶段只计算其下标</p>
      <p><a>外部枚举：</a>使用 declare enum 定义的枚举类型</p>
    <h2>类</h2>
      <p>ts可使用 class 定义类，使用 constructor 定义构造函数，通过 new 生成新实例的时候，会自动调用构造函数</p>
      <p>类的继承：子类中使用 super 关键字来调用父类的构造函数和方法</p>
      <p>同Java一样的性质，https://ts.xcatliu.com/advanced/class-and-interfaces.html</p>
      <p>在这里就不赘叙</p>
    <h2>泛型</h2>
      <p>定义函数、接口或类的时候，不预先指定具体的类型，而在<a>使用的时候再指定类型</a></p>
      <p>多个类型参数 -- 定义泛型的时候，可以一次定义多个类型参数</p>
    <h2>声明合并</h2>
      <p>两个相同名字的函数、接口或类，那么它们会合并成一个类型</p>
      <p>实现 接口 合并时，合并的属性的类型必须是唯一的</p>
    <h2>重载</h2>
      <p>1.函数签名:就是通过更新参数和返回类型直接修改函数签名</p>
      <p>2.函数重载:当函数签名相对复杂且涉及多种类型时,定义重载签名和一个实现签名</p>
      <p></p>
      <p></p>
  </div>
</template>

<script lang="ts">
/** ECMAScript 的内置对象 */
const a: Boolean = new Boolean(1);
const e: Error = new Error('Error occurred');
const d: Date = new Date(); // 日期
const z: RegExp = /[a-z]/;  // 正则表达式
/**
 * 正则
 * 文字符号在两个斜杠之间采用一种模式，在第二个斜杠之后是可选的标志。
 * 构造函数将字符串或RegExp对象作为第一个参数，将一串可选标志作为第二个参数。
 * */
//  用法
const re = new RegExp('ab+c', 'i'); // 构造函数，以字符串模式作为第一个参数

console.log(a, e, d, z);

/** DOM 和 BOM 的内置对象 */
const body: HTMLElement = document.body;
const allDiv: NodeList = document.querySelectorAll("#advance");

document.addEventListener('click', function (e: MouseEvent) {
  console.log("-----------------------------------")
})

console.log(body, allDiv);

/** 字符串字面量类型 */
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(event: EventNames) { console.log(event) }
handleEvent("click");
handleEvent("scroll");
handleEvent("dblclick");  // 超出取值范围-在js中适用 单ts中会报错

/** 元组 */
let tom: [string, number] = ['Tom', 25];
// 直接对元组类型的变量进行初始化,需要提供所有元组类型中指定的项
let mark: [string, boolean, number];
mark = ["name", true, 10];
// 添加元素时只能够，是联合类型
tom.push('male');
tom.push(true);

/** 枚举 */
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
//  enum Days {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat}; -手动赋值也不是不可以
console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

/** 枚举中的计算所得项 */
enum Color {Red, Green, Blue = "blue".length}; // "blue".length 计算所得项 4

/** 外部枚举 */
const enum Directions {
  Up,
  Down,
  Left,
  Right
}
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
console.log("外部枚举--",directions)

/** 类的属性和方法 */
class Animal {
  public name;
  constructor(name) {
    this.name = name;
  }
  // get、set 存储器
  get name() {
    return 'Jack';
  }
  set name(value) {
    console.log('setter: ' + value);
  }
  sayHi() {
    return `My name is ${this.name}`;
  }
}
let Jack = new Animal('Jack');
console.log("类的属性和方法基础用法",Jack.sayHi());

/** 类的继承 */
class Cat extends Animal {
  constructor(name) {
    super(name); // 调用父类的 constructor(name)
    console.log(this.name);
  }
  sayHi() {
    return 'Meow, ' + super.sayHi(); // 调用父类的 sayHi()
  }
}
const Tom = new Cat('Tom');
console.log("Cat集成了Tom",Tom.sayHi());

/** 泛型 */
function fanXingTest(num: number, value: any): Array<any>{
  let result = [];
  for (let i = 0; i < num; i++){
    result[i] = value;
  }
  return result
}
console.log(fanXingTest(5, 'tianxia'));
// 上面 一个显而易见的缺陷是，它并没有准确的定义返回值的类型，如果这边需要在输出的基础上继续操作的话 将无法操作
function createArr<T>(length: number, value: T): Array<T>{
  let result = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}
console.log(createArr<number>(3, 3));
console.log(createArr<boolean>(3, false));
console.log(createArr<number | boolean>(3, false));
/** 多个类型参数 */
function swap<T,U>(tuple: [T, U]): [U,T]{
  return [tuple[1], tuple[0]]
}
console.log(swap([7,'seven']));

/** 声明合并 */
// 函数
// function reverse(x: number): number;
// function reverse(x: string): string;

// 反转 str - 》 rts
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('');
  }
}

// 接口
interface Users{ names: string }
interface Users{ weight: number }

/** 重载 */
function sayHello(person: string): string {
  return `Hello,${person}!`;
}
console.log(sayHello("WangXiang"))
// 1.函数签名 过更新参数和返回类型直接修改函数签名
function sayHellos(person: string | string[]): string[]{
  if (typeof person === 'string' ) return `Hello,${person}!`
  else return person.map(item => `Hello,${item}!`);
}
console.log(sayHellos(["刘德华","鲁智深","新年"]),sayHellos("jia"))
// 2.函数重载 同样是实现上述功能 这里可以初始化两个 sayHello 方法 并给上不同的属性(重载签名)，再写实现方法

function greet(person: string): string;
function greet(persons: string[]): string[];
function greet(value: any): unknown {
  if (typeof value === 'string') return `Hello,${value}!`
  else if (Array.isArray(value)) return value.map(item => `Hello,${item}!`);
  else return value
}
console.log(greet("jack"),greet(["tom","bob"]),greet(1))  // 这里虽然可以输出 但是类型不统一 所以编译报错


</script>

<style scoped>
  .advance{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h2{
    color: purple;
  }
  a{
    color: red;
    font-weight: bold;
  }
</style>