<template>
  <div class="vue-nuxt-page-user-collect">
    <Header :left="true" title="我的收藏" :back="true" :right="true" :shadow="true"></Header>
    <div class="page-body">
      <van-tabs v-model="active">
        <van-tab title="商品" name="product">
          <div class="product-list" v-if="collectList && collectList.length>0">
            <van-swipe-cell class="product-item" v-for="(item,index) in collectList" :key="item.id">
              <div :class="['product-container',item.status?'':'isDisable']" @click="openProductDetails(item)">
                <div class="product-image" >
                  <img src="/image/image.png" v-load-img="item.mainImage" class="img" alt="">
                  <span class="isEnd" v-if="!item.status">已下架</span>
                </div>
                <div class="product-info">
                  <p class="product-title">{{item.title}}</p>
                  <p class="product-price p-icon color">{{item.outPrice}}</p>
                </div>
              </div>
              <template #right>
                <van-button class="set-btn" @click="goShop(item)" square type="danger" color="#FD6F04" text="去店铺" /> 
                <van-button class="set-btn" @click="deleteCollect(item,index)" square type="danger" text="删除" /> 
              </template>
            </van-swipe-cell>
          </div>
        </van-tab>
        <van-tab title="店铺" name="shop">
          <div class="product-shop">没时间做</div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';
import {COLLECT} from '@/api/user'
export default {
  middleware: 'token',
  components:{
    Header
  },
  data(){
    return{
      collectList:[],
      active:'product'
    }
  },
  methods:{
    // 打开商品详情
    openProductDetails(item){
      this.$router.push('/product/details/'+item.productId);
    },
    // 打开店铺
    goShop(item){
      this.$router.push('/product/shop/'+item.shopId);
    },
    // 删除收藏
    deleteCollect(item,index){
      this.$store.commit('function/loading',true);
      COLLECT.changeCollect(item.productId).then(res=>{
        this.$toast(res.msg);
        if(res.code==200){
          this.collectList.splice(index,1);
          this.$toast({message:'删除成功',icon:'success'});
        }else{
          this.$toast({message:'删除失败',icon:'error'});
        }
      }).catch(err=>{
        this.$toast({message:err,icon:'error'});
      }).finally(()=>{
        this.$store.commit('function/loading',false);
      })
    }
  },
  mounted() {
    this.$store.commit('function/loading',true);
    COLLECT.list().then(res=>{
      if(res.code == 200){
        this.collectList = res.data;
      }else{
        this.$toast({message:res.msg,icon:'error'});
      }
    }).catch(err=>{
      this.$toast(err);
    }).finally(()=>{
      this.$store.commit('function/loading',false);
    })
  },
}
</script>

<style lang="scss" scoped>
.vue-nuxt-page-user-collect{
  .page-body{
    padding-top: 48px;
    background: #fff;
  }
  font-size: 14px;
  .product-container{
    padding:15px 0; 
    background: #fff;
    width: 100%;
    display: flex;
    .product-image{
      width: 80px;
      margin: 0 15px;
      position: relative;
      min-width: 80px;
      border-radius: 6px;
      overflow: hidden;
      margin-right: 12px;
      height: 80px;
      .isEnd{
        position: absolute;
        left: 0;
        top: 0;
        padding:4px 8px;
        background: #ddd;
        color: #333;
        font-weight: lighter;
        font-size: 14px;
        text-align: center;
      }
    }
    .product-title{
      font-weight: 400;
      line-height: 1.5;
    }
    .product-info{
      flex:1;
      padding-right: 15px;
      flex-direction: column;
      display: flex;
      .product-price{
        font-size: 16px;
        margin-top: 4px;
      }
    }
  }
  .isDisable{
    opacity: 0.65;
  }
  .product-item{
    margin-bottom: 8px;
  }
  .set-btn{
    height: 100%;
    line-height: auto;
  }
  .product-shop{
    text-align: center;
    font-size: 16px;
    color: #666;
    padding: 40px;
    background: #fff;
  }
}
</style>