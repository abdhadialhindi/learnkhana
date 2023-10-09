<template>
  <div class="rn-team-area ptb--50 bg-color mt--120 ">
    <v-container >
      <v-row>
        <v-col cols="12">
          <div class="section-title text-center mb--120 mb_sm--0">
            <title-section
              :stick="true"
              :sub-title="this.$i18n.locale == 'ar' ?$t('our_services') : $t('Services')"
              :wordColor="this.$i18n.locale == 'en' ? $t('Our') : ''"
              :desc="$t('What we promise to the highest quality services')"
            ></title-section>
          </div>
        </v-col>
      </v-row>
      <v-row justify="center" class="responsive-card">
        <v-col
          lg="3"
          md="3"
          sm="6"
          cols="12"
          class="single_im_portfolio pb--20 flex-resopnsive"
          v-for="(item, i) in portfolioContent"
          :key="i"
        ><router-link class="transparent_link " :to="localePath(item.to)">
          <div class="im_portfolio">
            <div class="thumbnail_inner">
              <div class="thumbnail">
                <img class="w-100" :src="item.src" alt="Portfolio Images" />
              </div>
            </div>
            <div class="content">
              <div class="inner">
                <div class="portfolio_heading">
                  <h4
                    class="text-white"
                    color="white"
                    style="color: white !important"
                  >
                    {{ item.title }}
                  </h4>
                </div>
                <div class="portfolio_hover description d-flex flex-column justify-space-around ">
                  <div>
                    <h3 class="title-1 mb-2 ms-4 mt-11">{{ item.title }}</h3>
                  <v-divider class="divider ms-4 mb-3"></v-divider>
                  </div>

                  <p class="desc ms-4  mt-1 me-5">
                    {{ item.description }}

                  </p>
                  <v-btn class="button mb-4 ms-1" text  >{{$t("read more")}} <v-icon class="icon-chevron ms-4">mdi-chevron-right</v-icon></v-btn>

                </div>
              </div>
            </div>

          </div>
        </router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    portfolioContent() {
      return [
        {
          src: require("../../assets/images/services/custom.png"),
          title: this.$t("Custom Self-Based Learning."),
          description: this.$t(
            "Explore hybrid custom learning journeys for a flexible blend experiences."
          ),
          to: "/Custom-self-based-Learning",
        },
        {
          src: require("../../assets/images/services/journey.png"),
          title: this.$t("Custom Blended Learning Journeys."),
          to: "/custom-blended-learning-journeys",
          description:
            this.$t("We specialize in providing tailored solutions to meet your needs."),
        },
        {
          src: require("../../assets/images/services/made.png"),
          title: this.$t("Ready-made Products."),
          to: "/ready-made-products",
          description: this.$t(
            "To ensure that your business is equipped with the right skills to succeed."
          ),
        },
        {
          src: require("../../assets/images/services/ld.png"),
          title: this.$t("L&D Consultancy."),
          to: "/LD-Consultancy",
          description: this.$t(
            "Count on our expert guidance and support for a successful L&D journey!"
          ),
        },
      ];
    },
  },
};
</script>
<style lang="scss" scoped>
.bg-color {
  height: 800px;
  background-size: cover;
  background-repeat: no-repeat;
}

</style>
<style scoped>
.title-1 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-16) / var(--unnamed-line-spacing-25)
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0) !important;
  color: var(--unnamed-color-ffffff);

  font: normal normal bold 16px/25px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
}
.divider {
  display: flex;
  justify-content: center;
  width: 190px;
  height: 0px;
  border: 2px solid var(--unnamed-color-fab120);
  border: 2px solid #fab120;
}
.desc {
  width: 95%;
/* height: 120px; */
font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-20)/var(--unnamed-line-spacing-30) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-ffffff);

font: normal normal 18px/25px Poppins;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
}
.button {
  width: 45%;
  position: relative;
  display: block;
  text-transform: capitalize;
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-medium) var(--unnamed-font-size-14) / 21px
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left !important;
  font: normal normal medium 14px/21px Poppins;
  letter-spacing: 0px;
  color: #c9d4e7;
  opacity: 1;

}
.button .icon-chevron {
  width: 21px;
height: 21px;
color: #2852a0;
background: var(--unnamed-color-fab120) 0% 0% no-repeat padding-box;
background: #FAB120 0% 0% no-repeat padding-box;
opacity: 0;
position: absolute;
border-radius: 50%;
right: 0;

}
.button:hover .icon-chevron  {
    right: -50%;
    opacity: 1;


}
@media (max-width:768px) {
  .bg-color {
    height: auto;
  }
  .flex-resopnsive {
    display: flex !important;
    justify-content: center !important;
  }
  .responsive-card {
    display: grid !important;
  }
}
</style>

