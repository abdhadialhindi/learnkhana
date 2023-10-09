<template>
    <section>
        <SpaceNews data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000" class="j"></SpaceNews>
        <BannerNews data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></BannerNews>
        <SpacerProject data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></SpacerProject>
        <ReplayNews data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></ReplayNews>
        <SpacerProject></SpacerProject>
        <PostNews data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></PostNews>
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