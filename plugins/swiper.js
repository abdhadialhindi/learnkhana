import Vue from 'vue'
import Swiper from 'swiper'

// Import Swiper styles
import 'swiper/swiper-bundle.css';

Vue.use({
  install(Vue) {
    Vue.prototype.$swiper = Swiper
  }
})
// function createSwiper(el) {
//   return new Swiper(el, {
//     // Swiper options here
//   });
// }
// export default createSwiper;