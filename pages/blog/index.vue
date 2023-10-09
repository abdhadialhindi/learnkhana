<template>
  <div>
    <PhotoBanner class="mb-16" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></PhotoBanner>
    
    <TabBlog data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></TabBlog>
    <SpacerProject></SpacerProject>
    <TrainersTips data-aos="fade-up"   
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000" ref="myElement" id="tips"></TrainersTips>
    <SpacerProject></SpacerProject>
    <LearningPrinciples data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000" id="principles"></LearningPrinciples>
    <SpacerProject></SpacerProject>
    <LearningTrends data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000" id="trend" ></LearningTrends>
    <SpacerProject></SpacerProject>
    <EagerBlog data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></EagerBlog>
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

<style>

</style>