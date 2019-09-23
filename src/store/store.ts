import Vue from "vue";
import Vuex from "vuex";
import { special } from "../server/special"
Vue.use(Vuex);

export default new Vuex.Store({
    // namespaced:true,
    state: {
        specialList: [],
    },
    mutations: {
        getspecialList(state:any, payload: object) {
            // console.log(payload)
            state.specialList = payload;
        }
    },
    actions: {
        async getspecialListFn({commit},params: any) {
            let result = await special(params)
                console.log(result.data.data)
        }
    }
});