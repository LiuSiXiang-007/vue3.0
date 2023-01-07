<template>
  <main>
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
<!--        {{ langType[language] }}-->
        {{ [language] }}
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="zhCn">中文</el-dropdown-item>
          <el-dropdown-item command="en">English</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

  </main>
</template>
/**
*  Create by LiuSiXiang on 2023/1/7
*  i18n @describe: 国际化案例
*/
<script lang="ts" setup name="i18n">
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

// import { langType } from "@/enum/options";
import { useI18n } from "vue-i18n";

const store = useStore();
// 改变语言
const language = computed(() => store.state.language);
const { locale } = useI18n();
const handleCommand = (value: string) => {
  locale.value = value;
  store.commit("CHANGE_LANGUAGE", value);
};
</script>

<style scoped>

</style>