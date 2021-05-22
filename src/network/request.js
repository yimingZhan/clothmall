import axios from 'axios'

export function request(config){

  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })

  instance.interceptors.request.use(
    //请求成功之后
    config => {
      return config
    }, 
    //请求失败
    err =>{
    }
  )
//将拦截到的信息返回出去
  instance.interceptors.response.use(
    //回应成功
    res => {
      return res.data
      
    }, 
    //回应失败
    err =>{
      console.log('回应失败')
    }
  )
  return instance(config)
}