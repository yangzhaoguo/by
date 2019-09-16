<template>
  <div class="wrapper">
    <mt-header fixed title="集宁师范学院"></mt-header>
    <div style="padding-top: 40px;">
      <ning-layout :list=homeList></ning-layout>
    </div>
  </div>
</template>

<script>
  import logo from '../../assets/images/logo.png';
  import NingLayout from '../../comments/Nine/NineLayout';

  export default {
    name: "FuWu",
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

</style>
