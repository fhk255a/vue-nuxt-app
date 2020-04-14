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
    console.log(window)
  }
}
</script>

<style lang="scss">
.default-page{
  background: #f0f0f2;
}
</style>
