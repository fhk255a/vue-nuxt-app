<template>
  <div class="vue-nuxt-components-address">
    <van-nav-bar title="我的地址">
      <template #left>
        <img src="/image/icon/left.png" alt=""> 
      </template>
      <template #right>
        <img src="/image/icon/add.png" alt=""> 
      </template>
    </van-nav-bar>
    <div class="address-list">
      <li :class="['address-item',id==item.id?'active':'']" v-for="(item) in getAddress" :key="item.id" @click="close(item)">
        <p class='name'>{{item.name}}</p>
        <p class="content">{{item.content}}</p>
        <p class="phone">{{item.phone}}</p>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    close(item){
      this.$emit('close',item);
    }
  },
  props:{
    data:{
      type:Array,
      default:()=>[{
        id:1,
        name:'Joker',
        address:'广州市',
        phone:'13226627208'
      }]
    },
    id:{
      type:Number,
      default:()=>0
    },
  },
  computed: {
    getAddress(){
      // return window.localStorage.getItem('nuxt-address')?JSON.parse(window.localStorage.getItem('nuxt-address')):[];
      return this.$store.state.user.address;
    }
  },
} 
</script>

<style lang="scss">
.vue-nuxt-components-address{
  .van-nav-bar.van-nav-bar__left , .van-nav-bar .van-nav-bar__right{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
  .address-list{
    list-style: none;
    overflow-y: scroll;
    padding: 15px;
    padding-top: 0;
    .address-item{ 
      border-bottom: 1px solid #eee;
      padding: 15px 0;
      padding-right: 40px;
      background-repeat: no-repeat;
      background-position: right center;
      .name{
        color: #232323;
        font-size: 16px;
        margin-bottom: 5px;
      }
      .content{
        font-size: 14px;
        color: #666;
        line-height: 1.5;
        margin-bottom: 5px;
      }
      .phone{
        font-size: 14px;
        color: #999;
      }
    }
    .active{
      background-image: url('/image/icon/select.png');
    }
  }
}
</style>