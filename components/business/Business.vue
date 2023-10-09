<template>
  <div id="service">
    <vue-particles
      color="#2852a0"
      :particleOpacity="0.7"
      :particlesNumber="40"
      shapeType="circle"
      :particleSize="4"
      linesColor="#fab120"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="180"
      :moveSpeed="6"
      :hoverEffect="true"
      hoverMode="repulse"
      :clickEffect="false"
      clickMode="push"
    >
    </vue-particles>
    <div class="service-area creative-service-wrapper ptb--30 bg_color--1">
      <v-container>
        <v-row>
          <div class="stick-vertical"></div>
        </v-row>
        <v-row class="mb--30">
          <v-col cols="12">
            <title-section
              :title="title"
              :sub-title="subtitle"
              :desc="desc"
            ></title-section>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <CoolLightBox :items="sliderContent" :index="index" @close="index = null">
    </CoolLightBox>
    <div class="service-area creative-service-wrapper pb--120 bg_color--1">
      <v-container>
        <div class="tab-default">
          <v-tabs-items v-model="tab">
            <v-tab-item
              class="pb--80"
              transition="fade-transition"
              v-for="(item, i) in sliderContent"
              :key="i"
            >
              <v-card flat>
                <v-card-text>
                  <div class="single-tab-content">
                    <div>
                      <v-container fill-height fluid>
                        <v-row>
                          <v-col lg="10" offset-lg="1" class="mt--30">
                            <div class="thumb position-relative">
                              <div class="thumbnail position-relative">
                                <img
                                  class="w-100"
                                  :src="item.img"
                                  alt="About Images"
                                />
                                <a
                                  @click="index = i"
                                  class="video-popup position-top-center theme-color"
                                  ><span class="play-icon"></span
                                ></a>
                              </div>
                            </div>
                          </v-col>
                        </v-row>
                      </v-container>
                    </div>
                  </div>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
          <v-tabs v-model="tab" flat hide-slider>
            <v-tab v-for="(item, i) in sliderContent" :key="i" :ripple="false">
              {{ item.name }}
            </v-tab>
          </v-tabs>
        </div>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tab: null,
      index: null,
      title: this.$t("A Business Consulting"),
      subtitle: this.$t("Company That Can Produce Anything."),
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae.
        eligendi,
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae.
        eligendi,
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae.
        eligendi.`,
      sliderContent: [
        {
          name: "All Show",
          img: require("../../assets/images/bg/bg-image-33.jpg"),
          src: "https://www.youtube.com/watch?v=ZOoVOfieAF8",
        },
        {
          name: "Agency",
          img: require("../../assets/images/bg/bg-image-18.jpg"),
          src: "https://www.youtube.com/watch?v=3Lv3N7C34uU",
        },
        {
          name: "Creative",
          img: require("../../assets/images/bg/bg-image-19.jpg"),
          src: "https://www.youtube.com/watch?v=ZOoVOfieAF8",
        },
        {
          name: "Business",
          img: require("../../assets/images/bg/bg-image-19.jpg"),
          src: "https://www.youtube.com/watch?v=ZOoVOfieAF8",
        },
      ],
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>

<style scoped>
.about {
  padding: 2em;
}
.stick-vertical {
  margin: auto;
  height: 50px;
  width: 4px;
  background: var(--color-primary);
}
</style>
