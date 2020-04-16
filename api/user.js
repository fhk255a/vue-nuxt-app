import {ajax,http} from '@/common/http.js';
const URL = '/user';
export default {
  // 登录
  login(username,password){
    let promise = ajax({
      url: URL+'/login',
      method: 'post',
      data:{
        username,
        password
      }
    });
    return http(promise);
  },
  // 注册
  register(username,password,nickname){
    let promise = ajax({
      url: URL+'/register',
      method: 'post',
      data:{
        username,
        password,
        nickname
      }
    });
    return http(promise);
  },
}