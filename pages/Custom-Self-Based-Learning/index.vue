<template>
  <section>
    <PortofolioLd class="mb-16 ggg" data-aos="fade-up"
      data-aos-duration="1000" ></PortofolioLd>
      <SpacerProject></SpacerProject>
    <DescSelf class="desc " data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></DescSelf>
    <LibrarySelf data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></LibrarySelf>
    <VideoBased class="based" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></VideoBased>
    <ScreenCast class="animatedvideo" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></ScreenCast>
    <AnimatedVidoes data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000" class="g"></AnimatedVidoes>
    <LetSelf data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></LetSelf>
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
/* .gg {
  height: 660px;
} */
.desc {
  background: url("@/assets/images/self/back1.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.based {
  background: url("@/assets/images/self/back2.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: top;
}

.animatedvideo {
  background: url("@/assets/images/self/back3.png");
  background-size: cover;
  background-repeat: no-repeat;
}

@media (max-width:900px) {
  .desc {
    background: url("@/assets/images/self/back1xs.png");
    background-size: cover;
    background-repeat: no-repeat;
  }

  .based {
    background: url("@/assets/images/self/back2xs.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position-y: top;
  }

  .animatedvideo {
    background: none;
  }
}
</style>