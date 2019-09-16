<template>
  <div class="wrapper">
    <div class="banner">
      <div>
        集宁师范学院
      </div>
      <div>
        大学校园服务平台
      </div>
    </div>
    <ning-layout :list=homeList></ning-layout>
  </div>
</template>

<script>
  import logo from '../../assets/images/logo.png';
  import NingLayout from '../../comments/Nine/NineLayout';

  export default {
    name: "HomeComments",
    data (){
      return {
        homeList: [
          { text: "扫一扫", img: logo },
          { text: "扫一扫", img: logo },
          { text: "扫一扫", img: logo },
          { text: "扫一扫", img: logo },
          { text: "扫一扫", img: logo },
          { text: "扫一扫", img: logo }
        ]
      };
    },
    components: {
      NingLayout
    }
  };
</script>

<style scoped lang="less">
  .wrapper {
    .banner {
      width: 100%;
      height: 4rem;
      font-size: 24px;
      text-align: center;
      line-height: 66px;
      padding-top: 28px;
      background: #26a2ff;
      box-sizing: border-box;
      color: #ffffff;
    }
  }
</style>
