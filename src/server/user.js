import request from '../utils/request'
//登录接口'
export let login = (params)=>{
    return request.post('/auth/loginByMobile',params)
}