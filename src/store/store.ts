import Vue from "vue";
import Vuex from "vuex";
import login from './modules/login'
import home from './modules/home'
import special from './modules/special'
import classify from './modules/classify'
import search from './modules/search'
import category from './modules/category'
import cytodetail from './modules/cytodetail'
import goods from './modules/goods'
import addcart from './modules/addcart'
import cart from './modules/cart'
Vue.use(Vuex);

export default new Vuex.Store({
   modules:{
    login,
    home,
    special,
    classify,
    search,
    category,
    goods,
    cytodetail,
    cart,
    addcart
   }
});
