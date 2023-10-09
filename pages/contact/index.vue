<template>
  <section>
    <BannerContact data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></BannerContact>
    <div>
    <FormContact v-if="this.$vuetify.breakpoint.name == 'lg' || this.$vuetify.breakpoint.name == 'xl' || this.$vuetify.breakpoint.name == 'md'" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></FormContact>
    <FormMobile v-else data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></FormMobile>
  </div>
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
