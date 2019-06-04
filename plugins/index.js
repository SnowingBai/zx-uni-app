import VueClipboard from './vue-clipboard'
import uniUI from './uni-ui'
import api from './request'

export default {
  install (Vue) {
    Vue.use (VueClipboard)
    Vue.use(uniUI)
    Vue.use(api)
  }
}
