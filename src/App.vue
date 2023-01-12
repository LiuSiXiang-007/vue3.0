<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue';
</script>

<template>
  <header>
    <!-- 这里是典型的图片导入 直接复制进资源文件 然后使用src进行导入 -->
    <img alt="Vue logo" class="logo" src="@/assets/ocean.svg" width="125" height="125" />
    <div class="wrapper">
      <HelloWorld msg="这里是典型的子传父组件" />
      <nav>
        <RouterLink to="/">首页</RouterLink>
        <RouterLink to="/element-plus">Element-Plus</RouterLink>
<!--        i18n国际化还在报错中(功能优先级不高)-->
        <!-- <RouterLink to="/i18n">i18国际化</RouterLink>-->
        <RouterLink to="/vue-demo">Vue 3.0开发前学习</RouterLink>
        <RouterLink to="/es6">es6中恶心的点</RouterLink>
        <RouterLink to="/typeScript">TypeScript入门</RouterLink>
        <RouterLink to="/ts_more">TypeScript进阶</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  /*line-height: 1.5;*/
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
