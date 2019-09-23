import {home} from '../../server'
export default {
    namespaced:true,
    state: {
        Banner:[],
        brandList:[],
        channel:[],
        newGoodsList:[]
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
        }
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
                reslove()
            })
        }
    }
}