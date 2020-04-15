<template>
  <div class="vue-nuxt-components-loading">
    <van-loading class="loading"  color="#fff" >
      请稍等...
    </van-loading>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.vue-nuxt-components-loading{
  position: fixed;
  z-index: 9999;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .loading{
    width: 100px;
    height: 60px;
    padding: 25px 10px;
    border-radius:6px;
    background-color: rgba(50,50,51,.88);
    z-index: 99999;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    .van-loading__text{
      color: #fff;
      margin-top: 14px;
    }
  }
}
</style>