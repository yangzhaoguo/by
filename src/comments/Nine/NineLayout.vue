<template>
  <div class="wrapper">
    <div class="box" v-for="(item,index) in list" :key="index">
      <div>
        <img :src="item.img" alt="">
      </div>
      {{item.text}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "NineLayout",
    props: {
      list: {
        type: Array,
        required: true
      }
    }
  };
</script>

<style scoped lang="less">
.wrapper{
  display: flex;
  flex-wrap: wrap;
  padding-left: 0.5%;
  padding-top: 32px;
  .box{
    width: 33%;
    text-align: center;
    height: 100px;
    font-size: 16px;
    img{
      width: 60px;
      height: 60px;
    }
  }
}
</style>
