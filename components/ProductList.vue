<template>
  <div class="vue-nuxt-components-product-list">
    <slot/>
    <ul class="product-list">
      <li @click="openProductDetails(item.id)" :class="['product-item',type?'p-'+type:'p-2']" v-for="(item) in data" :key="item.id" :type="type">
        <div class="product-image">
          <img class="img" src="/image/image.png" v-load-img="item.mainImage" alt="">
        </div>
        <div class="product-info">
          <div class="info">
            <p class="product-title van-multi-ellipsis--l2" v-if="title">{{item.title}}</p>
            <p class="product-remark van-ellipsis" v-if="remark">{{item.remark}}</p>
          </div>
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
      default:()=>true
    },
    price:{
      type:Boolean,
      default:()=>true
    },
    remark:{
      type:Boolean,
      default:()=>true
    },
    type:{
      type:String,
      default:()=>'2'
    }
  },
  methods:{
    openProductDetails(id){
      this.$router.push(`/product/details/`+id);
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
      margin-bottom: 7px;
      .product-image{
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
    >.p-1{
      width: 100%;
      display: flex;
      overflow: hidden;
      margin-bottom: 0;
      background: #fff;
      border-bottom:1px solid #eee;
      .product-image{
        margin:12px;
        min-width: 132px;
        width: 132px;
        height: 132px;
        border-radius: 6px;
        overflow: hidden;
      }
      .product-info{
        margin: 12px;
        margin-left: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        .info{
          flex:1;
        }
      }
    }
    .p-2{
      width: 172px;
      .product-image{
        width: 172px;
        height: 172px;
      }
    }
    .p-3{
      width: 112px;
      .product-image{
        width: 112px;
        height: 112px;
      }
    }
  }
}
</style>