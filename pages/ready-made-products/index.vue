<template>
  <section>
    <PortofolioLd class="mb-16 s" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
    </PortofolioLd>
    <SpacerProject></SpacerProject>
    <DescReady class="desc m" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
    </DescReady>

    <LibraryReady :class="this.$vuetify.breakpoint.name == 'xl' ||
      this.$vuetify.breakpoint.name == 'lg' ||
      this.$vuetify.breakpoint.name == 'md' ? '' : 'mb-16'" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
      data-aos-duration="1000"></LibraryReady>
    <VisitReady class="pt-8 visit" v-if="this.$vuetify.breakpoint.name == 'xl' ||
      this.$vuetify.breakpoint.name == 'lg' ||
      this.$vuetify.breakpoint.name == 'md'
      " data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></VisitReady>
    <TailorYour v-if="this.$vuetify.breakpoint.name == 'sm' ||
      this.$vuetify.breakpoint.name == 'xs'
      " class="mb-16" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></TailorYour>

    <ReadyLearning class="ready"
      :class="this.$vuetify.breakpoint.name == 'sm' || this.$vuetify.breakpoint.name == 'xs' ? 'mb-16' : ''"
      data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
    </ReadyLearning>

    <ExpansionPanels class="expan" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
    </ExpansionPanels>

    <LearnSimulation data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></LearnSimulation>
    <SpacerProject></SpacerProject>
    <SliderReady class="back x" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
    </SliderReady>
    <SpacerProject></SpacerProject>
    <LetReady data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></LetReady>
    <SpacerProject></SpacerProject>
  </section>
</template>
<script>
import AOS from 'aos';
export default {
  mounted() {
    this.$nextTick(() => {
      // AOS has been initialized and is ready to use
    })
  }
}
</script>
<style scoped>
.desc {
  background: url("@/assets/images/ready/desc.svg");
  background-size: contain;
}

.back {
  background: url("@/assets/images/ready/slidre.svg");
  background-size: cover;
}

.visit {

  background: url("@/assets/images/ready/visit.svg");
  background-size: cover;
  /* height: 976px; */
}

/* .ready {
  position: relative;
  transform: translateY(-55%);
} */

.expan {
  background: url("@/assets/images/ready/exper1.svg");
  background-size: cover;
}

@media (max-width:900px) {
  .ready {
    transform: translateY(0%);
  }
}
</style>