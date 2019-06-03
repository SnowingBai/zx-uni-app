import VueClipboard from './vue-clipboard'
import uniUI from './uni-ui'

export default {
  install (Vue) {
    Vue.use (VueClipboard)
    Vue.use(uniUI)
  }
}
