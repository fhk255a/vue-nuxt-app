<template>
  <div class="vue-nuxt-product-shop-list">
    <Header :left="true" :title="shopInfo.name" :right="true" :shadow="true"></Header>
    <div class="page-body">
      <div class="shop-header">
        <div class="logo">
          <img class="img" src="/image/image.png" v-load-img="shopInfo.logo" alt="">
        </div>
        <div class="content">
          <div class="title">{{shopInfo.name}}</div>
          <div class="icon">
            <van-icon :name="it>shopInfo.score?'star-o':'star'" color="#fd6f04" v-for="it in 5" :key="it"/>
            <span class="color">{{shopInfo.score}}</span>
            <span style="color:#B2B2B2; margin-left:15px">共{{shopInfo.num}}件商品</span>
          </div>
        </div>
        <div class="right">
          <img src="/image/icon/blockLove.png" class="img">
        </div>
      </div>
      <template v-if="shopInfo.data && shopInfo.data.length>0">
        <Product :data="shopInfo.data"/>
      </template>
      <template v-else>
        <Error/>
      </template>
    </div>
  </div>
</template>

<script>
import http from '@/common/http.js';
import Header from '@/components/Header';
import Error from '@/components/Error';
import Product from '@/components/ProductList';
export default {
  head(){
    return{
      title:'店铺列表',
      meta: [{
        hid: "description",
        name: "description",
        content: "v-joker店铺商品列表"
      },{
        hid: 'viewport',
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0'
      }]
    }
  },
  components:{
    Header,
    Error,
    Product
  },
  async asyncData(context) {
    const pid = context.route.params.id;
    let res = await http.get('/m/product/shop/'+pid,{current:1,size:20});
    if(res.code==200){
      return {
        shopInfo:res.data.data,
        page:{
          total:res.data.total,
          size:20,
          current:1
        }
      }
    }else{
      return {
        shopInfo:[],
        page:{
          total:0,
          size:20,
          current:1
        }
      }
    }
  },
}
</script>

<style lang="scss">
#__layout{
  background:#F0F0F2 ;
}
.vue-nuxt-product-shop-list {
  .page-body{
    padding: 48px 0;
    .vue-nuxt-components-product-list{
      background: #F0F0F2;
    }
  }
  .shop-header{
    background: #fff;
    display: flex;
    align-items: center;
    padding: 15px 12px;
    justify-content: space-around;
    .logo{
      width: 44px;
      height: 44px;
      overflow: hidden;
      border:1px solid rgba(204,204,204,1);
      border-radius: 22px;
    }
    .content{
      flex:1;
      margin: 0 12px ;
      font-size: 16px;
      font-weight: 500;
      height: 44px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .icon{
        display: flex;
        font-size: 12px;
        span{
          margin-left: 5px;
        }
      }
    }
    .btn{
      color: #FD6F04;
      border-color: #FD6F04;
      border-radius: 4px;
      height: 28px;
      line-height: 28px;
    }
  }
}
</style>