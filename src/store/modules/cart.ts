import { getcart } from "../../server"
export default {
    namespaced:true,
    state: {
        cartList: [],
    },
    mutations: {
        getcart(state: any, payload: object) {
            // console.log(payload)
            state.cartList = payload;
            console.log(state.cartList)
        }
    },
    actions: {
        async getcartFn({ commit }:any, params: any) {
            await getcart(params).then(res => {
                console.log(res)
                commit('getcart', res.data.cartList)
            })
            // console.log(result.data.data)
        }
    }
};