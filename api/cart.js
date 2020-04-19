import {ajax,http} from '@/common/http.js';
const URL = '/cart';
export default {
  // 创建订单
  add(data){
    let promise = ajax({
      url: URL+'/add',
      method: 'post',
      data
    });
    return http(promise);
  },
  // 购物车列表
  list(){
    let promise = ajax({
      url: URL+'/list',
      method: 'get',
    });
    return http(promise);
  },
}