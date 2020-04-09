import axios from 'axios'
import qs from "qs"
let baseUrl = 'http://localhost:3000';
if (!process.client) {
	console.log("客户端");
	baseUrl = 'http://localhost:3000';
} else {
	console.log("服务端");
	baseUrl = 'http://localhost:3000';
}
const request = axios.create({
  baseURL: baseUrl,
  timeout:5000
});
request.interceptors.request.use(
  config => {
    // if (getToken()) {
    //   config.headers['Authorization'] = getToken();
    //   // config.headers['Content-Type'] = 'application/json;charset=UTF-8';
    // }
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
const get = (url,params) => request.get(url, params,{
  // showLoading: showLoading
})
const post = (url, data) => request.post(url, data, {
  // showLoading: showLoading
})

export default {
  POST (...arg) {
    return get(...arg);
  },
  POST (...arg) {
    return post(...arg)
  }
}
// export default function(request){
//   return new Promise((resolve, reject) => {
//     request.then(res => {
//       if (res.data.code == 200) {
//         resolve(res.data);
//       } else {
//         resolve(res.data);
//       }
//     }).catch(err => {
//       reject(err);
//     })
//   })
// }
