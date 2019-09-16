<template>
  <div class="page-tabbar">
    <div class="page-wrap">
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="home">
          <Home-comments></Home-comments>
        </mt-tab-container-item>
        <mt-tab-container-item id="fuwu">
          <fu-wu></fu-wu>
        </mt-tab-container-item>
        <mt-tab-container-item id="msg">
          <msg></msg>
        </mt-tab-container-item>
        <mt-tab-container-item id="my">
          <My></My>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="home">
        <img v-if="selected==='home'" style="transform: scale(0.95)" slot="icon"
             src="../assets/images/icon/home-active.png">
        <img v-else slot="icon" style="transform: scale(0.95)" src="../assets/images/icon/home.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="fuwu">
        <img v-if="selected==='fuwu'" slot="icon" style="transform: scale(1.25)"
             src="../assets/images/icon/fuwu-active.png">
        <img v-else slot="icon" style="transform: scale(1.25)" src="../assets/images/icon/fuwu.png">
        服务
      </mt-tab-item>
      <mt-tab-item id="msg">
        <img v-if="selected==='msg'" slot="icon" style="transform: scale(1.1)"
             src="../assets/images/icon/msg-active.png">
        <img v-else slot="icon" style="transform: scale(1.1)" src="../assets/images/icon/msg.png">
        消息
      </mt-tab-item>
      <mt-tab-item id="my">
        <img v-if="selected==='my'" slot="icon" style="transform: scale(0.9)" src="../assets/images/icon/my-active.png">
        <img v-else slot="icon" style="transform: scale(0.9)" src="../assets/images/icon/my.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  import HomeComments from './Index/Home';
  import FuWu from './Index/FuWu';
  import Msg from './Index/Msg';
  import My from './Index/My';

  export default {
    name: 'tabbar',
    data (){
      return {
        selected: 'home'
      };
    },
    components: {
      HomeComments,
      FuWu,
      Msg,
      My
    }
  };
</script>

<style scoped>
  .page-tabbar {
    overflow: hidden;
    height: 100vh;
  }

  .page-wrap {
    overflow: auto;
    height: 100%;
    padding-bottom: 100px;
  }

  a {
    color: #707070;
  }
</style>
