<template>
  <div class="vue-nuxt-page-category">
    <Header :left="true" title="店铺列表" :back="true" :right="true" :shadow="true"></Header>
    <div class="page-body">
      <div class="vue-nuxt-categroy-left">
        <ul class="category-list">
          <li class="category-list-item">
            <span>测试分类</span>
          </li>
          <li class="category-list-item active">
            <span>测试分类</span>
          </li>
        </ul>
      </div>
      <div class="vue-nuxt-category-right">
        <ul class="category-content-list">
          <li class="category-content-item">
            <div class="title">标题</div>
            <ul class="category-content-item-list">
              <li>
                <div class="image">
                  <img src="/image/icon/shopLogo.png" class="img" alt="">
                </div>
                <p class="info">
                  文本
                </p>
              </li>
            </ul>
          </li>
          <li class="category-content-item">
            <div class="title">标题</div>
            <ul class="category-content-item-list">
              <li>
                <div class="image">
                  <img src="/image/icon/shopLogo.png" class="img" alt="">
                </div>
                <p class="info">
                  文本
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
import Tabbar from '@/components/Tabbar.vue';
export default {
  components:{
    Header,
    Tabbar
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
        }
      }
    }
    .vue-nuxt-category-right{
      position: absolute;
      left: 100px;
      right: 0;
      top: 50px;
      bottom: 50px;
      .category-content-list{
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        .category-content-item{
          margin-bottom: 8px;
          background: #fff;
          .title{
            padding: 8px 15px;
            border-bottom:rgba(227,227,230,1) 1px solid ;
            color: #232323;
            font-size: 16px;
            font-weight: 600;
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
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
</style>