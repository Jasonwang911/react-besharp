import axios from 'axios'; //ajax 数据交互 开户进程数据
import {
  baseUrlHost
} from './../config/env';
// import qs from 'qs';//ajax 数据交互 开户进程数据
// import UrlP from "../template/api";
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// baseURL配置
axios.defaults.baseURL = baseUrlHost + '/finsuit';


// 请求拦截器
axios.interceptors.request.use(function(config) {
  return config;
}, function(error) {
  return Promise.reject(error);
})
// 响应拦截器
axios.interceptors.response.use(function(response) {
  return response
}, function(error) {
  return Promise.reject(error)
})

// 封装axios的post请求
export function fetchGet(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url + "?" + params)
      .then(response => {
        console.log(response.data)
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
export function fetchPost(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default {
  // post公用接口
  commonPost(url, params) {
    return fetchPost(url, params);
  },
  // commonGet(url, params) {
  //   return fetchGet(url, params);
  // }
};