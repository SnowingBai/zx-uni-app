import {
  uniBadge, //	数字角标
  uniCard, //	卡片
  uniCollapse, // 折叠面板
  uniCollapseItem, //	折叠面板子组件
  uniCountdown, // 倒计时
  uniDrawer, //	抽屉
  uniGrid, //	宫格
  uniIcon, //	图标
  uniList, //	列表
  uniListItem, //	列表子组件
  uniLoadMore, //	加载更多
  uniNoticeBar, // 通告栏
  uniNumberBox, // 数字输入框
  uniPagination, // 分页器
  uniRate, //	评分
  uniSteps, // 步骤条
  uniSwipeAction, // 滑动操作
  uniTag, // 标签
  uniSwiperDot //	轮播图指示点
} from '@dcloudio/uni-ui'

export default {
  install (Vue) {
    Vue.component('uni-badge', uniBadge)
    Vue.component('uni-card', uniCard)
    Vue.component('uni-collapse', uniCollapse)
    Vue.component('uni-collapse-item', uniCollapseItem)
    Vue.component('uni-countdown', uniCountdown)
    Vue.component('uni-drawer', uniDrawer)
    Vue.component('uni-grid', uniGrid)
    Vue.component('uni-icon', uniIcon)
    Vue.component('uni-list', uniList)
    Vue.component('uni-list-item', uniListItem)
    Vue.component('uni-load-more', uniLoadMore)
    Vue.component('uni-notice-bar', uniNoticeBar)
    Vue.component('uni-number-box', uniNumberBox)
    Vue.component('uni-pagination', uniPagination)
    Vue.component('uni-rate', uniRate)
    Vue.component('uni-steps', uniSteps)
    Vue.component('uni-swipe-action', uniSwipeAction)
    Vue.component('uni-tag', uniTag)
    Vue.component('uni-swiper-dot', uniSwiperDot)
  }
}
