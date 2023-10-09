<template>
  <section>
    <SpacerProject v-if="this.$vuetify.breakpoint.name=='md' || this.$vuetify.breakpoint.name=='sm' || this.$vuetify.breakpoint.name=='lg' || this.$vuetify.breakpoint.name=='xl'"></SpacerProject>
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <div class="section-title text-center mb--20 mb_sm--0">
            <h1 class="titel-1">
              {{ $t("MixandMatch") }}
            </h1>
            <img
              src="../../assets/images/stick-horizontal/1.svg"
              alt=""
              class="stick"
            />
            <p class="desc">{{ $t("for the ultimate experience!") }}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <section
      v-if="
        this.$vuetify.breakpoint.name == 'xl' ||
        this.$vuetify.breakpoint.name == 'lg' ||
        this.$vuetify.breakpoint.name == 'md'
      "
    >
      <v-container class="container-1">
        <v-row justify="space-around">
          <!-- <div class="d-flex justify-space-around arrow-width"> -->
          <img
            src="../../assets/images/juorney/mix and match/dashlineleft.svg"
            alt=""
            class="arrow"
          />
          <img
            src="../../assets/images/juorney/mix and match/arrowright.svg"
            alt=""
            class="arrow"
          />
          <!-- </div> -->
        </v-row>
      </v-container>
      <v-container class="container-2">
        <v-row justify="space-between">
          <div class="content d-flex flex-column justify-center align-center">
            <img
              src="../../assets/images/juorney/mix and match/simu.svg"
              alt=""
              class="img"
            />
            <h2 class="titel-2">{{ $t("ILT Simulations Format") }}</h2>
          </div>
          <div class="content d-flex flex-column justify-center align-center">
            <img
              src="../../assets/images/juorney/mix and match/icon ilt classroom.svg"
              alt=""
              class="img"
            />
            <h2 class="titel-2">{{ $t("ILT Classroom Format") }}</h2>
          </div>
          <div class="content d-flex flex-column justify-center align-center">
            <img
              src="../../assets/images/juorney/mix and match/virtual.svg"
              alt=""
              class="img"
            />
            <h2 class="titel-2 " :class="$vuetify.rtl ? 'width-ar' :'width'">
              {{ $t("ILT Virtual Learning Format") }}
            </h2>
          </div>
          <div class="content d-flex flex-column justify-center align-center">
            <img
              src="../../assets/images/juorney/mix and match/rein.svg"
              alt=""
              class="img"
            />
            <h2 class="titel-2">{{ $t("LK Reinforcing Tools") }}</h2>
          </div>
          <div class="content d-flex flex-column justify-center align-center">
            <img
              src="../../assets/images/juorney/mix and match/icon self based.svg"
              alt=""
              class="img"
            />
            <h2 class="titel-2 width-1">{{ $t("Self Based Learning") }}</h2>
          </div>
        </v-row>
      </v-container>
      <v-container class="container-1">
        <v-row justify="space-around">
          <!-- <div class="d-flex justify-space-around arrow-width"> -->
          <img
            src="../../assets/images/juorney/mix and match/arrowleft.svg"
            alt=""
            class="arrow"
          />
          <img
            src="../../assets/images/juorney/mix and match/dashlineright.svg"
            alt=""
            class="arrow"
          />

          <!-- </div> -->
        </v-row>
      </v-container>
    </section>
    <section v-else>
      <v-container>
        <v-row justify="center">
          <img
            src="../../assets/images/juorney/mix and match/arrowright.svg"
            class="arrow-xs"
            alt=""
          />
        </v-row>
      </v-container>
      <v-container>
        <v-row justify="space-around">
          <div class="content d-flex flex-column justify-center align-center">
            <img
              src="../../assets/images/juorney/mix and match/simu.svg"
              alt=""
              class="img"
            />
            <h2 class="titel-2">{{ $t("ILT Simulations Format") }}</h2>
          </div>
          <div class="content d-flex flex-column justify-center align-center">
            <img
              src="../../assets/images/juorney/mix and match/icon ilt classroom.svg"
              alt=""
              class="img"
            />
            <h2 class="titel-2">{{ $t("ILT Classroom Format") }}</h2>
          </div>
        </v-row>
        <v-row justify="center">
          <div class="content d-flex flex-column justify-center align-center">
            <img
              src="../../assets/images/juorney/mix and match/virtual.svg"
              alt=""
              class="img"
            />
            <h2 class="titel-2">
              {{ $t("ILT Virtual Learning Format") }}
            </h2>
          </div>
        </v-row>
        <v-row justify="space-around">
          <div class="content d-flex flex-column justify-center align-center">
            <img
              src="../../assets/images/juorney/mix and match/rein.svg"
              alt=""
              class="img"
            />
            <h2 class="titel-2">{{ $t("LK Reinforcing Tools") }}</h2>
          </div>
          <div class="content d-flex flex-column justify-center align-center">
            <img
              src="../../assets/images/juorney/mix and match/icon self based.svg"
              alt=""
              class="img"
            />
            <h2 class="titel-2">{{ $t("Self Based Learning") }}</h2>
          </div>
        </v-row>
      </v-container>
      <v-container>
        <v-row justify="center">
          <img
            src="../../assets/images/juorney/mix and match/arrowleft.svg"
            alt=""
            class="arrow-xs"
          />
        </v-row>
      </v-container>
    </section>
    <SpacerProject v-if="this.$vuetify.breakpoint.name=='md' || this.$vuetify.breakpoint.name=='sm' || this.$vuetify.breakpoint.name=='lg' || this.$vuetify.breakpoint.name=='xl'"></SpacerProject>
  </section>
</template>
<style scoped>
.titel-1 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-40) / var(--unnamed-line-spacing-60)
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0-12);
  color: var(--unnamed-color-fab120);
  text-align: center;
  font: normal normal bold 40px/60px Poppins;
  letter-spacing: 0.12px;
  color: #fab120;
  margin-bottom: 0px;
}
.stick {
  width: 30%;
}
.container-1 {
  max-width: 1050px;
}
.arrow {
  width: 37%;
}
.container-2 {
  max-width: 1150px;
}
.titel-2 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-22) / var(--unnamed-line-spacing-33)
    var(--unnamed-font-family-poppins);
  color: var(--unnamed-color-2852a0);
  text-align: center;
  font: normal normal bold 22px/33px Poppins;
  letter-spacing: 0.88px;
  color: #2852a0;
  opacity: 1;
}
.content {
  max-width: 17%;
}
.img {
  max-width: 68%;
}
.width {
  width: 120% ;
}
.width-ar {
  width: 100%;
}
.width-1 {
  width: 150%;
}
.desc {
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-medium) var(--unnamed-font-size-35) /
    var(--unnamed-line-spacing-53) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0-1);
  color: var(--unnamed-color-2852a0);
  text-align: center;
  font: normal normal  25px/30px Poppins;
  letter-spacing: 0.1px;
  color: #2852a0 !important;

}
@media (max-width: 900px) {
  .titel-1 {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-bold) var(--unnamed-font-size-16) /
      var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
    color: var(--unnamed-color-fab120);
    text-align: center;
    font: normal normal bold 16px/4px Poppins;
    letter-spacing: 0.05px;
    color: #fab120;
  }
  .stick {
    width: 44%;
  }
  .desc {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) var(--unnamed-font-size-14)/21px var(--unnamed-font-family-poppins);
color: var(--unnamed-color-2852a0);
text-align: center;
font: normal normal  14px/7px Poppins;
letter-spacing: 0.04px;
color: #2852A0;
margin-bottom: 40px;
  }
  .arrow-xs {
    max-width: 65%;
  }
  .img {
    max-width: 60%;
  }
  .content {
    max-width: 38%;
  }
  .titel-2 {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-bold) var(--unnamed-font-size-14) /
      var(--unnamed-line-spacing-20) var(--unnamed-font-family-poppins);
    color: var(--unnamed-color-2852a0);
    text-align: center;
    font: normal normal bold 14px/20px Poppins;
    letter-spacing: 0.04px;
    color: #2852a0;
    opacity: 1;
  }
}
</style>