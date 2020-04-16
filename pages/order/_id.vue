<template>
  <div class="vue-nuxt-page-order-details">
    <Header :left="true" title="订单详情页" :back="true" :right="true" :shadow="true"></Header>
    <template v-if="orderInfo">
      <div class="page-body">
        <div class="order-head">
          <span>待付款</span>
        </div>
        <div class="order-address">
          <div>
            <p class="name">Joker</p>
            <p class="content">广州市</p>
            <p class="phone">13226627208</p>
          </div>
        </div>
        <div class="order-product" v-if="orderInfo.products">
          <ul class="product-list">
            <li class="product-item" v-for="item in orderInfo.products" :key="item.id">
              <div class="product-details">
                <div class="product-image">
                  <img src="/image/image.png" v-load-img="item.mainImage" class="img" alt="">
                </div>
                <div class="product-info">
                  <div class="product-title van-ellipsis">{{item.title}}</div>
                  <div class="product-sku">
                    <span>{{item.skuName}}</span>
                    <span>x {{item.num}}</span>
                  </div>
                  <div class="product-price p-icon">{{item.price * item.num}}</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </template>
    <template v-else>
      <Error/>
    </template>
  </div>
</template>

<script>
import http from '@/common/http';
import Error from '@/components/404.vue';
import Header from '@/components/Header';
export default {
  components:{
    Header,
    Error
  },
  data(){
    return{
      orderInfo:{

      }
    }
  },
  mounted(){
    console.log(this.orderInfo);
  },
  async beforeCreate() {
    const pid = this.$route.params.id;
    this.$store.commit('function/loading',true);
    let res = await http.get('/order/'+pid);
    if(res.code == 200){
      this.orderInfo = res.data;
    }else{
      this.$toast(res.msg);
    }
    this.$store.commit('function/loading',false);
  }
}
</script>

<style lang="scss" scoped>
.vue-nuxt-page-order-details{
  .page-body{
    padding-top: 48px ;
    .order-head{
      background: #FF8602;
      padding: 15px 24px;
      display: flex;
      >span{
        background-size:40px 40px;
        background-repeat: no-repeat;
        font-size: 16px;
        color: #fff;
        padding: 15px 0;
        font-weight: 600;
        padding-left: 60px;
        background-position: left center;
        background-image: url('/image/order/order-type0.png');
      }
      .to-status-1{
        background-image: url('/image/order/order-type-1.png');
      } 
      .to-status-2{
        background-image: url('/image/order/order-type2.png');
      } 
      .to-status-3{
        background-image: url('/image/order/order-type3.png');
      } 
      .to-status-4{
        background-image: url('/image/order/order-type4.png');
      }
      .to-status-0{
        background-image: url('/image/order/order-type0.png');
      }
    }
    .order-address{
      background: #fff;
      padding: 15px;
      >div{
        padding-left: 50px;
        background-image: url('/image/order/address.png');
        background-repeat: no-repeat;
        background-position: 10px center;
        background-size: 30px 30px;
        font-size: 14px;
        .name{
          color: #232323;
          font-weight: 600;
          font-size: 16px;
          margin-bottom: 5px;
        }
        .content{
          line-height: 1.5;
          margin-bottom: 5px;
        }
      }
      margin-bottom: 8px;
    }
    .order-product{
      padding: 15px;
      background: #fff;
      .product-item{
        padding-bottom: 11px;
        .product-details{
          width: 100%;
          font-size: 14px;
          display: flex;
        }
        .product-image{
          width: 80px;
          height: 80px;
          min-width: 80px;
          max-width: 80px;
          border-radius: 2px; 
          border:1px solid #eee;
          margin-right: 10px;
        }
        .product-info{
          flex:1;
          max-width: 254px;
          .product-title{
            color: #4C4C4C;
            margin-bottom: 10px;
            font-weight:400;
          }
          .product-sku{
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight:lighter;
            color: #807F7F;
            margin-bottom: 10px;
          }
          .product-price{
            color: #232323;
            text-align: right;
          }
        }
      }
    }
  } 
}
</style>