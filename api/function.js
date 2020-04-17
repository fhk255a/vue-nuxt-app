import {ajax,http} from '@/common/http.js';
const URL = '/function';
export default {
  // 创建订单
  addAddress(data){
    let promise = ajax({
      url: URL+'/address/add',
      method: 'post',
      data
    });
    return http(promise);
  }
}