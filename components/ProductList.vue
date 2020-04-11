<template>
  <div class="vue-nuxt-components-product-list">
    <slot/>
    <ul class="product-list">
      <li class="product-item" v-for="(item) in data" :key="item.id">
        <div class="product-image">
          <img class="img" :src="item.mainImage" alt="">
        </div>
        <div class="product-info">
          <p class="product-title van-multi-ellipsis--l2" v-if="title">{{item.title}}</p>
          <p class="product-remark van-ellipsis" v-if="remark">{{item.remark}}</p>
          <p class="product-price" v-if="price">￥{{item.outPrice}}</p>
          <p class="product-old-price" v-if="price">{{item.outPrice?'￥'+item.outPrice:''}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    data:{
      type:Array,
      default:()=>[],
    },
    title:{
      type:Boolean,
      default:()=>false
    },
    price:{
      type:Boolean,
      default:()=>false
    },
    remark:{
      type:Boolean,
      default:()=>false
    }
  }
}
</script>

<style lang="scss">
.vue-nuxt-components-product-list{
  margin: 12px;
  >.product-list{
    background: #F0F0F2;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    >.product-item{
      width: 172px;
      margin-bottom: 7px;
      .product-image{
        width: 172px;
        height: 172px;
        .img{
          width: 100%;
          height: 100%;
        }
      }
      .product-info{
        padding: 8px;
        border-radius: 0 0 8px 8px;
        overflow: hidden;
        background: #fff;
        .product-title{
          line-height: 18px;
          font-size: 13px;
          font-weight: 400;
          height: 36px;
          color: #000;
        }
        .product-price{
          font-size: 16px;
          line-height: 21px;
          font-weight: 600;
          color: #FE5427;
          margin-top: 4px;
        }
        .product-remark{
          color: #eee;
          font-size: 12px;
        }
        .product-old-price{
          text-decoration: line-through;
          font-size: 12px;
          color: #b2b2b2;
          margin-top: 2px;
        }
      }
    }
  }
}
</style>