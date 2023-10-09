<template>
  <div class="ptb--50 bg-color">
    <v-container>
      <v-row justify="center">
        <v-col cols="10" md="8" xs="12" sm="12">
          <title-section
            class="mt-7 mb-16"
            :title="$t('News and Work Insights')"
            sub-title=""
            :desc="$t('We’ve got everything you need to deliver flexible and effective skills development for your entire workforce.')"
          ></title-section>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          lg="3"
          md="3"
          sm="6"
          cols="12"
          class="single_im_portfolio pb--20"
          v-for="(item, i) in portfolioContent"
          :key="i"
        >
          <div class="im_portfolio">
            <div class="thumbnail_inner">
              <div class="thumbnail">
                <a href="portfolio-details.html">
                  <img class="w-100" :src="item.src" alt="Portfolio Images" />
                </a>
              </div>
            </div>
            <div class="content">
              <div class="inner">
                <div class="portfolio_heading description">
                  <!-- {{ item.description }} -->
                </div>
                <div class="portfolio_hover description">
                  {{ item.description }}
                </div>
              </div>
            </div>
            <router-link
              class="transparent_link"
              :to="item.to"
            ></router-link>
          </div>
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
          src: require("../../assets/images/portfolio/portfolio-8.jpg"),
          to: '/news-details/learnKhana-wins-the-penn-wharton-innovation-fund-award',
          description: this.$t(
            "We are thrilled to announce that LearnKhana has won the Penn Wharton Innovation Fund Award."
          ),
        },
        {
          src: require("../../assets/images/portfolio/portfolio-9.jpg"),
          to: '/news-details/penn-gse-alumni-startup',
          description: this.$t(
            "The University of Pennsylvania’s Penn GSE is proud to announce that its alumni-founded startup, Learnkhana, has won."),
        },
        {
          src: require("../../assets/images/portfolio/portfolio-4.jpg"),
          to: '/news-details/a-cost-and-time-efficient-solution',
          description: this.$t(
            "A Cost and Time Efficient Solution: How a 3000-Employee Leading Trading and Manufacturing Company Improved Their LMS."
          ),
        },
        {
          src: require("../../assets/images/portfolio/portfolio-5.jpg"),
          to: '/news-details/this-is-how-we-got-employees',
          description: this.$t(
            "This is how we got employees to actually read their code of conduct by using this simple strategy."
          ),
        },
      ];
    },
  },
};
</script>

<style>
.border {
  border-radius: 10px !important;
}
.text-color {
  color: var(--color-primary);
  font-size: 40px;
}
.paraghraph {
  font-size: 12px !important;
  display: block;
}
.button {
  border: 0px !important;
}
@media (width<767px) {
  .text-color {
    text-align: center;
    font-size: 24px;
  }
  .margin {
    margin-bottom: 20px;
  }
}
</style>
<style lang="scss" scoped>
.bg-color {
  background-image: url("@/assets/images/ourwork/learnkhana-website-artboards_09.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>