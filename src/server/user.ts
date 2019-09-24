import request from '../utils/request'
//登录接口'
export let login = (params:any)=>{
    return request.post('/auth/loginByMobile',params)
}
//获取首页数据
export let home = ()=>{
    return request.get('/',)
}
 //专题接口
 export let special = (params:object) => {
     return request.get('/topic/list',{params})
 }