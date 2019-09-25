import { specialDetail } from "../../server"
export default {
    namespaced:true,
    state: {
        detailList: [],
    },
    mutations: {
        getdetail(state: any, payload: object) {
            state.detailList = payload;
            console.log(state.detailList)

        }
    },
    actions: {
        async getdetailFn({ commit }: any, params: any) {
            console.log(params)
            await specialDetail(params).then(res => {
                // console.log(res)
                commit('getdetail', res.data)
            })
        }
    }

};