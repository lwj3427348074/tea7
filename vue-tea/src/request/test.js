import axios from 'axios'
// import { Loading } from 'vant'
// import { Loading } from 'element-ui'

let instance = axios.create({
  baseURL: "/api",
  timeout: 3000
})

//请求拦截
//声明变量接收loading
// let loadingInstance
// instance.interceptors.request.use((config) => {
//   //设置请求头
//   let token = localStorage.getItem('token')
//   config.headers.Authorization = token

//设置logding配置 赋值
// loadingInstance = Loading.service({
//   lock: true,
//   text: '拼命加载中...',
//   spinner: 'el-icon-loading',
//   background: 'rgba(0,0,0,0.7)'
// })

//返回请求头
// return config
// }, error => {
//   return Promise.reject(error)
// })

//响应拦截
// instance.interceptors.response.use((config) => {
//响应成功则关闭loading加载
// loadingInstance.close()

//返回响应数据
// return res
// }, err => {
//响应失败则关闭loading加载
// setTimeout(() => {
//   loadingInstance.close()
// }, 1000)

//响应失败则返回失败信息
// return Promise.reject(err)
// })

export default instance