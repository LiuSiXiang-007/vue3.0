<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <h1>这里是首页</h1>
    <p>页面简介-这个项目是用来学习以及记录的 中间用到的框架现在有</p>
    <div class="body">vue3、ts、element-plus</div>
    <!-- 下面为子类 -->
    <TheWelcome />
  </main>
</template>
<style scoped>
  p{
    color: pink;
    font-family: "Microsoft YaHei UI Light";
    font-weight: bold;
  }
  .body{
    margin: 10px;
    font-size: 20px;
    font-weight: 500;
  }
</style>
