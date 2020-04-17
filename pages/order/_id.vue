<template>
  <div class="vue-nuxt-page-order-details">
    <Header :left="true" title="订单详情页" :back="true" :right="true" :shadow="true"></Header>
    <div class="page-body">
      <div :class="['order-head','to-status-'+orderInfo.orderType]">
        <span>{{orderInfo.orderType==-1?'已取消':payStatus[orderInfo.orderType]}}</span>
      </div>
      <div class="order-address">
        <div>
          <p class="name">{{orderInfo.address.name}}</p>
          <p class="content">
            {{orderInfo.address.province}}-{{orderInfo.address.city}}-{{orderInfo.address.county}}-{{orderInfo.address.country}}-{{orderInfo.address.addressDetail}}
          </p>
          <p class="phone">{{orderInfo.address.tel}}</p>
        </div>
      </div>
      <div class="order-product" v-if="orderInfo.products.length && orderInfo.products.length>0">
        <ul class="product-list">
          <li class="product-item" v-for="item in orderInfo.products" :key="item.id">
            <div class="product-shop" :style="{backgroundImage:`url(${item&&item.logo?item.logo:'/image/icon/shopIcon.png'})`}">{{item.name}}</div>
            <div class="product-details" v-for="product in item.products" :key="product.id">
              <div class="product-image">
                <img src="/image/image.png" v-load-img="product.mainImage" class="img" alt="">
              </div>
              <div class="product-info">
                <div class="product-title van-ellipsis">{{product.title}}</div>
                <div class="product-sku">
                  <span>{{product.skuName}}</span>
                  <span>x {{product.num}}</span>
                </div>
                <div class="product-price p-icon">{{product.price * product.num}}</div>
              </div>
            </div>
            <div class="product-total">
              <i class="color p-icon">{{item.price}}</i>
            </div>
          </li>
        </ul>
      </div>
      <div class="order-details">
        <div class="nuxt-form order-info">
          <Item width="100px" class="w100" label="订单号">
            <span>{{orderInfo.id}}</span>
          </Item>
          <Item width="100px" class="w100" label="下单时间">
            <span>{{config.timer(orderInfo.createTime)}}</span>
          </Item>
          <Item width="100px" class="w100" label="付款时间" v-if="orderInfo.orderType!=-1">
            <span>{{config.timer(orderInfo.payTime)}}</span>
          </Item>
          <Item width="100px" class="w100" label="备注">
            <span>{{orderInfo.remark}}</span>
          </Item>
        </div>
        <div class="nuxt-form order-info">
          <Item width="100px" class="w100" label="总价">
            <span>{{orderInfo.totalPrice}}</span>
          </Item>
          <Item width="100px" class="w100" label="优惠">
            <span>{{orderInfo.discount}}</span>
          </Item>
          <Item width="100px" class="w100" label="订单总额">
            <span>{{orderInfo.resultPrice}}</span>
          </Item>
        </div>
        <div class="order-contact">
          <img src="/image/icon/kefu-icon.png"/>
          <span>联系客服</span>
        </div>
      </div>
    </div>
    <div class="order-footer">
      <van-button round plain hairline type="info" @click="cancel" v-if="orderInfo.orderType!=-1" color="#ff8602">取消订单</van-button>
      <van-button round plain hairline type="info" v-if="orderInfo.orderType==0" @click="passwordDialog=true" color="#ff8602">去付款</van-button>
    </div>
    <van-popup v-model="passwordDialog" position="bottom" :style="{ height: '400px' }" >
      <Password @submit="submitPassword" :show="passwordDialog"/>
    </van-popup>
  </div>
</template>

<script>
import http from '@/common/http';
import ORDER from '@/api/order';
import Header from '@/components/Header';
import Item from '@/components/Item';
import Password from '@/components/Password';
export default {
  components:{
    Header,
    Item,
    Password
  },
  methods:{
    // 提交密码
    submitPassword(password){
      this.passwordDialog = false;
      this.toPay(password);
    },
    // 去付款
    toPay(password){
      this.$store.commit('function/loading',true);
      ORDER.toPay(this.orderInfo.id,password).then(res=>{
        if(res.code==200){
          this.$toast(res.msg);
        }else{
          this.$toast(res.msg);
        }
      }).catch(err=>{
        this.$toast(err);
      }).finally(()=>{
        this.$store.commit('function/loading',false);
      })
    },
    // 取消订单
    cancel(){

    }
  },
  data(){
    return{
      payStatus:['待付款','已付款','已完成','退款中','已退款'],
      orderInfo:{
        id:null,
        address:{},
        products:[],
      },
      passwordDialog:false,
    }
  },
  async beforeCreate() {
    const pid = this.$route.params.id;
    this.$store.commit('function/loading',true);
    let res = await http.get('/order/id/'+pid);
    if(res.code == 200){
      this.orderInfo = res.data;
    }else{
      this.$router.go(-1);
      this.$toast(res.msg);
    }
    this.$store.commit('function/loading',false);
  }
}
</script>

<style lang="scss" scoped>
.vue-nuxt-page-order-details{
  .page-body{
    background: #f0f0f2;
    min-height: calc(100vh - 98px);
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
    }
    .to-status--1 span{
      background-image: url('/image/order/order-type-1.png');
    } 
    .to-status-1 span{
      background-image: url('/image/order/order-type1.png');
    } 
    .to-status-2 span{
      background-image: url('/image/order/order-type2.png');
    } 
    .to-status-3 span{
      background-image: url('/image/order/order-type3.png');
    }
    .to-status-4 span{
      background-image: url('/image/order/order-type4.png');
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
      margin-bottom: 8px;
      padding: 15px;
      background: #fff;
      .product-item{
        padding-bottom: 11px;
        .product-details{
          width: 100%;
          font-size: 14px;
          display: flex;
          margin-bottom: 15px;
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
      .product-shop{
        font-weight: 600;
        font-size: 14px;
        padding: 11px 15px;
        padding-left: 40px;
        background-position: 10px center;
        margin-bottom: 15px;
        background-color: #F2F2F2;
        background-repeat: no-repeat;
        background-size: 20px 20px;
      }
      .product-total{
        margin-top: 10px;
        padding: 10px 0;
        border-top: 0.5px solid #6362626b;
        font-size: 16px;
        color: #232323;
        text-align: right;
      }
    }
    .order-details{
      background: #fff;
      padding:0 15px;
      .nuxt-item{
        margin-bottom: 12px;
      }
      .order-info{
        border-bottom:1px solid #D9D9D9;
        padding: 15px 0;
        padding-bottom: 8px;
      }
    }
    .order-contact{
      padding: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size:14px;
      img{
        width: 24px;
        height: 24px;
        margin-right: 10px;
      }
    }
  } 
  .order-footer{
    padding: 8px 15px;
    position: fixed;
    bottom:0;
    right: 0;
    left: 0;
    display: flex;
    text-align: right;
    align-items: center;
    z-index: 99;
    justify-content: flex-end;
    .van-button{
      line-height: 30px;
      margin-left: 10px;
      height: 32px;
      font-size: 12px;
    }
  }
}
</style>