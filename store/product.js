export const state = () => ({
  currentBuyList:[
    {
      shop:{
        id:null
      },
      data:[]
    }
  ],
})

export const mutations={
  currentBuyList(state,v){
    state.currentBuyList = v;
  }
}

export const action={
  currentBuyList(ctx,v){
    ctx.commit('currentBuyList', v);
  }
}