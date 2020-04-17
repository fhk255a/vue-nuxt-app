<template>
  <div class="vue-nuxt-page-order-list">
    <Header :left="true" title="我的订单" :back="true" :right="true" :shadow="true"></Header>
    <div class="page-body">
      <div class="order-list">
        <div class="order-item" @click="orderDetails(item)" v-for="item in orderList" :key="item.id">
          <div class="order-item-header">
            <span>{{config.timer(item.createTime)}}</span>
            <span class="color">{{($store.state.config.orderType.find(it=>it.id==item.orderType)).label}}</span>
          </div>
          <div class="product-list">
            <div class="product-image" v-for="it in item.products" :key="it.id">
              <img src="/image/image.png" class="img" alt="">
            </div>
          </div>
          <div class="product-num">
            {{item.num?item.num:0}}件，总价：{{item.resultPrice?item.resultPrice:0}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';
import ORDER from '@/api/order';
export default {
  components:{
    Header
  },
  methods:{
    orderDetails(item){
      this.$router.push('/order/'+item.id);
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
    }
  }
}
</script>

<style lang="scss" scoped>
.page-body{
  padding-top: 48px;
  font-size: 14px;
  .order-list{
    .order-item{
      padding: 0 15px;
      background: #fff;
      margin-bottom: 8px;
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
    padding: 15px 0;
  }
}
</style>