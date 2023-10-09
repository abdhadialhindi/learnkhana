<template>
  <div class="pb--20">
    <v-container>
      <v-row>
        <v-col cols="12" align="center">
          <h4 class="heading-title">
            Check Out Our Library Below.
          </h4>
        </v-col>
        <v-col cols="12">
          <div class="slick-space-gutter--15 slickdot--20">
            <VueSlickCarousel
              v-bind="settings"
              class="rn-slick-activation slick-dotted rn-slick-dot"
            >
              <!-- Start Single Portfolio  -->
              <div
                class="single_im_portfolio"
                v-for="(category, i) in categories"
                :key="i"
              >
                <div class="service service__style--2 text-left">
                  <!-- <router-link to="/service-details"> -->
                  <div class="service" align="center">
                    <div class="content">
                      <h4>{{ category.title }}</h4>
                    </div>
                    <div align="center">
                      <v-img width="35%" :src="category.src" />
                    </div>
                  </div>
                  <!-- </router-link> -->
                </div>
              </div>
              <!-- End Single Portfolio  -->
            </VueSlickCarousel>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import feather from "feather-icons";

import VueSlickCarousel from "vue-slick-carousel";
export default {
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      categories: [
        {
          title: "Essential Skills",
          src: require("@/assets/images/course-categories/h6-custom-icon-4.png"),
        },
        {
          title: "Management & Leadership",
          src: require("@/assets/images/course-categories/h6-custom-icon-5.png"),
        },
        {
          title: "HR Management",
          src: require("@/assets/images/course-categories/h6-custom-icon-7.png"),
        },
        {
          title: "Learning & Development",
          src: require("@/assets/images/course-categories/h6-custom-icon-9.png"),
        },
        {
          title: "Career Development",
          src: require("@/assets/images/course-categories/h6-custom-icon-18.png"),
        },
      ],
      // for all works
      settings: {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        spaceBetween: 15,

        responsive: [
          {
            breakpoint: 890,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 770,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 490,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
        ],
      },
    };
  },
  methods: {
    iconSvg(icon) {
      return feather.icons[icon].toSvg();
    },
  },
};
</script>
