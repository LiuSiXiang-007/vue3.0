# vue3.0 主要框架以及内容汇总

vue3+vite+element-plus

1.本项目使用的构建工具是 pnpm

#### 全局安装：npm install -g pnpm

#### 查看ts-node的所有版本 pnpm view ts-node versions

#### 查看依赖(全局) pnpm list [-g]

#### 运行 pnpm dev

# a.[TypeScript](https://www.typescriptlang.org/docs/handbook/basic-types.html)

#### 它是 JavaScript 的一个超集，主要提供了类型系统和对 ES6 的支持.

[TypeScript 入门教程](https://ts.xcatliu.com/)

[https://drylint.com/TypeScript/TS_%E7%B1%BB%E5%9E%8B.html](https://drylint.com/TypeScript/TS_%E7%B1%BB%E5%9E%8B.html) -- typescript 难点解释版

#### ts导入第三方声明文件（这里以 jquery 举例）

直接用 npm 安装对应的声明模块即可
````
npm install @types/jquery --save-dev
````

在不同的场景下，声明文件的内容和使用方式会有所区别

库的使用场景主要有以下几种：

- 全局变量：通过 `<script>` 标签引入第三方库，注入全局变量
* `npm` 包：通过 `import foo from 'foo'` 导入，符合 ES6 模块规范 
+ `UMD` 库：既可以通过 `<script>` 标签引入，又可以通过 `import` 导入 
+ 直接扩展全局变量：通过 `<script>` 标签引入后，改变一个全局变量的结构 
+ 在 npm 包或 UMD 库中扩展全局变量：引用 npm 包或 UMD 库后，改变一个全局变量的结构 
+ 模块插件：通过 `<script>` 或 `import` 导入后，改变另一个模块的结构 

### 新语法索引

+ `declare var` 声明全局变量
+ `declare function` 声明全局方法
+ `declare class` 声明全局类
+ `declare enum` 声明全局枚举类型
+ `declare namespace` 声明（含有子属性的）全局对象
+ `interface` 和 `type` 声明全局类型
+ `export` 导出变量
+ `export namespace` 导出（含有子属性的）对象
+ `export default` ES6 默认导出
+ `export = `commonjs 导出模块
+ `export as namespace` UMD 库声明全局变量
+ `declare global` 扩展全局变量
+ `declare global` 扩展全局变量
+ `/// <reference />` 三斜线指令



# b.[element-plus](https://element-plus.org/zh-CN/) 的引入以及使用

1.安装

````
# NPM
$ npm install element-plus --save

# Yarn
$ yarn add element-plus

# pnpm
$ pnpm install element-plus
````

2.main.ts 中进行导入

````
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'    // element-plus 全局样式
import * as Icons from '@element-plus/icons-vue'    // element-plus 图标

Object.keys(Icons).forEach(key => {
    // @ts-ignore
    app.component(key, Icons[key])
})

app.use(ElementPlus)
````
即可开始使用！

# c.VUE&组件

#### 大屏设计器  - DataV

介绍：免费开源、开箱即用的Vue 大屏数据展示组件库,[项目地址](http://datav.jiaminghi.com/)

#### 毛玻璃效果

通过css效果实现 - filter: blur( x px) 或者 backdrop-filter: blur( x px)

#### 图片滑块验证

基于vue-drag-verify二次开发的vue组件，[项目地址](https://github.com/yimijianfang/vue-drag-verify) [演示地址](https://yimijianfang.github.io/vue-drag-verify/#/)
