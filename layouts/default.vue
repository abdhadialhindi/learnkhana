<template>
  <v-app light>
    <v-overlay :value="loader" color="white" opacity="1" z-index="100">
      <v-img height="100%" :src="loaderLogo"/>
    </v-overlay>
    <template v-if="!loader">
      <the-header>
        <img slot="logo" :src="logoLight" class="logo-light" />
        <img slot="logo-dark" :src="logoDark" class="logo-dark" />
      </the-header>
      <RecycleScroller :page-mode="true">


      <v-main style="padding-top: 90px ; " class="media">
        <Nuxt />
      </v-main>
    </RecycleScroller>
      <the-footer></the-footer>
    </template>

  </v-app>
</template>

<script>
import TheFooter from "../components/footer/TheFooter";
import TheHeader from "../components/header/TheHeader";

export default {
  components: { TheFooter, TheHeader },
  name: "DefaultLayout",
  data() {
    return {
      fab: false,
      loader: true,
      loaderLogo: require("../assets/images/service/loader.gif"),
      logoLight: require("../assets/images/home/logoheader.svg"),
      logoDark: require("../assets/images/logo/logo-dark.png"),
    };
  },
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
  mounted() {
    if (this.$i18n.locale == "ar") {
      this.$vuetify.rtl = true;
    }
    if (process.browser) {
      const self = this;
      window.onNuxtReady(() => {
        self.loader = false;
      });
    }
  },
};
</script>
<style scoped lang="scss">
@media (max-width:1024px) {
  .media {
    padding-top: 0px !important;
  }
}
.page-enter-active,.page-leave-active {  transition: all 0.4s;}.page-enter-from,.page-leave-to {  opacity: 0;  filter: blur(1rem);}
.v-btn--fab.v-btn--contained {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}
.v-btn--icon.v-size--default .v-icon,
.v-btn--fab.v-size--default .v-icon {
  height: 30px;
  font-size: 30px;
  width: 30px;
}
.v-btn--fab.v-btn--fixed {
  z-index: 99;
}
.v-btn--absolute.v-btn--bottom,
.v-btn--fixed.v-btn--bottom {
  bottom: 60px;
}

.v-btn--absolute.v-btn--right,
.v-btn--fixed.v-btn--right {
  right: 20px;
}
.scroll-fab {
  &.white {
    border: none;
  }
  svg {
    font-size: 24px;
  }
}
</style>
<style>
.v-responsive__content {
  width: 265vh !important;
}
</style>
