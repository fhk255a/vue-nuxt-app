import {ajax,http} from '@/common/http.js';
const URL = '/sku';
export default {
  // 根据skuid 查询商品信息
  querySkuProductInfo(skuData){
    let promise = ajax({
      url: URL+'/querySkuProductInfo',
      method: 'post',
      data:{
        skuData
      }
    });
    return http(promise);
  }
}