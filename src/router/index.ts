import Vue from "vue";
import Router from "vue-router";
import Page from "../page/page/index.vue";
import Login from "../page/login/index.vue";
import Cart from "../page/cart/index.vue";
import Mine from "../page/mine/index.vue";
import Home from "../page/home/index.vue";
import Special from "../page/special/index.vue";
import Classify from "../page/classify/index.vue";
Vue.use(Router);

export default new Router({
  linkActiveClass: "active",
  mode: "history",
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      name: "home",
      path: "/home",
      component: Home,
      children: [
        {
          path: "/cart",
          name: "cart",
          component: Cart
        },
        {
          path: "/page",
          name: "page",
          component: Page
        },
        {
          path: "/mine",
          name: "mine",
          component: Mine
        },
        {
          path: "/special",
          name: "special",
          component: Special
        },
        {
          path: "/classify",
          name: "classify",
          component: Classify
        }
      ]
    },
    {
      redirect: "/login",
      path: "/"
    }
  ]
});
