<template>
  <section class="pad">
    <AboutShape v-if="this.$vuetify.breakpoint.name == 'xs' ||
        this.$vuetify.breakpoint.name == 'sm'" ></AboutShape>
    <div>
      <AboutBanner v-if="this.$vuetify.breakpoint.name == 'xl' ||
        this.$vuetify.breakpoint.name == 'lg' ||
        this.$vuetify.breakpoint.name == 'md'
        " data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" class="direction"></AboutBanner>
      <AboutBannersm v-else data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
      </AboutBannersm>
    </div>
    <SpacerProject></SpacerProject>
    <WhoweAre data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></WhoweAre>
    <SpacerProject></SpacerProject>
    <MappingAbout data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></MappingAbout>
    <SpacerProject></SpacerProject>
    <EnjoyWorking data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></EnjoyWorking>
    <SpacerProject></SpacerProject>
    <div>
      <IconAbout class="" v-if="this.$vuetify.breakpoint.name == 'xl' ||
        this.$vuetify.breakpoint.name == 'lg' ||
        this.$vuetify.breakpoint.name == 'md'
        " data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></IconAbout>
      <IconAboutsm v-else data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
      </IconAboutsm>
    </div>
    <SpacerProject></SpacerProject>
    <div>
      <TimeLine v-if="this.$vuetify.breakpoint.name == 'xl' ||
        this.$vuetify.breakpoint.name == 'lg' ||
        this.$vuetify.breakpoint.name == 'md'
        " data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></TimeLine>
      <TimeLinesm v-else data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" ></TimeLinesm>
    </div>
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
.direction {
  direction: ltr !important;

}
.direction-1 {
  direction: ltr !important;
}
@media (max-width: 900px) {
  .pad {
    position: relative;
    top: 50px;
    
  }
}
</style>