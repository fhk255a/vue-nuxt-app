<template>
  <div class="vue-nuxt-components-passwordModel">
    <p class="text">密码默认是[123456]</p>
    <van-password-input
      :value="password"
      :focused="passwordShow"
      @focus="passwordShow = true"
    />
    <van-number-keyboard
      :show="passwordShow"
      @input="onInput"
      @delete="onDelete"
      close-button-text="完成"
      @blur="passwordShow = false"
    />
  </div>
</template>

<script>
export default {
  data(){
    return{
      password:'',
      passwordShow:true,
    }
  },
  props:{
    show:{
      type:Boolean,
      default:()=>true
    }
  },
  watch:{
    show(){
      this.passwordShow = true;
    }
  },
  methods:{
    // 输入密码
    onInput(v){
      this.password = (this.password + v).slice(0, 6);
      if(this.password.length>5){
        this.$emit('submit',this.password);
        this.password = '';
      }
    },
    // 删除密码
    onDelete(){
      this.password = this.password.slice(0, this.password.length - 1);
    },
  }
}
</script>

<style lang="scss" scope>
.vue-nuxt-components-passwordModel{
  padding: 15px ;
  .text{
    color: #807F7F;
    font-size: 14px;
    text-align: center;
    padding: 15px;
  }
}
</style>