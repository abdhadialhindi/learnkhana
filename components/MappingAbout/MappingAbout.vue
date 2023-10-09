<template>
  <section>
    <div class="d-flex justify-center align-center flex-column gradient">
      <h2 class="titel-1">{{ $t("Competency Mapping Of LearnKhana") }}</h2>
      <div class="d-flex justify-center match">
        <v-divider class="divider-1 " :class="this.$vuetify.breakpoint.name=='xs' || this.$vuetify.breakpoint.name=='sm' ? 'me-1':'me-2' "></v-divider>
      <v-divider class="divider " :class="this.$vuetify.breakpoint.name=='xs' || this.$vuetify.breakpoint.name=='sm' ? 'me-1 ms-1':'me-3 ms-2' "></v-divider>
    </div>
    </div>
    <div class="text-center width" :class="this.$vuetify.breakpoint.name=='xs' || this.$vuetify.breakpoint.name=='sm' ? '':'mt-3 mb-16' ">
      <p class="desc">
        {{
          $t(
            "We specialize in providing tailored solutions to meet your needs,"
          )
        }}
        <br />
        {{
          $t(
            "to ensure that your business is equipped with the right skills to succeed."
          )
        }}
      </p>
    </div>
    <v-row
      justify="space-between"
      :class="
        this.$vuetify.breakpoint.name == 'xs' ||
        this.$vuetify.breakpoint.name == 'sm'
          ? ''
          : 'mt-10'
      "
    >
      <v-col
        cols="12"
        md="6"
        xl="6"
        lg="6"
        class="d-flex justify-center align-center padding"
      >
        <div class="d-flex justify-center align-center">
          <img src="@/assets/images/about/mapping.png" alt="" class="img" />
        </div>
      </v-col>
      <v-col
        cols="12"
        md="6"
        xl="6"
        lg="6"
        class="d-flex flex-column justify-space-between gap"
      >
        <div class="d-flex justify-center align-center back">
          <v-icon class="icon " :class="this.$vuetify.breakpoint.name=='xs' || this.$vuetify.breakpoint.name=='sm' ? '':'me-3' ">mdi-circle-small</v-icon>
          <h1 class="titel-2">{{ $t("Vision") }}</h1>
          <v-icon class="icon " :class="this.$vuetify.breakpoint.name=='xs' || this.$vuetify.breakpoint.name=='sm' ? '':'ms-3' ">mdi-circle-small</v-icon>
        </div>
        <div class="d-flex justify-center text-center content">
          <p class="desc-1">
            {{
              $t(
                "We take a value-driven approach to every training we undertake to help organizations achieve their business objectives by helping them train their employees, partners, and clients effectively."
              )
            }}
          </p>
        </div>
        <div class="d-flex justify-center align-center back">
          <v-icon class="icon " :class="this.$vuetify.breakpoint.name=='xs' || this.$vuetify.breakpoint.name=='sm' ? '':'me-3' ">mdi-circle-small</v-icon>
          <h1 class="titel-2">{{ $t("Mission") }}</h1>
          <v-icon class="icon " :class="this.$vuetify.breakpoint.name=='xs' || this.$vuetify.breakpoint.name=='sm' ? '':'ms-3' ">mdi-circle-small</v-icon>
        </div>
        <div class="d-flex justify-center text-center content-1">
          <p class="desc-1 desc-xs">
            {{
              $t(
                "To Build impactful, engaging, and fit-of-purpose learning experiences."
              )
            }}
          </p>
        </div>
      </v-col>
    </v-row>
  </section>
</template>
<style scoped>
.gradient {
  background: transparent linear-gradient(90deg, #c9d4e71f 0%, #ffffff61 100%)
    0% 0% no-repeat padding-box;
  border-radius: 0px 5px 5px 0px;
  height: 159px;
  grid-gap: 12px;
  gap: 12px;
}
.titel-1 {
  font: normal normal bold 30px/46px Poppins;
  color: var(--unnamed-color-2852a0);
}
.match {
  width: 28%;
}
.divider {
  border-radius: 1px;
  border: 3px solid var(--unnamed-color-fab120);
  border: 3px solid #fab120;
  opacity: 1;
  width: 71%;
  max-width: 71%;
  min-width: 71%;
  height: 0px;
}
.divider-1 {
  border: 3px solid var(--unnamed-color-fab120);
  border: 3px solid #fab120;
  opacity: 1;
  width: 27%;
  max-width: 27%;
  min-width: 27%;
  height: 0px;
}
.desc {
  color: var(--unnamed-color-413f3f);
  font: normal normal 24px/35px Poppins;
  width: 65%;
}
.width {
  display: flex;
  justify-content: center;
}
.padding {
  padding: 0px;
}
.back {
  height: 119px;
  background: transparent linear-gradient(270deg, #c9d4e759 0%, #ffffff61 100%)
    0% 0% no-repeat padding-box;
  border-radius: 5px 0px 0px 5px;
  opacity: 1;
}
.titel-2 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-25) / var(--unnamed-line-spacing-38)
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-2852a0);
  
  font: normal normal bold 25px/38px Poppins;
  letter-spacing: 0px;
  color: #2852a0;
  opacity: 1;
}
.icon {
  background-color: transparent;
  font-size: 44px;
  color: #fab120 !important;
}
.img {
  width: 85%;
}
.padding {
  height: 690px;
}
.desc-1 {
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-24) /
    var(--unnamed-line-spacing-45) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-413f3f);
  text-align: center;
  font: normal normal normal 24px/45px Poppins;
  letter-spacing: 0px;
  color: #413f3f;
  opacity: 1;
}
.content {
  width: 85%;
}
.content-1 {
    width: 85%;
}
.gap {
  grid-gap: 12px;
  gap: 12px;
  height: 600px;
}
@media (max-width: 900px) {
  .gap {
    height: 450px;
  }
  .back {
    height: 57px;
  }
  .gradient {
    height: 98px;
  }
  .titel-1 {
    font: normal normal bold 16px/25px Poppins;
    color: var(--unnamed-color-2852a0);
  }
  .desc {
    color: var(--unnamed-color-413f3f);
    font: normal normal 14px/21px Poppins;
    width: 100%;
    text-align: start;
    padding: 37px;
  }
  .padding {
    height: 350px;
  }
  .titel-2 {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-bold) var(--unnamed-font-size-16) /
      var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-2852a0);
    
    font: normal normal bold 16px/25px Poppins;
    letter-spacing: 0px;
    color: #2852a0;
    opacity: 1;
  }
  .icon {
    width: 15px;
    font-size: 34px;
  }
  .desc-1 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-14)/var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-413f3f);
text-align: center;
font: normal normal normal 14px/25px Poppins;
letter-spacing: 0px;
color: #413F3F;
opacity: 1;
  }
  .content {
    width: 95%;
  }
  .content-1 {
    width: 100%;
  }
  .desc-xs {
    width: 60%;
  }
  .divider-1 {
    border: 1px solid #fab120;
  }
  .divider {
    border: 1px solid #fab120;
  }
  .match {
    width: 33%;
  }
}
</style>