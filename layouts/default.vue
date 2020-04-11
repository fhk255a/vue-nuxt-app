<template>
  <div>
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
}
</script>

<style>
</style>
