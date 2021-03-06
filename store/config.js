export const state = () => ({
  //-1未付款，0未发货，1已发货，2已收货，3退款
  orderStatus:[
    {
      id:-1,
      label:'未付款',
    },
    {
      id:0,
      label:'未发货',
    },
    {
      id:1,
      label:'已发货',
    },
    {
      id:3,
      label:'退款',
    },
  ],
  //-1已取消，0未付款，1已付款，2已完成，3退款中，4已退款
  orderType:[
    {
      id:-1,
      label:'已取消',
    },
    {
      id:0,
      label:'未付款',
    },
    {
      id:1,
      label:'已付款',
    },
    {
      id:2,
      label:'已完成',
    },
    {
      id:3,
      label:'退款中',
    },
    {
      id:4,
      label:'已退款',
    },
  ]
})