import { addcart } from "../../server"
export default {
    namespaced:true,
    state: {
    },
    mutations: {
        // getspecialList(state: any, payload: object) {
        //     // console.log(payload)
        //     state.specialList = payload;
        //     console.log(state.specialList)
        // }
    },
    actions: {
        async getaddcartFn({ commit }:any, params: any) {
            await addcart(params).then(res => {
                console.log(res)
            })
            // console.log(result.data.data)
        }
    }
};