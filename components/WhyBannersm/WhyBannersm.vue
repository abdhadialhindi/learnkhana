
<template>
    <section class="back d-flex align-end">
      <v-row justify="" align="center">
        <v-col cols="12" class="contain">
          <v-row justify="space-between">
            <v-col cols="12" lg="7" md="7" xl="7" class="d-flex padding align-end">
              <div class="d-flex align-end justify-center width">
                <img src="@/assets/images/why/us.png" alt="" class="res" />
              </div>
            </v-col>
            <v-col cols="12" md="5" xl="5" lg="5" class="defualt">
              <div class="d-flex flex-column justify-space-between content align-center">
                <div class="d-flex flex-column justify-center align-center">
                  <h2 class="titel-1 text-center">{{ $t("Why Learnkhana") }}</h2>
                  <img src="../../assets/images/stick-horizontal/1.svg" alt="" class="img">
                </div>

                <div class="text-center">
                  <p class="desc">
                    {{
                      $t(
                        "LearnKhana is a regional Edtech Company Providing an Integrated ecosystem of ready-made and customized learning solutions at one place. We build impactful, Engaging, and Fit for purpose learning"
                      )
                    }}
                  </p>
                </div>
                <div class="d-flex align-center ">

                  <p class="titel-2">{{ $t("Experiences for over") }}<span class="span-1">{{ $t("5 years") }}</span></p>
                </div>
                <div class="text-center">
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
    background-image: url("@/assets/images/about/headersm.png");
    height: 813px;

    background-position-x: right;
  }
  .contain {
    padding: 0px !important;
  }
  .defualt {
      padding: 26px;
    display: flex;
    height: 140%;
  }
  .titel-1 {
      font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-2852a0);

  font: normal normal bold 16px/25px Poppins;
  letter-spacing: 0px;
  color: #2852A0;
  opacity: 1;
  }
  .divider {
    width: 60%;
    height: 0px;
    border: 1px solid #fab120;
  }
  .desc {
      font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-14)/var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-413f3f);
  font: normal normal normal 15px/25px Poppins;
  letter-spacing: 0px;
  color: #413F3F;
  opacity: 1;
  }
  .titel-2 {
      font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);

  font: normal normal bold 16px/25px Poppins;
  letter-spacing: 0px;
  opacity: 1;
  color: #2852A0;
  }
  .content {
      grid-gap: 20px;
      gap: 20px;
  }
  .padding {
      padding: 0px;
  }
  .res {
      width: 54%;
  }
  .width {
    width: 100%;
  }
  .img {
    width: 50%;
  }
  .span-1 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-16)/22px var(--unnamed-font-family-poppins);
color: var(--unnamed-color-fab120);
text-align: center;
font: normal normal bold 16px/22px Poppins;
letter-spacing: 0.48px;
color: #FAB120;
  }
  </style>
