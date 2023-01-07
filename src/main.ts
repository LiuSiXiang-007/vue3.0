import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//当目录下的js文件名为index.js时，可以省略不写文件名
import store from './store'
import ElementPlus from 'element-plus'
// element-plus 全局样式
import 'element-plus/dist/index.css'
// element-plus 图标
import * as Icons from '@element-plus/icons-vue'
// 国际化
import i18n from "@/i18n";

import './assets/main.css'

const app = createApp(App)

// 注册Icons 全局组件
Object.keys(Icons).forEach(key => {
    // @ts-ignore
    app.component(key, Icons[key])
})


app.use(i18n);
app.use(ElementPlus)
app.use(createPinia())

app.use(router).use(store).mount('#app')
