<template>
  <div class="vue-nuxt-app-address">
    <Header :left="true" title="确认订单页" :back="true" :right="true" :shadow="true"></Header>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      :address-info="data"
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import areaList from '@/static/js/address.js';
export default {
  data(){
    return{
      searchResult:[],
      areaList,
    }
  },
  props:{
    data:{
      data:Object,
      default:()=>{
        return {
          addressDetail:'',
          province:'',
          city:'',
          county:'',
          areaCode:'',
          postalCode:'',
          isDefault:false,
          name:'',
          tel:'',
          province:'',
        }
      }
    }
  },
  methods:{
    onSave(v){
      this.$emit('save',v);
    },
    onDelete(v){
      this.$emit('delete',v);
    },
    onChangeDetail(){
      console.log(this.searchResult);
    }
  },
}
</script>

<style lang="scss">
.vue-nuxt-app-address{

}
</style>