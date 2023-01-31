<template>
  <div class="all-body">
    <header>
      <!-- 这里是典型的图片导入 直接复制进资源文件 然后使用src进行导入 -->
      <img alt="Vue logo" class="logo" src="@/assets/ocean.svg" width="125" height="125" />
      <div class="wrapper">
        <HelloWorld msg="这里是典型的子传父组件" />
        <nav>
          <RouterLink to="/">首页</RouterLink>
          <RouterLink to="/personView">重要的点总结<el-icon><Apple /></el-icon></RouterLink>
          <RouterLink to="/element-plus">Element-Plus</RouterLink>

          <!-- <RouterLink to="/i18n">i18国际化</RouterLink> <!--        i18n国际化还在报错中(功能优先级不高)-->-->
          <RouterLink to="/vue-demo">Vue 3.0开发前学习</RouterLink>
          <RouterLink to="/vue-note">Vue 3.0官方文档笔记</RouterLink>
          <RouterLink to="/es6">es6中恶心的点</RouterLink>
          <RouterLink to="/typeScript">TypeScript入门</RouterLink>
          <RouterLink to="/ts_more">TypeScript进阶</RouterLink>
          <RouterLink to="/module">常用的组件</RouterLink>
          <RouterLink to="/screenDesigner">大屏设计器</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue';
</script>

<style scoped>
.all-body{
  display: flex;
  flex-direction: row;
}
header {
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1%;
  height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 3px 0;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

/*@media (min-width: 110px) {*/
/*  header {*/
/*    display: flex;*/
/*    place-items: center;*/
/*    padding-right: calc(var(--section-gap) / 2);*/
/*  }*/

/*  .logo {*/
/*    margin: 0 2rem 0 0;*/
/*  }*/

/*  header .wrapper {*/
/*    display: flex;*/
/*    place-items: flex-start;*/
/*    flex-wrap: wrap;*/
/*  }*/

/*  nav {*/
/*    text-align: left;*/
/*    margin-left: -1rem;*/
/*    font-size: 1rem;*/

/*    padding: 1rem 0;*/
/*    margin-top: 1rem;*/
/*  }*/
/*}*/
</style>
