<template>
    <div>
    <PortofolioLd class="nb" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></PortofolioLd>
     <SpacerProject class="hieght-xs"></SpacerProject>
   
    <DescLd class="descld   " :class="this.$vuetify.breakpoint.name=='xs' || this.$vuetify.breakpoint.name=='sm' ? 'pt-16' : 'pt-16' " data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></DescLd>
     <SpacerProject ></SpacerProject>
    <TextblueLd class="textblue" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></TextblueLd>
    
    <LearningLd class="need" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></LearningLd>
    
    <LearningImpact class="impact" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></LearningImpact>
    
    <LearningLd2 data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></LearningLd2>
    
    <LetTalk data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></LetTalk>
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
.descld {
    background: url("@/assets/images/consulatyld/bannerld.png");
    background-repeat: no-repeat;
}
.impact {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 950px;
    background-image: url("@/assets/images/consulatyld/3.png");
    background-size: contain;
}
.need {
    display: flex;
    flex-direction: column;
    justify-content: end;
    background: url("@/assets/images/consulatyld/need.png");
    background-repeat: no-repeat;
    
    background-size: cover;
}
@media (max-width:768px) {
    .impact {
        height: 600px;
    }
    .descld {
        background: url("@/assets/images/consulatyld/bannerldmob.png");
        background-repeat: no-repeat;
    }
}
@media (max-width: 800px) {
    .hieght-xs {
        height: 130px;
    }
}
</style>