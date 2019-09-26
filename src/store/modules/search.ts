import { search,query,clear} from "../../server"
export default {
    namespaced: true,
    state: {
        hotKeywordList:[],
        topList:[]
    },
    mutations: {
        getSearch(state: any, payload: object) {  
            state.hotKeywordList = payload;
            // console.log(state.subclassify)
        },
        getQuery(state: any, payload: object) {
            console.log(payload)
            state.topList = payload;
            // console.log(state.subclassify)
        },
    },
    actions:{
        async getSearchFn({commit}:any,params:any){
            await search().then(res=>{
                console.log(res)
                commit('getSearch',res.data.hotKeywordList)
            })
        },
        async getclearFn({commit}:any,params:any){
            await clear().then(res=>{
                
            })
        },
        async getQueryFn({commit}:any,params:any){
            await query(params).then(res=>{
                console.log(res)
                commit('getQuery',res.data)
            })
        },
    }
}