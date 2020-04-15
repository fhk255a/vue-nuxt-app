<template>
  <div class="vue-nuxt-product-shop">
    <Header :left="true" title="店铺列表" :back="true" :right="true" :shadow="true"></Header>
    <div class="page-body">
      <template v-for="item in tableList">
        <Shop :data="item" :key="item.id"></Shop>
      </template>
    </div>
  </div>
</template>

<script>
import http from '@/common/http.js';
import Header from '@/components/Header.vue';
import Shop from '@/components/Shop.vue';
export default {
  head(){
    return{
      title:'店铺列表',
      meta: [{
        hid: "description",
        name: "description",
        content: "v-joker店铺商品列表"
      },{
        hid: 'viewport',
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0'
      }]
    }
  },
  components:{
    Header,
    Shop
  },
  async asyncData(context) {
    let res = await http.get('/product/shop/list',{current:1,size:20});
    if(res.code==200){
      return {
        tableList:res.data.data,
        page:{
          total:res.data.total,
          size:20,
          current:1
        }
      }
    }else{
      return {
        tableList:[],
        page:{
          total:0,
          size:20,
          current:1
        }
      }
    }
  },
}
</script>

<style lang="scss">
.page-body{
  background: #f0eff2;
  min-height: calc(100vh - 48px);
  padding-top: 48px;
  padding-left: 12px;
  padding-right: 12px;
}
</style>