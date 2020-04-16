export const state = () => ({
  userInfo:{},
  token:'',
  address:[],
})

export const mutations={
  userInfo(state,v){
    state.userInfo = v;
  },
  token(state,v){
    state.token = v;
  },
  address(state,v){
    state.address = v;
  },
}

export const action={
  userInfo(ctx,v){
    ctx.commit('userInfo', v);
  },
  token(ctx,v){
    ctx.commit('token', v);
  },
  address(ctx,v){
    ctx.commit('address', v);
  },
}