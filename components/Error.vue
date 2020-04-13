<template>
  <div class="vue-nuxt-components-error-data" :style="{height:height}">
    <img src="/image/icon/noData.png" class="img" alt="">
    <p class='message'>{{message}}</p>
  </div>
</template>

<script>
export default {
  props:{
    message:{
      type:String,
      default:()=>'┗|｀O′|┛ 嗷~~ 数据不存在噢~'
    },
    height:{
      type:String,
      default:()=>'50vh'
    },
  }
}
</script>

<style lang="scss">
.vue-nuxt-components-error-data{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 30px 0;
  .img{
    width: 120px;
    height: auto;
  }
  .message{
    margin-top: 30px;
    font-size: 14px;
    color: #999;
  }
}
</style>