<template>
  <div class="vue-nuxt-components-tabbar">
    <van-tabbar @change="onChange">
      <van-tabbar-item>
        <img src="/image/tabbar/home_selected@2x.png" class="img" alt="">
      </van-tabbar-item>
      <van-tabbar-item>
        <img src="/image/tabbar/category@2x.png" class="img" alt="">
      </van-tabbar-item>
      <van-tabbar-item >
        <img src="/image/tabbar/cart@2x.png" class="img" alt="">
      </van-tabbar-item>
      <van-tabbar-item>
        <img src="/image/tabbar/account@2x.png" class="img" alt="">
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  methods:{
    // 切换tabbar
    onChange(){
      
    }
  }
}
</script>

<style lang="scss">
.vue-nuxt-components-tabbar{
  .van-tabbar-item{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    .img{
      width: 48px;
      height: auto;
    }
  }
}
</style>