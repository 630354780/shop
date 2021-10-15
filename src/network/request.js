import axios from 'axios'

export function request(config){
    // 1.创建axios的实例
    const instance = axios.create({
        url: 'http://172.24.10.239:8080',
        timeout: 50000
    })

    // 2.1请求拦截的作用
    instance.interceptors.request.use(config => {
        return config
    }),err => {
        console.log(err);
    }

    // 2.2响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    }, err=>{
        console.log(err);
    })

    // 发送真正的网络请求
    return instance(config)
}