<template>
  <div class="vue-nuxt-page-address-list">
    <Header :left="true" title="我的地址" :back="true" :right="true" :shadow="true"></Header>
    <div class="page-body">
      <div class="address-list">
        <div class="address-item" @click="orderDetails(item)" v-for="item in addressList" :key="item.id">
          <div class="name">
            <div>{{item.name}}</div>
            <div class="color default" v-if="item.isDefault">
              默认地址
            </div>
          </div>
          <div class="address">
            {{item.province}}{{item.city}}{{item.county}}{{item.country}}{{item.addressDetail}}
          </div>
          <div class="phone">
            <div>{{item.tel}}</div>
            <img class="edit-btn img" style="width:16px;height:16px" src="/image/icon/edit.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="footer" @click="add">
      添加地址
    </div>
    <van-popup
      v-model="showAddressDialog"
      position="bottom"
      :style="{ height: '70vh' }"
    >
      <AddressPage @save="submit" :data="currentData" @delete="deleteAddress"/>
    </van-popup >
  </div>
</template>

<script>
import AddressPage from '@/components/address/index';
import Header from '@/components/Header';
import {ADDRESS} from '@/api/user';
export default {
  components:{
    Header,
    AddressPage
  },
  methods:{
    deleteAddress(item){
      this.$store.commit('function/loading',true);
      const res = ADDRESS.delete(item.id).then(res=>{
        this.$toast(res.msg);
        if(res.code== 200){
          this.list();
          this.showAddressDialog = false;
        }
      }).catch(err=>{
        this.$toast(err);
      })
      this.$store.commit('function/loading',false);
    },
    list(){
      this.$store.commit('function/loading',true);
      const res = ADDRESS.list().then(res=>{
        if(res.code== 200){
          this.addressList = res.data;
        }else{
          this.$toast(res.msg);
        }
      }).catch(err=>{
        this.$toast(err);
      })
      this.$store.commit('function/loading',false);
    },
    // 添加地址
    add(){
      this.currentData = {id:null};
      this.showAddressDialog = true;
    },
    orderDetails(item){
      this.currentData = {...item};
      this.showAddressDialog = true;
    },
    submit(item){
      this.$store.commit('function/loading',true);
      if(item.id){
        ADDRESS.save(item).then(res=>{
          if(res.code== 200){
            this.$toast(res.msg);
            this.showAddressDialog = false;
            this.list();
          }else{
            this.$toast(res.msg);
          }
        }).catch(err=>{
          this.$toast(err);
        })
        this.$store.commit('function/loading',false);
      }else{
        // 添加
        ADDRESS.create(item).then(res=>{
          if(res.code== 200){
            this.$toast(res.msg);
            this.showAddressDialog = false;
            this.list();
          }else{
            this.$toast(res.msg);
          }
        }).catch(err=>{
          this.$toast(err);
        })
        this.$store.commit('function/loading',false);
      }
    }
  },
  mounted(){
    this.list();
  },
  data(){
    return{
      currentData:{},
      showAddressDialog:false,
      addressList:[],
    }
  }
}
</script>

<style lang="scss" scoped>
.page-body{
  padding-top: 48px;
  padding-bottom: 48px;
  min-height: calc(100vh - 96px);
  font-size: 14px;
  .address-item{
    position: relative;
    background: #fff;
    padding: 15px;
    font-size: 14px;
    .name{
      display: flex;
      color: #232323;
      font-weight: 600;
      width: 100%;
      font-size: 16px;
      margin-bottom: 5px;
      justify-content: space-between;
      .default{
        border:1px solid #fd750f;
        border-radius: 5px;
        font-size: 12px;
        font-weight: lighter;
        padding:2px 4px;
      }
    }
    .address{
      line-height: 1.5;
      color: #666;
      margin-bottom: 5px;
    }
    .phone{
      color: #999;
    }
    .edit-btn{
      position: absolute;
      right: 15px;
      bottom:15px;
    }
    margin-bottom: 8px;
  }
}
.footer{
  background: #fd750f;
  height: 48px;
  line-height: 48px;
  font-size: 16px;
  color: #fff;
  font-weight: 600;
  text-align: center;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>