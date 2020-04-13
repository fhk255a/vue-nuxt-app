<template>
  <div class="vue-nuxt-components-product-shop">
    <div class="shop-header">
      <div class="logo">
        <img class="img" src="/image/icon/shopLogo.png" v-load-img="data.logo" alt="">
      </div>
      <div class="content">
        <div class="title">{{data.name}}</div>
        <div class="icon">
          <van-icon :name="it>data.score?'star-o':'star'" color="#fd6f04" v-for="it in 5" :key="it"/>
          <span class="color">{{data.score}}</span>
        </div>
      </div>
      <van-button plain type="primary" class="btn" @click="$router.push('/product/shop/'+data.id)">进入店铺</van-button>
    </div>
    <ul class="product-list">
      <li :class="['product-item']" v-for="(item) in data.data" :key="item.id" >
        <div class="product-image">
          <img class="img" src="/image/image.png" v-load-img="item.mainImage" alt="">
        </div>
        <div class="product-info">
          <div class="info">
            <p class="product-title van-ellipsis" v-if="title">{{item.title}}</p>
          </div>
          <p class="product-price color" v-if="price">￥{{item.outPrice}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props:{
    data:{
      type:Object,
      default:()=>{}
    },
    title:{
      type:Boolean,
      default:()=>true
    },
    price:{
      type:Boolean,
      default:()=>true
    },
  }
}
</script>
<style lang="scss" scoped>
.vue-nuxt-components-product-shop{
  padding: 12px;
  background: #fff;
  border-radius: 6px;
  margin-top: 12px;
  .img{
    width: 100%;
    height: 100%;
  }
  .shop-header{
    display: flex;
    align-items: center;
    padding: 12px 0;
    justify-content: space-around;
    .logo{
      width: 44px;
      height: 44px;
      overflow: hidden;
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
  .product-list{
    display: flex;
    justify-content: space-between;
    .product-item{
      width: 106px;
      .product-image{
        width: 106px;
        height: 106px;
        overflow: hidden;
        border-radius: 6px;
      }
      .product-title{
        font-size: 12px;
        color: #000;
        margin-top: 6px;
        line-height: 1.5;
        overflow: hidden;
      }
      .product-price{
        margin-top: 6px;
        font-size: 14px;
        font-weight: 600;
      }
    }
  }
}
</style>