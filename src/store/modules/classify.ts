import { classify,subclassify} from "../../server"
export default {
    namespaced:true,
    state: {
        categoryList: [],
        currentCategory:[]
    },
    mutations: {
        getcategoryList(state: any, payload: object) {  
            state.categoryList = payload;
        },
        getsubclassify(state: any, payload: object) {  
            state.currentCategory = payload;
            // console.log(state.subclassify)
        },
    },
    actions: {
        async getcategoryListFn({ commit }:any, params: any) {
            await classify(params).then(res => {
                commit('getcategoryList', res.data.categoryList)
                
            })
        },
        async getSubClassifyFn({ commit }:any, params: any) {
            await subclassify(params?params:{id:100500}).then(res=>{
                console.log(res)
                commit('getsubclassify', res.data.currentCategory)
            })
        }   
    }
};