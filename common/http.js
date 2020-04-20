import axios from 'axios'
import qs from "qs"
let baseUrl = 'http://localhost:3000/m';
// let baseUrl = 'http://172.18.3.51:3000/m';
// let baseUrl = 'http://project.fhk255.cn/m';
if (!process.client) {
	// baseUrl = 'http://localhost:3000/m';
	baseUrl = 'http://project.fhk255.cn/m';
} else {
	// baseUrl = 'http://localhost:3000/m';
	// baseUrl = 'http://172.18.3.51:3000/m';
	baseUrl = 'http://project.fhk255.cn/m';
}
const request = axios.create({
  baseURL: baseUrl,
  timeout:5000,
  withCredentials:true,
});
request.interceptors.request.use(
  config => {
    if (process.client && window.localStorage.getItem('nuxt-token')) {
      config.headers['Authorization'] = JSON.parse(window.localStorage.getItem('nuxt-token'));
    }
    // 请求拦截: 成功
    if (config.method === 'post') {
      config.data = qs.stringify(config.data);
    } else {
      /*  if (config.params) {
          for (let ol in config.params) {
            config.params[ol] = encodeURI(config.params[ol]);
          }
          console.log('00000000000000000000000', config.params)
        }*/
    }
    return config;
  },
  error => {
    // 请求拦截: 失败
    console.error('请求失败： ', error);
    return error;
  }
);

request.interceptors.response.use(
  response => {
    // 响应拦截 成功
    return response;
  },
  error => {
    // 响应拦截: 失败
    return error;
  }
);
export default {
  get (url,params) {
    let data = {
      withCredentials:true,
      url,
      params,
      method: 'get',
    }
    return new Promise((resolve, reject) => {
      request(data).then(res => {
        resolve(res.data);
      }).catch(err => {
        reject(err);
      })
    });
  },
  post (url,data) {
    let params = {
      withCredentials:true,
      url,
      data,
      method: 'get',
    }
    return new Promise((resolve, reject) => {
      request(params).then(res => {
        resolve(res.data);
      }).catch(err => {
        reject(err);
      })
    });
  }
}
export let ajax = request;
export const http =(promise)=>{
  return new Promise((resolve, reject) => {
    promise.then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err);
    })
  })
}
