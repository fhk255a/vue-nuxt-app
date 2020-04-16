import {ajax,http} from '@/common/http.js';
const URL = '/order';
export default {
  // 创建订单
  createOrder(skuData){
    let promise = ajax({
      url: URL+'/create',
      method: 'post',
      data:{
        skuData
      }
    });
    return http(promise);
  }
}