import {home} from '../../server'
export default {
    namespaced:true,
    state: {
        banner:[],
        brandList:[],
        channel:[],
        newGoodsList:[],
        hotGoodsList:[],
        topicList:[],
        categoryList:[],
    },
    mutations:{
        setAllList(state:any,payload:any){
         
            let data=Object.entries(payload)
            data.forEach(item=>{
                state[item[0]]=item[1]
            })
            console.log(state)
        }
    }, 
    actions:{
        async getHome(context:any,payload:object){
            return new Promise((reslove,reject)=>{
                home().then(res=>{
                    console.log(res)
                    context.commit('setAllList',res.data)
                });
              
                reslove()
            })
        }
    }
}