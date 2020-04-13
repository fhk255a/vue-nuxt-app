<template>
  <div class="vue-nuxt-components-page">
    <template v-for="(item,index) in data">
      <Banner v-if="item.type=='banner'" :key="item.id" :data="item.data"/>
      <Nav v-else-if="item.type=='nav'" :key="item.id" :data="item.data"/>
      <LittleBanner v-else-if="item.type=='littleBanner'" :key="item.id" :data="item.data" />
      <Top v-else-if="item.type=='shareTop'" :title="item.showTitle" :price="item.showPrice" :key="item.id" :data="item.data">
        <ItemHeader :title="item.title" className="share-top-header" :more="true"/>
      </Top>
      <Collection v-else-if="item.type=='collection'" :key="item.id" :data="item.data">
        <ItemHeader :title="item.title" :more="true"/>
      </Collection>
      <ProductList v-else-if="item.type=='product'" :type="item.itemType" :title="item.showTitle" :remark="item.showRemark" :price="item.showPrice" :key="item.id" :data="item.data">
        <ItemHeader :title="item.title" />
      </ProductList>
      <template v-else></template>
    </template>
  </div>
</template>

<script>
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import LittleBanner from "./components/LittleBanner";
import ItemHeader from "./components/ItemHeader";
import Top from "./components/Top";
import Collection from "./components/Collection";
import ProductList from "~/components/ProductList";
export default {
  components:{
    Banner,
    Nav,
    LittleBanner,
    Top,
    ItemHeader,
    Collection,
    ProductList
  },
  props:['data'],
}
</script>

<style lang="scss">
.vue-nuxt-components-page{
  .share-top-header{
    color: #FE5427;
    font-style: italic;
    background-repeat: no-repeat;
    background-image: url('/image/home/top-icon.png');
    font-size: 18px;
    padding-left: 28px;
  }
}
</style>