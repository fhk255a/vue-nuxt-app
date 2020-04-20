<template>
  <div class="vue-nuxt-page-account">
    <van-tag class="user-id">
      {{userInfo.id?userInfo.id:'xxxxxx'}}
    </van-tag>
    <div class="page-header">
      <div class="user-img">
        <img class="img" src="/image/image.png" v-load-img="userInfo && userInfo.head" alt="">
      </div >
      <div class="info">
        <p>
          <span v-if="userInfo.id">{{userInfo.nickname}}</span>
          <span v-else @click="$router.push('/login')">去登录</span>
        </p>
        <p class="id" v-if="userInfo">ID:{{userInfo.id}}</p>
      </div>
    </div>
    <div class="page-body">
      <div class="box">
        <div class="list-item" @click="$router.push('/user/order')"
            style="border-bottom: 0.5px solid #d9d9d9bf;backgroundImage:url('/image/user/user_1.png')">
          <div class="left" >我的订单({{userInfo.orderNum?userInfo.orderNum:0}})</div>
          <div class="right"></div>
        </div>
        <div class="order-list">
          <div class="order-item-icon">
            <img class="img" src="/image/user/orderStatus_1.png" alt="">
            <span>待付款</span>
            <span class="van-info">{{userInfo.unPaid}}</span>
          </div>
          <div class="order-item-icon">
            <img class="img" src="/image/user/orderStatus_2.png" alt="">
            <span>待发货</span>
            <span class="van-info">{{userInfo.notShip}}</span>
          </div>
          <div class="order-item-icon">
            <img class="img" src="/image/user/orderStatus_3.png" alt="">
            <span>待收货</span>
            <span class="van-info">{{userInfo.shiped}}</span>
          </div>
          <div class="order-item-icon">
            <img class="img" src="/image/user/orderStatus_4.png" alt="">
            <span>待退款</span>
            <span class="van-info">{{userInfo.overed}}</span>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="list-item" @click="openItem(item)" :style="{backgroundImage:`url(${item.icon})`}" v-for="(item,index) in userList" :key="item.path">
          <div :class="['left']" >
            {{item.left}}
          </div>
          <div class="right">
            {{item.right}}
          </div>
        </div>
      </div>
      <div class="box">
        <div class="list-item" @click="openItem(item)" :style="{backgroundImage:`url(${item.icon})`}" v-for="(item,index) in setList" :key="item.path">
          <div :class="['left']" >
            {{item.left}}
          </div>
          <div class="right">
            {{item.right}}
          </div>
        </div>
      </div>
      <div class="box">
        <div class="list-item" @click="openItem(item)" :style="{backgroundImage:`url(${item.icon})`}" v-for="(item,index) in system" :key="item.path">
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
    <van-popup  v-model="dialog"  :style="{ width: '80%' }">
      <div class="work">
        <div style="position:relative">
          <p>疫情当头</p>
          <p>直接被裁</p>
          <p>现找工作</p>
          <p>若被相中</p>
          <p>请联系我</p>
          <img style="position: absolute;right: 30px;top: 0px;" src="http://img.fhk255.cn/20200420/15873694254839773x100.jpg" alt="">
        </div>
        <p>电话：<a href="tel:13226627208" >13226627208</a></p>
        <p>QQ：<a href="javascript:void(0);" @click="openQQ">215537936</a></p>
        <p>微信：fhk255</p>
        <p class="color-red">更多设置，请PC端登录运营后台</p>
        <p class="color-red">http://vue-admin.fhk255.cn</p>
      </div>
    </van-popup>
  </div>
</template>

<script>
import USER from '@/api/user';
import Tabbar from '@/components/Tabbar.vue';
export default {
  components:{
    Tabbar
  },
  data(){
    return{
      dialog:false,
      userList:[
        {icon:'/image/user/user_2.png',left:'我的信息',id:'userinfo'},
        {icon:'/image/user/user_3.png',left:'我的金币',id:'cion',right:0},
        {icon:'/image/user/user_5.png',left:'我的收藏',id:'collect',right:0},
        {icon:'/image/user/user_6.png',left:'优惠券',id:'coupon',right:0},
      ],
      setList:[
        {icon:'/image/user/user_7.png',left:'我的地址',id:'address',right:0},
        {icon:'/image/user/user_8.png',left:'客服',id:'kefu'},
        {icon:'/image/user/user_9.png',left:'我的二维码',id:'qr',right:'UD12345'},
      ],
      system:[
        {icon:'/image/user/user_10.png',left:'提问跟解答',id:'faq'},
        {icon:'/image/user/user_11.png',left:'设置',id:'set'},
      ],
      userInfo:{}
    }
  },
  mounted() {
    this.$store.commit('function/loading',true);
    USER.getUserInfo().then(res=>{
      if(res.code==200){
        this.userInfo = res.data;
        this.userList[1].right = res.data.cion;
        this.userList[2].right = res.data.collectNum;
        this.setList[0].right = res.data.addressNum;
      }
    }).catch(err=>{
      this.$toast({message:err,icon:'error'});
    }).finally(()=>{
      this.$store.commit('function/loading',false);
    })
  },
  methods:{
    openQQ(){
      window.location.href = "mqqwpa://im/chat?chat_type=wpa&uin=215537936&version=1&src_type=web&web_src=oicqzone.com";
    },
    openItem(item){
      if(item.id == 'address'){
        this.$router.push('/user/address');
      }
      else if(item.id == 'collect'){
        this.$router.push('/user/collect');
      }
      else if(item.id == 'set'){
        this.dialog = true;
      }
      else{
        this.$toast({message:'Joker没时间做',icon:'warning'});
      }
    }
  },
  // computed:{
  //   userinfo(){
  //     return this.$store.state.user.userInfo;
  //   }
  // }
}
</script>

<style lang="scss">
.vue-nuxt-page-account{
  width: 100%;
  max-height: 100vh;
  position: relative;
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
      .order-item-icon{
        position: relative;
      }
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
      overflow: hidden;
      min-width: 78px;
      border-radius: 39px;
      margin-right: 15px;
      height: 78px;
      border:2px solid #fff;
    }
    .last-time{
      font-size: 12px;
      color: #fff;
      font-weight: lighter;
      margin-top: 5px;
    }
    .price{
      font-size: 12px;
      font-weight: lighter;
    }
    .info{
      display: flex;
      flex-direction: column;
      height: 50px;
      justify-content: space-around;
      font-size:18px;
      font-weight: 600;
      color: #fff;
      >p{
        margin: 5px;
      }
      .id{
        font-size: 12px;
        font-weight:lighter;
      }
    }
  } 
  .page-body{
    padding-bottom: 48px;
  }
  .user-id{ 
    position: absolute;
    left: 0;
    top:20px;
  }
  .work{
    border-radius: 18px;
    padding:15px;
    font-size: 16px;
    p{
      line-height: 1.5;
      color: #333;
    }
    .color-red{
      color: crimson;
    }
  }
}
</style>