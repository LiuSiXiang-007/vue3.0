<template>
  <div>
    <h1>Vue 3.0 基础-2023年1月11日</h1>    <a></a> <p></p> <h2></h2>
    <h2>setup - 组合(入口)函数</h2>
      <p>首先区分一下，这里的<a>组合函数 setup</a> 并不是指 script 标签里面的 setup </p>
      <p>再 script 的后面添加 setup 是在单文件组件 (SFC) 中使用组合式 API 的编译时语法糖</p>
      <p><a>组件只需引入不用注册，属性和方法也不用返回，setup函数也不需要，甚至 `export` `default`都不用写了，不仅是数据，计算属性和方法，甚至是自定义指令也可以在我们的template中自动获得</a></p>
      <p>不在script标签后面添加：</p>
      <p><a>1.</a>定义数据、函数、生命周期、监视函数等；通过return暴露出去；<a>2.</a>在beforeCreate之前执行一次，this是undefined</p>
      <p><a>setup函数执行于beforeCreate和created之前</a>，如果要再dom中使用定义的变量和方法，需要return出去</p>
      <p><a>这里是测试</a>从 setup 函数中定义并且返回的数字-- {{num01}}/以及没有定义的{{num02}}</p>
      <p><a>3.</a>setup 中不能使用 this， this 指向 undefined;<a>4.</a> setup 函数（以及里面的内容）只会在组件初始化的时候执行一次</p>
      <p><a>5.</a>setup函数在beforeCreate生命周期钩子执行之前执行；<a>6.</a></p>
    <h2>context：上下文对象</h2>
      <p> context 里面可以选择 attrs,slots,emit</p>
      <p>主要用于父子组件传值</p>
    <h2>组合式API介绍</h2>
      <p>vue2-使用的是 选项式API：</p>
      <p>各个选项都有固定的书写位置，data选项写响应式数据，methods选项写方法函数...，一个功能逻辑的代码分散(不过这种写法复用性差)</p>
      <p>vue3.0 新增的组合式API：</p>
      <p>特定功能相关的所有东西都写在一起，同一功能代码块集中</p>
    <h2>选项式API/组合式API - 生命周期（对比）</h2>
      <el-image :src="imgz" :preview-src-list="imglist" :initial-index="4" fit="cover" />
      <p><a>即beforeCreate、created两大生命周期的方法，可以直接写到 setup 中</a></p>
    <h2>reactive函数</h2>
      <p>接收一个普通的对象传入，<a>把对象数据转化为响应式对象并返回</a></p>
      <p>reactive 使用之前 需要更 ref 一样从vue中导入，然后再 setup 中开始定义-{{reactiveTit}}</p>
    <h2>ref函数</h2>
      <p>接受一个简单类型或者复杂类型的传入并返回一个响应式且可变的 ref 对象</p>
      <p>使用步骤可参考，以上图片用法</p>
    <h2>computed() 计算属性</h2>
      <p>用法1-传入函数，返回值就是计算属性的值 - {{ test }}</p>
      <p>用法2-传入对象，get获取计算属性的值，set监听计算属性改变</p>
    <h2>watch - 定义侦听器</h2>
      <p>它可以用来监听 ref定义、多个、reactive定义、reactive定义(某一个属性)的响应式数据</p>
      <el-button @click="change01()">改变数据</el-button>
    <h2><a>新特性</a> Fragment组件</h2>
      <p>vue2.0 时，template只能够有一个根标签(节点)</p>
      <p>而Vue3.0，可以没有根标签，内部会将多个标签包含在一个Fragment虚拟元素中</p>
      <p>好处 - 减少标签层级, 减小内存占用</p>
    <h2><a>新特性</a> Teleport组件(可移动弹窗)</h2>
      <p>能够将我们的组件html结构移动到指定位置的技术</p>
      <p>更具标签选择器 在Teleport标签中添加 to=“” 即可实现指定位置</p>
      <p></p>
      <p></p>
      <el-button @click="isShow = true">展示Teleport</el-button>
      <Teleport to="#aa" v-if="isShow" >
        <div class="mask">
          <div class="dialog">
            <h3>我是Teleport里面的内容</h3>
            <el-button @click="isShow = false">隐藏Teleport</el-button>
          </div>
        </div>
      </Teleport>
      <div id="aa"></div>
    <h2><a>新特性</a> Suspense组件(内置)</h2>
      <p>用来在组件树中协调对异步依赖的处理</p>
      <p>组件树上层等待下层的多个嵌套异步依赖项解析完成，并可以在等待时渲染一个加载状态</p>
      <p>用Suspense包裹的异步依赖组件没加载完成之前，其他的异步依赖是不会加载的</p>
      <p>--------第二种用法 异步组件-----------</p>
      <p>异步组件默认就是“suspensible”的。这意味着如果组件关系链上有一个 Suspense标签，那么这个异步组件就会被当作这个
        Suspense标签 的一个异步依赖。在这种情况下，加载状态是由 Suspense标签 控制，而该组件自己的加载、报错、延时和超时等选项都将被忽略。
        异步组件也可以通过在选项中指定 suspensible: false 表明不用 Suspense 控制，并让组件始终自己控制其加载状态</p>
    <a>Create by LiuSiXiang on 2023/1/12</a>
  </div>
</template>

<script>
  import { ref,reactive,watch,Teleport } from "vue";
  import img from '../assets/api_difference.jpg';
  export default {
    beforeCreate(){ console.log("beforeCreate----------------------------") },
    create(){ console.log("create----------------------------") },
    setup(){
      /** setup函数执行于beforeCreate和created之前 */
      console.log("setup----------------------------")
      const num01 = ref(123);
      const num02 = ref(654); /** 没有在 setup 中进行 return 控制台输出警告 */
      console.log("我是在setup中输出的this",this); // 此时dom树没有创建，所以this输出为undefined
      const imgz = ref(img);
      const imglist = ref([img])
      const reactiveTit = reactive("我是在setup()方法中通过reactive定义的")
      /** watch 监听器 */
      let obj01 = ref({
        name: '对象',
        id: 10,
        had: {
          id: 2,
          name: "起飞"
        }
      });
      let aa = ref("泰坦")
      function change01(val){ obj01.name = val }
      // change01("泰坦");
      watch(obj01 , () => {console.log("数据发生了更变")})
      /** Teleport组件 */
      let isShow = ref(false);

      return {
        num01,
        imgz,imglist,
        reactiveTit,
        change01,
        isShow,
      }
    },
  }
</script>

<!--
<script setup>
  import { ref,reactive,computed } from "vue";
  import imgs from '../assets/api_difference.jpg';

  console.log("这便是单独的添加了setup 语法糖的 script 输出");
  /**  其内容等同于上一个 script 中的内容的setup(),不过内容的优先级却大于上一个生命周期中的setup-甚至直接将上一个覆盖了  */
  const aaa = ref("测试内容")
  const bbb = ref(2)
  const reactiveTit = reactive("在setup语法糖中用reactive定义的内容")
  const imgz = ref(imgs); // 响应式对象
  const imglist = ref([imgs]);
  /** 计算属性 computed 传入函数 返回值就是计算属性的值 */
  const test = computed(() => { return aaa.value + "计算属性1测试"});
  /** 计算属性 computed  传入对象，get获取计算属性的值，set监听计算属性改变。 */
  const test01 = computed(() => {
    // get(){ return bbb.value + 1 };
    // set(bbb) { this.bbb.value - 1 };
  });


</script>
-->

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
  .el-image{
    width: 35%;
  }
  .mask{
    background: #f2f2f2;
  }
  .dialog{
    color: purple;
  }
</style>