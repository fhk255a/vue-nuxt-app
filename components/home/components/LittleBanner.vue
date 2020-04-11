<template>
  <div class="vue-nuxt-components-little-banner" :style="{background:background}">
    <template v-if="data.length>1">
      <van-swipe :style="{height:height/37.5+'rem'}" @change="clickBanner" 
        class="vue-nuxt-components-banner" :autoplay="time" indicator-color="white">
        <van-swipe-item v-for="(item,index) in data" :key="index" >
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
    </template>
    <template v-else>
      <div class="little-banner" :style="{height:height/37.5+'rem'}"> 
        <template v-if="data[0].event=='url'">
          <a :href="data[0].eventValue">
            <img class="img" v-load-img="data[0].image" src="/image/image.png"/>
          </a>
        </template>
        <template v-else-if="data[0].event=='product'">
          <nuxt-link :to="`details/${data[0].eventValue}`">
            <img class="img" v-load-img="data[0].image" src="/image/image.png"/>
          </nuxt-link>
        </template>
        <template v-else-if="data[0].event=='collcetion'">
          <nuxt-link :to="`collcetion/${data[0].eventValue}`">
            <img class="img" v-load-img="data[0].image" src="/image/image.png"/>
          </nuxt-link>
        </template>
        <template v-else>
          <img class="img" v-load-img="data[0].image" src="/image/image.png"/>
        </template>
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