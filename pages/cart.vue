<template>
  <div class="vue-nuxt-page-cart">
    <Header :left="true" title="我的购物车" :back="true" :right="true" :shadow="true"></Header>
    <div class="page-body">
      <div class="cart-list">
        <div class="cart-item">
          <div class="cart-item-shop-title">
            <van-checkbox v-model="checked">
              <template #icon="props">
                <img class="img-icon" :src="props.checked ? selected : unselected"/>
              </template>
            </van-checkbox>
            <div class="title">
              6666666
            </div>
          </div>
          <div class="cart-item-shop-body">
            <div class="cart-item-product-item">
              <van-checkbox v-model="checked">
                <template #icon="props">
                  <img class="img-icon" :src="props.checked ? selected : unselected"/>
                </template>
              </van-checkbox>
              <div class="product-image">
                <img src="" class="img" alt="">
              </div>
              <div class="product-title">高中校服裤</div>
              <div class="product-sku">
                <div class="product-sku-item">
                  <van-checkbox v-model="checked">
                    <template #icon="props">
                      <img class="img-icon" :src="props.checked ? selected : unselected"/>
                    </template>
                  </van-checkbox>
                  <div class="product-sku-item-body">
                    <div>
                      <p></p>
                      <p></p>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
    <div class="footer">

    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';
export default {
  middleware: 'token',
  components:{
    Header
  },
  data(){
    return{
      checked:false,
      selected:'/image/icon/select-1.png',
      unselected:'/image/icon/select-2.png',
    }
  }
}
</script>

<style lang="scss" scoped>
.vue-nuxt-page-cart{
  .van-checkbox{
    margin-right: 15px;
    .van-checkbox__icon{
      height: auto;
    }
  }
  .page-body{
    padding-top:48px;
    padding-bottom: 48px;
    min-height: calc(100vh - 96px);
    .cart-list{
      .cart-item{
        height: 48px;
        font-size: 16px;
        font-weight: 600;
        background: #fff;
        .cart-item-shop-title{
          display: flex;
          padding:14px 15px 13px;
          align-items: center;
          background: #fff;
          .title{
            font-weight: 600;
            font-size: 16px;
          }
        }
        .cart-item-shop-body{
          padding: 15px;
          background: #fff;
          padding-top: 0;
          .cart-item-product-item{
            display: flex;
            flex-wrap: wrap;
            .product-title{
              color: #4C4C4C;
              line-height: 1.5;
              font-size: 14px;
              margin-left: 15px;
              font-weight: lighter;
            }
            .product-image{
              height: 80px;
              width: 80px;
              min-width: 80px;
              border:1px solid #eee;
              display: flex;
              border-radius: 6px;
              overflow: hidden;
              img{
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }
  }
  .product-sku{
    width: 100%;
    .product-sku-item{
      display: flex;
      margin-top: 15px;
      align-items: center;
      .product-sku-item-body{
        padding: 15px;
        border-radius: 6px;
        .sku-title{
          color: #5C5C5C;
          font-size: 14px;
          line-height: 1.5;
          font-weight: lighter;
          margin-bottom: 4px;
        }
        .sku-price{
          font-weight: 600;
          color: #292929;
        }
        background: #f8f8fa;
        flex:1;
      }
    } 
  }
  .footer{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fd6f04;
    height: 48px;
  }
}
</style>