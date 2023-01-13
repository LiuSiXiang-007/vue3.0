<template>
  <div>
    <h1>Vue 3.0 - 官方文档笔记(3基础以及巩固2的部分)</h1>           <a></a> <p></p> <h2></h2>
    <h2>vue.js 的 v-html 指令</h2>
      <p>其主要作用是：设置innerHTML。 - 写法 ：p v-html="name"</p>
      <p>对于普通的文本和v-text没有什么差异，但是对于html结构可以直接渲染</p>
      <p>v-html 指令应尽量避免使用，否则会带来危险(XSS攻击 跨站脚本攻击)，因为v-html会<a>将其当html标签解析后输出</a></p>
    <h2>模板语法</h2>
      <p>vue2的<a> JavaScript表达式({{value}})、Attribute 绑定(:id、:name等)、v-bind等指令 以及修饰符 Modifiers(@submit.prevent="onSubmit")</a>等在vue3.0中同样适用</p>
      <p>提一嘴，vue3中有一点-动态参数-即v-bind:[attributeName]="url"，这里的attributeName可以为表达式</p>
    <h2>响应式声明</h2>
      <p>在 语法糖 和 lang："ts" 的加持下，可以同时在 script 中使用setup()和ts语法内容</p>
      <p>{{state}}-{{count}}-{{states.count}}</p>
    <h2>计算属性</h2>
      <p>官网解释：描述依赖响应式状态的复杂逻辑。 希望以此来减轻template中代码臃肿、复杂问题</p>
      <p>例如这里有一个Value，需求是当这个值大于3后，隐藏添加按钮</p>
      <div>Value | 值: {{value01}} - <el-button v-if="value02" @click="value01++">+1</el-button> <el-button v-else @click="reset">重置</el-button></div>
      <p>这里的例子仅为测试，开发过程中应该<a>避免直接修改计算属性值</a></p>
    <h2><a>3.0新</a> Class 与 Style 绑定</h2>
      <p>vue3.0 的 class 和 style 的 v-bind 用法提供了特殊的功能增强。除了字符串外，表达式的值也可以是对象或数组。</p>
      <p>界面交互方面的动态切换就更佳方便 eg. :class="{ active: isActive }" 这边的isActive是js中定义的对象</p>
      <div :class="{ active: isActive }">show</div>
      <p>以上同样适用于数组、组件以及内部内联样式的渲染</p>
    <h2> v-on 回顾</h2>
      <p>v-on 指令 (简写为 @) 里面可以直接写表达式，需要再v-on中访问原生 DOM 事件只要带上$event</p>
      <p>事件修饰符- .stop 阻止冒泡|.prevent 阻止默认事件|.capture 添加事件监听器|.self 只有当事件在该元素本身触发时，才会触发回调</p>
      <p>.once 事件只触发一次|.{keyCode | keyAlias} 只当事件是从侦听器绑定的元素本身触发|.native 监听组件根元素的原生事件</p>
      <p>表单修饰符 - .lazy同步更新change事件 | .number 值自动转数字 | .trim 去空格 |</p>
    <h2>监听器watch</h2>
      <el-button @click="changeValue">监听器测试</el-button>
      <p>watch 只追踪明确侦听的数据源 | watchEffect，则会在副作用发生期间追踪依赖(一开始就会执行一次)</p>
      <p>基础内容还剩组件，<a>组件会单独开一个界面</a> -- 2023年1月13日</p>
  </div>
</template>
<!-- 同时使用 语法糖以及ts语法  Create by LiuSiXiang on 2023/1/12 -->
<script setup lang="ts">
import {
  ref,
  watch,
  computed,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,

} from "vue";

const isActive = ref(true); // 样式绑定

// 响应式声明 - 声明一个对象
const states = ref({ count: 3 });
const state = ref(false);
// typescript 式声明（非响应式） - 声明一个值
const count: number = 1;

/** Vue.js 几大常用生命周期 */
console.log("setup----create/BeforeCreate 生命周期内")
onBeforeMount(() => {
  console.log("onBeforeMount----挂载DOM前")
})
onMounted(() =>{
  console.log("onMounted----挂载DOM后")
});
onBeforeUpdate(() =>{
  console.log("onBeforeUpdate----更新组件前")
});
onUpdated(() =>{
  console.log("onUpdated----组件更新后")
});
onBeforeUnmount(() =>{
  console.log("onBeforeUnmount----卸载销毁前")
});
onUnmounted(() =>{
  console.log("onUnmount----卸载销毁后")
});

/** 计算属性 */
const value01 = ref(0);
const value02 = computed(() => {
  return  value01.value > 3 ? false : true;
});
function reset(){
  value01.value = 0;
}

/** 监听器 */
watch(value01,async (newVal,oldVal) => {
  console.log( newVal + " -》- " + oldVal);
})
// 当监听的内容是一个对象时
const obj01 = ref({ counts: 2 })
function changeValue(){ obj01.value.counts++ }
watch(
    () => obj01.value.counts,
    (news,olds) => { console.log(news,"对象属性变化",olds) },
    // { deep: true } - 强制转成深层侦听器
)
</script>

<style scoped>
a{
  font-weight: bold;
  color: red;
}
p{
  font-weight: bold;
}
h2{
  color: goldenrod;
}
</style>