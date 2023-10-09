<template>
  <section>
    <v-container>
      <v-row justify="center">
        <div class="content">
          <h1 class="titel-1">{{ $t("New mission unlocked.") }}</h1>
          <img
            src="../../assets/images/stick-horizontal/1.svg"
            alt=""
            class="stick"
          />
          <p class="desc">
            {{ $t("Meet the needs of your training in a fun way!") }}
          </p>
        </div>
      </v-row>
      <v-row justify="center" class="margin">
        <v-col cols="12" sm="12" xs="12" xl="10" md="10" lg="10">
          <v-carousel hide-delimiters :class="this.$vuetify.rtl ? 'pos-1':'pos'" v-model="currentIndex" @change="checkLastIndex()">
            <template v-slot:prev="{ on, attrs }">
              <img
              v-if="currentIndex===6"
                :src="
                  $vuetify.rtl
                    ? require('@/assets/images/ready/rightar.svg')
                    : require('@/assets/images/ready/left.svg')
                "
                alt=""
                v-bind="attrs"
                v-on="on"
                class="img-1"
              />
              <img
              v-else
                :src="
                  $vuetify.rtl
                    ? require('@/assets/images/blog/5.png')
                    : require('@/assets/images/blog/6.png')
                "
                alt=""
                v-bind="attrs"
                v-on="on"
                class="img-1"
              />
            </template>
            <template v-slot:next="{ on, attrs }">
              <img
              v-if="currentIndex===6"
                :src="
                  $vuetify.rtl
                    ? require('@/assets/images/blog/6.png')
                    : require('@/assets/images/blog/5.png')
                "
                alt=""
                v-bind="attrs"
                v-on="on"
                class="img-2"
              />
              <img
              v-else
                :src="
                  $vuetify.rtl
                    ? require('@/assets/images/ready/left.svg')
                    : require('@/assets/images/ready/rightar.svg')
                "
                alt=""
                v-bind="attrs"
                v-on="on"
                class="img-2"
              />
            </template>
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              class="carousel"
            >
              <v-row>
                <v-col cols="12" xs="12" sm="12" lg="5" md="5" xl="5"
                  ><img :src="item.src" alt="" />
                </v-col>
                <v-col
                  cols="1"
                  style="padding-top: 50px"
                  class="col-p"
                
                  >
                  <p  v-if="$vuetify.rtl"></p>
                  <p class="desc-1" v-else>{{ $t("Gaming") }}</p></v-col
                >
                <v-col  xs="12" sm="12" md="6" lg="6" xl="6"
                  ><div class="mt-4">
                    <h3 class="titel-2">{{ item.title }}</h3>
                    <!-- <p class="desc-1"   v-if="
                    $vuetify.breakpoint.name == 'xs' ||
                    $vuetify.breakpoint.name == 'sm' 
                  ">{{ $t("Gaming") }}</p> -->
                    <p class="desc-2">{{ item.subtitel }}</p>
                  </div></v-col
                >
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
export default {
  data() {
    return {
      disabled: false,
      length: 4,
      onboarding: 0,
      currentIndex: 0,
    };
  },
  computed: {
    items() {
      return [
        {
          title: this.$t("The Court"),
          src: require("@/assets/images/ready/1.svg"),
          subtitel: this.$t(
            "Three different scenarios for tragic cases are presented in the court. Participants will empathize with main characters of these scenarios to understand these feelings and express them to their colleagues. This game will help participants understand their own emotions"
          ),
        },
        {
          title: this.$t("Universal Agreement"),

          src: require("@/assets/images/ready/2.svg"),
          subtitel: this.$t(
            "Universal Agreement is an inter-planetary game, in which four teams reside on four planets of varying positions, interests, and needs. The teams are competing for the survival and well-being of their planets, aiming at keeping their resources, fulfilling their needs, and seeking upgrades for a better future."
          ),
        },
        {
          title: this.$t("The maestro"),
          src: require("@/assets/images/ready/3.svg"),
          subtitel: this.$t(
            "The mission is: to rob a bank! During this engaging game participants need to select the right person for each task and take rapid decisions that affects their mission result. Will they be able to rob the bank before they got caught? By the end of this game participants will improve their delegation skills"
          ),
        },
        {
          title: this.$t("Romanian Battle"),
          src: require("@/assets/images/ready/4.svg"),
          subtitel: this.$t(
            "Romanian Battle is a war game set in the era of the Roman empire. It helps participants identify leadership styles. They learn techniques to diagnose and upgrade current performance through effective feedback. The participants learn how to be motivated to obtain extraordinary and measurable results."
          ),
        },
        {
          title: this.$t("High Season"),
          src: require("@/assets/images/blog/4.png"),
          subtitel: this.$t(
            "Three groups of tourists are arriving at the same duration while each of them has different needs and requests. The challenge is to prioritize and schedule all tasks to achieve highest bonus and avoid penalty terms while competing with three other teams."
          ),
        },
        {
          title: this.$t("Under Construction"),
          src: require("@/assets/images/ready/5.svg"),
          subtitel: this.$t(
            "Under Construction game happens in Quincy City that has an ideal weather, a beautiful landscape and a solid infrastructure. the city government decides to expand its buildings to attract more visitors. Four teams competing to buy 234 pieces of puzzle and finish it according to the budget ,"
          ),
        },
        {
          title: this.$t("The Islands"),
          src: require("@/assets/images/ready/6.svg"),
          subtitel: this.$t(
            "“I feel that my company’s departments are completely isolated from each other”. We heard this statement from HR manager of an international organization. So, we asked ourselves: how could we connect these island’s together? Four teams represent four different departments"
          ),
        },
      ];
    },
  },
  methods: {
    next() {
      this.onboarding =
        this.onboarding + 1 === this.length ? 0 : this.onboarding + 1;
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1;
    },
    checkLastIndex() {
      console.log(this.currentIndex)
      console.log(this.currentIndex)
      if (this.currentIndex === this.items.length - 1) {
        // Perform actions specific to the last index
        console.log(this.currentIndex)
        console.log('Last index reached!');
      }
    }
  },
};
</script>
<style scoped>
.titel-1 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-30) / 91px var(--unnamed-font-family-poppins);
  color: var(--unnamed-color-2852a0);
  text-align: center;
  font: normal normal bold 30px/49px Poppins;
  letter-spacing: 2.1px;
  color: #2852a0;
  opacity: 1;
}
.stick {
}
.desc {
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-medium) var(--unnamed-font-size-25) /
    var(--unnamed-line-spacing-53) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-656463);
  text-align: center;
  font: normal normal 25px/33px Poppins;
  letter-spacing: 0px;
  color: #656463;
}
.titel-2 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-24) / var(--unnamed-line-spacing-60)
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-2852a0);

  font: normal normal bold 24px/60px Poppins;
  letter-spacing: 0px;
  color: #2852a0;
  opacity: 1;
}
.desc-1 {
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-medium) var(--unnamed-font-size-24)
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-5e7db8);
  transform: matrix(0, -1, 1, 0, 11, 64);
  font: normal normal 24px/40px Poppins;
  letter-spacing: 0px;
  color: #5e7db8;
  opacity: 1;
}
.desc-2 {
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-20) /
    var(--unnamed-line-spacing-40) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-656463);
  
  font: normal normal normal 20px/40px Poppins;
  letter-spacing: 0px;
  color: #656463;
  opacity: 1;
}
.col-p {
  max-width: 4.33333%;
}
.carousel {
  position: relative;
}
.margin {
  margin-top: 80px !important;
}
@media (max-width: 900px) {
    .carousel {
        height: 635px !important;
    }
    .pos {
        height: 635px !important;
    }
    .pos-1 {
      height: 635px !important;
    }
  .titel-1 {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-bold) var(--unnamed-font-size-16) / 91px
      var(--unnamed-font-family-poppins);
    color: var(--unnamed-color-2852a0);
    text-align: center;
    font: normal normal bold 16px/35px Poppins;
    letter-spacing: 1.12px;
    color: #2852a0;
    opacity: 1;
  }
  .desc {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-medium) var(--unnamed-font-size-15) /
      var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-656463);
    text-align: center;
    font: normal normal 15px/15px Poppins;
    letter-spacing: 0px;
    color: #656463;
    opacity: 1;
  }
  .titel-2 {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-bold) 17px/60px
      var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-2852a0);
    
    font: normal normal bold 17px/26px Poppins;
    letter-spacing: 0px;
    color: #2852a0;
    opacity: 1;
  }

  .desc-2 {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-normal) var(--unnamed-font-size-16) /
      var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-656463);
    
    font: normal normal normal 16px/25px Poppins;
    letter-spacing: 0px;
    color: #656463;
  }
  .desc-1 {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-normal) 17px/26px
      var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-2852a0);
    /* transform: matrix(0, -1, 1, 0, -128, -56); */
    font: normal normal normal 17px/10px Poppins;
    letter-spacing: 0px;
    color: #2852a0;
  }
  .content {
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .stick {
    width: 65%;
    height: 18px;
  } 
}
</style>
<style >
.pos .v-window__prev,
.v-window__next {
  position: absolute;
  background: transparent;
  width: 5.6%;
  top: 77%;
}
.pos-1 .v-window__prev,
.v-window__next {
  position: absolute;
  background: transparent;
  width: 5.6%;
  top: 77%;
}

.pos .v-window__prev {
  left: 45%;
}
.pos-1 .v-window__prev {
  right: 12%;
}
.pos .v-window__next {
  right: 40%;
}
.pos-1 .v-window__next {
  right: 18%;
}
@media (max-width:900px) {
    .pos .v-window__prev,
.v-window__next {
  position: absolute;
  background: transparent;
  width: 20%;
  top: 90%;
}
.pos-1 .v-window__next {
  position: absolute;
  background: transparent;
  width: 20%;
  top: 90%;
}
.pos-1 .v-window__prev,
.v-window__next {
  position: absolute;
  background: transparent;
  width: 20%;
  top: 90%;
}
.pos .v-window__next {
  left: 45%;
}
.pos .v-window__prev {
  left: 20%;
}
.pos .v-responsive__content {
    height: 600px;
}
.pos .theme--light.v-image {
    height: 600px !important;
}
.pos-1 .v-window__next {
  right: 45%;
}
.pos-1 .v-window__prev {
  right: 20%;
}
.pos-1 .v-responsive__content {
    height: 600px;
}
.pos-1 .theme--light.v-image {
    height: 600px !important;
}
}
</style>