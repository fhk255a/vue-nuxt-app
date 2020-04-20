<template>
  <div class="vue-nuxt-page-order-list">
    <Header :left="true" title="我的订单" :back="true" :right="true" :shadow="true"></Header>
    <div class="page-body">
      <div class="order-list">
        <div class="order-item" v-for="item in orderList" :key="item.id">
          <div class="order-item-header">
            <span>{{config.timer(item.createTime)}}</span>
            <span class="color">{{($store.state.config.orderStatus.find(it=>it.id==item.orderStatus)).label}}</span>
          </div>
          <div class="product-list" @click="orderDetails(item)">
            <template v-for="(it,index) in item.products" >
              <div class="product-image" :key="it.id" v-if="index<3">
                <img src="/image/image.png" v-load-img="it.mainImage" class="img" alt="">
              </div>
            </template>
          </div>
          <div class="product-num">
            {{item.num?item.num:0}}件商品
          </div>
          <div class="order-price">
            总价:<span class="p-icon">{{item.totalPrice?item.totalPrice:0}},</span>
            优惠:<span class="p-icon">{{item.discount?item.discount:0}},</span>
            实付款:<span class="p-icon price">{{item.resultPrice?item.resultPrice:0}}</span>
          </div>
          <div class="order-bottom">
            <span @click="overBuy(item)" v-if="item.orderStatus == 1">确认收货</span>
            <span @click="payBtn(item)" v-if="item.orderStatus == -1">付款</span>
            <span @click="cancelBtn(item)" v-if="item.orderStatus == -1">取消订单</span>
            <span @click="refund(item)" v-if="item.orderStatus != -1">退款</span>
          </div>
        </div>
      </div>
    </div>
    <van-popup v-model="passwordDialog" position="bottom" :style="{ height: '400px' }" >
      <Password @submit="submitPassword" :show="passwordDialog"/>
    </van-popup>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Password from '@/components/Password';
import ORDER from '@/api/order';
export default {
  middleware: 'token',
  components:{
    Header,
    Password
  },
  methods:{
    // 确认收货
    overBuy(item){
      this.currentData = item;
    },
    payBtn(item){
      this.currentData = item;
      this.passwordDialog = true;
    },
    cancelBtn(item){
      this.currentData = item;
    },
    // 退款
    refund(item){
      this.currentData = item;
    },
    // 去付款
    toPay(password){
      this.$store.commit('function/loading',true);
      ORDER.toPay(this.currentData.id,password).then(res=>{
        if(res.code==200){
          this.currentData.orderStatus = 0;
          this.currentData.orderType = 1;
          this.passwordDialog=false;
          this.$toast.success(res.msg);
        }else{
          this.$toast.fail(res.msg);
        }
      }).catch(err=>{
        this.$toast(err);
      }).finally(()=>{
        this.$store.commit('function/loading',false);
      })
    },
    orderDetails(item){
      this.$router.push('/order/'+item.id);
    },
    // 获取密码
    submitPassword(pwd){
      if(pwd.length==6){
        this.toPay(pwd);
      }
    },

  },
  async beforeCreate(){
    this.$store.commit('function/loading',true);
    const res = await ORDER.list();
    if(res.code == 200){
      this.orderList = res.data;
    }else{
      this.$toast(res.msg);
    }
    this.$store.commit('function/loading',false);
  },
  data(){
    return{
      orderList:[],
      password:'',
      passwordDialog:false,
      currentData:{},
    }
  }
}
</script>

<style lang="scss" scoped>
.page-body{
  padding-top: 48px;
  font-size: 14px;
  margin:10px;
  .order-list{
    padding-bottom: 20px;
    .order-item{
      padding: 0 15px;
      background: #fff;
      border-radius: 12px;
      margin-bottom: 10px;
      .order-item-header{
        display: flex;
        padding: 15px 0;
        color: #999;
        justify-content: space-between;
      }
    }
  }
  .product-list{
    display: flex;
    min-height: 80px;
    .product-image{
      width: 80px;
      height: 80px;
      margin-right: 8px;
      overflow: hidden;
      border-radius: 6px;
      img{
        display: block;
        margin-right: 15px;width: 100%;
        height: 100%;
      }
    }
  }
  .product-num{
    margin:10px 0;
    color: #666;
    text-align: right;
  }
  .order-price{
    color: #333;
    text-align: right;
    padding-bottom: 10px;
    .price{
      font-size: 18px;
    }
  }
  .order-bottom{
    display: flex;
    text-align: right;
    padding-bottom: 10px;
    width: 100%;
    justify-content: flex-end;
    >span{
      display: block;
      padding:6px 12px;
      border-radius: 16px;
      font-size: 14px;
      margin-left: 10px;
      border:1px solid #eee;
    }
  }
}
</style>