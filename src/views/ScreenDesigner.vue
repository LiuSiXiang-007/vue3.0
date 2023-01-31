<!-- 大屏设计器 -->
<template>
  <div :style="`width: ${width}rem`" h22rem flex="~ col" p3 justify-center items-center bg-dark>
    <!-- 全屏幕容器 -->
    <dv-full-screen-container>
      <!-- 边框 -->
      <dv-border-box12 ref="borderRef">
        <div class="all_box">
          <!-- 锥形柱图 -->
          <dv-conical-column-chart :config="config"/>
          <!-- 图表 -->
          <dv-charts :option="option" style="width:25rem;height:15rem;"/>
          <!-- 装饰 -->
          <dv-decoration-12 style="width:300px;height:300px;" />
          <!-- 进度池 -->
          <dv-percent-pond :config="pondConfig" style="width:200px;height:100px;" />
          <!-- 水位图 -->
          <dv-water-level-pond :config="waterConfig" style="width:200px;height:200px" />
          <!-- 加载中 -->
          <dv-loading><div style=" color: white;"> 加载中...</div></dv-loading>
          <!-- 排名轮播图 -->
          <dv-scroll-ranking-board :config="config" style="width:500px;height:300px" />
          <!-- 胶囊柱图 -->
          <dv-capsule-chart :config="config" style="width:25rem;height:15rem" />
          <!-- 飞线图 -->
          <div style="height: 350px;width: 350px;">
            <dv-flyline-chart-enhanced :config="flylineConfigs" :dev="true" style="width:100%;height:100%;"/>
          </div>
          <!-- 动态环图 -->
          <dv-active-ring-chart :config="conf" style="width:300px;height:300px" />
          <!-- 数字翻牌器 -->
          <div small-bg>
            <dv-digital-flop :config="config1" />
            <el-button btn @click="changeConfig"> 增加数据(数字翻牌器) </el-button>
          </div>
          <!-- 进度池 -->
          <!-- 进度池 -->
          <!-- 进度池 -->
        </div>
      </dv-border-box12>
    </dv-full-screen-container>
  </div>
</template>

<script lang="ts" setup>
import { $ref } from "vue/macros";
import { ref,reactive } from "vue";

// 图片预览
import top1 from '../assets/ocean.svg'
import top2 from '../assets/ocean.svg'
import top3 from '../assets/ocean.svg'
import top4 from '../assets/ocean.svg'
import top5 from '../assets/ocean.svg'
import top6 from '../assets/ocean.svg'
import top7 from '../assets/ocean.svg'

const config = reactive({
  data: [
    { name: '周口', value: 55,},
    { name: '南阳', value: 120,},
    { name: '西峡', value: 71, },
    { name: '驻马店', value: 66, },
    { name: '新乡', value: 80, },
    { name: '信阳', value: 35, },
    { name: '漯河', value: 15, },
  ],
  img: [ top1, top2, top3, top4, top5, top6, top7, ],
  showValue: true, textColor: '#fff',
})
const addData = () => {
  // 所有的数据动态变化 都是通过这里
  config.data.push({
    name: `新增${Math.floor(Math.random() * (130 - 1)) + 1}`,
    value: Math.floor(Math.random() * (130 - 1)) + 1,
  })
  config.img.push(top7)
}

const borderRef = ref<InstanceType<typeof DvBorderBox1>>()
let width = $ref(100)
const handelClick = ()=>{
  width += 2
  borderRef.value?.initWH()
}

// 图表
const option = reactive({
  title: {
    text: '剩余油量表',
    style: { fill: '#fff' }
  },
  series: [
    {
      type: 'gauge',
      data: [ { name: 'itemA', value: 55 } ],
      center: ['50%', '55%'],
      axisLabel: {
        formatter: '{value}%',
        style: { fill: '#fff' }
      },
      axisTick: {
        style: { stroke: '#fff' }
      },
      animationCurve: 'easeInOutBack'
    }
  ]
})

// 进度池
const pondConfig = reactive({
  value: 90,lineDash: [10,2],localGradient: true,
})
// 水位图
const waterConfig = reactive({
  data: [66], shape: 'round',
})
// 飞线图
import mapImg  from '/src/assets/avatar02.jpg'  // 地图背景
import mapPoint  from '/src/assets/logo.svg'  // 中心汇总点
import mapCenterPoint from '/src/assets/avatar03.jpg'   // 每一个定位的icon
const flylineConfigs = reactive({
  points: [
    { name: '郑州', coordinate: [0.48, 0.35],
      halo: { show: true, },
      icon: {
        src: mapCenterPoint,
        width: 30,
        height: 30,
      },
      text: {
        show: false,
      }, },
    { name: '新乡', coordinate: [0.52, 0.23], },
    { name: '焦作', coordinate: [0.43, 0.29], },
    { name: '开封', coordinate: [0.59, 0.35], },
    { name: '许昌', coordinate: [0.53, 0.47], },
    { name: '平顶山', coordinate: [0.45, 0.54], },
    { name: '洛阳', coordinate: [0.36, 0.38], },
    { name: '周口', coordinate: [0.62, 0.55],halo: { show: true,  color:'#8378ea'} },
    { name: '漯河', coordinate: [0.56, 0.56], },
    { name: '南阳', coordinate: [0.37, 0.66], halo: { show: true,  color: '#37a2da' } },
    { name: '信阳(飞线图加强版)', coordinate: [0.55, 0.81], },
    { name: '驻马店', coordinate: [0.55, 0.67], },
    { name: '济源', coordinate: [0.37, 0.29], },
    { name: '三门峡', coordinate: [0.20, 0.36], },
    { name: '商丘', coordinate: [0.76, 0.41], },
    { name: '鹤壁', coordinate: [0.59, 0.18], },
    { name: '濮阳', coordinate: [0.68, 0.17], },
    { name: '安阳', coordinate: [0.59, 0.10], },
  ],
  lines: [
    { source: '新乡', target: '郑州', },
    { source: '焦作', target: '郑州', },
    { source: '开封', target: '郑州', },
    { source: '周口', target: '郑州', color: '#fb7293', width: 2, },
    { source: '南阳', target: '郑州', color: '#fb7293', width: 2, },
    { source: '济源', target: '郑州', },
    { source: '三门峡', target: '郑州', },
    { source: '商丘', target: '郑州', },
    { source: '鹤壁', target: '郑州', },
    { source: '濮阳', target: '郑州', },
    { source: '安阳', target: '郑州', },
    { source: '许昌', target: '南阳', color: '#37a2da', },
    { source: '平顶山', target: '南阳', color: '#37a2da', },
    { source: '洛阳', target: '南阳', color: '#37a2da', },
    { source: '驻马店', target: '周口', color: '#8378ea', },
    { source: '信阳(飞线图加强版)', target: '周口', color: '#8378ea', },
    { source: '漯河', target: '周口',  color: '#8378ea', },
  ],
  icon: { show: true, src: mapPoint,
  },
  text: { show: true,
  },
  k: 0.5,
  bgImgSrc: mapImg,
})

// 动态环图
const cityName = ref('测试')
const cityValue = ref(58)
const conf = reactive({
  lineWidth: 24,
  digitalFlopStyle: {
    fill: 'pink',
  },
  data: [
    { name: '杭州', value: 98, },
    { name: '金华', value: 150, },
    { name: '宁波', value: 62, },
    { name: '太原', value: 54, },
  ],
})

// 数字翻牌器
const config1 = reactive({
  number: [10000,100],
  content: '{nt}个{nt}元',
  formatter,
})
const changeConfig = () => {
  config1.number[0] += Math.random() * 100
  config1.number[1] += Math.random() * 100
}
// 千位隔绝器
function formatter(number: number) {
  const numbers = number.toString().split('').reverse()
  const segs = []
  while (numbers.length) segs.push(numbers.splice(0, 3).join(''))
  return segs.join(',').split('').reverse().join('')
}
</script>

<style scoped>
body{
  margin: 0;
}
.dv-border-box-12{
  background: black;
}
.dv-conical-column-chart{
  width:400px;
  height:200px;
}
.all_box{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 18px;
  align-items: center;
}
.loading-tip{

}
</style>