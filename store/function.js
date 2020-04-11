export const state = () => ({
  loading:false,
})

export const mutations={
  loading(state,v){
    state.loading = v;
  }
}

export const action={
  loading(ctx,v){
    ctx.commit('loading', v);
  }
}