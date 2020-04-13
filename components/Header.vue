<template>
  <div :class="['vue-nuxt-components-header',shadow?'header-shadow':'']">
    <div class="left" v-if="left" @click="$emit('left')">
      <div v-if="back" @click="backBefore">
        <img src="/image/icon/back.png" alt="">
      </div>
      <slot v-else name="left" />
    </div>
    <div class="content">
      <template v-if="type=='title'">
        {{title}}
      </template>
      <template v-else>
        <van-field v-model="searchText" placeholder="搜索." />
      </template>
    </div>
    <div class="right" v-if="right" @click="$emit('right')">
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
  methods:{
    backBefore(){
      this.$router.back();
    },
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
      default:()=>true
    },
    right:{
      type:Boolean,
      default:()=>true
    },
    shadow:{
      type:Boolean,
      default:()=>false
    },
    back:{
      type:Boolean,
      default:()=>true
    }
  },
}
</script>

<style lang="scss" scoped>
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
    width: 32px;
  }
  .right{
    width: 32px;
    margin-right: 15px;
  }
  .content{
    flex:1;
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    margin: 0 16px;
    .van-cell{
      padding: 4px 12px;
      height: 32px;
      border-radius:16px;
      background-color: #F2F2F2;
    }
  }
}
.header-shadow{
  box-shadow:0px 1px 10px 0px rgba(0,0,0,0.08);
}
</style>