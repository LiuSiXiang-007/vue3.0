import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//当目录下的js文件名为index.js时，可以省略不写文件名
// import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'    // element-plus 全局样式
import * as Icons from '@element-plus/icons-vue'    // element-plus 图标
import i18n from "@/i18n";  // 国际化



import './assets/main.css'

const app = createApp(App)

// 注册 element-plus Icons 全局组件
Object.keys(Icons).forEach(key => {
    // @ts-ignore
    app.component(key, Icons[key])
})


app.use(i18n);
app.use(ElementPlus)
app.use(createPinia())
// app..use(store)

app.use(router).mount('#app')
