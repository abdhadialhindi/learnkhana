import '../assets/scss/main.scss'
import Vue from 'vue'
import VueParticles from "vue-particles";
import CoolLightBox from 'vue-cool-lightbox';
import VueScrollactive from 'vue-scrollactive';
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import '@fortawesome/fontawesome-free/css/all.css'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import '@mdi/font/css/materialdesignicons.css'
import { Swiper, SwiperSlide } from 'swiper'

Vue.config.productionTip = false;
Vue.use(VueParticles);
Vue.use(CoolLightBox);
Vue.use(VueScrollactive);
Vue.component(Swiper);
Vue.component(SwiperSlide);
