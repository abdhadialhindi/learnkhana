<template>
  <section>
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <div
            class="d-flex justify-center align-center flex-column"
          >
          <h1 class="titel-3"><span class="span-1" style="color: white:  !important;">{{ $t("News") }}</span>{{ $t(" And Work Insights") }}</h1>
          <img src="../../assets/images/stick-horizontal/1.svg" alt="">
          <p class="desc-1 text-center">{{ $t("We’ve got everything you need to deliver flexible and effective skills development for your entire workforce.") }}</p>

          </div>

        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row justify="center">
        <v-col sm="12" lg="12" md="12" cols="12">
          <v-row justify="center">
            <!-- <div class="slide-group-width"> -->
            <v-slide-group class="pa-1 ma-4 out" v-model="currentIndex">
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
                  class="me-4 card-width1 card-outter mb--10 ms-9"
                  relative
                >
                    <v-row justify="center">
                      <img
                        :src="item.src"
                        class="white--text align-end img-border w-100"
                      />
                    </v-row>


                  <v-btn
                    color="primary"
                    width="90"
                    height="37"
                    class="button-1 mt-8 ms-7"
                    ><router-link :to="localePath('/news')">
                    <span style="color: white:  !important;">{{$t("News")}}</span></router-link></v-btn
                  >
                  <v-card-title class="color-primary word-break titel-2 mt-6">
                    {{ item.title }}
                  </v-card-title>

                  <v-card-actions class="card-actions align-end">
                    <router-link :to="localePath('/news')">
                    <v-btn text bottom class="border-primary">
                      <span style="color: white:  !important;">{{$t("read more")}}</span>
                    </v-btn>
                  </router-link>
                  </v-card-actions>
                </v-card>
              </v-slide-item>
            </v-slide-group>
            <!-- </div> -->
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
export default {
  data() {
    return {
      currentIndex: 0,
      disabled: false,
      length: 4,
      onboarding: 0,
      coubnter:0,
    };
  },
  computed: {
    items() {
      return [
        {
          title: this.$t(
            "The University of Pennsylvania’s Penn GSE is proud to announce that Learnkhana, has won.."
          ),

          src: require("@/assets/images/ourwork/group4.png"),
        },
        {
          title: this.$t(
            "A Cost and Time Efficient Solution: How a 3000-Employee Leading Company Improved Their LMS."
          ),
          src: require("@/assets/images/ourwork/group3.png"),
        },
        {
          title: this.$t(
            "This is how we got employees to actually read their code of conduct by using this simple strategy."
          ),

          src: require("@/assets/images/ourwork/group2.png"),
        },
        {
          title: this.$t(
            "This is how we got employees to actually read their code of conduct by using this simple strategy."
          ),
          src: require("@/assets/images/ourwork/group1.png"),
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
.icon-1 {
  width: 21px;
  height: 32px;
  color: #C9D4E7;
}
.titel-1 {
  width: 60%;
}
.t
.card-width1 {

}
.img-border {
  border-radius: 30px 40px 0px 0px;
  /* box-shadow: 10px 0px 0px #7682b72e !important; */

  height: 250px;
}
.button-1 {
  border-radius: 15px 6px;
  opacity: 0.9;
}
.titel-2 {
  font-size: 20px;
}
.titel-3 {
  font: normal normal bold 30px/50px Poppins;
  color: var(--unnamed-color-2852a0);
}
.span-1 {
color: var(--unnamed-color-fab120);
}
.desc-1 {
  font: normal normal  25px/45px Poppins;
  color: var(--unnamed-color-2c2c2c);
  width: 64%;
}
.border-primary {
  font-size: 18px;
  color: var(--unnamed-color-5e7db8);
  text-transform: capitalize;
}
.card-outter {
  padding-bottom: 50px;
  box-shadow: 10px 0px 0px #7682b72e !important;
  width: 380px !important;
  height: 570px;
  border-radius: 40px 40px 0px 0px;
}
.card-actions {
  position: absolute;
  bottom: 0;
}
</style>
<style lang="scss">
  .out .v-slide-group__next--disabled {
    pointer-events: none !important;
  }
  .out .v-slide-group__prev--disabled {
    pointer-events: none !important;
  }
.border-primary:focus::before {
  opacity: 0 !important;
}
.border-primary:hover::before {
  opacity: 0 !important;
}
</style>
