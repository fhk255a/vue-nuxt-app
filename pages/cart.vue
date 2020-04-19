<template>
  <div class="vue-nuxt-page-cart">
    <Header :left="true" title="我的购物车" :back="true" :right="true" :shadow="true"></Header>
    <div class="page-body">
      <div class="cart-list">
        <div class="cart-item" v-for="shop in cartList" :key="shop.id">
          <div class="cart-item-shop-title">
            <van-checkbox v-model="shop.status" @change="changeShop(shop)">
              <template #icon="props">
                <img class="img-icon" :src="props.checked ? selected : unselected"/>
              </template>
              <div class="title">
                {{shop.shopName}}
              </div>
            </van-checkbox>
          </div>
          <div class="cart-item-shop-body">
            <div class="cart-item-product-item" v-for="product in shop.products" :key="product.id">
              <div class="product-item-container">
                <van-checkbox :name="product.skuId" v-model="product.status" @change="changeProduct(shop,product)">
                  <template #icon="props">
                    <img class="img-icon" :src="props.checked ? selected : unselected"/>
                  </template>
                </van-checkbox>
                <div class="product-image">
                  <img :src="product.mainImage" class="img" alt="">
                </div>
                <div class="product-info">
                  <div class="product-title van-multi-ellipsis--l2">{{product.title}}</div>
                  <div class="product-sku-item-body">
                    <div class="sku-item-div">
                      <p class="sku-title">{{product.label}}</p>
                      <!-- <p class="sku-price p-icon">{{product.price}}</p> -->
                    </div>
                    <div class="sku-item-num">
                      <van-stepper v-model="product.num" 
                        clickable integer 
                        @focus.stop="showKeyBoard = true"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
    <div class="footer" @click="buyBtn">
      立即购买
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
import SKU from '@/api/sku';
import CART from '@/api/cart';
import Header from '@/components/Header';
export default {
  components:{
    Header
  },
  data(){
    return{
      showKeyBoard:false,
      checked:false,
      productNum:'',
      selected:'/image/icon/select-1.png',
      unselected:'/image/icon/select-2.png',
      cartList:[]
    }
  },
  mounted(){
    this.getCart()
  },
  methods:{
    changeShop(item){
      item.products.map(it=>{
        it.status = item.status;
      });
    },
    changeProduct(shop,item){
      const selectIndex = shop.products.filter(item=>!item.status);
      // if(selectIndex.length==shop.products.length){   
      //   shop.status = false;
      // }else{
      //   shop.status = true;
      //   // item.status = false;
      // }
    },
    // 立即购买
    buyBtn(){
      let skuIds = [];
      for(let i in this.cartList){
        let shop = this.cartList[i];
        for(let j in shop.products){
          let product = shop.products[j];
          if(!product.status){
            skuIds.push({
              id:product.skuId,
              cartId:product.cartId,
              num:product.num,
            })
          }
        }
      }
      if(skuIds.length<1){
        this.$toast.fail('请选择商品');
        return;
      }
      window.localStorage.setItem('currentBuyList',JSON.stringify(skuIds));
      this.$store.commit('product/currentBuyList',skuIds);
      this.$router.push('/product/checkout');
    },
    getCart(){
      this.$store.commit('function/loading',true);
      CART.list().then(res=>{
        if(res.code== 200){
          this.cartList = res.data;
        }
      }).catch(err=>{

      }).finally(()=>{
        this.$store.commit('function/loading',false);
      })
    },
    onInput(d){
      this.productNum+=''+d;
    },
    onDelete(){

    },
  }
}
</script>

<style lang="scss" scoped>
.vue-nuxt-page-cart{
  .van-checkbox{
    min-width: 24px;
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
        font-size: 16px;
        font-weight: 600;
        background: #fff;
        margin-bottom: 8px;
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
            margin-bottom: 15px;
            &:last-child{
              margin-bottom: 0;
            }
            .product-item-container{
              display: flex;  
            }
            .product-title{
              color: #4C4C4C;
              word-break: break-all;
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
  .product-sku-item-body{
    padding:0 15px;
    .sku-item-div{
      flex:1;
      max-width: 200px;
    }
    .sku-title{
      background: #f7f8fa;
      padding: 3px 10px;
      color: #5C5C5C;
      margin: 5px 0;
      font-size: 14px;
      line-height: 1.5;
      font-weight: lighter;
    }
    .sku-price{
      font-weight: 600;
      color: #292929;
    }
    flex:1;
  }
  .footer{
    position: fixed;
    left: 0;
    color: #fff;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    line-height: 48px;
    right: 0;
    bottom: 0;
    background: #fd6f04;
    height: 48px;
  }
}
</style>
<style lang="scss">
  .product-sku .van-stepper{
    text-align: right;
    .van-stepper__minus ,.van-stepper__plus ,.van-stepper__input{
      background: #fff;
      border:1px solid #eee;
    }
  }
</style>