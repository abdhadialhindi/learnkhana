<template>
  <section class="mt-16 mb-16">
    <div
      class="container-1"
      v-if="
        this.$vuetify.breakpoint.name == 'xs' ||
        this.$vuetify.breakpoint.name == 'sm'
      "
    >
      <div class="back-2-xs"></div>
      <div class="back-xs">
        <div class="d-flex  flex-column content-xs mt-5 ">
          <p class="title-1-xs">{{ $t("L&D Strategy and Roadmap.") }}</p>
          <v-divider class="divider-xs mb-5"></v-divider>
          <p class="desc-xs">
            {{
              $t(
                "Creating a learning and development strategy aligns your human capital’s capabilities, skills, and competencies with your company’s needs and business goals, and helps you track their progress along the way with distinctive key performance indicators."
              )
            }}
          </p>
          <p class="desc-xs">
            {{
              $t(
                "Utilize LearnKhana’s expertise to set the strategy that is right for you!"
              )
            }}
          </p>
        </div>
      </div>
    </div>
    <div class="container-1" v-else>
      <div class="back">
        <div class="d-flex justify-content-around flex-column content mt-16">
          <p class="title-1">{{ $t("L&D Strategy and Roadmap.") }}</p>
          <v-divider class="divider"></v-divider>
          <p class="desc">
            {{
              $t(
                "Creating a learning and development strategy aligns your human capital’s capabilities, skills, and competencies with your company’s needs and business goals, and helps you track their progress along the way with distinctive key performance indicators."
              )
            }}
          </p>
          <p class="desc-1">
            {{
              $t(
                "Utilize LearnKhana’s expertise to set the strategy that is right for you!"
              )
            }}
          </p>
        </div>
      </div>
      <div class="back-2">
        
      </div>
      <!-- <div class="text-page">
          <p class="act me-6">{{ $t("Actual picture from original project") }}</p>
        </div> -->
      
    </div>
    <!-- <SpacerProject v-if="this.$vuetify.breakpoint.name=='lg' || this.$vuetify.breakpoint.name=='md' || this.$vuetify.breakpoint.name=='xl'"></SpacerProject> -->
  </section>
</template>
<style scoped>
.container-1 {
  position: relative;
  height: 591px;
}
.back {
  position: absolute;
  top: 0;
  left: 0;
  background: url("@/assets/images/why/let.jpeg");
  background-size: cover;
  width: 57.5%;
  height: 550px;
 
  border-radius: 0px 10px 250px 0px;
  z-index: 2;
}
.back-2 {
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 10px 10px 250px 10px;
  width: 52%;
  height: 550px;
  background-image: url("@/assets/images/why/go.jpeg");
  background-size: cover;
  z-index: 1;
}
.back-2::after {
  content: "";
  background-position-x: left;
  position: absolute;
  top: 0;
  left: -11%;
  width: 111%;
  height: 100%;
  background: transparent linear-gradient(41deg, #2852a0c4 0%, #ffffff00 100%)
    0% 0% no-repeat padding-box;
  border-radius: 0px 10px 250px 0px;
  opacity: 1;
}
.text-page {
    text-align: end;
    position: absolute;
    bottom: 0px;
    width:40%;
    right: 0;

  }
  .act {
    color: #A5A5A5;
    font-size: 16px;
  }
.content {
  width: 80%;
  margin: 0 auto;
  grid-gap: 12px;
  gap: 12px;
}
.title-1 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-25) / var(--unnamed-line-spacing-60)
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
  
  font: normal normal bold 25px/55px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  position: relative;
}
.divider {
  width: 406px;
  height: 0px;
  border: 5px solid var(--unnamed-color-fab120);
  border: 5px solid #fab120;
  opacity: 1;
  margin-bottom: 40px;
}
.desc {
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-medium) var(--unnamed-font-size-23) /
    var(--unnamed-line-spacing-40) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
  
  font: normal normal 22px/40px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}
.desc-1 {
  width: 85%;
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-medium) var(--unnamed-font-size-23) /
    var(--unnamed-line-spacing-40) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
  
  font: normal normal 22px/40px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}
@media (max-width:1280px) {
  .content {
    width: 83%;
  }
}
@media (max-width: 900px) {
  .container-1 {
    height: 671px;
  }
  .back-2-xs {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 313px;
    border: 0.25px solid #fab120;
    border-radius: 100px 0px 0px 0px;
    background-image: url("@/assets/images/consulatyld/textblue900.svg");
    background-size: cover;
  }
  .back-2-xs::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0.25px solid var(--unnamed-color-fab120);
    background: transparent linear-gradient(32deg, #2852a0c4 0%, #ffffff00 100%)
      0% 0% no-repeat padding-box;
    border: 0.25px solid #fab120;
    border-radius: 100px 0px 0px 0px;
    opacity: 1;
  }
  .back-xs {
    height: 360px;
    position: absolute;
    bottom: 0;
    left: 0;
    border: 0.25px solid #fab120;
    border-radius: 0px 0px 100px 0px;
    background: url("@/assets/images/consulatyld/textblue768.svg");
    background-size: cover;
  }
  .content-xs {
    width: 80%;
    margin: 0 auto;
  }
  .title-1-xs {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-bold) var(--unnamed-font-size-16) /
      var(--unnamed-line-spacing-60) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-ffffff);
    
    font: normal normal bold 16px/60px Poppins;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
  }
  .divider-xs {
    width: 210px;
    height: 0px;

    border: 2px solid var(--unnamed-color-fab120);
    border: 2px solid #fab120;
    opacity: 1;
  }
  .desc-xs {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-normal) var(--unnamed-font-size-14) /
      var(--unnamed-line-spacing-20) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-ffffff);
    
    font: normal normal normal 14px/20px Poppins;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
  }
}
</style>
