<template>
  <div class="vue-nuxt-page-404">
    <div class="container"></div>
    <p class="content">oh! 该页面不存在</p>
    <p class="back color" @click="$router.go(-1)">返回</p>
    <div class="link">
      <p>gitHub: <a style="color:#666;text-decoration:underline" href="https://github.com/fhk255a/vue-nuxt-app.git">项目地址</a></p>
      <p>Blog: <a style="color:#666;text-decoration:underline" href="http://fhk255.cn">作者博客地址</a></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vue-nuxt-page-404{
  width: 100%;
  background:#fff;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  .container{
    position: relative;
    top:-100px;
    background-image: url('/image/pages/404.png');
    background-repeat: no-repeat;
    background-position: center;
    width: 200px;
    height: 200px;
  }
  .content{
    position: relative;
    top:-100px;
    color: #999;
  }
  .back{
    position: relative;
    top:-100px;
    text-decoration: underline;
    margin: 10px;
  }
  .link{
    position: absolute;
    bottom:5vh;
    p{
      margin: 10px;
    }
  }
}
</style>