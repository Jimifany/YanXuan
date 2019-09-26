import { category } from "../../server"
export default {
    namespaced:true,
    state: {
        brotherCategory: [],
    },
    mutations: {
        getcurrentCategory(state: any, payload: object) {
            // console.log(payload)
            state.brotherCategory = payload;
            console.log(state.brotherCategory)
        }
    },
    actions: {
        async getcurrentCategoryFn({ commit }:any, params: any) {
            await category(params).then(res => {
                console.log(res)
                commit('getcurrentCategory', res.data.brotherCategory)
            })
            // console.log(result.data.data)
        }
    }
};