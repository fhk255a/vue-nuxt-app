<template>
  <div class="vue-nuxt-page-checkout">
    <Header :left="true" title="确认订单页" :back="true" :right="true" :shadow="true"></Header>
    <template v-if="orderInfo.length>0">
      <div class="page-body">
        <div class="header">
          <div class="name">
            <div>Joker</div>
            <div class="default">
              默认地址
            </div>
          </div>
          <div class="address">
            广州市joker
          </div>
          <div class="phone">
            <div>1455-564554</div>
            <img style="width:16px;height:16px" src="/image/icon/edit.png" class="img" alt="">
          </div>
        </div>  
        <div class="sku-body">
          <div class="sku-item" v-for="(item) in orderInfo " :key="item.shop.id">
            <div class="title" :style="{backgroundImage:`url(${item&&item.logo?item.logo:'/image/icon/shopIcon.png'})`}">{{item.shop.name}}</div>
            <ul class="product-list">
              <li class="product-item" v-for="(product) in item.product" :key="product.id">
                <div class="product-item-sku" v-for="(sku) in product.sku" :key="sku.id">
                  <div class="product-image">
                    <img src="/image/image.png" v-load-img="product.mainImage" class="img" alt="">
                  </div>
                  <div class="product-info">
                    <div class="product-title van-ellipsis">{{product.title}}</div>
                    <div class="product-sku">
                      <span>{{sku.label}}</span>
                      <span>x {{sku.count}}</span>
                    </div>
                    <div class="product-price">￥ {{sku.outPrice * sku.count}}</div>
                  </div>
                </div>
              </li>
            </ul>
            <div class="total-price">
              <i class="color">￥ 291.88</i>
            </div>
          </div>
        </div>
        <div class="discount-plan-box">
          <div class="plan-item coupon">
            <div class="left">优惠券</div>
            <div class="right">
              <i class="color">2</i><span>张优惠券可用</span>
            </div>
          </div>
          <div class="plan-item cion">
            <div class="left"><i class="color">100</i>Joker币可以抵扣<i class="color">￥10</i></div>
            <div class="right">
              <i class="color">2</i><span>张优惠券可用</span>
            </div>
          </div>
          <div class="plan-item remarks">
            <div class="left">备注</div>
            <van-field
              style="flex:1;width:auto"
              v-model="remarks"
              rows="1"
              autosize
              type="textarea"
              placeholder="请输入留言"
            />
          </div>
        </div>
        <div class="result-box">
          <div class="price">
            <span>总价</span>
            <span class="price p-icon">291.88</span>
          </div>
          <div class="discount">
            <span>优惠</span>
            <span class="price p-icon">- 10</span>
          </div>
          <div class="total">
            <span>合计</span>
            <span class="p-icon">301.99</span>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="total">
          合计: <i class="color p-icon">301.99</i>
        </div>
        <van-button color="#FD6F04">确认订单</van-button>
      </div>
    </template>
  </div>
</template>

<script>
import Header from '@/components/Header';
export default {
  components:{
    Header
  },
  data(){
    return{
      orderInfo:[],
      remarks:''
    }
  },
  mounted(){
    this.orderInfo = window.localStorage.getItem('currentBuyList')?JSON.parse(window.localStorage.getItem('currentBuyList')):[];
    if(this.orderInfo.length<1){
      this.$router.push('/404');
    }
    console.log(this.orderInfo);
  },
  beforeDestroy(){
    window.localStorage.removeItem('currentBuyList')
  },
}
</script>

<style lang="scss" scoped> 
.page-body{
  padding: 48px 0 64px;
  background: #f0f0f0;
  font-size: 14px;
  min-height: calc(100vh - 112px);
  .header{
    padding: 20px 15px;
    background-color: #fff;
    background-image:url('/image/pages/address_line.png');
    background-repeat: no-repeat;
    background-position: bottom;
    font-size: 14px;
    color: #4C4C4C;
    .name{
      font-weight: 600;
      display: flex;
      color: #000;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }
    .address{
      margin-bottom: 10px;
    }
    .default{
      color: #FD6F04;
      border:1px solid #FD6F04;
      font-size: 12px;
      font-weight:lighter;
      padding: 2px 6px;
      border-radius: 4px;
    }
    .phone{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .sku-body{
    .sku-item{
      padding: 0 15px;
      background: #fff;
      margin-top: 8px;
      .total-price{
        height: 44px;
        width: 100%;
        line-height: 44px;
        text-align: right;
        border-top: 1px solid #d9d9d94f;
        .color{
          font-weight: 600;
        }
      }
    }
    .title{
      font-weight: 600;
      font-size: 16px;
      padding: 11px 15px;
      background-color: #fff;
      padding-left: 20px;
      background-position: left center;
      background-repeat: no-repeat;
    }
    .product-item{
      width: 100%;
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
  .discount-plan-box{
    background: #fff;
    padding: 0 15px;
    .plan-item{
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #d9d9d94f;
      background-repeat: no-repeat;
      background-size: 20px 20px;
      min-height: 44px;
      padding-left: 30px;
      background-position: left center;
      &:last-child{
        border-bottom: 0;
      }
      .right{
        background-image: url('/image/icon/right.png');
        background-repeat: no-repeat;
        background-position: right center;
        padding-right: 18px;
      }
    }
    .coupon{
      background-image: url('/image/icon/coupon.png');
    }
    .cion{
      background-image: url('/image/icon/cion.png');
    }
    .remarks{
      background-image: url('/image/icon/remark.png');
    }
  }
  .result-box{
    margin: 8px 0;
    padding:15px ;
    background: #fff;
    >div{
      width: 100%;
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: #807F7F;
      margin-bottom: 10px;
      .price{
        color: #4C4C4C;
      }
      &:last-child{
        margin-bottom: 0;
      }
    }
    .total{
      color: #000;
      font-weight: 600;
      font-size: 14px;
    }
  }
}
.footer{
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  .total{
    font-size: 16px;
    font-weight: 600;
  }
  .van-button{
    border-radius: 6px;
    color:#fff;
    height: 44px;
    line-height: 44px;
    font-size: 16px;
  }
}

  .product-item-sku{
    width: 100%;
    font-size: 14px;
    display: flex;
    padding-bottom: 11px;
  }
</style>