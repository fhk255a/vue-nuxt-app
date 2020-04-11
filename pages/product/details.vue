<template>
  <div class="nuxt-page-product-details">
    <div class="vue-nuxt-components-header">
      <div class="left">
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
          <van-swipe-item v-for="(item,index) in info.images" :key="'banner-'+index">
            {{item}}ces
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="product-details-header">
        <div class="title">
          Women’s Casual Shoes Full Breathable Women’s Shoes Fashion Light Running Shoes 
        </div>
        <div class="remark">
          备注
        </div>
        <div class="price">
          <p class="color">￥ 16.88</p> 
          <p class="old-price">￥ 62.35</p>
        </div>
      </div>
      <div class="product-details-sku">
        <ul class="sku-list">
          <li @click="currentIndexSku = index" :class="['sku-item',currentIndexSku==index?'active':'']" 
          v-for="(item,index) in info.skuList" :key="`sku-img-`+index">
            <img class="img" src="/image/image.png" v-load-img="item.image" alt="">
          </li>
        </ul>
        <div class="sku-btns">
          <div>
            <van-stepper v-model="productNum" 
             clickable integer 
            @focus.stop="showKeyBoard = true"/>
          </div>
        </div>
      </div>
      <div class="product-details-service">
        <div class="service-header">
          <div>服务说明</div>
          <van-icon name="arrow" />
        </div>
        <div class="service-body">
          <div class="service-item">
            <van-icon name="send-gift-o" />
            <span class="content">消费满500包邮</span>
          </div>
          <div class="service-item">
            <van-icon name="after-sale" />
            <span class="content">支持七天无理由退换货</span>
          </div>
        </div>
      </div>
      <div class="product-details-shop">
        <div class="logo">
          <img src="/image/icon/shopLogo.png" alt="">
        </div>
        <div class="content">
          <div class="title">SHOP</div>
          <div></div>
        </div>
        <div class="btn"></div>
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
export default {
  methods:{
    onInput(d){
      this.productNum+=''+d;
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
  data(){
    return{
      searchText:'',
      currentIndexSku:null,
      showKeyBoard:false, // 数字键盘
      productNum:'',
      info:{
        image:[1,2,3,4,5],
        skuList:[
          {
            image:null,
          },
          {
            image:null,
          },
          {
            image:null,
          },
        ]
      }
    }
  },
  props:{
    type:{
      type:String,
      default:()=>'title'
    },
    title:{
      type:String,
      default:()=>''
    },
    left:{
      type:Boolean,
      default:()=>false
    },
    right:{
      type:Boolean,
      default:()=>false
    },
  },
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
    .sku-list{
      display: flex;
      border-bottom: 1px solid #eee;
      padding: 15px;
      background: #fff;
      .sku-item{
        max-width: 40px;
        min-width: 40px;
        width: 40px;
        height: 40px;
        border-radius: 20px;
        overflow: hidden;
        flex-wrap: wrap;
        margin-right: 15px;
        opacity: 0.5;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .active{
        opacity: 1;
      }
    }
    .sku-btns{
      overflow: hidden;
      background: #fff;
      border-bottom: 1px solid #eee;
      .van-stepper{
        margin: 15px;
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
    .logo{
      width: 44px;
      height: 44px;
    }
    .title{
      font-size: 18px;
      color:#030303;
      font-weight: 600;
    }
    .content{
      margin: 0 8px;
      flex:1;
    }
  }
}
</style>