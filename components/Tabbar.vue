<template>
  <div class="vue-nuxt-components-tabbar">
    <van-tabbar @change="onChange" v-model="active">
      <van-tabbar-item name="/">
        <img class="img" :src="active == '/' ? '/image/tabbar/home_selected@2x.png': '/image/tabbar/home@2x.png'"/>
      </van-tabbar-item>
      <van-tabbar-item name="/category">
        <img class="img" :src="active == '/category' ? '/image/tabbar/category_selected@2x.png': '/image/tabbar/category@2x.png'"/>
      </van-tabbar-item>
      <van-tabbar-item  name="/cart">
        <img class="img" :src="active == '/cart' ? '/image/tabbar/cart_selected@2x.png': '/image/tabbar/cart@2x.png'"/>
      </van-tabbar-item>
      <van-tabbar-item name="/account">
        <img class="img" :src="active == '/account' ? '/image/tabbar/account_selected@2x.png': '/image/tabbar/account@2x.png'"/>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data(){
    return{
      active:this.$route.path
    }
  },
  mounted(){
    console.log(this.active);
  },
  methods:{
    // 切换tabbar
    onChange(d){
      this.$router.push(d);
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