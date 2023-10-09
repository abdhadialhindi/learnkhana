<template>
  <section>
    <div class="wrapper-titel d-flex align-center justify-space-around" :class="this.$vuetify.breakpoint.name== 'lg' || this.$vuetify.breakpoint.name== 'xl' || this.$vuetify.breakpoint.name== 'md' ? 'space': ''">
      <h6 class="titel-1" :class="$vuetify.rtl ? 'set' : ''">
        {{ $t("Self Based Learning") }}
      </h6>
    </div>
    <v-row class="based" justify="center" align="center">
      <v-col cols="12" xs="6" sm="6" class="flex-responsive">
        <div class="content text-center">
          <h4 class="titel-2">{{ $t("Educational videos") }}</h4>
          <p class="desc">
            {{
              $t(
                "Learn with educational videos that are easy to understand, engaging, and effective. Bite-sized content allows learners to digest the material at their own pace and apply the knowledge in instructor-led sessions."
              )
            }}
          </p>
          <p class="desc-1" style="color: #fef2db !important;">
            {{
              $t(
                "With our educational videos, learners can stay focused, motivated, and up-to-date with the latest topics and trends."
              )
            }}
          </p>
        </div>
      </v-col>
      <v-col cols="12" xs="6" sm="6" class="flex-responsive-1">
        <div class="content text-center">
          <h4 class="titel-2">{{ $t("E-Learning") }}</h4>
          <p class="desc">
            {{
              $t(
                "Transform your employee training and development with eLearning activities that captivate and motivate. Give your employees the tools they need to achieve their goals and reach their full potential with engaging and impactful eLearning experiences."
              )
            }}
          </p>
          <p class="desc-1"  style="color: #fef2db !important;">
            {{
              $t(
                "Unlock the power of eLearning and its potential to enhance your employees’ learning journey."
              )
            }}
          </p>
        </div>
      </v-col>
    
    </v-row>
  </section>
</template>
<style scoped>
.wrapper-titel {
  position: relative;
  width: 100%;
  height: 162px;
}
.wrapper-titel::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 45%;
  height: 100%;
  background: transparent
    linear-gradient(
      102deg,
      var(--unnamed-color-fab120) 0%,
      var(--unnamed-color-ffffff) 100%
    )
    0% 0% no-repeat padding-box;
  background: transparent linear-gradient(102deg, #fab120 0%, #ffffff 100%) 0%
    0% no-repeat padding-box;
  border-radius: 0px 5px 5px 0px;
  z-index: 1;
}
.titel-1 {
  width: 62%;
  position: relative;
  z-index: 2;
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-25) / var(--unnamed-line-spacing-38)
    var(--unnamed-font-family-poppins);
  color: var(--unnamed-color-2852a0);
  
  font: normal normal bold 25px/38px Poppins;
  letter-spacing: 0.75px;
  color: #2852a0;
  opacity: 1;
}
.set {
  text-align: end;
}
.based {
  height: 500px;
  background: url("@/assets/images/juorney/based.png");
  background-size: cover;
}
.content {
  width: 80%;
  margin: 0 auto;
}
.titel-2 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-25) / 26px var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-fab120);
  text-align: center;
  font: normal normal bold 25px/26px Poppins;
  letter-spacing: 0px;
  color: #fab120;
  margin-bottom: 27px;
}
.desc {
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-medium) var(--unnamed-font-size-22) /
    var(--unnamed-line-spacing-40) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
  text-align: center;
  font: normal normal 22px/40px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
}
.desc-1 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-22) / var(--unnamed-line-spacing-40)
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
  text-align: center;
  font: normal normal bold 22px/40px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
}
.space {
  margin-bottom: 80px;
}
@media (max-width: 900px) {
  .wrapper-titel {
    height: 76px;
    margin-bottom: 30px;
  }
  .wrapper-titel::after {
    width: 50%;
  }
  .titel-1 {
    width: 85%;
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-bold) var(--unnamed-font-size-16) /
      var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
    color: var(--unnamed-color-2852a0);
    
    font: normal normal bold 16px/25px Poppins;
    letter-spacing: 0.48px;
    color: #2852a0;

  }
  .based {
    height: 860px;
    background: none;
  }
  .content {
    width: 79%;
  }
  .titel-2 {
    font: normal normal bold 15px/0px Poppins;
    margin-top: 30px;
  }
  .desc {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-normal) var(--unnamed-font-size-14) /
      var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-ffffff);
    text-align: center;
    font: normal normal normal 14px/25px Poppins;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
  }
  .desc-1 {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-bold) var(--unnamed-font-size-14) /
      var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-ffffff);
    text-align: center;
    font: normal normal bold 14px/25px Poppins;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
    margin-bottom: 30px !important;
  }
  .flex-responsive {
    background: url("@/assets/images/why/el.png");
    background-size: cover;
    margin-bottom: 35px;
  }
  .flex-responsive-1 {
    background: url("@/assets/images/why/ed.png");
    background-size: cover;
    margin-bottom: 35px;
  }
}
</style>
