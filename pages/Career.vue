<template>
    <section class="pad">
      <!-- <AboutShape v-if="this.$vuetify.breakpoint.name == 'xs' ||
        this.$vuetify.breakpoint.name == 'sm'"></AboutShape> -->
        <CareerForm class="back-1" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></CareerForm>
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
.back-1 {
    background: url("@/assets/images/career/career2.svg");
    background-position: center;
}
@media (max-width:900px) {
    .back-1 {
        background: none;
    }
    /* .pad {
    position: relative;
    top: 50px;
    
  } */
}
</style>
