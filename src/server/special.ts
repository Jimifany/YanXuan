 //专题接口
 import request from "../utils/request"
 export let special = (params:object) => {
     return request.get('/topic/list',{params})
 }