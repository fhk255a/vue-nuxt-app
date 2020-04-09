<template>
  <div class="vue-nuxt-components-header">
    <div class="left" v-if="left">
      <slot name="left" />
    </div>
    <div class="content">
      <template v-if="type=='title'">
        {{title}}
      </template>
      <template v-if="type=='search'">
        <van-field v-model="searchText" placeholder="搜索." />
      </template>
    </div>
    <div class="right" v-if="right">
      <slot name="right"/>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      searchText:''
    }
  },
  props:{
    type:{
      type:String,
      default:()=>'title'
    },
    title:{
      type:String,
      default:()=>''
    },
    left:{
      type:Boolean,
      default:()=>false
    },
    right:{
      type:Boolean,
      default:()=>false
    },
  },
}
</script>

<style lang="scss">
.vue-nuxt-components-header{
  height: 48px;
  display: flex;
  font-size: 14px;
  position: relative;
  justify-content: center;
  align-items: center;
  background: #fff;
  position: fixed;
  top: 0;
  z-index: 999;
  left: 0;
  right: 0;
  .left{
    margin-left: 15px;
  }
  .right{
    margin-right: 15px;
  }
  .content{
    flex:1;
    margin: 0 16px;
    .van-cell{
      padding: 4px 12px;
      height: 32px;
      border-radius:16px;
      background-color: #F2F2F2;
    }
  }
}
</style>