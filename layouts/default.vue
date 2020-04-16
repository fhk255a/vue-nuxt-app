<template>
  <div class="default-page">
    <nuxt />
    <Loading v-show="$store.state.function.loading"/>
  </div>
</template>
<script>
import Loading from '@/components/Loading.vue';
export default {
  components:{
    Loading
  },
  mounted(){
    const local=(key)=>{ return window.localStorage.getItem(key) };
    if(!this.$store.state.user.userInfo.id){
      this.$store.commit('user/userInfo',JSON.parse(local('nuxt-userInfo')));
    }
    if(this.$store.state.user.address.length<1){
      this.$store.commit('user/address',JSON.parse(local('nuxt-address')));
    }
    if(this.$store.state.user.token==''){
      this.$store.commit('user/token',JSON.parse(local('nuxt-token')));
    }
  }
}
</script>

<style lang="scss">
.default-page{
  background: #f0f0f2;
}
</style>
