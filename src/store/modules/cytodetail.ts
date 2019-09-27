import { cytodetail,cytoList } from "../../server"
export default {
    namespaced:true,
    state: {
        brand: [],
        goodsList:[]
    },
    mutations: {
        getcytodetail(state: any, payload: object) {
            // console.log(payload)
            state.brand = payload;
        },
        getcytoList(state: any, payload: object) {
            // console.log(payload)
            state.goodsList = payload;
            console.log(state.goodsList)
        }
    },
    actions: {
        async getcytodetailFn({ commit }:any, params: any) {
            await cytodetail(params).then(res => {
                commit('getcytodetail', res.data.brand)
            })
            // console.log(result.data.data)
        },
        async getcytoListFn({ commit }:any, params: any) {
            await cytoList(params).then(res => {
                console.log(res)
                commit('getcytoList', res.data.goodsList)
            })
            // console.log(result.data.data)
        },
    }
};