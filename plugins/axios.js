export default function ({ $axios, redirect }) {
  $axios.defaults.withCredentials=true;
  $axios.onRequest(config => {
    console.log('axios回调' + config.url)
  })
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
  $axios.onResponse(config => {
    console.log('axios回调' + config)
    // const code = parseInt(error.response && error.response.status)
    // if (code === 400) {
    //   redirect('/400')
    // }
  })
  $axios.interceptors.response.use(
    response => {
      // 响应拦截 成功
      if(response.data.code==401){
        console.log('拦截了');
      }
      return response;
    },
    error => {
      // 响应拦截: 失败
      return error;
    }
  );
}