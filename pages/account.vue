<template>
  <div class="vue-nuxt-page-account">
    <div class="page-header">
      <div class="user-img">
        <img class="img" src="" alt="">
      </div >
      <div class="info">
        <p>Joker</p>
        <p class="id">ID:249249</p>
      </div>
    </div>
    <div class="page-body">
      <div class="box">
        <div class="list-item" style="border-bottom: 0.5px solid #d9d9d9bf;backgroundImage:url('/image/user/user_1.png')">
          <div class="left" >我的订单</div>
          <div class="right"></div>
        </div>
        <div class="order-list">
          <div>
            <img class="img" src="/image/user/orderStatus_1.png" alt="">
            <span>待付款</span>
          </div>
          <div>
            <img class="img" src="/image/user/orderStatus_2.png" alt="">
            <span>待发货</span>
          </div>
          <div>
            <img class="img" src="/image/user/orderStatus_3.png" alt="">
            <span>待收货</span>
          </div>
          <div>
            <img class="img" src="/image/user/orderStatus_4.png" alt="">
            <span>待退款</span>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="list-item" :style="{backgroundImage:`url(${item.icon})`}" v-for="(item,index) in userList" :key="item.path">
          <div :class="['left']" >
            {{item.left}}
          </div>
          <div class="right">
            {{item.right}}
          </div>
        </div>
      </div>
      <div class="box">
        <div class="list-item" :style="{backgroundImage:`url(${item.icon})`}" v-for="(item,index) in setList" :key="item.path">
          <div :class="['left']" >
            {{item.left}}
          </div>
          <div class="right">
            {{item.right}}
          </div>
        </div>
      </div>
      <div class="box">
        <div class="list-item" :style="{backgroundImage:`url(${item.icon})`}" v-for="(item,index) in system" :key="item.path">
          <div :class="['left']" >
            {{item.left}}
          </div>
          <div class="right">
            {{item.right}}
          </div>
        </div>
      </div>
    </div>
    <Tabbar/>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar.vue';
export default {
  components:{
    Tabbar
  },
  data(){
    return{
      userList:[
        {icon:'/image/user/user_2.png',left:'我的信息'},
        {icon:'/image/user/user_3.png',left:'我的金币',right:0},
        {icon:'/image/user/user_5.png',left:'我的收藏',right:0},
        {icon:'/image/user/user_6.png',left:'优惠券',right:0},
      ],
      setList:[
        {icon:'/image/user/user_7.png',left:'我的地址'},
        {icon:'/image/user/user_8.png',left:'客服'},
        {icon:'/image/user/user_9.png',left:'我的二维码',right:'UD12345'},
      ],
      system:[
        {icon:'/image/user/user_10.png',left:'提问跟解答'},
        {icon:'/image/user/user_11.png',left:'设置'},
      ]
    }
  }
}
</script>

<style lang="scss">
.vue-nuxt-page-account{
  width: 100%;
  max-height: 100vh;
  min-height: 100vh;
  height: 100vh;
  background-image: url('/image/pages/bg.png');
  background-size: 100% 244px;
  background-repeat: no-repeat;
  .box{
    margin: 15px;
    background: #fff;
    border-radius: 8px;
    padding: 0 15px;
    .list-item{
      height: 48px;
      font-size: 14px;
      padding-left: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-size: 24px 24px;
      background-repeat: no-repeat;
      background-position: 0 12px ;
      border-bottom: 0.5px solid #d9d9d9bf;
      &:last-child{
        border-bottom: 0;
      }
      .right{
        font-size: 14px;
        background-image: url('/image/user/right.png');
        background-size: 16px 16px;
        background-position: right;
        background-repeat: no-repeat;
        min-height: 14px;
        min-width: 14px;
        padding-right: 14px;
        color: #A4A4A4;
      }
    }
    .order-list{
      display: flex;
      justify-content: space-between;
      padding: 15px;
      >div{
        font-size: 12px;
        display: flex;
        flex-direction: column;
        text-align: center;
        img{
          width: 44px;
          height: 44px;
        }
        span{
          margin: 5px 0;
        }
      }
    }
  }
  .page-header{
    display: flex;
    align-items: center;
    padding: 20px 30px;
    padding-top: 50px;
    .user-img{
      width: 78px;
      border-radius: 39px;
      margin-right: 15px;
      height: 78px;
      border:2px solid #fff;
    }
    .info{
      display: flex;
      flex-direction: column;
      height: 50px;
      justify-content: space-around;
      font-size:18px;
      font-weight: 600;
      color: #fff;
      .id{
        font-size: 12px;
        font-weight:lighter;
      }
    }
  } 
  .page-body{
    padding-bottom: 48px;
  }
}
</style>