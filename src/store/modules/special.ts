import { special } from "../../server"
export default {
    namespaced: true,
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
        async getspecialListFn({ commit }: any, params: any) {
            await special(params).then(res => {
                // console.log(res)
                commit('getspecialList', res.data.data)
            })
            // console.log(result.data.data)
        }
    }
};