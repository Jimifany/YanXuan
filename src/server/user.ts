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
 //获取分类接口
 export let classify = (params:any)=>{
     return request.get('/catalog/index',{params})
 }
 //获取当前的子分类
 export let subclassify = (params:any)=>{
     return request.get('/catalog/current',{
         params
     })
 }
 //获取模糊搜索的关键字
 export let search = ()=>{
     return request.get('/search/index')
 }
 //模糊查询
 export let query = (params:any)=>{
     return request.get('/search/helper',{params})
 }
 //删除接口
 export let clear = ()=>{
     return request.get('/search/clearhistory')
 }
 //获取分类ID分类Nav数据
 export let category= (params:any)=>{
    return request.get('/goods/category',{params})
}
//根据制造商ID获取制造商详情
export let cytodetail = (params:any)=>{
    return request.get('/brand/detail',{params})
}
//根据分类Id或者制造商Id获取商品
export let cytoList = (params:any)=>{
    return request.get('/goods/list',{params})
}
//获取在售商品数量
export let goodscount = (params:any)=>{
    return request.get('/goods/count/',{params})
}
//获取商品的详情
export let goodsdetail = (params:any)=>{
    return request.get('/goods/detail',{params})
}
//获取相关商品的信息
export let goodsrelated = (params:any)=>{
    return request.get('/goods/related',{params})
}
//添加到购物车
export let addcart= (params:any)=>{
    return request.post('/cart/add',params)
}
//获取用户和购物车的数据
export let getcart = (params:any)=>{
    return request.get('/cart/index',{params})
}
//专题详情接口
export let specialDetail = (params: object) => {
    return request.get('/topic/detail', { params })
}
//专题评论
export let specialCommon = (params: object) => {
    return request.get('/comment/list', { params })
}