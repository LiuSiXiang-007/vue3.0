<template>
  <div>
    <h1>典型组件</h1>    <a></a> <p></p> <h2></h2>
    <h2>大屏设计器</h2>
    <dv-decoration-1 :color="['pink','yellow']" style="width:200px;height:50px;" />
    <el-button @click="goScreenDesigner">大屏设计器展示页</el-button>
    <h2>毛玻璃</h2>
    <div class="bg">
      <div class="is_filter">整个元素变成毛玻璃</div>
      <div class="is_backdrop-filter">背景变成毛玻璃</div>
    </div>
    <h2>图片滑动验证</h2>
    <div class="slide-verify">
      <slide-verify
          ref="sss" :imgsrc="src01"
          :isPassing.sync="isPassing"
          :showRefresh="true"
          :barWidth="40" radius="6px"
          text="请按住滑块拖动"
          successText="验证通过"
          handlerIcon="el-icon-d-arrow-right"
          successIcon="el-icon-circle-check"
          @refresh="refresh"
          @passcallback="pass"/>
      <drag-verify-img
          ref="imgs" :imgsrc="src02"
          :isPassing.sync="isPassing" :showRefresh="true"
          text="请按住滑块拖动" successText="验证通过"
          handlerIcon="el-icon-d-arrow-right"
          successIcon="el-icon-circle-check"
          @refresh="refresh" @passcallback="pass"/>
      <drag-verify-img-rotate
          ref="rotate" :imgsrc="src03" :isPassing.sync="isPassing"
          text="请按住滑块拖动" successText="验证通过"
          handlerIcon="el-icon-d-arrow-right"
          successIcon="el-icon-circle-check"
          @refresh="reimg" @passcallback="pass"/>
      <el-button type="primary" @click="reset">还原</el-button>
    </div>
    <el-button @click="toggleShow">点击上传头像</el-button>
<!--    <my-upload-->
<!--        field="avatar"-->
<!--        @crop-success="cropSuccess"-->
<!--        @crop-upload-success="cropUploadSuccess"-->
<!--        @crop-upload-fail="cropUploadFail"-->
<!--        v-model="show"-->
<!--        :width="300"-->
<!--        :height="300"-->
<!--        url="/upload"-->
<!--        :params="params" :headers="headers"/>-->
  </div>
</template>
<!-- 组件页 -->
<script>
import SlideVerify from "@/components/dragVerify.vue";
import DragVerifyImg from "@/components/dragVerifyImg.vue";
import DragVerifyImgRotate from "@/components/dragVerifyImgRotate.vue";
import MyUpload from 'vue-image-crop-upload/upload-2.vue'

export default {
  components: {
    SlideVerify,  // 图片滑块验证（拼图）
    DragVerifyImg,  // 图片滑块验证
    DragVerifyImgRotate,  // 图片旋转滑块验证
    MyUpload, // 头像上传组件
  },
  data(){
    return{
      isPassing: false,
      src01:["/src/assets/avatar03.jpg"],
      src02:["/src/assets/avatar01.jpg"],
      src03:["/src/assets/avatar02.jpg"],

      show: true,
      imgDataUrl: '', // 上传图片的 base64 编码
      params:{
        // 上传附带其他数据，格式"{k:v}"
      },
      headers:{
        // 上传header设置，格式"{k:v}"
      }
    }
  },
  methods: {
    // 刷新
    refresh(){ console.log("-----------reimg") },
    // 通过
    pass(){ console.log("-----验证通过") },
    // 重置
    reset(){
      this.$refs.sss.reset();
      this.$refs.imgs.reset();
      this.$refs.rotate.reset();
      console.log("-----------重置验证")
    },

    // 上传头像
    toggleShow() {
      this.show= !this.show;
    },
    cropSuccess(imgDataUrl, field){
      console.log('-------- 图片初始化成功 --------');
      this.imgDataUrl = imgDataUrl;
    },
    cropUploadSuccess(jsonData, field){
      console.log('-------- 图片上传成功 --------');
      console.log(jsonData);
      console.log('field: ' + field);
    },
    // 上传失败
    cropUploadFail(status, field){
      console.log('-------- 上传失败 --------');
      console.log(status);
      console.log('field: ' + field);
    },
    goScreenDesigner(){
      // 跳转大屏设计器
      this.$router.push('/ScreenDesigner')
    },
  }
}

</script>

}
<style scoped >
.bg{
  background: url("../assets/avatr.jpg") round;
  width: 500px;
  /*height: 500px;*/
  display: flex;
  flex-direction: row;
  align-items: center;
}

.bg > div{
  width: 250px;
  height: 250px;
  background: rgba(255, 255, 255, 0.5);
  text-align: center;
}

.is_filter{
  filter: blur(8px);
}

.is_backdrop-filter{
  backdrop-filter: blur(8px);
}

.slide-verify{
  display: flex;
  align-items: center;
}
</style>