// 从vuex中导入store的构造方法
import { createStore } from 'vuex'

//声明store的三个最基础的组成部分
const mutations = {}
const actions = {}
const state = {}

//创建一个新的store实例，然后挂载上面的三个对象
const store = createStore({
    //key: value同名同值,可以简写
    actions,
    mutations,
    state
})
//导出store实例
export default store