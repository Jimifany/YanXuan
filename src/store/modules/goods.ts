import { goodscount, goodsdetail,goodsrelated} from "../../server"
export default {
    namespaced:true,
    state: {
        goodsList: [],
        info:[],
        goodsCount:[]
    },
    mutations: {
        getgoodsList(state: any, payload: object) {
            // console.log(payload)
            state.goodsList = payload;
            console.log(state.goodsList)
        },
        getinfo(state: any, payload: object) {
            // console.log(payload)
            state.info = payload;
            console.log(state.info)
        },
        getgoodsCount(state: any, payload: object) {
            // console.log(payload)
            state.goodsCount = payload;
            console.log(state.goodsCount)
        }
    },
    actions: {
        async getgoodsListFn({ commit }:any, params: any) {
            await goodsrelated(params).then(res => {
                console.log(res)
                commit('getgoodsList', res.data.goodsList)
            })
            // console.log(result.data.data)
        },
        async getinfoFn({ commit }:any, params: any) {
            await goodsdetail(params).then(res => {
                console.log(res)
                commit('getinfo', res.data)
            })
            // console.log(result.data.data)
        },
        async getgoodsCountFn({ commit }:any, params: any) {
            await goodscount(params).then(res => {
                console.log(res)
                commit('getgoodsCount', res.data.goodsCount)
            })
            // console.log(result.data.data)
        }
    }
};