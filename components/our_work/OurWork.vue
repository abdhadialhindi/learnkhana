<template>
  <div class="ptb--20 ps-18 bg-color">
    <v-container class="hieght">
      <v-row justify="center">
        <v-col cols="12">
          <v-row justify="center">
            <article
              class=" primary-color article"
              :class="$vuetify.breakpoint.name == 'sm' ? 'article-md' : ' mt-12'"
            >
             <div class="d-flex justify-center align-center flex-column content">
              <h1 class="titel-1"><span class="span-1">{{ $t("Check ") }}</span>{{ $t("Our Awesome Creative Work") }}</h1>
              <img src="../../assets/images/stick-horizontal/1.svg" alt="" class="img">
             </div>

              <!-- <h2 class="divider text-center"></h2> -->
              <!-- <v-divider
                width="130"
                length="5"
                :class="$vuetify.rtl ? 'thick-one' : 'thick-tow'"
                class="thick"
              ></v-divider> -->
              <p class="text-center">
                {{ $t("Get learning solution that's tailored to your needs") }}
              </p>
            </article>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="slider-position" fluid>
      <v-row justify="center">
        <v-col sm="12" lg="12" md="12" cols="12">
          <v-row>
            <!-- <div class="slide-group-width"> -->
            <v-slide-group class="pa-1 ma-4 out" v-model="currentIndex"  style="width: 100%;" @change="checkLastIndex" >
              <template v-slot:next>
                <img
                 @click="checkEndIndex"
                 v-if="coubnter==1 || coubnter==4"
                  :src="
                    $vuetify.rtl
                      ? require('@/assets/images/self/arrow left.svg')
                      : require('@/assets/images/self/arrow right.svg')
                  "
                  alt=""
                />
                <img
                 @click="checkEndIndex"
                 v-else 
                  :src="
                    $vuetify.rtl
                      ? require('@/assets/images/self/arrow left 2.svg')
                      : require('@/assets/images/self/arrow right 2.svg')
                  "
                  alt=""
                />

              </template>
              <template v-slot:prev>
                <img
                  @click="checkLastIndex"
                  v-if="coubnter==1 || coubnter==4"
                  :src="
                    $vuetify.rtl
                      ? require('@/assets/images/self/arrow right.svg')
                      : require('@/assets/images/self/arrow left.svg')
                  "
                  alt=""
                />
                <img
                 @click="checkLastIndex"
                 v-else
                  :src="
                    $vuetify.rtl
                      ? require('@/assets/images/self/arrow right 2.svg')
                      : require('@/assets/images/self/arrow left 2.svg')
                  "
                  alt=""
                />
              </template>
              <v-slide-item v-for="(item, index) in items" :key="index">
                <v-card
                  color="#fff "
                  class="mx-4 card-width card-outter mb--10"
                  relative
                  elevation="0"
                >
                  <v-btn
                    icon
                    bottom
                    style="
                      position: absolute;
                      bottom: 60%;
                      right: 85% !important;
                    "
                  >
                    <!-- <v-icon color="#fff" large class="color">
                        mdi-play
                      </v-icon> -->
                    <img
                      :src="require('@/assets/images/ourwork/play.svg')"
                      height="30"
                      width="30"
                    />
                  </v-btn>

                  <img
                    :src="item.src"
                    class="white--text align-end img-border"
                    height="239px"
                    contain
                  />

                  <div
                    style="
                      height: 274px;
                      box-shadow: 15px 15px 15px #b5b4b314;
                      border-bottom-right-radius: 25px;
                      border-bottom-left-radius: 25px;
                      opacity: 1;
                    "
                  >
                    <v-card-title class="color-primary word-break">
                      {{ item.title }}
                    </v-card-title>
                    <v-card-subtitle class="me-5 mt-2 desc">
                      {{ item.desc }}
                    </v-card-subtitle>
                  </div>
                  <v-card-actions class="card-actions">
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-row>
            <!-- </div> -->

        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentIndex: 0,
      disabled: false,
      length: 4,
      onboarding: 0,
      coubnter:0
    };
  },
  computed: {
    items() {
      return [
        {
          title: this.$t("Fall In Love With Our Self-Based Learning."),
          desc: this.$t(
            "We specialize in Deriving insights from your data to create interactive journeys!"
          ),
          src: require("@/assets/images/ourwork/cover1.png"),
        },
        {
          title: this.$t("Excel With Our L&D Consultancy Service."),
          desc: this.$t(
            "We developed a business simulation that blends digital learning with a face-to-face experience to upskill your business decision!"
          ),
          src: require("@/assets/images/ourwork/cover2.png"),
        },
        {
          title: this.$t("Master The Art Of Blended Learning Journeys."),
          desc: this.$t(
            "We bring learning to your doorstep with the right skills to succeed."
          ),
          src: require("@/assets/images/ourwork/cover3.png"),
        },
        {
          title: this.$t("Think Out Of The Box With Our Ready-made Products."),
          desc: this.$t(
            "We developed a business simulation that blends digital learning with a face-to-face experience to upskill"
          ),
          src: require("@/assets/images/ourwork/cover4.png"),
        },
      ];
    },
    isLastIndex() {
      return this.currentIndex === this.items.length - 1;
    }
  },
  methods: {
      next () {
        this.onboarding = this.onboarding + 1 === this.length
          ? 0
          : this.onboarding + 1
      },
      prev () {
        this.onboarding = this.onboarding - 1 < 0
          ? this.length - 1
          : this.onboarding - 1
          console.log(this.onboarding)
      },
      checkLastIndex() {
        console.log(this.coubnter)
      this.coubnter--
    },
    checkEndIndex() {
      console.log(this.coubnter)
      this.coubnter++
    }
    },


    watch: {
    currentIndex() {
      if (this.isLastIndex) {
        // Perform actions specific to the last index
        console.log('Last index reached!');
      }
    }
  }
};
</script>
<style scoped>
.word-break {
  word-break: normal !important;
}
</style>
<style lang="scss" scoped>
.hieght {
  height: 600px;
}
.slider-position {
  position: absolute;
  top: 110.1%;
  transform: translateY(-50.5%);
}
.bg-color {
  position: relative;
  background-color: #2852a0e0 !important;
  background: url("@/assets/images/ourwork/backourwork.svg") 0% 0% padding-box;
  height: 540px;
}
.container {
  h2,
  p {
    font : normal normal 25px/38px Poppins;
    color: var(--color-white);
  }
}
.img {
  width: 100%;
}
.article-md {

  h2 {
    font-size: 32px;
  }
  // .thick-one {
  //   transform: translateX(-150%);
  // }
  // .thick-tow {
  //   transform: translateX(150%);
  // }
}
.titel-1 {
  font: normal normal bold 30px/46px Poppins;
  color: #fff;
}
.span-1 {
  color: var(--unnamed-color-fab120) !important;
}
.divider::before {
  content: "";
  width: 130px;
  height: 3px;
  background-color: var(--color-secondary);
  position: absolute;
  bottom: 0px;

  left: 50%;
  -moz-transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
}
.card-width {
  word-break: break-all;
  border-radius: 25px 25px 0px 0px;
  background-color: #fff !important;
  width: 25%;
}
.slide-group-width {
  // width: 1030px;
}
.card-outter {
  padding-bottom: 50px;
}
.card-actions {
  position: absolute;
  bottom: 0;
  inset-inline-end: 0;
}
.img-border {
  border-radius: 25px 25px 0px 0px;
  height: 239px;
  width: 100%;
}
.thick {
  border-width: 2px;
  background: var(--color-secondary) !important;
}
.end-0 {
  // right: 88%;
}
.icon-one {
  width: 50px;
  height: 50px;
  pointer-events: auto !important;
}
.left {
  left: 0;
  position: absolute;
}
.icon-tow {
  width: 50px;
  height: 50px;
  pointer-events: auto !important;
}
.color-primary {
  color: var(--unnamed-color-2852a0);
  font-size: 20px;
  font-weight: bold;
}

.divider {
  position: relative;
}
.desc {
  color: var(--unnamed-color-413f3f) !important;
  font-size: 16px;
  word-break: normal;
}
.border-primary {
  border: 1px solid #fff;
}

.color:hover {
  color: #fff !important;
}
@media (width>1400px) {
  .card-width {
    word-break: break-all;
    border-radius: 25px 25px 0px 0px;
    background-color: #fff !important;
    width: 25%;
  }
}

@media (max-width: 768px) {
  .hieght {
    height: 350px;
  }
  .bg-color {
    height: 450px;
    background: url("@/assets/images/home/creative work.png");
  }
  .slider-position {
    position: absolute;
    top: 105.56%;
    transform: translateY(-50%);
  }
  .slide-group-width {
    width: 100%;
    // display: flex;
    // justify-content: center;
  }
  .card-width {
    width: 280px !important;
    height: 350px !important;
  }
  .img-border {
    height: 155px;
    width: 100%;
  }
  .border-primary {
    bottom: 56% !important;
    width: 26px;
    height: 26px;
    background-color: #fff;
  }
  .color {
    font-size: 18px !important;
    color: black !important;
  }
  .article {
    text-align: center;
    // margin-right: 50px !important;
    padding-left: 0 !important;
    h2 {
      font-size: 24px;
    }
    p {
      margin-top: 22px;
    }
  }
}
@media (max-width:900px) {
 .titel-1 {
  font: normal normal bold 18px/27px Poppins;
 }
 .content {
  width: 100%;
 }
 .img {
  width: 50%;
 }
 .slider-position{
  padding: 0 0px !important;
 }
}
</style>
<style>
@media (max-width:1440px) {
  .slider-position .v-slide-group__content {
    max-width: 1720px;

  }
  .out .v-slide-group__next--disabled {
    pointer-events: none !important;
  }
  .out .v-slide-group__prev--disabled {
    pointer-events: none !important;
  }
}
@media (max-width:1360px) {
  .slider-position .v-slide-group__content {
    max-width: 1600px;
  }
}

@media (max-width:900px) {
  .slider-position .v-slide-group:not(.v-slide-group--has-affixes) > .v-slide-group__next{
    display: none;
    width: 2%;
    min-width: 15px;
    position: relative;
    right: 3%;
  }
  .slider-position .v-slide-group:not(.v-slide-group--has-affixes) > .v-slide-group__prev {
    display: none;
    width: 2%;
    min-width: 15px;
    position: relative;
    left: -3%;
    
  }

  .slider-position .v-slide-group__content {
    max-width: fit-content;
    right: 2%;
  }

}
</style>
