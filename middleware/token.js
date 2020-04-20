import { getCookieFromReq, getToken } from '~/common/token'

/**
 * 权限的验证，重定向未登录状态下的一些路由访问到登录页去
 */
export default function ({ isHMR, app, store, req, route, params, error, redirect }) {
  if (isHMR) return

  /* 登录权鉴判断部分 */
  const isClient = process.client // 是否是客户端
  const isServer = process.server // 是否是服务端
  // 服务端从cookie拿token，客户端从local中拿token
  const token = isServer ? getCookieFromReq(req, 'nuxt-token') : isClient ? getToken() : null 
  if (token && route.path=='/login'){
    redirect('/')
  }
  /* 无权限访问，跳转到登录页 */
  if (!token) {
    redirect('/login')
  }

}