<template>
    <section class=" d-flex align-center">
      <v-row justify="start" align="center" class="back">
        <v-col cols="10" class="contain">
          <v-row justify="start">
            <v-col cols="12" lg="5" md="5" xl="5" class="d-flex padding align-end justify-center">
              <div class="d-flex align-end justify-start">
                <img src="@/assets/images/why/us.png" alt="" />
              </div>
            </v-col>
            <v-col cols="12" md="6" xl="6" lg="6" class="defualt">
              <div class="d-flex flex-column justify-space-between content">
                <div>
                  <h2 class="titel-1" :class="$vuetify.rtl ? 'change-dir':''">{{ $t("Why Learnkhana") }}</h2>
                  <img src="../../assets/images/stick-horizontal/1.svg" alt="" class="img">
                </div>
                <!-- <div>
                  <v-divider class="divider"></v-divider>
                </div> -->
                <div>
                  <p class="desc">
                    {{
                      $t(
                        "LearnKhana is a regional Edtech Company Providing an Integrated ecosystem of ready-made and customized learning solutions at one place. We build impactful, Engaging, and Fit for purpose learning"
                      )
                    }}
                  </p>
                </div>
                <div class="d-flex align-center ">
                  <!-- <img src="@/assets/images/about/5years.png" alt="" class="img me-3" /> -->
                  <p class="titel-2">{{ $t("Experiences for over") }}<span class="span-1">{{ $t("5 years") }}</span></p>
                </div>
                <div>
                  <p class="desc">
                    {{
                      $t(
                        "LearnKhana has successfully delivered learning solutions to 100+ clients."
                      )
                    }}
                  </p>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </section>
  </template>
  <style scoped>
  .back {
    background-image: url("@/assets/images/why/shape header.png");
    height: 800px;
    background-size: contain;
    background-position-x: right;
  }
  .contain {
    padding: 0px !important;
  }
  .defualt {
    display: flex;
    height: 140%;
  }
  .titel-1 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
      var(--unnamed-font-size-30) / var(--unnamed-line-spacing-48)
      var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-2852a0);

    font: normal normal bold 30px/48px Poppins;
    letter-spacing: 0px;
    color: #2852a0;
    opacity: 1;
  }
  .change-dir {
    position: relative;
    left: 10%;
    font-size: 40px;
  }
  .divider {
    width: 60%;
    height: 0px;
    border: 3px solid #fab120;
  }
  .img {
    width: 50%;
  }
  .desc {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-normal) var(--unnamed-font-size-24) /
      var(--unnamed-line-spacing-45) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-413f3f);

    font: normal normal normal 18px/45px Poppins;
    letter-spacing: 0px;
    color: #413f3f;
  }
  .titel-2 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
      var(--unnamed-font-size-30) / var(--unnamed-line-spacing-60)
      var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-2852a0);
    font: normal normal bold 30px/60px Poppins;
    letter-spacing: 0px;
    opacity: 1;
  }
  .span-1 {
    color: #fab120;
  }
  .content {
      grid-gap: 16px;
      gap: 18px;
  }
  .padding {
      padding: 0px;
  }
  </style>
