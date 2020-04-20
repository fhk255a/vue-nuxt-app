<template>
  <div class="home-layout">
    <Header type="search" :back="false" :right="true" :left="true">
      <div slot="left">
        <van-icon size="26" name="user-circle-o" @click="$router.push('/login')"/>
      </div>
      <div slot="right">
        <van-icon name="question-o" size="26" @click="jokerInfoDialog=true" />
      </div>
    </Header>
    <div class="container">
      <nuxt />
    </div>
    <Tabbar />
    <Loading v-show="$store.state.function.loading"/>
    <van-popup v-model="jokerInfoDialog" position="right" :style="{ width: '50vw' ,height:'100%'}" >
      <ul class="joker-info">
        <li>该项目是一个电商项目</li>
        <li>有前端<van-tag plain type="primary">Vue-Nuxt</van-tag></li>
        <li>运营后台<van-tag plain type="primary">Vue-Admin</van-tag></li>
        <li>后端服务<van-tag plain type="primary">Node-Koa</van-tag></li>
        <li>
          <p>主要架构是：</p>
          <van-tag plain>Nuxt</van-tag>
          <van-tag plain>Vue</van-tag>
          <van-tag plain>Axios</van-tag>
        </li>
        <li>
          <p>GitHub</p>
          <p>当前项目地址：</p>
          <p>
            <a href="https://github.com/fhk255a/vue-nuxt-app">当前项目</a>
          </p>
          <p>服务端项目地址：</p>
          <p>
            <a href="https://github.com/fhk255a/vud-admin-server">服务端</a>
          </p>
          <p>运营后台项目地址</p>
          <p>
            <a href="https://github.com/fhk255a/vue-admin">运营后台</a>
          </p>
        </li>
      </ul>
    </van-popup>
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue';
import Header from '@/components/Header.vue';
import Tabbar from '@/components/Tabbar.vue';
export default {
  components:{
    Header,
    Tabbar,
    Loading
  },
  data(){
    return{
      jokerInfoDialog:false
    }
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
  .joker-info{
    padding: 15px;
    li{
      line-height: 1.5;
      margin: 10px 0;
    }
    font-size: 14px;
  }
}
</style>