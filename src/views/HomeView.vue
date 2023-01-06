<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <p>我是HomeView里面的内容</p>
    <p>页面简介-这个项目是用来学习以及记录的 中间用到的框架现在有</p>
    <div>
      vue3、ts、element-plus
    </div>
    <TheWelcome />
  </main>
</template>
<style scoped>
  .p{
    color: pink;
    font-family: "Microsoft YaHei UI Light";
    font-weight: bold;
  }
</style>
