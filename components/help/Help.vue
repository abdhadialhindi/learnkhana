<template>
  <div>


    <div class="rn-team-area ptb--50 bg-color">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="section-title text-center mb--20 mb_sm--0">
              <title-section :stick="true" :sub-title="`${this.$t('to help')}`" :word-color="`${this.$t('Happy')}`" text-color="white"></title-section>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="help-us">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="text-center mb--20 mb_sm--0 " :class="$vuetify.breakpoint.name == 'xs' ||
                  $vuetify.breakpoint.name == 'sm'? '': 'mt-10'">
              <v-col :cols="`${$vuetify.breakpoint.name == 'xs' ||
                  $vuetify.breakpoint.name == 'sm'

                  ? '12'
                  : '12'
                }`">
                <v-row justify="center" align="center">
                  <v-col cols="12" sm="12" md="12" xs="12">
                    <v-row justify="center">

                      <v-container>
                        <VueSlickCarousel autoplay :slidesToShow="$vuetify.breakpoint.name=='xs' || $vuetify.breakpoint.name=='sm' ? '2':'4' " :speed="1200">
                          <div v-for="(item, index) in items" :key="index">
                            <v-row justify="center">
                              <v-card class="ms-8  " elevation="0" width="250">
                                <v-row justify="center">

                                  <v-img :src="item.src" class="ms-5 m-2" height="120" contain  />
                                </v-row>
                              </v-card>
                            </v-row>
                          </div>
                        </VueSlickCarousel>
                      </v-container>
                    </v-row>

                  </v-col>
                </v-row>
              </v-col>
            </div>
          </v-col>

        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  components: { VueSlickCarousel },
  data: () => ({
    // modules: [Navigation, Pagination, Scrollbar, A11y],
    model: null,
    items: [
      {
        src: require("@/assets/images/brand/Ades.png"),
      },
      {
        src: require("@/assets/images/brand/b.tech.png"),
      },
      {
        src: require("@/assets/images/brand/Bankers-Learning-Hub.png"),
      },
      {
        src: require("@/assets/images/brand/bank-misr.png")
      },
      {
        src: require("@/assets/images/brand/we.png"),
      },
      {
        src: require("@/assets/images/brand/1.png"),
      },
      {
        src: require("@/assets/images/brand/2.png"),
      },
      {
        src: require("@/assets/images/brand/3.png"),
      },
      {
        src: require("@/assets/images/brand/4.png"),
      },
      {
        src: require("@/assets/images/brand/5.png"),
      },
      {
        src: require("@/assets/images/brand/6.png"),
      },
      {
        src: require("@/assets/images/brand/7.png"),
      },
      {
        src: require("@/assets/images/brand/8.png"),
      },
      {
        src: require("@/assets/images/brand/9.png"),
      },
      {
        src: require("@/assets/images/brand/10.png"),
      },
      {
        src: require("@/assets/images/brand/11.png"),
      },
      {
        src: require("@/assets/images/brand/12.png"),
      },
      {
        src: require("@/assets/images/brand/13.png"),
      },
      {
        src: require("@/assets/images/brand/14.png"),
      },
      {
        src: require("@/assets/images/brand/15.png"),
      },
      {
        src: require("@/assets/images/brand/16.png"),
      },
      {
        src: require("@/assets/images/brand/17.png"),
      },
      {
        src: require("@/assets/images/brand/18.png"),
      },
      {
        src: require("@/assets/images/brand/19.png"),
      },
      {
        src: require("@/assets/images/brand/20.png"),
      },
      {
        src: require("@/assets/images/brand/21.png"),
      },
      {
        src: require("@/assets/images/brand/22.png"),
      },
      {
        src: require("@/assets/images/brand/23.png"),
      },
      {
        src: require("@/assets/images/brand/24.png"),
      },
      {
        src: require("@/assets/images/brand/25.png"),
      },
      {
        src: require("@/assets/images/brand/26.png"),
      },
      {
        src: require("@/assets/images/brand/27.png"),
      },
      {
        src: require("@/assets/images/brand/28.png"),
      },
      {
        src: require("@/assets/images/brand/29.png"),
      },
      {
        src: require("@/assets/images/brand/30.png"),
      },
      {
        src: require("@/assets/images/brand/31.png"),
      },
      {
        src: require("@/assets/images/brand/32.png"),
      },
      {
        src: require("@/assets/images/brand/33.png"),
      },
      {
        src: require("@/assets/images/brand/34.png"),
      },
      {
        src: require("@/assets/images/brand/35.png"),
      },
      {
        src: require("@/assets/images/brand/36.png"),
      },
      {
        src: require("@/assets/images/brand/37.png"),
      },
    ],
  }),

  // setup() {
  //     const onSwiper = (swiper) => {
  //       console.log(swiper);
  //     };
  //     const onSlideChange = () => {
  //       console.log('slide change');
  //     };
  //     return {
  //       onSwiper,
  //       onSlideChange,
  //     };
  //   },
};
</script>
<style lang="scss" scoped>
.icon-one {
  border: 2px solid var(--color-primary);
  border-radius: 50%;
  width: 25px;
  height: 25px;
  pointer-events: auto !important;

}

.icon-tow {
  border: 2px solid var(--color-primary);
  border-radius: 50%;
  width: 25px;
  height: 25px;
  pointer-events: auto !important;

}

.icon-one:hover {
  background-color: var(--color-primary);
  color: #fff !important;
}

.icon-tow:hover {
  background-color: var(--color-primary);
  color: #fff !important;
}


.bg-color {
  background-color: #2852A0;
}

.help-us {
  border-radius: 0px 300px 0px 0px;
  height: 120px;
  margin-top: -30px;
  background-color: white;
}
</style>
