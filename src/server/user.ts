import request from '../utils/request'
//登录接口'
export let login = (params: any) => {
    return request.post('/auth/loginByMobile', params)
}
//获取首页数据
export let home = () => {
    return request.get('/')
}
//专题接口
export let special = (params: object) => {
    return request.get('/topic/list', { params })
}
//专题详情接口
export let specialDetail = (params: object) => {
    return request.get('/topic/detail', { params })
}
//专题评论
export let specialCommon = (params: object) => {
    return request.get('/comment/list', { params })
}