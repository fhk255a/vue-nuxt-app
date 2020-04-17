
          
<template>
  <div class="nuxt-form-item">
    <span class="label" :style="{width:width?width:'auto',textAlign:posistion}">{{label}}</span>
    <span class="content">
      <slot/>
    </span>
  </div>
</template>

<script>
export default {
  props:{
    width:{
      type:String,
      default:()=>'auto'
    },
    label:{
      type:String,
      default:()=>''
    },
    posistion:{
      type:String,
      default:()=>'left'
    }
  }
}
</script>

<style lang="scss" scoped>
.nuxt-form-item{
  display: flex;
  font-size: 14px;
  margin-right: 10px;
  margin-bottom: 10px;
  .label{
    padding-right: 12px;
    color: #807F7F;
  }
}
</style>