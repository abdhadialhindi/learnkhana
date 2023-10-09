<template>
  <section class="mt-16 mb-16">
    <div
      class="container-1"
      v-if="
        this.$vuetify.breakpoint.name == 'xs' ||
        this.$vuetify.breakpoint.name == 'sm'
      "
    >
      <div class="back-xs">
        <div class="d-flex justify-end align-start flex-column content-1-xs pb-6">
          <p class="titel-1-xs">{{ $t("E-learning Transformation") }}</p>
          <v-divider class="divider-xs"></v-divider>
        </div>
      </div>
      <div class="back-2-xs">
        <div class="d-flex justify-space-around flex-column content-xs">
          <div>
            <p class="desc-1-xs">
              {{
                $t(
                  "Are you looking for a way to train experience for all your employees, but don't know where to start?"
                )
              }}
            </p>
            <p class="desc-xs">
              {{
                $t(
                  "Let the experts at LearnKhana transform your traditional training programs and take them to the digital world."
                )
              }}
            </p>
          </div>
          <p class="desc-xs">
            {{
              $t(
                "our team can provide the answers you need on why, when, and how to begin the process. With our help, you can ensure a smooth transition and maximize the benefits of a digital training program."
              )
            }}
          </p>
        </div>
      </div>
    </div>
    <div class="container-1" v-else>
      <div class="back"></div>
      <div class="text-page">
          <p class="act ms-4">{{ $t("Actual picture from original project") }}</p>
        </div>
      <div class="back-2">
        <div class="d-flex justify-content-around flex-column content mt-16 ms-16">
          <p class="titel-1">{{ $t("E-learning Transformation") }}</p>
          <v-divider class="divider"></v-divider>
          <div class="mt-5 mb-2">
            <p class="desc-1">
              {{
                $t(
                  "Are you looking for a way to train experience for all your employees, but don't know where to start?"
                )
              }}
            </p>
            <p class="desc">
              {{
                $t(
                  "Let the experts at LearnKhana transform your traditional training programs and take them to the digital world."
                )
              }}
            </p>
          </div>
          <div>
            <p class="desc">
              {{
                $t(
                  "Our team can provide the answers you need on why, when, and how to begin the process. "
                )
              }}
            </p>
            <p>
              {{
                $t(
                  "With our help, you can ensure a smooth transition and maximize the benefits of a digital training program."
                )
              }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  <style scoped>
.container-1 {
  height: 800px;
  position: relative;
}
.back {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  height: 550px;
  width: 60%;
  background: url("@/assets/images/consulatyld/learningld2.svg");
  background-size: 100% 100%;
  border-radius: 0px 55px 55px 0px;
}
.back::after {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: transparent linear-gradient(352deg, #2852a0b5 0%, #dbdfe600 100%)
    0% 0% no-repeat padding-box;
  border-radius: 0px 55px 55px 0px;
}
.back-2 {
  position: absolute;
  top: 30%;
  right: 0;
  width: 60%;
  height: 500px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 40px 0px 0px 40px;
  z-index: 2;
}
.text-page {
    
    position: absolute;
    bottom: 27%;
    width:40%;
    left: 0;

  }
  .act {
    color: #A5A5A5;
    font-size: 16px;
  }
.content {
  width: 64%;
  grid-gap: 12px;
  gap: 12px;
  height: 90%;
}
.titel-1 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-25) / var(--unnamed-line-spacing-38)
    var(--unnamed-font-family-poppins);
  color: var(--unnamed-color-2852a0);
  
  font: normal normal bold 25px/38px Poppins;
  letter-spacing: 0.07px;
  color: #2852a0;
}
.divider {
  width: 414px;
  height: 0px;
  border: 5px solid var(--unnamed-color-fab120);
  border: 5px solid #fab120;
}
.desc {
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-medium) var(--unnamed-font-size-23) /
    var(--unnamed-line-spacing-40) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-656463);
  
  font: normal normal 19px/30px Poppins;
  letter-spacing: 0px;
  color: #656463;
  margin-bottom: 0px !important;
}
.desc-1 {
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-medium) var(--unnamed-font-size-23) /
    var(--unnamed-line-spacing-40) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-656463);
  
  font: normal normal 20px/30px Poppins;
  letter-spacing: 0px;
  color: #656463;
  margin-bottom: 0px !important;
}
@media (max-width: 900px) {
  .container-1 {
    height: 550px;
  }
  .back-xs {
    height: 201px;
    position: relative;
    top: 0;
    left: 0;
    background: url("@/assets/images/consulatyld/learningld2-900.svg");
    border-radius: 100px 0px 0px 0px;
    background-size: cover;
  }
  .back-xs::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    border-radius: 100px 0px 0px 0px;
  }
  .content-1-xs {
    height: 100%;
    width: 80%;
    margin: 0 auto;
  }
  .titel-1-xs {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-bold) var(--unnamed-font-size-16) /
      var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
    color: var(--unnamed-color-ffffff);
    
    font: normal normal bold 16px/25px Poppins;
    letter-spacing: 0.05px;
    color: #ffffff;
  }
  .divider-xs {
    width: 210px;
    height: 0px;
    border: 2px solid var(--unnamed-color-fab120);
    border: 2px solid #fab120;
    opacity: 1;
  }

  .back-2-xs {
    height: 330px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 10px 10px #0000000d;
    border-radius: 0px 0px 100px 0px;
  }
  .content-xs {
    width: 85%;
    margin: 0 auto;
    height: 100%;
  }
  .desc-xs {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-normal) var(--unnamed-font-size-14) /
      var(--unnamed-line-spacing-20) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-656463);
    
    font: normal normal normal 14px/20px Poppins !important;
    letter-spacing: 0px;
    color: #656463;
    opacity: 1;
  }
  .desc-1-xs {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-normal) var(--unnamed-font-size-14) /
      var(--unnamed-line-spacing-20) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-656463);
    
    font: normal normal normal 14px/20px Poppins !important;
    letter-spacing: 0px;
    color: #656463;
    opacity: 1;
    margin-bottom: 0px !important;
  }
}
</style>