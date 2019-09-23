import axios from 'axios'
const instance = axios.create({
        baseURL: 'http://169.254.18.17:8888',
        timeout: 1000,
    })
    // 请求拦截器
instance.interceptors.request.use((config) => {
    // Do something before request is sent
    return config;
}, (error) => {
    // Do something with request error
    return Promise.reject(error);
});

// 响应拦截器
instance.interceptors.response.use((response) => {
    // Do something with response data
    if (response.status !== 200) {
        // message.error(response.statusText);
    }
    return response.data;
}, (error) => {
    if (error.response.status && error.response.status !== 200) {
        // message.error(error.response.statusText);
    } else {
        // message.error(error.response);
    }
    // Do something with response error
    return Promise.reject(error);
});

export default instance;