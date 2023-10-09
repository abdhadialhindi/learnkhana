<template>
  
  <section>
    
    <div>
    <WhyBanner class="banner h"  v-if="
          this.$vuetify.breakpoint.name == 'xl' ||
          this.$vuetify.breakpoint.name == 'lg' ||
          this.$vuetify.breakpoint.name == 'md'
        " data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></WhyBanner>
        <WhyBannersm v-else data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></WhyBannersm>
  </div>
    

   
  <CardWhy data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></CardWhy>
    
  <OurNumbers class="our" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000" ></OurNumbers>

  <HonorAward class="honor" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></HonorAward>
  
  <LetHelp data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></LetHelp>
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
.banner {
  background: url("@/assets/images/why/background the power.png");
  direction: ltr !important;
}
.honor {
  background: url("@/assets/images/why/background honored.png");
}
.our {
  background: url("@/assets/images/why/background the power.png");
}
</style>