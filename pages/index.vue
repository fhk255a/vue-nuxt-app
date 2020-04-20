<template>
  <div class="vue-nuxt-page-home">
    <HomeContainer :data="pageConfig.content"/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import http from '@/common/http.js';
import HomeContainer from '@/components/home/index.vue';
export default {
  layout:'home',
  components:{
    Header,
    HomeContainer
  },
  async asyncData(context) {
    const res = await http.get('/page/10');
    if(res.code==200){
      return {
        pageConfig:res.data
      }
    }else{
      return {
        pageConfig:{
          content:[]
        }
      }
    }
  },
}
</script>

<style lang="scss">

</style>
