<template>
  <div class="vue-nuxt-components-little-banner" :style="{background:background}">
    <template v-if="data.length>1">
      <van-swipe :style="{height:height/37.5+'rem'}" @change="clickBanner" 
        class="vue-nuxt-components-banner" :autoplay="time" indicator-color="white">
        <van-swipe-item v-for="(item,index) in data" :key="index" >
          <img class="img" v-load-img="item.image" src="/image/image.png"/>
        </van-swipe-item>
      </van-swipe>
    </template>
    <template v-else>
      <div class="little-banner" :style="{height:height/37.5+'rem'}"> 
        <img class="img" v-load-img="data[0].image" src="/image/image.png"/>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  methods:{
    clickBanner(){

    }
  },
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
      default:()=>95
    },
    background:{
      type:String,
      default:()=>'transparent'
    }
  },
}
</script>

<style lang="scss">
.vue-nuxt-components-little-banner{
  padding: 10px 12px;
  .vue-nuxt-components-banner, .little-banner{
    width: 100%;
    overflow: hidden;
    border-radius: 6px;
  }
}
</style>