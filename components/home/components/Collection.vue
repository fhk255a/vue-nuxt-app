<template>
  <div class="vue-nuxt-product-collection">
    <slot></slot>
    <div v-if="data.length>0" class="container">
      <template v-for="(item,index) in data">
        <div v-if="index==0" class="flex-one" :key="index">
          <div class="item-title">
            <span class="title">Juicers For Healthier You</span>
            <span class="count">3454 Products</span>
          </div>
          <template v-for="(item,index) in item.productIds" >
            <div v-if="index<3" :key="index" class="flex-one-list">
              <img class="img" v-load-img="item.mainImage" src="/image/image.png"/>
            </div>
          </template>
        </div>
        <div v-else :key="index" :class="['flex-arr w50',(index != data.length-1 && index != data.length-2)?'bb':'']">
          <span class="title">{{item.title}}</span>
          <div class="product-list">
            <template v-for="(it,ind) in item.productIds" >
              <img class="img" v-load-img="it.mainImage" v-if="ind<2" :key="ind" src="/image/image.png"/>
            </template>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    data:{
      type:Array,
      default:()=>[]
    }
  },
  mounted(){
    console.log(this.data);
  }
}
</script>

<style lang="scss">
.vue-nuxt-product-collection{
  padding: 10px;
  >.container{
    border-radius: 6px;
    display: flex;
    flex-wrap: wrap;
    // padding: 12px 0;
    background: #fff;
  }
  .flex-one{
    padding: 12px;
    display: flex;
    .item-title{
      height: 73px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
    border-bottom: 1px solid #EEEEEE;
  }
  .title{
    font-weight: 600;
    font-size:13px;
  }
  .count{
    color: #A4A4A4;
    font-size: 12px;
  }
  .flex-one-list{
    width: 74px;
    height: 74px;
    border-radius: 4px;
    min-width:74px;
    overflow: hidden;
    margin-left: 5px;
    .img{
      width: 74px;
      height: 74px;
    }
  }
  .flex-arr{
    display: flex;
    .product-list{
      padding: 12px;
    }
  }
  .w50{
    width: 50%;
    display: flex;
    box-sizing: border-box;
    padding:12px;
    flex-direction: column;
    border-right: 1px solid #EEEEEE;
    &:nth-child(2n-1){
      border-right: 0;
    }
    >.title{
      margin-bottom: 8px;
    }
    .product-list {
      overflow: hidden;
      display: flex;
      justify-content: space-between;
      padding: 0;
      img{
        width: 73px;
        height: 73px;
        border-radius: 6px;
      }
    }
    >.title{
      width: 100%;
      display: block;
    }
  }
  .bb{
    border-bottom: 1px solid #EEEEEE;
  }
}
</style>