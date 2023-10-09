<template>
  <section class="bg-color pt-16">
    <v-container>
      <v-row justify="center">
      <div class="text-center divider titel-1">
        {{ $t("testimonials") }}
      </div>
      </v-row>
      </v-container>
      <v-container class="hieght-carousel">
      <v-carousel
        :show-arrows="false"

        hide-delimiter-background
        class="carousel"
        :active-class="'my-active-class'"
      >
        <v-carousel-item v-for="(item, i) in items" :key="i" class="item">
          <v-row align="center" justify="center">
            <v-col cols="12" sm="12" md="6" lg="6" xl="6">
              <div class="d-flex justify-center align-center flex-column  ">
                <h6 class="titel-media">{{ item.title }}</h6>
                <img :src="item.src_1" alt="" class="img-media1">
                <img :src="item.src" alt="" class="img-media" />
              </div>
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="6" xl="6">
              <div class="d-flex flex-column justify-space-around align-start  ms-4">
                <h6 class="titel-6">{{ item.title }}</h6>
                <p class="desc">{{ item.desc }}</p>
                <p class="subtitel">{{ item.subtitle }}</p>
                <p class="subtitel-1">{{ item.subtitle_desc }}</p>
              </div>
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </section>
</template>
<script>
export default {
  data() {
    return {
      disabled: false,
    };
  },
  computed: {
    items() {
      return [
        {
          title: this.$t("What Do Our Clients Says"),
          desc: this.$t(
            "Besides how unique their provided solutions are, how professional they are... We actually got more than that. The 'co-design' approach they adopted in handling our needs was a positive indicator that they care & truly listen to their clients and are keen on fulfilling a personalized and customized solution."
          ),
          subtitle: this.$t("Yomna Makky - Solution Architect."),
          subtitle_desc: this.$t("Quest Human Development & Change Agents"),
          src: require("@/assets/images/testimonial/youmna.svg"),
          src_1 : require("@/assets/images/home/shape.png")
        },
        {
          title: this.$t("What Do Our Clients Says"),
          desc: this.$t(
            "Highly professional, very committed, and creative enough to design your idea in the training to be a real project with a high level of engagement and efficacy."
          ),
          subtitle: this.$t("Mohammed Issa - Regional Education Manager. "),
          subtitle_desc: this.$t("Masimo International SARL"),
          src: require("@/assets/images/testimonial/mohamed.svg"),
          src_1 : require("@/assets/images/home/shape.png")
        },
        {
          title: this.$t("What Do Our Clients Says"),
          desc: this.$t(
            "I would like to thank LearnKhana for the Online Facilitation Train Training program that they delivered to Masr ElKheir Organization. It was a great learning experience that helped me and the training team to transform face-to-face training into Online facilitation. In addition To that LearnKhana team provided 1-1 to each trainer to ensure all learning outcomes are met."
          ),
          subtitle: this.$t("Mahmoud ElSayed - HR Senior Specialist."),
          subtitle_desc: this.$t("Masr Elkheir"),
          src: require("@/assets/images/testimonial/mahmoud1.svg"),
          src_1 : require("@/assets/images/home/shape.png")
        },
        {
          title: this.$t("What Do Our Clients Says"),
          desc: this.$t(
            "It was refreshing to work with a team of professionals who truly partnered with us to co-design and create the content we wanted. It's refreshing to find L&D professionals who understand the science of human learning and work following international standards. Additionally, the team was very open and receptive to feedback throughout the journey, always accommodating our requests. We would certainly do it again and again."
          ),
          subtitle: this.$t("Mariam El Masri - Technical Director."),
          subtitle_desc: this.$t("Quest Human Development & Change Agents"),
          src: require("@/assets/images/testimonial/mariam.svg"),
          src_1 : require("@/assets/images/home/shape.png")
        },
        {
          title: this.$t("What Do Our Clients Says"),
          desc: this.$t(
            "Learnkhan is a very Potential Partner, we don't consider them as a training provider as their contributions & work professionalism are really obvious. we worked together in many strategic projects and with many methods (ILT, E-learning, & Blended Learning)"
          ),
          subtitle: this.$t("Ahmed Yamany - L & D Manager."),
          subtitle_desc: this.$t("B.TECH For Trade & Distribution"),
          src: require("@/assets/images/testimonial/ahmed.svg"),
          src_1 : require("@/assets/images/home/shape.png")
        },
        {
          title: this.$t("What Do Our Clients Says"),
          desc: this.$t(
            "My experience with Learning Lab was very successful! The assignment went very smoothly, they showed a great deal of flexibility and professionalism in meeting our requirements."
          ),
          subtitle: this.$t("Marwa Elarif - Capacity Development Advisor. "),
          subtitle_desc: this.$t("GIZ"),
          src: require("@/assets/images/testimonial/marwa.svg"),
          src_1 : require("@/assets/images/home/shape.png")
        },
      ];
    },
  },
};
</script>
<style scoped>
.bg-color {
  background: url("@/assets/images/home/test.png");
  height: 700px;
  background-size: cover;
}
.titel-1 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-40) / var(--unnamed-line-spacing-236)
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
  font: normal normal bold 40px Poppins;
  letter-spacing: 0px;
  height: 56px;
  text-transform: uppercase;
  position: relative;
}
.titel-1::after {
  content: "";
  position: absolute;
  width: 268px;
  height: 0px;
  border: 3px solid var(--unnamed-color-fab120);
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 5px;
}
.img-media {
  position: relative;
  z-index: 2;
}
.img-media1 {
  
  position: absolute;
  width: 75%;
  height: 80%;
  z-index: 2;
  top: 0%;
  left: 15%;
  
}
.titel-6 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-25) / var(--unnamed-line-spacing-71)
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-fab120);

  font: normal normal bold 25px/71px Poppins;
  letter-spacing: 0px;
  color: #fab120;
  opacity: 1;
}
.desc {
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-medium) var(--unnamed-font-size-22) /
    var(--unnamed-line-spacing-40) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);

  font: normal normal medium 22px/40px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}
.subtitel {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-22) / var(--unnamed-line-spacing-40)
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-fab120);

  font: normal normal bold 22px/40px Poppins;
  letter-spacing: 0px;
  color: #fab120;
}
.subtitel-1 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-22) / var(--unnamed-line-spacing-40)
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);

  font: normal normal bold 22px/40px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
}
.titel-media {
  display: none;
}
@media (max-width: 768px) {
  .bg-color {
    background: url("@/assets/images/blog/testmob.png");
    background-size: 100% 100%;
    height: 740px;
  }
  .titel-1 {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-bold) var(--unnamed-font-size-18) /
      var(--unnamed-line-spacing-236) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0-18);
    color: var(--unnamed-color-e6e6e6);
    text-align: center;
    font: normal normal bold 18px/5px Poppins;
    letter-spacing: 0.18px;
    color: #e6e6e6;
    text-transform: uppercase;
    opacity: 1;
    width: 121px;
    height: 25px;
  }
  .titel-1::after {
    width: 76px;
    height: 0px;
    border: 1px solid var(--unnamed-color-fab120);
    border: 1px solid #fab120;
  }
  .titel-media {
    display: block;
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-bold) var(--unnamed-font-size-14) /
      var(--unnamed-line-spacing-71) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-fab120);

    font: normal normal bold 14px Poppins;
    letter-spacing: 0px;
    color: #fab120;
  }
  .img-media {
    margin-top: 40px;
    width: 144px;
    height: 144px;
  }
  .img-media1 {
    width: 170px;
    height: 140px;
    left: 27%;
    top: 25%;

  }
  .titel-6 {
    display: none;
  }
  .desc {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-normal) var(--unnamed-font-size-14) /
      var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-ffffff);

    font: normal normal normal 14px Poppins;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
  }
  .subtitel {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-bold) var(--unnamed-font-size-14) /
      var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-fab120);

    font: normal normal bold 14px Poppins;
    letter-spacing: 0px;
    color: #fab120;
  }
  .subtitel-1 {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-bold) var(--unnamed-font-size-14) /
      var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-ffffff);

    font: normal normal bold 14px Poppins;
    letter-spacing: 0px;
    color: #ffffff;
  }
  .bg-color {
    /* height: 741px; */
  }
  .carousel {
    height: 100% !important;
  }
  .hieght-carousel {
    height: 800px !important;
  }
  .item {
    height: 100%;
  }
}
@media (max-width:350px) {
  .img-media1 {
    left: 24%;
  }
}
</style>
<style >
.carousel .theme--dark.v-btn.v-btn--icon {
  width: 13px;
  height: 13px;
  color: #fff;
  opacity: 1;
}
.carousel .v-btn--active {
  color: #fab120 !important;
  opacity: 1 !important;
}

@media (max-width:768px) {
  .item .theme--light.v-image {
    height: 100% !important;
  }
  .carousel .theme--dark.v-btn.v-btn--icon {
  width: 6px;
  height: 6px;
  font-size: 12px;
}
.carousel .v-btn--icon.v-size--small .v-icon {
  font-size: 12px !important;
  opacity: 1;
}
  .v-carousel--hide-delimiter-background .v-carousel__controls {
    background: transparent;
    top: 65%;
    
}

}
@media (max-width:320px) {
  .v-carousel--hide-delimiter-background .v-carousel__controls {
    background: transparent;
    top: 75%;
}
}
</style>
