<template>
  <div v-if="banner.length>0">
    <van-swipe :style="{height:height/37.5+'rem'}" @change="clickBanner" 
    class="vue-nuxt-components-banner" :autoplay="time" indicator-color="white">
      <van-swipe-item v-for="(item,index) in banner" :key="index" >
        <template v-if="item.event=='url'">
          <a :href="item.eventValue">
            <img class="img" v-load-img="item.image" src="/image/image.png"/>
          </a>
        </template>
        <template v-else-if="item.event=='product'">
          <nuxt-link :to="`details/${item.eventValue}`">
            <img class="img" v-load-img="item.image" src="/image/image.png"/>
          </nuxt-link>
        </template>
        <template v-else-if="item.event=='collcetion'">
          <nuxt-link :to="`collcetion/${item.eventValue}`">
            <img class="img" v-load-img="item.image" src="/image/image.png"/>
          </nuxt-link>
        </template>
        <template v-else>
          <img class="img" v-load-img="item.image" src="/image/image.png"/>
        </template>
      </van-swipe-item>
    </van-swipe>
  </div>
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
  data(){
    return{
      banner:[]
    }
  },
  methods:{
    clickBanner(index){
      
    }
  },
  mounted(){
    this.banner = this.data;
  }
}
</script>

<style lang="scss">
.img{
  width: 100%;
  height: 100%;
}
</style>