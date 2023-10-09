<template>
  <section>
    <div class="d-flex justify">
      <v-container>
        <v-row justify="center">
          <v-col cols="12">
            <div
              class="section-title text-center mb--20 mb_sm--0 d-flex justify-center"
            >
              <title-section
                class="titel-1"
                :stick="true"
                :sub-title="$t('Related Posts')"
              ></title-section>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-container>
      <v-row justify="center">
        <v-col
          cols="12"
          md="4"
          lg="4"
          xl="4"
          v-for="(item, index) in items"
          :key="index"
          class="mt-8 d-flex justify-center"
        >
          <div
            max-width="374"
            color="#fff "
            class="card-width card-outter mb--10 px-0 card-button"
            relative
          >
            <img :src="item.src" class="img-border" contain />
            <v-btn class="button ms-6">{{ $t("Trainers-tips") }}</v-btn>

            <v-card-title class="color-primary word-break titel-2 mt-2" :class="index==1 ? 'mb-8':''">
              {{ item.title }}
            </v-card-title>
            <p class="desc-3">{{ $t("Mai Yahia") }}</p>
            <p class="desc">
              <v-icon>mdi-clock-outline</v-icon>{{ item.subtitel }}
            </p>

            <v-card-actions class="card-actions align-end">
              <v-btn text bottom class="border-primary">
                <span
                  >{{ $t("read more") }}
                  <v-icon class="icon-button ms-3">
                    {{
                      `${
                        $vuetify.rtl ? "mdi-chevron-left" : "mdi-chevron-right"
                      }`
                    }}</v-icon
                  ></span
                >
              </v-btn>
            </v-card-actions>
          </div>
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
    };
  },
  computed: {
    items() {
      return [
        {
          title: this.$t(
            "Content Curation How Important is it in Your L&D Strategy?"
          ),
          subtitel: this.$t("November 22, 2022"),

          src: require("@/assets/images/blog//tips3/1.jpeg"),
        },
        {
          title: this.$t("It’s not about you, It’s about the learner."),
          subtitel: this.$t("November 08, 2022"),
          src: require("@/assets/images/blog//tips3/2.jpeg"),
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
  },
};
</script>
<style scoped>
.icon-1 {
  width: 21px;
  height: 32px;
  color: #c9d4e7;
}
.titel-1 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-30) / var(--unnamed-line-spacing-40)
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-2852a0);
  
  font: normal normal bold 30px/40px Poppins;
  letter-spacing: 0px;
  color: #2852a0;
  opacity: 1;
  margin-bottom: 30px;
}

.card-width {
  max-width: 350px;
  height: 560px;
  border-radius: 10px 10px 0px 0px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 10px 10px #7682b70d;
  padding-bottom: 51px;
  border-radius: 10px 10px 0px 0px;
}
.img-border {
  background-size: cover !important;
  /* box-shadow: 10px 0px 0px #7682b72e !important; */
  width: 100%;
  object-fit: cover;

  height: 200px;
  border-radius: 10px 10px 0px 0px;
}
.button-1 {
  border-radius: 15px 6px;
  opacity: 0.9;
}
.titel-2 {
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-23) /
    var(--unnamed-line-spacing-34) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070);
  
  font: normal normal normal 22px/33px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  padding-left: 25px;
  word-break: break-word;
}
.desc-3 {
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-23) /
    var(--unnamed-line-spacing-34) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-2852a0);

  font: normal normal normal 22px/33px Poppins;
  letter-spacing: 0px;
  color: #2852a0;
  opacity: 1;
  padding-left: 25px;
}
.border-primary {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-20) / var(--unnamed-line-spacing-30)
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-5e7db8);
  text-align: center;
  font: normal normal bold 20px/30px Poppins;
  letter-spacing: 0px;
  color: #5e7db8;
  opacity: 1;
  text-transform: capitalize;
}

.card-actions {
  position: absolute;
  bottom: 51px;
  padding-left: 25px;
}
.desc {
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-23) /
    var(--unnamed-line-spacing-34) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070);
  font: normal normal normal 18px/34px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  padding-left: 30px;
}
.icon-button {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #5e7db8 0% 0% no-repeat padding-box;
  color: #fff !important;
}
.button {
  text-transform: capitalize;
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-20) /
    var(--unnamed-line-spacing-30) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
  
  font: normal normal normal 20px/30px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}
@media (max-width: 900px) {
  .titel-1 {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-bold) var(--unnamed-font-size-16) /
      var(--unnamed-line-spacing-40) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-2852a0);
    
    font: normal normal bold 16px/40px Poppins;
    letter-spacing: 0px;
    color: #2852a0;
    opacity: 1;
    margin-bottom: 12px;
  }
  .divider {
    width: 59%;
  }
  .card-width {
    max-width: 314px;
    height: 440px;
    
  }
  .img-border {
    height: 150px;
  }
  .titel-2 {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-normal) var(--unnamed-font-size-14) / 21px
      var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-707070);
    
    font: normal normal normal 14px/21px Poppins;
    letter-spacing: 0px;
    color: #707070;
  }
  .desc {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-normal) var(--unnamed-font-size-14) / 21px
      var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-707070);
    
    font: normal normal normal 14px/21px Poppins;
    letter-spacing: 0px;
    color: #707070;
    padding-left: 20px;
  }
  .desc-3 {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-normal) var(--unnamed-font-size-14) / 21px
      var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-2852a0);

    font: normal normal normal 14px/21px Poppins;
    letter-spacing: 0px;
    color: #2852a0;
  }
  .card-actions {
    bottom: 0px;
    margin-bottom: 20px;
  }
  .border-primary {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-bold) var(--unnamed-font-size-15) /
      var(--unnamed-line-spacing-23) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-5e7db8);
    text-align: center;
    font: normal normal bold 15px/23px Poppins;
    letter-spacing: 0px;
    color: #5e7db8;
    opacity: 1;
  }
  .icon-button {
    width: 19px;
    height: 19px;
  }
  .button {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-normal) var(--unnamed-font-size-12) /
      var(--unnamed-line-spacing-18) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-ffffff);
    
    font: normal normal normal 12px/18px Poppins;
    letter-spacing: 0px;
    color: #ffffff;
  }
}
</style>   
<style>
.flex .v-slide-group:not(.v-slide-group--has-affixes) > .v-slide-group__prev,
.flex .v-slide-group:not(.v-slide-group--has-affixes) > .v-slide-group__next {
  display: flex;
  position: absolute;
  top: 100%;
  width: 50%;
  height: 60px;
}
.flex .v-slide-group {
  position: relative;
}
.flex .v-slide-group__next--disabled,
.v-slide-group__prev--disabled {
  pointer-events: all !important;
}
.card-button .button.v-btn:not(.v-btn--round).v-size--default {
  height: 39px;
  width: 42%;
  background: var(--unnamed-color-2852a0) 0% 0% no-repeat padding-box;
  background: #2852a0 0% 0% no-repeat padding-box;
  border-radius: 5px;
}
@media (max-width: 900px) {
  .card-button .button.v-btn:not(.v-btn--round).v-size--default {
    height: 20px;
    width: 33%;
    background: var(--unnamed-color-2852a0) 0% 0% no-repeat padding-box;
    background: #2852a0 0% 0% no-repeat padding-box;
    border-radius: 5px;
  }
}
</style> 