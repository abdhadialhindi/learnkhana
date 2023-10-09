<template>
  <section>
    <v-container class="container-1">
      <div>
        <h2 class="titel-1">
          {{ $t("Trainers-tips") }}
        </h2>
        <v-divider class="divider"></v-divider>
      </div>
    </v-container>

    <v-row
      justify="center"
      class="mt-8 ms-5 me-5"
      v-if="
        $vuetify.breakpoint.name == 'xl' ||
        $vuetify.breakpoint.name == 'lg' ||
        $vuetify.breakpoint.name == 'md'
      "
    >
      <v-col
        cols="12"
        md="4"
        lg="4"
        xl="4"
        v-for="(item, index) in items"
        :key="index"
        class="mt-8"
      >
        <div
          max-width="374"
          color="#fff "
          class="card-width card-outter mb--10 px-0"
          relative
        >
          <img :src="item.src" class="img-border" contain />

          <v-card-title class="color-primary word-break titel-2 mt-2">
            {{ item.title }}
          </v-card-title>
          <p :class="$vuetify.rtl ? 'desc-ar':'desc'">{{ item.subtitel }}</p>

          <v-card-actions class="card-actions align-end">
            <v-btn text bottom class="border-primary">
              <router-link :to="localePath('/article')">
              <span
                >{{ $t("read more") }}
                <v-icon class="icon-button ms-3">
                  {{
                    `${$vuetify.rtl ? "mdi-chevron-left" : "mdi-chevron-right"}`
                  }}</v-icon
                ></span
              >
            </router-link>
            </v-btn>
          </v-card-actions>
        </div>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12" class="flex">
        <v-slide-group class="pa-1 ma-4 can">
          <template v-slot:next>
            <v-btn text bottom class="" :class="$vuetify.rtl ? 'icon-slide-ar' : 'icon-slide2'">
              <span>
                {{ $t("NEXT POST") }}
                <v-icon class="ms-3">
                  {{
                    `${$vuetify.rtl ? "mdi-chevron-left" : "mdi-chevron-right"}`
                  }}</v-icon
                >
              </span>
            </v-btn>
          </template>
          <template v-slot:prev>
            <v-btn text bottom class="icon-slide">
              <span>
                <v-icon class="ms-3">
                  {{
                    `${$vuetify.rtl ? "mdi-chevron-right" : "mdi-chevron-left"}`
                  }}</v-icon
                >

                {{ $t("PREV POST") }}
              </span>
            </v-btn>
          </template>
          <v-slide-item
            v-for="(item, index) in items"
            :key="index"
            class="ms-5 me-16"
          >
            <v-card
              color="#fff "
              class="card-width card-outter mb--10 px-0"
              relative
            >
              <img :src="item.src" class="img-border" contain />

              <v-card-title class="color-primary word-break titel-2">
                {{ item.title }}
              </v-card-title>
              <p class="" :class="$vuetify.rtl ? 'desc-ar':'desc'">{{ item.subtitel }}</p>

              <v-card-actions class="card-actions align-end">
                <v-btn text bottom class="border-primary">
              <router-link :to="localePath('/article')">
              <span
                >{{ $t("read more") }}
                <v-icon class="icon-button ms-3">
                  {{
                    `${$vuetify.rtl ? "mdi-chevron-left" : "mdi-chevron-right"}`
                  }}</v-icon
                ></span
              >
            </router-link>
            </v-btn>
              </v-card-actions>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-col>
    </v-row>
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
          title: this.$t("Choosing the Right Collaboration Platform"),
          subtitel: this.$t(
            "Several businesses were forced to work remotely due to COVID, with this crisis in mind ....."
          ),

          src: require("@/assets/images/blog//tip1/1.jpeg"),
        },
        {
          title: this.$t("Boosting Employee Engagement in Online Training"),
          subtitel: this.$t(
            "According to a study conducted by Gallup about employee engagement"
          ),
          src: require("@/assets/images/blog/hh.jpeg"),
        },
        {
          title: this.$t("Storytelling A Superpower!"),
          subtitel: this.$t(
            "5 Ways That Storytelling Can Improve Your New Hire Online Training Program"
          ),
          src: require("@/assets/images/blog//tip1/3.jpeg"),
        },
        {
          title: this.$t("5 Ways to Apply Behaviorism in Your Training"),
          subtitel: this.$t(
            "Is all behaviour learned from the environment or are some inherited? In this article...."
          ),
          src: require("@/assets/images/blog//tip1/4.png"),
        },
        {
          title: this.$t(
            "How to Convert Classroom Training to Online Training?"
          ),
          subtitel: this.$t(
            "It might seem like organizations and learning professionals have been digitizing and....."
          ),
          src: require("@/assets/images/blog//tip1/5.jpeg"),
        },
        {
          title: this.$t("Face to Face vs Online Training"),
          subtitel: this.$t(
            "Educational methods of instruction and learning have progressed remarkably over...."
          ),
          src: require("@/assets/images/blog//tip1/6.jpeg"),
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
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-25)/var(--unnamed-line-spacing-40) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-2852a0);

font: normal normal bold 25px/40px Poppins;
letter-spacing: 0px;
color: #2852A0;
  margin-bottom: 30px;
}

.card-width {
  max-width: 380px;
  height: 570px;
  border-radius: 5px 5px 0px 0px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 15px 25px #7682b714 !important;
  padding-bottom: 51px;
  border-bottom: 5px solid var(--unnamed-color-2852a0);
}
.img-border {
  border-radius: 20px 20px 0px 0px !important;
  background-size: cover !important;
  /* box-shadow: 10px 0px 0px #7682b72e !important; */
  width: 100%;

  height: 213px;
}
.button-1 {
  border-radius: 15px 6px;
  opacity: 0.9;
}
.titel-2 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-20)/var(--unnamed-line-spacing-30) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-2852a0);

font: normal normal bold 21px/30px Poppins;
letter-spacing: 0px;
color: #2852A0;
  padding-left: 30px;
}
.border-primary {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-18)/var(--unnamed-line-spacing-27) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
text-align: center;
font: normal normal bold 18px/27px Poppins;
letter-spacing: 0px;
color: #93A8CF;
  opacity: 1;
  text-transform: capitalize;
}

.card-actions {
  position: absolute;
  bottom: 51px;
  padding-left: 25px;
}
.desc {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) var(--unnamed-font-size-20)/var(--unnamed-line-spacing-35) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-656463);

font: normal normal  21px/35px Poppins;
letter-spacing: 0px;
color: #656463;
  padding-left: 30px;
}
.desc-ar {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) var(--unnamed-font-size-20)/var(--unnamed-line-spacing-35) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-656463);

font: normal normal  21px/35px Poppins;
letter-spacing: 0px;
color: #656463;
  padding-right: 22px;
}
.icon-button {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #5e7db8 0% 0% no-repeat padding-box;
  color: #fff !important;
  opacity: 0;
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
    border-bottom: 5px solid var(--unnamed-color-2852a0) !important;
  }
  .img-border {
    height: 175px;
  }
  .titel-2 {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-bold) var(--unnamed-font-size-16) /
      var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-2852a0);

    font: normal normal bold 16px/25px Poppins;
    letter-spacing: 0px;
    color: #2852a0;
    opacity: 1;
  }
  .desc {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-medium) var(--unnamed-font-size-14) /
      var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-656463);

    font: normal normal medium 14px/25px Poppins;
    letter-spacing: 0px;
    color: #656463;
    opacity: 1;
  }
  .desc-ar {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-medium) var(--unnamed-font-size-14) /
      var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-656463);

    font: normal normal medium 14px/25px Poppins;
    letter-spacing: 0px;
    color: #656463;
    opacity: 1;
  }
  .card-actions {
    bottom: 0px;
  }
  .border-primary {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-bold) var(--unnamed-font-size-15) /
      var(--unnamed-line-spacing-23) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-5e7db8);

    font: normal normal bold 15px/23px Poppins;
    letter-spacing: 0px;
    color: #5e7db8;
    opacity: 1;
  }
  .icon-button {
    width: 19px;
    height: 19px;
  }
  .icon-slide {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-medium) var(--unnamed-font-size-15) /
      var(--unnamed-line-spacing-38) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-2852a0);

    font: normal normal medium 15px/38px Poppins;
    letter-spacing: 0px;
    color: #2852a0;
    opacity: 1;
    position: absolute;

    left: 90%;
    transform: translateX(-100%);
  }
  .icon-slide2 {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-medium) var(--unnamed-font-size-15) /
      var(--unnamed-line-spacing-38) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-2852a0);

    font: normal normal medium 15px/38px Poppins;
    letter-spacing: 0px;
    color: #2852a0;
    opacity: 1;
    position: absolute;

    left: 10%;
    transform: translateX(00%);
  }
  .icon-slide-ar {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-medium) var(--unnamed-font-size-15) /
      var(--unnamed-line-spacing-38) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-2852a0);

    font: normal normal medium 15px/38px Poppins;
    letter-spacing: 0px;
    color: #2852a0;
    opacity: 1;
    position: absolute;

    left: 10%;
    transform: translateX(-100%);
  }
}
</style>
<style>
.can .v-slide-group:not(.v-slide-group--has-affixes) > .v-slide-group__prev,
.can .v-slide-group:not(.v-slide-group--has-affixes) > .v-slide-group__next {
  display: flex;
  position: absolute;
  top: 100%;
  width: 50%;
  height: 60px;
}
.can .v-slide-group {
  position: relative;
}
.can .v-slide-group__next--disabled,
.can .v-slide-group__prev--disabled {
  pointer-events: all !important;
}
</style>
<style lang="scss" scoped>
.border-primary:hover .icon-button {
  opacity: 1;
  transition: 1s;
}
</style>
