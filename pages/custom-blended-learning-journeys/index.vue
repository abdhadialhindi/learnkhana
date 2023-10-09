<template>
  <div >
    <PortofolioLd ></PortofolioLd>
    
    <DescJourney class="desc pt-16 pb-16 " data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"  ></DescJourney>
    
    <CustomJourney class=" mb-16" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"></CustomJourney>
    <SpacerProject v-if="this.$vuetify.breakpoint.name=='lg' ||this.$vuetify.breakpoint.name=='xl' || this.$vuetify.breakpoint.name=='md'"></SpacerProject>
    <RianForcing data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"></RianForcing>
    
    <ImpactJourney data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"></ImpactJourney>
    <SpacerProject v-if="this.$vuetify.breakpoint.name=='md' || this.$vuetify.breakpoint.name=='sm' || this.$vuetify.breakpoint.name=='lg' || this.$vuetify.breakpoint.name=='xl'"></SpacerProject>
    <LearningNeeds class="mt-16" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"></LearningNeeds>
     <SpacerProject v-if="this.$vuetify.breakpoint.name=='lg' ||this.$vuetify.breakpoint.name=='xl' || this.$vuetify.breakpoint.name=='md'"></SpacerProject>
    <SelfBased data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"></SelfBased>
    
    <MixandMatch class="pt-16 pb-16 mix"></MixandMatch>
    
    <LetReady class="mt-16 mb-16" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"></LetReady>
    <SpacerProject></SpacerProject>
  </div>
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
  background: url("@/assets/images/juorney/desc.png");
  background-position: center;
  background-size: cover;
}
.mix {
  background: url("@/assets/images/juorney/mixmatch.png");
  background-position-y: 43%;
}
@media (max-width:900px) {
  .desc {
  background: url("@/assets/images/juorney/descmob.png");
  background-size: 100% 50%;
  background-position: top;
  background-repeat: no-repeat;
}
.mix {
  background: url("@/assets/images/juorney/mixmob.png");
  background-position-y: 112%;
}
}
</style>