import {ajax,http} from '@/common/http.js';
const URL = '/user';
export default {
  // 获取用户信息
  getUserInfo(){
    let promise = ajax({
      url: URL+'/getUserInfo',
      method: 'get',
    });
    return http(promise);
  },
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
const URL1 = '/address'
export const ADDRESS = {
   // 获取订单列表
  list(){
    let promise = ajax({
      url: URL1+'/list',
      method: 'get',
    });
    return http(promise);
  },
   // 保存地址
  save(data){
    let promise = ajax({
      url: URL1+'/save',
      method: 'post',
      data
    });
    return http(promise);
  },
   // 创建地址
  create(data){
    let promise = ajax({
      url: URL1+'/create',
      method: 'post',
      data
    });
    return http(promise);
  },
   // 删除地址
  delete(id){
    let promise = ajax({
      url: URL1+'/delete',
      method: 'post',
      data:{
        id
      }
    });
    return http(promise);
  },
}
// 我的收藏
const URL2 = '/user/collect'
export const COLLECT = {
   // 获取订单列表
  list(){
    let promise = ajax({
      url: URL2+'/list',
      method: 'get',
    });
    return http(promise);
  },
   // 添加收藏
  changeCollect(productId){
    let promise = ajax({
      url: URL2+'/changeCollect',
      method: 'post',
      data:{
        productId
      }
    });
    return http(promise);
  },
}