<template>
  <div class="vue-nuxt-components-item-header">
    <div :class="['left',className]">
      {{title}}
    </div>
    <div class="right" v-if="more" @click="clickMore">More</div>
  </div>
</template>

<script>
export default {
  props:{
    title:{
      type:String,
      default:()=>''
    },
    className:{
      type:String,
      default:()=>''
    },
    more:{
      type:Boolean,
      default:()=>false
    },
  },
  methods:{
    clickMore(){
      this.$emit('more');
    }
  }
}
</script>

<style lang="scss">
.vue-nuxt-components-item-header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px 0;
  >.left{
    color: #000000;
    font-size: 16px;
    font-weight: 600;
  }
  >.right{
    color: #FE5427;
    font-size: 16px;
    background-repeat: no-repeat;
    background-image: url('/image/home/more.png');
    background-position: right;
    padding-right: 16px;
  }
}
</style>