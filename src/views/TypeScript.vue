<template>
  <div class="all">
    <h1>TypeScript 入门基础知识</h1>
    <p>为了弥补了 JavaScript 没有类型约束的缺点，TypeScript 是静态类型</p>
    <p>静态类型是指编译阶段就能确定每个变量的类型，即定义的时候就需要给定属性或者参数的初始类型</p>
    <p>类型系统按照<b>「是否允许隐式类型转换」</b>来分类，可以分为强类型和弱类型。<b>而TypeScript 是弱类型</b></p>
    <p>比如：console.log(1 + '1'); 的输入结果</p>
    <p>TypeScript 是完全兼容 JavaScript 的，它不会修改 JavaScript 运行时的特性，所以它们都是弱类型。</p>
    <h2>全局安装TS</h2>
    <p>npm install -g typescript</p>
    <h2>原始数据类型</h2>
    <p>JavaScript 的类型：布尔值、数值、字符串、null、 以及 对象类型</p>
    <el-button @click="typeScriptTest">数据类型输出测试</el-button>
    <h2>任意值</h2>
    <p>如果是一个普通类型，在赋值过程中改变类型是不被允许的(即初始化的时候就已经定义完了它的默认类型，后面不能够进行更改)</p>
    <el-button @click="anyTYpe">任意值的属性和方法的使用</el-button>
    <p>任意值在vue中显然不适用，所以若想要在初始化之后修改变量的属性，只能够在声明时不定义类型</p>
    <p>如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查</p>
    <h2>联合类型-取值可以为多种类型中的一种</h2>
    <p>初始化的时候，赋值类型以<b>string | number</b>的形式，或者定义方法时，<b>function getString(something: string | number)</b></p>
    <el-input v-model="inputValue" placeholder="Please input"/>
    <el-button @click="changeType(inputValue)">将输入框内容转字符串</el-button>{{inputValue}}
    <h2>对象的类型-接口</h2>
    <p>相当于java中的接口类，初始化接口类时有三个点</p>
    <el-link type="warning" target="_blank" href="https://drylint.com/TypeScript/ts_interface.html#_1-对象类型的接口">这里有一个很清楚的讲解</el-link>
    <p>1.用？表示可有可无的属性__   <el-link type="primary">gender?: string|boolean</el-link> </p>
    <p>2.允许接口有一个任意的(属性名/类型)属性  <el-link type="primary">[propName: string]: any</el-link></p>
    <p>3.属性类型可为 只读 ，声明后不能够被更改的属性 <el-link type="primary">readonly id: number</el-link></p>
    <el-button @click="showInterface">接口类测试</el-button>
    <h2>数组类型</h2>
    <p>「类型 + 方括号」来表示数组</p>
    <h2>函数的类型</h2>
    <el-button @click="func">函数测试</el-button>
    <p>不要混淆了 TypeScript 中的 => 和 ES6 中的 =></p>
    <p>TypeScript => 表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型</p>
    <p>ES6-中 => 表示箭头函数，箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回<el-link type="success" href="/es6">se6 详解</el-link></p>
    <p>可选参数、用接口定义函数的形状、参数默认值（没有看懂）
      <el-link href="https://ts.xcatliu.com/basics/type-of-function.html">https://ts.xcatliu.com/basics/type-of-function.html</el-link></p>
    <h2>类型断言</h2>
    <p>访问(联合类型)有两个类型的函数时，TS不确定时哪一个类型，这时候可以用 类型断言（Type Assertion）可以用来手动指定一个值的类型。</p>
    <p>有时候确实需要在不确定类型的时候访问一个类型的属性或方法，则需要使用断言来告诉编辑器它的类型，编辑器则会跳过它的类型检查</p>
    <p>类型断言有两种形式：《 type（string） 》 value 或 value as type（string）</p>
    <h2>高级类型</h2>
    <p>交叉类型（Intersection Types） 将多个类型合并为一个类型。</p>
    <p></p>
    <p></p>
  </div>
</template>

<script lang="ts">
import { computed, ref } from 'vue'
import {User} from "@element-plus/icons-vue";


/** 定义方式 */
const foo = ref(1);   // 最常用的初始化方式
const foo01: number = Number(1);
let isDone: boolean = new Boolean(1);
// const a: void;  // 空类型
// let u: undefined;
// const num: number = u;
let anyThing:any = "Tom";

let noType;
let twoType: number | string;
// const inputValue = ref();

/** 定义一个接口类 */
interface User {
  age: number,
  name: string,
  gender?: string|boolean,  // 用？表示可有可无的属性
  [propName: string]: any,  // 允许接口有一个任意的(属性名/类型)属性
  readonly id: number,  // 只读属性，声明后不能够被更改的属性
}
/** 定义一个普通的接口函数 */
const xiaoming:User ={
  age: 18,
  name: '小明',
  gender: false,
  nan: true
}
const hong:User ={
  age: 7,
  name: '小红',
  gender: "女",
  woman: true
}
console.log("接口类的演示--",xiaoming,hong,User)
/** 数组定义 */
const list01: number[] = [1,2,3,4];
const list02: string[] = ["1","2","3","4"];
const list03: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }];
// 接口形式展示数组
interface NumArr{
  [index:number]: number;
}
let list04: NumArr = [1, 1, 2, 3, 5];
console.log("数组类型--",list01,list02,list03,list04)

/** 函数 */
function sun(x:number,y:number):number{ // 函数声明
  return x*y;
}
//函数表达式 Function Expression 这里 只对等号右侧的匿名函数进行了类型定义
let suns = function (x:number,y:number): number {
  return x + y;
};

// mySum添加了类型
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
};
/** 用接口定义函数的形状 */
/**
 * 采用函数表达式|接口定义函数的方式时，对等号左侧进行类型限制，可以保证以后对函数名赋值时保证参数个数、参数类型、返回值类型不变
 * */
interface SearchFunc {(source: string, subString: string): boolean;}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  return source.search(subString) !== -1;
}

/** 类型断言（Type Assertion）可以用来手动指定一个值的类型。 */
function fn1 (a: string | number): void {
  console.log(a.toFixed(2)) // 报错，a 的值有可能是 string 类型，当为 string 时则没有 .toFixed() 方法
}
// 使用断言
function fn2 (a: string | number): void {
  console.log((<number>a).toFixed(2)) // 使用断言告诉程序 a 就是 number 类型，则此时编辑器不会再报错
}function fn3 (a: string | number): void {
  console.log((a as number).toFixed(2)) // 使用断言告诉程序 a 就是 number 类型，则此时编辑器不会再报错
}
// 类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的
function fn4(x: string | number): number {
  // return x // 报错，x 有可能为 string类型
  return x as number
}
function fn5(x: string | number): boolean {
  return <boolean>x // 报错
}

/** 函数的交叉类型 将多个类型合并为一个类型 */
interface Named {
  name: string
}
interface Age {
  age: number
}
interface Gender {
  gender: number
}
let jerry: Named & Age & Gender = {
  name: 'jerry',
  age: 20,
  gender: 1
}
console.log("交叉类型",jerry)

/** 函数的联合类型 */
let strNum: string | number
strNum = 'seven'
console.log(strNum.length)  // 这里没报错是因为strNum带有number属性
let strNums: string | boolean
strNum = 123;
// console.log(strNum.length) 这里的 length 找不到

export default {
  data() {
    return {
      inputValue:''
    }
  },
  methods: {
    submit() {
      this.$emit('someEvent')
    },
    typeScriptTest(){
      console.log(foo,foo01,isDone)
      /** 数字、布尔、对象 */
    },
    anyTYpe(){
      /** 任意值在vue中显然不适用，所以若想要在初始化之后修改变量的属性，只能够在声明时不定义类型 */
      // console.log(anyThing.myName);
      // console.log(anyThing.myName.firstName);
      // anyThing.setName('Jerry');
      // anyThing.setName('Jerry').sayHello();
      // anyThing.myName.setFirstName('Cat');
      console.log("anyThing--",anyThing);

      noType = "tom";
      noType = 7;
      // 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查
      console.log(noType)
    },
    changeType(value:string|number){
      console.log(value)
      return  value = value.toString();
    },
    showInterface(){ console.log(hong,xiaoming)},
    func(){ console.log(sun(5,6), suns(5,6), mySum(5,6))},
  }
}
</script>

<style scoped>
.all{
  width: 140vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h2{
  color: green;
}
.el-input{
  width: 200px;
}
</style>