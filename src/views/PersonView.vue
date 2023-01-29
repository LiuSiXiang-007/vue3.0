<template>
  <div>
    <h1>笔记页</h1>    <a></a> <p></p> <h2></h2>
  </div>
</template>
<!-- 前端笔记页 -->
<script lang="ts" setup>
import { ref } from 'vue'
const activeNames = ref([''])
</script>

<style scoped>
h2{
  color: goldenrod;
}
p{
  font-weight: bold;
  word-wrap:break-word; /** 自动换行 */
}
a{
  color: red;
  font-weight: bold;
}
</style>