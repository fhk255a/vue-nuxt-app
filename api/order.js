import {ajax,http} from '@/common/http.js';
const URL = '/order';
export default {
  // 创建订单
  createOrder(data){
    let promise = ajax({
      url: URL+'/create',
      method: 'post',
      data
    });
    return http(promise);
  },
  // 付款
  toPay(id,password){
    let promise = ajax({
      url: URL+'/toPay',
      method: 'post',
      data:{
        id,
        password
      }
    });
    return http(promise);
  },
  // 取消订单
  cancel(id){
    let promise = ajax({
      url: URL+'/cancel',
      method: 'post',
      data:{
        id
      }
    });
    return http(promise);
  },
  // 获取订单列表
  list(status){
    let promise = ajax({
      url: URL+'/list',
      method: 'get',
      params:{
        status
      }
    });
    return http(promise);
  }
}