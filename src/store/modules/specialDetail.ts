import { specialDetail } from "../../server";
import { specialCommon } from "../../server"
export default {
    namespaced: true,
    state: {
        detailList: [],
        commonList: [],
    },
    mutations: {
        getdetail(state: any, payload: object) {
            state.detailList = payload;
            console.log(state.detailList)
        },
        getCommon(state: any, payload: object) {
            state.commonList = payload;
            // console.log(state.commonList)
        }
    },
    actions: {
        async getdetailFn({ commit }: any, params: any) {
            // console.log(params)
            await specialDetail(params).then(res => {
                console.log(res)
                commit('getdetail', res.data)
            })
        },
        async getCommonFn({ commit }: any, params: any) {
            console.log(params)
            await specialCommon(params).then(res => {
                commit('getCommon', res.data);
                console.log(res.data)

            })
        }
    }

};