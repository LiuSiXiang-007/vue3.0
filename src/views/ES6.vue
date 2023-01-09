<template>
  <div>
    <h1>ES6 中的难点</h1>
    <h2>箭头函数</h2>
    <p>ES6-中 => 表示箭头函数，箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回</p>
    <el-image :src="imgs" :initial-index="4" fit="cover" />
  </div>
</template>

<script lang="ts">
import img01 from '../assets/1673252865392.jpg';
export default {
  data() {
    return {
      imgs: img01
    }
  }
}
</script>

<style scoped>

</style>