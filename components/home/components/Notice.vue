<template>
  <van-notice-bar class="vue-nuxt-components-notice" 
    :scrollable="data.scroll" 
    :color="data.color" 
    :left-icon="data.icon"
    :mode="data.mode && 'closeable'"
    :style="{background:data.background}">
    <p>{{data.content}}</p>
  </van-notice-bar>
</template>

<script>
export default {
  props:{
    data:{
      type:Object,
      default:()=>{
        return{
          background:'#fffbe8',
          color:'#f08435',
          content:'项目地址：https://github.com/fhk255a/vue-nuxt-app',
          scroll:true,
          icon:'volume-o',
          close:true,
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.vue-nuxt-components-notice{
  font-size: 14px;
}
</style>