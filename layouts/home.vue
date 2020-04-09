<template>
  <div class="home-layout">
    <Header type="search" :left="true">
      <div slot="left">左边</div>
    </Header>
    <div class="container">
      <nuxt />
    </div>
    <Tabbar />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Tabbar from '@/components/Tabbar.vue';
export default {
  components:{
    Header,
    Tabbar
  }
}
</script>

<style lang="scss" scoped>
.home-layout{
  background-color:#F0F0F2;
  >.container{
    padding-top: 48px;
    padding-bottom: 50px;
  }
}
</style>