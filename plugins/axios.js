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
}