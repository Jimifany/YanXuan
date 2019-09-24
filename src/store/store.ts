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
        getspecialList(state: any, payload: object) {
            // console.log(payload)
            state.specialList = payload;
            console.log(state.specialList)
        }
    },
    actions: {
        async getspecialListFn({ commit }, params: any) {
            await special(params).then(res => {
                console.log(res)
                commit('getspecialList', res.data.data)
            })
            // console.log(result.data.data)
        }
    }
});