import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import qs from "qs"
import { JUHE_APPKEY } from '../configs/keys'
let request : AxiosInstance | any
request = axios.create({
    timeout:20000 
})

request.interceptors.request.use(
    (config: AxiosRequestConfig)=>{
        if(config.method == 'get'){ 
            config.params = {
                ...config.params,
                key:JUHE_APPKEY
            }
        }else{
            config.data = qs.stringify({
                ...config.data,
                key:JUHE_APPKEY
            })
        }
        return config
    }, 
    (error:any)=>{
        return Promise.reject(error)
    }
)

request.interceptors.response.use(
    (res:AxiosResponse)=>{
        console.log(res)
        return res.data
    },
    (error:any)=>{
        return Promise.reject(error)
    }
)

export default request