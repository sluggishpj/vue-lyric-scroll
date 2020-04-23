import LyricScroll from './components/lyric-scroll.vue'

LyricScroll.install = function (Vue) {
  Vue.component(LyricScroll.name, LyricScroll)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(LyricScroll)
}

export default LyricScroll
