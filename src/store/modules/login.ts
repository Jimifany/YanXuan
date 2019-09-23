import {login} from '../../server'
export default {
    namespaced:true,
    state: {
    
    },
    mutations:{

    },
    actions:{
        async getLogin(context:any,payload:object){
            let result = await login(payload)
            console.log(result)
        }
    }
}