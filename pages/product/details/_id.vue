<template>
  <div class="nuxt-page-product-details">
    <div class="vue-nuxt-components-header">
      <div class="left" @click="$router.go(-1)">
        <img class="img" src="/image/icon/o-left.png" alt="">
      </div>
      <div class="right">
        <div class="love-icon">
          <img class="img" src="/image/icon/love.png" alt="">
        </div>
        <div class="cart-icon">
          <img class="img" src="/image/icon/cart.png" alt="">
        </div>
      </div>
    </div>
    <div class="vue-nuxt-components-body">
      <div class="product-details-banner">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(item,index) in productInfo.images" class="product-banner-image" :key="'banner-'+index">
            <img @click="openImage(index)" class="img" v-load-img="item" src="/image/image.png"/>
          </van-swipe-item>
        </van-swipe>
      </div>
      <van-skeleton title :row="8"  v-if="!productInfo.id"/>
      <div class="product-details-header" v-if="productInfo.id">
        <div class="title">
          {{productInfo.title}} 
        </div>
        <div class="remark">
          {{productInfo.remark}}
        </div>
        <div class="price">
          <p class="color">￥ {{productInfo.outPrice}}</p> 
          <p class="old-price">￥ {{productInfo.outPrice}}</p>
        </div>
      </div>
      <div class="product-details-sku" v-if="productInfo.id">
        <p class="select-sku">已选择:<span class="text">{{currentSkuData.id?currentSkuData.label:''}}</span></p>
        <ul class="sku-list">
          <li @click="changeCurrentSku(item)" :class="['sku-item',currentSkuData.id==item.id?'active':'']" 
          v-for="(item,index) in productInfo.skuList" :key="`sku-img-`+index">
            <div class="sku-disable" v-if="!item.status"></div>
            <img class="img" src="/image/image.png" v-load-img="item.imgUrl" alt="">
          </li>
        </ul>
        <div class="sku-btns">
          <div>
            库存:{{currentSkuData.count}}
          </div>
          <div>
            <van-stepper v-model="productNum" 
             clickable integer 
            @focus.stop="showKeyBoard = true"/>
          </div>
        </div>
      </div>
      <div class="product-details-service" v-if="productInfo.id">
        <div class="service-header">
          <div>服务说明</div>
          <van-icon name="arrow" />
        </div>
        <div class="service-body">
          <div class="service-item">
            <van-icon name="send-gift-o" style="color:#1fbe8c" />
            <span class="content">消费满500包邮</span>
          </div>
          <div class="service-item">
            <van-icon name="after-sale" style="color:#498bec"/>
            <span class="content">支持七天无理由退换货</span>
          </div>
        </div>
      </div>
      <div class="product-details-shop" v-if="productInfo.id">
        <div class="logo">
          <img src="/image/icon/shopLogo.png" alt="">
        </div>
        <div class="content">
          <div class="title">{{productInfo.shopInfo.name}}</div>
          <div class="icon">
            <van-icon :name="it>productInfo.shopInfo.score?'star-o':'star'" color="#fd6f04" v-for="it in 5" :key="it"/>
            <span class="color">{{productInfo.shopInfo.score}}</span>
          </div>
        </div>
        <van-button plain type="primary" @click="$router.push('/product/shop/'+productInfo.shopInfo.id)">进入店铺</van-button>
      </div>
      <div class="product-details-details" v-if="productInfo.id">
        <div v-html="productInfo.desc"></div>
      </div>
    </div>
    <div class='vue-nuxt-components-footer'>
      <div class="icon kefu">
        <img src="/image/icon/kefu.png" alt="">
      </div>
      <div class="icon cart">
        <img src="/image/tabbar/cart.png" alt="">
      </div>
      <div class="icon frove">
        <van-icon name="star-o" size="28" color="#b2b2b2"/>
      </div>
      <div class="btns">
        <van-button class="cart-btn" :disabled="!productInfo.status" @click="addCart">加到购物车</van-button>
        <van-button class="buy-btn" :disabled="!productInfo.status" @click="buy">立即购买</van-button>
      </div>
    </div>
    <van-number-keyboard
      :show="showKeyBoard"
      close-button-text="完成"
      @input="onInput"
      theme="custom"
      @delete="onDelete"
      @blur="showKeyBoard = false"
    />
  </div>
</template>

<script>
import http from '@/common/http.js';
import { ImagePreview } from 'vant';
export default {
  head(){
    return {
      title: this.productInfo.title,
      meta: [
        { hid: 'description', name: 'description', content: this.productInfo.title }
      ]
    }
  },
  methods:{
    changeCurrentSku(item){
      if(item.status){
        this.currentSkuData={...item}
      }else{
        return;
      }
    },
    // 购买
    buy(){
      if(!this.currentSkuData.id && !this.currentSkuData.status){
        this.$toast('请选择商品');
        return;
      }
      if(this.currentSkuData.count<1){
        this.$toast('该商品库存不足');
        return;
      }
      let data = [{id:this.currentSkuData.id,num:this.productNum}];
      window.localStorage.setItem('currentBuyList',JSON.stringify(data));
      this.$store.commit('product/currentBuyList',data);
      this.$router.push('/product/checkout');
    },
    addCart(){
      if(!this.currentSkuData.id && !this.currentSkuData.status){
        this.$toast('请选择商品');
        return;
      }
      if(this.currentSkuData.count<1){
        this.$toast('该商品库存不足');
        return;
      }
      // 加入到购物车
    },
    onInput(d){
      this.productNum+=''+d;
    },
    openImage(index){
      ImagePreview({
        images:this.productInfo.images,
        startPosition: index,
      });
    },
    onDelete(d){
      this.productNum+='';
      if(this.productNum.length>1){
        this.productNum = this.productNum.substr(0,this.productNum.length-1);
      }else{
        this.productNum = 0;
      }
    }
  },
  mounted(){
    if(!this.productInfo.id){
      this.$toast({message:'商品不存在',icon:'clear'});
      return;
    }
    if(!this.productInfo.status){
      this.$toast({message:'该商品已下架',icon:'clear'});
      return;
    }
  },
  data(){
    return{
      searchText:'',
      currentSkuData:{
        id:null
      },
      showKeyBoard:false, // 数字键盘
      productNum:'',
    }
  },
  async asyncData(context) {
    const pid = context.route.params.id;
    let res = await http.get('/product/queryProductIds/'+pid);
    if(res && res.code==200){
      return {
        productInfo:res.data
      }
    }else{
      return {
        productInfo:{}
      }
    }
  }
}
</script>

<style lang="scss">
.nuxt-page-product-details{
  background: #F0F0F2;
  .vue-nuxt-components-header{
    height: 48px;
    display: flex;
    font-size: 14px;
    position: relative;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    background: transparent;
    top: 0;
    z-index: 999;
    left: 0;
    right: 0;
    .left{
      margin-left: 15px;
      width: 32px;
      height: 32px;
      border-radius: 16px;
      overflow: hidden;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .right{
      margin-right: 15px;
      display: flex;
      .love-icon ,.cart-icon{
        border-radius: 16px;
        overflow: hidden;
        width: 21px;
        height: 21px;
        padding: 4.5px;
        background: #7f7f7f;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .love-icon{
        margin-right: 25px;
      }
    }
  }
  .my-swipe{
    height: 375px;
  }
  .vue-nuxt-components-body{
    padding-bottom: 64px;
    .product-banner-image{
      width: 100%;
      height: auto;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .product-details-header{
      padding: 15px;
      background: #fff;
      margin-bottom: 8px;
      .title{
        color: #232323;
        font-size: 16px;
        line-height: 22px;
      }
      .remark{
        color: #999;
        font-size: 14px;
        line-height: 14px;
        margin: 4px 0;
      }
      .price{
        font-size: 20px;
        margin-top: 8px;
        .old-price{
          margin: 4px 0;
          font-size: 14px;
          color: #999;
          text-decoration: line-through;
        }
      }
    }
    .product-details-sku{
      margin-bottom: 8px;
      background: #fff;
      overflow: hidden;
      padding: 15px;
      .select-sku{
        padding-bottom: 10px;
        font-size: 14px;
        color: #666;
        .text{
          color: #000;
          margin-left: 15px;
          font-size: 16px;
        }
      }
      .sku-list{
        display: flex;
        border-bottom: 1px solid #eee;
        background: #fff;
        flex-wrap: wrap;
        padding: 10px 0;
        .sku-item{
          display: flex;
          margin: 5px 0;
          position: relative;
          width: 40px;
          height: 40px;
          max-width: 40px;
          min-width: 40px;
          img{
            width: 100%;
            height: 100%;
          }
          border:1px solid #ccc;
          align-items: center;
          border-radius: 20px;
          font-size: 12px;
          overflow: hidden;
          flex-wrap: wrap;
          opacity: 0.5;
          margin-right: 10px;
          &:last-child{
            margin-right: 0;
          }
        }
        .active{
          opacity: 1;
        }
        .sku-disable{
          background: #ddd;
          left: 0;
          top: 0;
          z-index: 1;
          right: 0;
          bottom: 0;
          opacity: 0.8;
          position: absolute;
        }
      }
      .sku-btns{
        font-size: 14px;
        display: flex;
        padding: 15px 0;
        justify-content: space-between;
        align-items: center;
        overflow: hidden;
        background: #fff;
        color: #666;
        border-bottom: 1px solid #eee;
        .van-stepper{
          text-align: right;
          .van-stepper__minus ,.van-stepper__plus ,.van-stepper__input{
            background: #fff;
            border:1px solid #eee;
          }
          .van-stepper__input{
            width: 80px;
          }
        }
      }
    }
    .product-details-service{
      background: #fff;
      margin-bottom: 8px;
      padding: 15px;
      .service-header{
        display: flex;
        font-size: 14px;
        align-items: center;
        color: #B3B3B3;
        justify-content: space-between;
        margin-bottom: 10px;
      }
      .service-body{
        .service-item{
          display: flex;
          flex-wrap: wrap;
          font-size: 12px;
          margin-bottom: 10px;
        }
        .content{
          margin-left: 15px;
          color: #808080;
        }
      }
    }
    .product-details-shop{
      display: flex;
      padding: 15px;
      background: #fff;
      margin-bottom: 8px;
      align-items: center;
      >div{
        
      }
      .van-button{
        color: #FD6F04;
        border-color: #FD6F04;
        border-radius: 4px;
        height: 28px;
        line-height: 28px;
      }
      .logo{
        width: 44px;
        height: 44px;
      }
      .title{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        font-size: 18px;
        height: 30px;
        color:#030303;
        font-weight: 500;
      }
      .content{
        margin: 0 8px;
        flex:1;
        .icon{
          color: #FAAD14;
          font-size: 12px;
        }
      }
    }
    .product-details-details{
      padding: 15px 0;
      width: 100%;
      background: #fff;
      >div{
        width: 100%;
        font-size: 14px;
        padding: 15px;
        box-sizing: border-box; 
        line-height: 1.5;
        img{
          width: 100%;
          height: auto;
        }
      }
    }
    .van-skeleton{
      padding: 15px;
      background:#fff;
      .van-skeleton__row, .van-skeleton__title{
      }
    }
  }
  .vue-nuxt-components-footer{
    position: fixed;
    bottom:0;
    left: 0;
    right: 0;
    height: 48px;
    background: #fff;
    display: flex;
    padding:8px 15px;
    align-items: center;
    justify-content: space-between;
    >.icon{
      width: 44px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 44px;
    }
    .btns{
      color: #fff;
      font-weight: bold;
      display: flex;
      .cart-btn{
        width: 100px;
        min-width: 100px;
        background: #fca839;
        border-top-left-radius: 20px;
        border:0;
        color: #fff;
        border-bottom-left-radius: 20px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      .buy-btn{
        width: 100px;
        min-width: 100px;
        background: #fd5321;
        border:0;
        color: #fff;  
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
}
</style>