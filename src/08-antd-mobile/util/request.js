import axios from "axios";
import { Toast } from 'antd-mobile'

axios.interceptors.request.use(config => {
  Toast.show({
    icon: 'loading',
    content: '加载中…',
    duration: 0
  })
  return config
}, err => {
  return Promise.reject(err)
})

axios.interceptors.response.use(res => {
  Toast.clear()
  return res
}, err => {
  Toast.clear()
  return Promise.reject(err)
})