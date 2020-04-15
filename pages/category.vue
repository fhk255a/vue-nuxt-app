<template>
  <div class="vue-nuxt-page-category">
    <Header :left="true" title="分类" :back="true" :right="true" :shadow="true"></Header>
    <div class="page-body">
      <div class="vue-nuxt-categroy-left">
        <ul class="category-list">
          <li :class="['category-list-item',currentCategoryData.id == item.id?'active':'']" @click="openCategoryItem(item,index)" v-for="(item,index) in categoryList" :key="item.id">
            <span>{{item.label}}</span>
          </li>
        </ul>
      </div>
      <div class="vue-nuxt-category-right">
        <ul class="category-content-list" v-if="currentCategoryData && currentCategoryData.children">
          <li class="category-content-item" v-for="(item,index) in currentCategoryData.children" :key="item.id">
            <div class="title">{{item.label}}</div>
            <ul class="category-content-item-list" v-if="item.children">
              <li v-for="(it,id) in item.children" :key="it.id">
                <div class="image">
                  <img src="/image/icon/shopLogo.png" v-load-img="it.imgUrl" class="img" alt="">
                </div>
                <p class="info">
                  {{it.label}}
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <Tabbar/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import http from '@/common/http.js';
import Tabbar from '@/components/Tabbar.vue';
export default {
  components:{
    Header,
    Tabbar
  },
  methods:{
    openCategoryItem(item,index){
      this.currentCategoryData = {...item};
    }
  },
  mounted(){
    this.openCategoryItem(this.categoryList[0],0);
  },
  async asyncData(context) {
    let res = await http.get('/category/list');
    if(res && res.code==200){
      console.log(res);
      return {
        categoryList:res.data,
        currentCategoryData:res.data[0],
      }
    }else{
      return {
        categoryList:[],
        currentCategoryData:{}
      }
    }
  }
}
</script>

<style lang="scss">
.vue-nuxt-page-category{
  .page-body{
    position: relative;
    padding: 49px 0;
    max-height: calc(100vh - 98px);
    height: calc(100vh - 98px);
    font-size: 14px;
    .vue-nuxt-categroy-left{
      position: absolute;
      left: 0;
      width: 100px;
      padding-right: 10px;
      top: 50px;
      z-index: 99;
      background: #f8f8f8;
      overflow-y:scroll;
      bottom:50px;
      .category-list{
        max-width: 100px;
        width: 100px;
        flex-direction: column;
        display: flex;
        .category-list-item{
          height: 68px;
          display: flex;
          flex-direction: column;
          text-align: center;
          align-items: center;
          justify-content: center;
          border-left: 4px solid #f8f8f8;
        } 
        .active{
          background: #fff;
          border-color:#FD6F04;
          span{
            color: #FD6F04;
          }
        }
      }
    }
    .vue-nuxt-category-right{
      position: absolute;
      left: 100px;
      right: 0;
      top: 50px;
      z-index: 109;
      background: #fff;
      bottom: 50px;
      .category-content-list{
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        .category-content-item{
          border-bottom: 8px #f0f0f2 solid; 
          background: #fff;
          .title{
            padding: 8px 15px;
            border-bottom:rgba(227,227,230,1) 1px solid ;
            color: #232323;
            font-size: 14px;
            font-weight: 40 0;
          }
          .category-content-item-list{
            padding: 15px;
            display: flex;
            >li{
              text-align: center;
              margin-right: 15px;
              .image{
                width: 72px;
                height: 72px;
              }
              .info{
                height: 27px;
                margin-top: 5px;
                line-height: 13px;
                font-size: 12px;
                color: #5A5A5A;
                font-weight: 400;
              }
            }
          }
          &:last-child{
            border-bottom: 0; 
          }
        }
      }
    }
  }
}
</style>