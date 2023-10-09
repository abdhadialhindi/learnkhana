<template>
  <section class="mt-16 ">
    <div
      class="container-1"
      v-if="
        this.$vuetify.breakpoint.name == 'xs' ||
        this.$vuetify.breakpoint.name == 'sm'
      "
    >
      <div class="back-2-xs"></div>
      <div class="back-xs">
        <div class="d-flex flex-column content-xs mt-5">
          <p
            class="title-1-xs"
            :class="
              this.$vuetify.breakpoint.name == 'lg' ||
              this.$vuetify.breakpoint.name == 'xl' ||
              this.$vuetify.breakpoint.name == 'md'
                ? 'mb-0'
                : 'mb-0'
            "
          >
            {{ $t("LK Video Library") }}
          </p>
          <v-divider class="divider-xs"></v-divider>
          <p class="desc-xs">
            {{ $t("Want to help your employees stay ahead of the game? ") }}
            <br />
            {{
              $t(
                "Check out our LK Video Library! With 100+ self-paced video courses covering a variety of fields, our library is the perfect learning solution for your team."
              )
            }}
          </p>
          <p class="desc-xs">
            {{
              $t(
                "Our courses come with job aids and assessments to make learning even more engaging and effective. "
              )
            }}
            <br />
            {{
              $t(
                "Give your employees the tools to succeed and watch them thrive!"
              )
            }}
          </p>
          <p class="desc-2-xs">
            {{
              $t(
                "Empower your team with the latest and greatest learning resources starting today!"
              )
            }}
          </p>
        </div>
        <!-- <div class="visit mt-4 text-center d-flex justify-center align-center">
          <p class="visit-desc">{{ $t("Visit Learnkhana Library") }}</p>
        </div>
        <div class="d-flex justify-center mt-0"><v-btn class="btn">{{ $t("Visit") }}</v-btn></div> -->
      </div>
    </div>
    <div class="container-1" v-else>
      <div class="back">
        <div class="d-flex justify-content-around flex-column content mt-7">
          <p
            class="title-1"
            :class="
              this.$vuetify.breakpoint.name == 'lg' ||
              this.$vuetify.breakpoint.name == 'xl' ||
              this.$vuetify.breakpoint.name == 'md'
                ? 'mb-0'
                : ''
            "
          >
            {{ $t("LearnKhana Video Library") }}
          </p>
          <v-divider class="divider"></v-divider>
          <p class="desc">
            {{
              $t(
                "Want to help your employees stay ahead of the game? Check out our LK Video Library! With 100+ self-paced video courses covering a variety of fields, our library is the perfect learning solution for your team."
              )
            }}
          </p>
          <div>
            <p
              class="desc-1"
              :class="
                this.$vuetify.breakpoint.name == 'lg' ||
                this.$vuetify.breakpoint.name == 'xl' ||
                this.$vuetify.breakpoint.name == 'md'
                  ? 'mb-0'
                  : ''
              "
            >
              {{
                $t(
                  "Our courses come with job aids and assessments to make learning even more engaging and effective. "
                )
              }}
            </p>

            <p
              class="desc-1"
              :class="
                this.$vuetify.breakpoint.name == 'lg' ||
                this.$vuetify.breakpoint.name == 'xl' ||
                this.$vuetify.breakpoint.name == 'md'
                  ? 'mt-0'
                  : ''
              "
            >
              {{
                $t(
                  "Give your employees the tools to succeed and watch them thrive!"
                )
              }}
            </p>
          </div>
        </div>
      </div>
      <div class="back-2"></div>
      <div class="text-page">
          <p class="act me-10 mt-1">{{ $t("Actual picture from original project") }}</p>
        </div>
    </div>
  </section>
</template>
  <style scoped>
.container-1 {
  position: relative;
  height: 580px;
}
.back {
  position: absolute;
  top: 0;
  left: 0;
  background: url("@/assets/images/ready/library2.svg");
  background-size: cover;
  width: 60%;
  height: 550px;

  border-radius: 0px 0px 150px 0px;
  z-index: 2;
}
.back-2 {
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 0px 0px 150px 0px;
  width: 74%;
  height: 550px;
  background: url("@/assets/images/ready/library1.svg");
  background-position-y: center;
  z-index: 1;
  background-size: cover;
}
.back-2::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: transparent linear-gradient(30deg, #2852a087 0%, #dbdfe600 100%)
    0% 0% no-repeat padding-box;
  border-radius: 0px 0px 150px 0px;
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
  width: 81%;
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
@media (max-width: 1280px) {
  .content {
    width: 83%;
  }
}
@media (max-width: 900px) {
  .container-1 {
    height: 720px;
  }
  .back-2-xs {
    position: absolute;
    top: 25px;
    left: 0;
    width: 100%;
    height: 313px;
    border: 0.25px solid #fab120;
    border-radius: 100px 0px 0px 0px;
    background-image: url("@/assets/images/ready/library1.svg");
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
    height: 425px;
    position: absolute;
    bottom: 0;
    left: 0;
    border: 0.25px solid #FAB120;
border-radius: 0px 0px 100px 0px;
    background: url("@/assets/images/consulatyld/textblue768.svg");
    background-size: cover;
  }
  .content-xs {
    width: 83%;
    margin: 0 auto;
  }
  .title-1-xs {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-bold) var(--unnamed-font-size-16) /
      var(--unnamed-line-spacing-60) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-ffffff);
    
    font: normal normal bold 16px/21px Poppins;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
  }
  .divider-xs {
    width: 210px;
    height: 0px;
    margin-top: 15px;
margin-bottom: 20px;
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
  .desc-2-xs {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-bold) var(--unnamed-font-size-14) / 26px
      var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    
    font: normal normal bold 14px/26px Poppins;
    letter-spacing: 0px;
    opacity: 1;
    color: #ffffff;
  }
  .visit {
    height: 37px;
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 20px 0px 10px 0px;
    opacity: 1;
  }
  .visit-desc {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-bold) var(--unnamed-font-size-14) /
      var(--unnamed-line-spacing-40) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-2852a0);
    font: normal normal bold 14px/40px Poppins;
    letter-spacing: 0px;
    color: #2852a0;
  }
  .btn {
    width: 45% !important;
    height: 37px !important;
/* UI Properties */
background: var(--unnamed-color-2852a0) 0% 0% no-repeat padding-box;
border: 1px solid var(--unnamed-color-ffffff);
background: #2852A0 0% 0% no-repeat padding-box !important;
border: 1px solid #FFFFFF !important;
border-radius: 20px 0px !important;
box-shadow: none !important;
font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-14)/var(--unnamed-line-spacing-50) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-ffffff);
text-align: center;
font: normal normal bold 14px/50px Poppins;
letter-spacing: 0px;
color: #FFFFFF;
  }
}
@media (max-width:360px) {
  .desc-xs {
    font-size: 13px !important;
  }
}
</style>
