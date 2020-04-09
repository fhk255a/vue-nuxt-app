<template>
  <van-grid :column-num="num" :border="false" class="vue-nuxt-components-nav">
    <van-grid-item
      v-for="(item,index) in data"
      :key="index"
      :icon="item.icon"
      :text="item.title"
    >
      <template v-if="!item.icon">
        <img class="img" :src="item.image"/>
        <span >{{item.title}}</span>
      </template>
    </van-grid-item>
  </van-grid>
</template>

<script>
export default {
  props:{
    data:{
      type:Array,
      default:()=>[]
    },
    num:{
      type:Number,
      default:()=>5
    }
  }
}
</script>

<style lang="scss">
.vue-nuxt-components-nav{
  background: #fff;
  padding: 0 10px;
  .van-grid-item__content{
    padding: 18px 0;
    background: #fff;
    font-size: 12px;
    .img{
      width: 48px;
      height: 48px;
      border-radius: 24px;
      margin-bottom: 10px;
    }
  }
}
</style>