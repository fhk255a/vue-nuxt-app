import Vue from 'vue'
import AJAX from '~/common/http.js'

Vue.prototype.$AJAX = AJAX
Vue.use(AJAX)