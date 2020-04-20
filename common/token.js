// 设置localStorage
import Cookies from 'js-cookie'
export function setStorage(name, val) {
  window.localStorage.setItem(name, JSON.stringify(val))
}
// 获取localStorage
export function getStorage(name) {
  return JSON.parse(window.localStorage.getItem(name)) || null
}

// 设置token，cookie与localStorage上都需要设置
export function setToken(token) {
  Cookies.set('nuxt-token', token)
  setStorage('nuxt-token', token)
}
// 获取token
export function getToken() {
  return getStorage('nuxt-token')
}

// 获取request的cookie
export function getCookieFromReq(req, name) {
  if (!req.headers.cookie) return
  const valCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith(`${name}=`))
  if (!valCookie) return
  const val = valCookie.split('=')[1]
  return val
}