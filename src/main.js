// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex/index';
import request from './assets/js/request';
import Mint from 'mint-ui';
// import ElementUI from 'element-ui';
import './assets/css/reset.css';
// import 'element-ui/lib/theme-chalk/index.css';
import 'mint-ui/lib/style.css';

Vue.use(Mint);
// Vue.use(ElementUI);

Vue.use(request);
Vue.config.productionTip = false;
Vue.config.devtools = true;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
