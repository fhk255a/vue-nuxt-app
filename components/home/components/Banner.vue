<template>
  <van-swipe :style="{height:height/37.5+'rem'}" @change="clickBanner" class="vue-nuxt-components-banner" :autoplay="time" indicator-color="white">
    <van-swipe-item v-for="(item,index) in data" :key="index" >
      <img class="img" v-load-img="item.image" src="/image/image.png"/>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  props:{
    time:{
      type:Number,
      default:()=>3000
    },
    data:{
      type:Array,
      default:()=>[]
    },
    height:{
      type:Number,
      default:()=>150
    }
  },
  methods:{
    clickBanner(index){
      
    }
  }
}
</script>

<style lang="scss">
.img{
  width: 100%;
  height: 100%;
}
</style>