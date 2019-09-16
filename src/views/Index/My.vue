<template>
  <div class="wrapper">
    <mt-header fixed title="个人中心"></mt-header>
    <div class="name">
      <div class="picke">
        <img src="../../assets/images/logo.png" alt="">
      </div>
      <div class="name-test">name</div>
    </div>
    <mt-cell title="优惠券"></mt-cell>
    <mt-cell title="优惠券"></mt-cell>
    <mt-cell title="优惠券"></mt-cell>
    <mt-cell title="优惠券"></mt-cell>
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
  .wrapper {
    .name {
      display: flex;
      padding-top: 50px;
      padding-left: 32px;
      height: 90px;
      align-items: center;
      .picke {
        width: 50px;
        height: 50px;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      .name-test {
        margin-left: 6px;
        font-size: 22px;
      }
    }
  }
</style>
