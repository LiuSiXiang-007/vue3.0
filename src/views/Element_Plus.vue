<template>
  <div class="about">
    <h1>1.按钮-el-button</h1>
    <p>相比与element-ui的按钮，在代码上没有什么优化</p>
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>
    <h1>2.Icon 图标</h1>
    <div>以前的图标是一种标签，而elementplus将图标变成独立出来的依赖，需要单独进行全局注册</div>
    <div>所以现在用法也不一样了，而是用一个 el-icon 标签包裹 所需要的任一图标组件；使用 el-icon 为 SVG 图标提供属性；或者独立使用它，不从父级获取属性</div>
    <!--    import * as Icons from '@element-plus/icons-vue'-->
    <!--    // 注册Icons 全局组件-->
    <!--    Object.keys(Icons).forEach(key => {-->
    <!--      app.component(key, Icons[key])-->
    <!--    })-->
    <Edit style="width: 1em; height: 1em; margin-right: 8px"/> <span>由于SVG图标默认不携带任何属性，可直接写属性</span>
    <el-icon :size="size" :color="color"> <Edit /> </el-icon> <p></p>
    <h1>3.Layout(el-row) 布局</h1>
    <el-row>
      <el-col :span="20"><div class="grid-content ep-bg-purple-dark" >组件默认使用 Flex 布局，不需要手动设置 type="flex"</div></el-col>
      <el-col :span="4">你看</el-col>
    </el-row>
    <h1>4.相比于element-ui的排版以及样式，plus更新了字体，行高也重新进行了配置</h1>
    <h1 class="new">5.element-plus 新增 i18n</h1>
    <div>(国际化配置-组件内部样式切换),vue3可单独进行国际化配置(利用组件)详情可见remind.md文件 <el-button type="primary" @click="toggle">国际化</el-button></div>
    <el-config-provider :locale="locale">
      <el-table mb-1 :data="[]" />
      <el-pagination :total="100" />
    </el-config-provider>
    <!-- 分割线 中间还是一样可插入图标、文字等 -->
    <el-divider>
      <el-icon>Tagore</el-icon>
    </el-divider>
    <h4>除去以上优化的，其他的组件与element-ui用法并无异同，以下为新增功能</h4>
    <h1 class="new">【新】Virtualized Table 虚拟化表格</h1>
    <div>ps：当前还存在一些bug：数据负载过大时，网络和内存容量也会成为您应用程序的瓶颈 --2023年1月7日，这里仅做一个样式示例(网页黑暗模式没有做适配)</div>
    <el-table-v2
        :columns="columns"
        :data="data"
        :width="700"
        :height="400"
        fixed
    />
    <h1>el-image的使用</h1>
    <div> 标签内部 - :src="imgs" :initial-index="4" fit="cover"</div>
    <div>script 中 import img01 from '../assets/1673252865392.jpg'; </div>
    <div>最后在data-》return -》 imgs:img01</div>
  </div>
</template>

<script lang="ts" setup>
// setup - 语法糖
import { computed, ref } from 'vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import en from 'element-plus/dist/locale/en.mjs';
import img01 from "@/assets/1673252865392.jpg";

const language = ref('zh-cn');
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en));
const value = ref("");
const size = ref(20);
const color = ref("pink")

const toggle = () => {
  language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn'
};

/** Virtualized Table 虚拟化表格 方法 */
const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
    Array.from({ length }).map((_, columnIndex) => ({
      ...props,
      key: `${prefix}${columnIndex}`,
      dataKey: `${prefix}${columnIndex}`,
      title: `Column ${columnIndex}`,
      width: 150,
    }))
const generateData = (
    columns: ReturnType<typeof generateColumns>,
    length = 200,
    prefix = 'row-'
) =>
    Array.from({ length }).map((_, rowIndex) => {
      return columns.reduce(
          (rowData, column, columnIndex) => {
            rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`
            return rowData
          },
          {
            id: `${prefix}${rowIndex}`,
            parentId: null,
          }
      )
    })
const columns = generateColumns(10)
const data = generateData(columns, 1000)
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  p{
    font-size: 15px;
    color: pink;
  }
  .new{
    color: red;
  }
}
</style>
