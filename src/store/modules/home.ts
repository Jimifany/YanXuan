import {home} from '../../server'
export default {
    namespaced:true,
    state: {
        Banner:[],
        brandList:[],
        channel:[],
        newGoodsList:[],
        hotGoodsList:[],
        topicList:[],
        categoryList:[],
    },
    mutations:{
        getBanner(state:{Banner:any}, payloay:object) {
            state.Banner = payloay;
        },
        getbrandList(state:any, payloay:object) {

            state.brandList = payloay
        },
        getchannel(state:any, payloay:object) {
            state.channel = payloay
        },
        getnewGoodsList(state:any, payloay:object) {
            state.newGoodsList = payloay
        },
        gethotGoodsList(state:any, payloay:object) {
            state.hotGoodsList = payloay
        },
        gettopicList(state:any,payloay:object){
            state.topicList=payloay
        },
        getcategoryList(state:any,payloay:object){
            state.categoryList=payloay
        },
    },
    actions:{
        async getHome(context:any,payload:object){
            return new Promise((reslove,reject)=>{
                home().then(res=>{
                    context.commit('getBanner',res.data.banner)
                });
                home().then(res=>{
                    context.commit('getbrandList',res.data.brandList)
                });
                home().then(res=>{
                    console.log(res)
                    context.commit('getchannel',res.data.channel)
                });
                home().then(res=>{
                    context.commit('getnewGoodsList',res.data.newGoodsList)
                });
                home().then(res=>{
                    context.commit('gethotGoodsList',res.data.hotGoodsList)
                });
                home().then(res=>{
                    context.commit('gettopicList',res.data.topicList)
                });
                home().then(res=>{
                    context.commit('getcategoryList',res.data.categoryList)
                });
                reslove()
            })
        }
    }
}