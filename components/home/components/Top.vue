<template>
  <div class="vue-nuxt-components-top-product" :style="{height:((160+(title?20:0)+(price?20:0))/33+'rem')}">
    <slot></slot>
    <ul class="product-list" >
      <li class="product-item" v-for="(item,index) in data" :key="item.id">
        <img class="share-icon" src="/image/home/top1.png" alt="" v-if="index==0">
        <img class="share-icon" src="/image/home/top2.png" alt="" v-if="index==1">
        <img class="share-icon" src="/image/home/top3.png" alt="" v-if="index==2">
        <div class="product-image">
          <img class="img" v-load-img="item.mainImage" src="/image/image.png"/>
        </div>
        <p class="product-title van-ellipsis" v-if="title">{{item.title}}</p>
        <p class="product-price" v-if="price">{{item.outPrice?'￥'+item.outPrice:''}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    data:{
      type:Array,
      default:()=>{}
    },
    title:{
      type:Boolean,
      default:()=>false
    },
    price:{
      type:Boolean,
      default:()=>false
    }
  },
}
</script>

<style lang="scss">
.vue-nuxt-components-top-product{
  padding: 12px;
  background: #fff;
  overflow: hidden;
  >.product-list{
    display: flex;
    overflow: scroll;
    /*解决ios上滑动不流畅*/
    -webkit-overflow-scrolling: touch;
    padding-bottom: 25px;
    .product-item{
      width: 138px;
      min-width: 138px;
      margin-right: 8px;
      text-align: center;
      position: relative;
      .share-icon{
        position: absolute;
        left: 12px;
      }
      &:last-child{
        margin-right: 0;
      }
      .product-title{
        font-size: 14px;
        margin-top: 4px;
      }
      .product-image{
        width: 138px;
        height: 138px;
        border-radius: 6px;
        overflow: hidden;
      }
      .product-price{
        color: #FE5427;
        font-weight: 500;
        font-size: 16px;
        margin: 8px 0;
      }
    }
  }
}
</style>