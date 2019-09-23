import Vue from "vue";
import Router from "vue-router";
import Login from '../page/login/index.vue'
import Cart from '../page/cart/index.vue'
import Mine from '../page/mine/index.vue'
import Home from '../page/home/index.vue'
import Special from '../page/special/index.vue'
import Classify from '../page/classify/index.vue'
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "login",
      component:Login
    },
    {
      path: "/cart",
      name: "cart",
      component:Cart
    },
    {
      path: "/mine",
      name: "mine",
      component:Mine
    },{
     name: '首页',
     path:'/home',
     component: Home
    },{
      path: "/special",
      name: "special",
      component:Special
    },
    {
      path:'/classify',
      name:'classify',
      component:Classify
    },
    {
      redirect:'/login',
      path:'/'
    }
  ]
});
