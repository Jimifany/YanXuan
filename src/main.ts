import Vue from "vue";
import App from "./App.vue";
import router from './router'
import store from "./store/store";
import VueLazyLoad from 'vue-lazyload'
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

Vue.use(VueLazyLoad, {
  loading: require('./static/img/mp40835393_1447145260195_11.gif'),  //还没加载出来的默认展示图片

})