<template>
  <div class="nuxt-page-login">
    <Header :left="true">
      <img style="margin-top:6px" slot="left" src="/image/icon/back.png" />
    </Header>
    <div class="page-container">
      <div class="login" v-if="loginStatus">
        <div class="login-img">
          <img src="/image/home/logo.png" alt="">
        </div>
        <div class="container">
          <div class="input-item">
            <span class="label">手机</span>
            <van-field class="input" clearable v-model="login.username" placeholder="请输入手机号"></van-field>
          </div>
          <div class="input-item">
            <span class="label">密码</span>
            <van-field class="input" clearable type="password" v-model="login.password" placeholder="请输入密码"></van-field>
          </div>
        </div>
        <div class="input-item btns">
          <van-button type="default" class="btn" @click="loginBtn">登录</van-button>
        </div>
        <p >没有账号? <span class="color" @click="loginStatus=false">去注册</span></p>
      </div>
      <div class="register" v-else>
        <div class="container">
          <div class="login-title">
            注册
          </div>
          <div class="input-item">
            <span class="label">手机</span>
            <van-field class="input" clearable v-model="register.username" placeholder="请输入手机号"></van-field>
          </div>
          <div class="input-item">
            <span class="label">密码</span>
            <van-field class="input" clearable type="password" v-model="register.password" placeholder="请输入密码"></van-field>
          </div>
          <div class="input-item">
            <span class="label">昵称</span>
            <van-field class="input" clearable type="password" v-model="register.nickname" placeholder="请输入昵称"></van-field>
          </div>
        </div>
        <div class="input-item btns">
          <van-button type="default" class="btn" @click="registerBtn">注册</van-button>
        </div>
        <p >已有账号? <span class="color" @click="loginStatus=true">去登录</span></p>
      </div>
    </div>
  </div>
</template>

<script>
import USER from '@/api/user';
import Header from '@/components/Header';
import {setToken} from '@/common/token';
export default {
  middleware: 'token',
  components:{
    Header
  },
  methods:{
    backIcon(){
      this.$router.go(-1);
    },
    registerBtn(){
      if(this.register.username.trim() == ''){
        this.$toast('请输入手机号');
        return;
      }
      if(this.register.password.trim() == ''){
        this.$toast('请输入密码');
        return;
      }
      this.$store.commit('function/loading',true);
      USER.register(this.register.username,this.register.password,this.register.nickname).then(res=>{
        if(res.code==200){
          this.$toast('注册成功');
          this.loginStatus = true;
        }else{
          this.$toast(res.msg);
        }
      }).catch(err=>{

      }).finally(()=>{
        this.$store.commit('function/loading',false);
      })
    },
    loginBtn(){
      if(this.login.username.trim() == ''){
        this.$toast('请输入手机号');
        return;
      }
      if(this.login.password.trim() == ''){
        this.$toast('请输入密码');
        return;
      }
      this.$store.commit('function/loading',true);
      USER.login(this.login.username,this.login.password).then(res=>{
        if(res.code==200){
          window.localStorage.setItem('nuxt-userInfo',JSON.stringify(res.data.userInfo));
          window.localStorage.setItem('nuxt-address',JSON.stringify(res.data.address));
          // window.localStorage.setItem('nuxt-token',JSON.stringify(res.data.token));
          this.$store.commit('user/userInfo',res.data.userInfo);
          this.$store.commit('user/address',res.data.address);
          this.$store.commit('user/token',res.data.token);
          setToken(res.data.token)
          this.$toast.success('登陆成功');
          this.$router.push('/');
        }else{
          this.$toast(res.msg);
        }
      }).catch(err=>{

      }).finally(()=>{
        this.$store.commit('function/loading',false);
      })
    }
  },
  data(){
    return{
      loginStatus:true,
      login:{
        password:'',
        username:'',
      },
      register:{
        password:'',
        username:'',
        nickname:'',
      },
    }
  },
  mounted(){
     let token = window.localStorage.getItem('nuxt-token');
     if(token){
       this.$router.push('/');
     }
  }
}
</script>

<style lang="scss" scoped>
.nuxt-page-login{
  min-height: 100vh;
  max-height: 100vh;
  .vue-nuxt-components-header{
    background: transparent;
  }
  .page-container{
    padding-top: 48px;
  }
  .login-img{
    width: 100px;
    height: 100px;
    margin: 0 auto 80px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .container{
    padding: 0 20px;
    margin: 0 auto;
    .input-item{
      margin-bottom: 15px;
      .label{
        font-size: 17px;
        margin:10px 0;
        display: block;
      }
    }
    .input{
      height: 58px;
      line-height: 22px;
      font-size: 17px;
      padding: 18px 15px;
      border-radius: 6px;
      font-weight: 400;
      border:1px solid rgba(204,204,204,1);
    }
  }
  .btns{
    text-align: center;
  }
  .btn{
    height: 58px;
    text-align: center;
    width: 200px;
    background: #FD6F04;
    border-radius:29px;
    font-weight: 600;
    font-size: 17px;
    color: #fff;
  }
  .login-title{
    font-size: 34px;
    font-weight: 600;
    margin-top: 17px;
    margin-bottom: 100px;
  }
  .login .container{
    margin-bottom: 174px;
  }
  .register .container{
    margin-bottom: 114px;
  }
  p{
    font-size: 16px;
    color: #3C3C43;
    margin-top: 40px;
    text-align: center;
  }

}
</style>