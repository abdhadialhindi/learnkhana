<template>
  <div
    class="bg-color d-flex flex-column align-lg-space-between justify-xs-space-between justify-lg-space-around"
  >
    <v-row justify="center " align="space-around" class="height-growth">
      <v-col cols="12" v-if="!without">
        <div class="section-title white--text">
          <title-section
          class="title-1"
            :title="title"
            :dashes="'-'"
            :text-color="text_color"
            :desc="desc"
            :desc-color="desc_color"
            :font-weight="font_weight"
          ></title-section>
        </div>
      </v-col>
    </v-row>

    <!-- Start Single Counterup  -->
    <v-container >
      <v-row
        justify="center "
        align="center"
        class="pb-16 counter-growth mb-16"
      >
        <v-col
        
        
        
          class="im_single_counterup flex-basis "
          v-for="(counter, i) in counterUpContent"
          :key="i"
          
        >
          <div class="im_counterup transparent">
            <div class="inner">
              <!-- <div class="icon" v-html="iconSvg(counter.icon)"></div> -->
              <h5 class="counter count white--text">
                <VisibilitySensor @change="onChange">
                  <countTo
                    :endVal="status ? counter.endVal : 0"
                    :autoplay="countUp"
                    :duration="4000"
                  ></countTo>
                </VisibilitySensor>
              </h5>
              <p class="description white--text">
                {{ counter.desc }}
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import VisibilitySensor from "vue-visibility-sensor";
import countTo from "vue-count-to";
import feather from "feather-icons";
export default {
  props: {
    without: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    countTo,
    VisibilitySensor,
  },
  data() {
    return {
      title: this.$t("Experts growth"),
      text_color: "secondary--text",
      desc: this.$t("Join Them And Experience The Learnkhana Difference!"),
      desc_color: "white",
      font_weight: "bold",
      countUp: true,
      status: false,
      counterUpContent: [
        {
          // icon: "heart",
          endVal: 5,
          desc: this.$t('YEARS OF GROWTH'),
        },
        {
          // icon: "heart",
          endVal: 10,
          desc: this.$t(`COUNTRIES`),
        },
        {
          // icon: "clock",
          endVal: 100,
          desc: this.$t('SATISFIED CUSTOMERS'),
        },
        {
          // icon: "check-circle",
          endVal: 80,
          desc: this.$t('RETURNING CUSTOMERS'),
        },
        {
          // icon: "award",
          endVal: 100,
          desc: this.$t('INNOVATIVE PROJECTS'),
        },
      ],
    };
  },
  methods: {
    onChange(isVisible) {
      if (isVisible) {
        this.status = true;
      }
    },
    iconSvg(icon) {
      return feather.icons[icon].toSvg();
    },
  },
};
</script>
<style  scoped>
.bg-color {
  position: relative;
  height: 610px;
  width: 100%;
  background-size: cover;
  background-image: url("@/assets/images/ourwork/image growth.png"),
    url("@/assets/images/ourwork/image growth.png");
  background-blend-mode: normal;
  background-repeat: no-repeat;
}
.bg-color::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(#2852A0F7,#ffffff5b);
  opacity: 1;
  
}
.flex-basis {
  width: 22% !important;
  /* margin-left: 40px; */
}
.height-growth {
  max-height: 30%;
}
.counter-growth {
  width: 100%;
}
.title-1 {
  position: relative;
  z-index: 111;
}
@media (max-width:768px) {
.title-1 {
  position: relative;
}
.flex-basis {
  width: 100% !important;
  margin-left: 0px !important ;
}
.bg-color {
  background: url("@/assets/home/expert growth/growthmob.png");
  height: 690px;
  background-size: cover;
}
.counter-growth {
  flex-direction: column;
}
.bg-color::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: none;
  opacity: 1;
  
}
}
</style>
