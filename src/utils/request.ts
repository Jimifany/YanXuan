import axios from 'axios'
const instance = axios.create({
    baseURL:'http://169.254.18.17:8888',
    timeout:1000,
})
// 请求拦截器
instance.interceptors.request.use( (config:any) =>{
    // Do something before request is sent
    return config;
  }, (error:any)=> {
    // Do something with request error
    return Promise.reject(error);
  }
);
 
// 响应拦截器
instance.interceptors.response.use( (response:any) =>{
    // Do something with response data
    if(response.status!==200){
     
    }
    return response.data;
  },  (error:any) =>{
    if (error.response.status && error.response.status !== 200){
      
    }else{
      // message.error(error.response);
    }
    // Do something with response error
    return Promise.reject(error);
  }
);

export default instance;
