<template>
  <div class="wrapper">
    <mt-header fixed title="集宁师范学院"></mt-header>
    <div style="padding-top: 40px;">
      <mt-cell title="标题文字">
        <img slot="icon" src="../../assets/images/logo.png" width="24" height="24">
      </mt-cell>

      <mt-cell title="标题文字">
        <img slot="icon" src="../../assets/images/logo.png" width="24" height="24">
      </mt-cell>

      <mt-cell title="标题文字">
        <img slot="icon" src="../../assets/images/logo.png" width="24" height="24">
      </mt-cell>
    </div>
  </div>
</template>

<script>
  import logo from '../../assets/images/logo.png';
  import NingLayout from '../../comments/Nine/NineLayout';

  export default {
    name: "Msg",
    data (){
      return {};
    },
    components: {
      NingLayout
    }
  };
</script>

<style scoped lang="less">

</style>
