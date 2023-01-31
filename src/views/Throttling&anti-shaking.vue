<template>
<div>
  <h1>节流/防抖</h1>
    <h2>节流</h2>
      <b>控制执行频率。持续触发，每 n 秒执行一次函数</b>
      <p>使用场景 scroll 滚动、input 动态搜索、重复请求/点击</p>
    <h2>防抖</h2>
      <b>只执行最后一次。事件持续触发，但只有等事件停止触发后 n 秒后才执行函数</b>
      <p>防抖就是要延迟执行，你一直操作触发事件一直不执行，当你停止操作等待多少秒后才执行</p>
      <a>使用场景：</a>窗口大小变化，调整样式 | 搜索框，输入后1000毫秒搜索 | 表单验证，输入 1000 毫秒后验证
    <h2>使用测试</h2>
      <a>1.防抖测试</a>窗口样式调整，当窗口大小发生变化 1000 毫秒后，一直在图片与按钮之间切换
      <el-button v-if="showImg"> 测 试 按 钮 </el-button>
      <img v-else :src="imgs">
      <p><a>2.节流测试</a>重复点击事件</p><el-button @click="throttle(anit(),2000)">节流测试</el-button>
      <img v-if="anti" :src="imgs">
  <h2></h2>
</div>
</template>

<script lang="ts" setup>
import {
  ref,
  watch,
  onMounted,
} from 'vue';
import imgs from '../assets/avatr.jpg';

const showImg:Boolean = ref(true);
const anti:Boolean = ref(false);
const windowsWidth = ref("");
const windowsHeight = ref("");
watch(windowsWidth, async (news, olds) => {
  if (news != olds) changeViewType(hunc(),2000);
})
watch(windowsHeight, async (news, olds) => {
  if (news != olds) changeViewType(hunc(),2000);
})
// 监听窗口尺寸变化
onMounted(() =>{
  window.onresize=()=>{
    // onresize 当浏览器被重置大小时执行Javascript代码
    windowsWidth.value = document.body.clientWidth;
    windowsHeight.value= document.body.clientHeight;
  };
})


let debounceTimer: NodeJS.Timeout | null , throttleTimer: NodeJS.Timeout | null;
function changeViewType(fun, delay) {
  console.log("进入防抖方法")
   return(...args: unknown[]) => {
     if (debounceTimer) {
       clearTimeout(debounceTimer);
     }
     debounceTimer = setTimeout(() => {
       hunc();
     }, delay);
   }
}
function hunc(){ showImg.value = !showImg.value }
// 节流 在vue3中的使用方式必须遵循当前写法
// let throttleTimer : NodeJS.Timeout | null , throttleTimer: NodeJS.Timeout | null;
function throttle(fun, delay){
  console.log("进入节流方法")
  return (...args: unknown[]) => {
    console.log("23")
    if (throttleTimer) { return; }
    throttleTimer = setTimeout(() => {
      fun()
      throttleTimer = null;
    }, delay);
  }
}
function anit(){
  anti.value = !anti.value
  console.log("11111111111111")
}

</script>

<style scoped>
a{
  color: darkblue;
  font-weight: bold;
  padding-right: 3px;
}
img{
  width: 300px;
  height: 300px;
  display:block;
}
</style>