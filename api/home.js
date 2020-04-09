import http from '~/common/http.js';

export default {
  getHomeComponent(){
    let promise = request({
      url: '/home/getComponents',
      method: 'get',
    });
    return http(promise);
  }
}