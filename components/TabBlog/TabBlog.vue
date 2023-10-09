<template>
  <section
    v-if="
      this.$vuetify.breakpoint.name == 'lg' ||
      this.$vuetify.breakpoint.name == 'xl' ||
      this.$vuetify.breakpoint.name == 'md'
    "
  >
    <v-row justify="center">
      <div class="text-center divider">
        <h3 class="titel-1">
          {{ $t("Take a look around learn something new") }}
        </h3>
      </div>
    </v-row>
    <v-container class="mt-8 mb-8 container-1">
      <v-row justify="center">
        <v-col cols="12" md="4" lg="4" xl="4" >
          <p class="desc">
            {{ $t("Join our community. We're happy to have you!") }}
          </p>
        </v-col>
      </v-row>
      <v-row justify="end" class="row-hieght">
        <v-col cols="11.1" >
          <v-row justify="center" align="center">
            <v-col md="1"
              ><v-btn class="button"
                ><span class="line">{{ $t("All") }}</span></v-btn
              ></v-col
            >
            <v-col md="2"
              ><v-btn class="button-1" @click="to_tips">{{ $t("Trainers-tips") }}</v-btn></v-col
              >
              <v-col md="2"
                ><v-btn class="button-1" @click="to_principles">{{
                  $t("Learning principles")
                }}</v-btn></v-col
              >
            <v-col md="2"
              ><v-btn class="button-1" @click="to_trend">{{
                $t("Learning trends")
              }}</v-btn></v-col
            >
            <v-col cols="12" md="3" lg="3" xl="3" class="text-field ">
              <v-text-field
                solo
                label="Search"
                append-icon="mdi-magnify"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
  <section v-else>
    <v-container>
      <v-row justify="center">
        <div class="text-center divider-xs">
          <h6 class="titel-xs">
            {{ $t("Take a look around learn something new") }}
          </h6>
        </div>
      </v-row>
      <v-row justify="center">
        <v-col cols="6" class="px-0 ">
          <div class="text-center mt-5 mb-8">
            <p class="desc-xs">
              {{ $t("join our community . We're happy to have you") }}
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="6" class="py-0">
          <v-btn class="button-xs"
            ><span class="line-xs">{{ $t("All") }}</span></v-btn
          >
        </v-col>
        <v-col cols="6" class="text-xs py-0">
          <v-text-field
            solo
            :label="$t('Search')"
            append-icon="mdi-magnify"
          ></v-text-field
        ></v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="6" class="py-0"
          ><v-btn class="button-1-xs" @click="to_tips">{{ $t("Trainers-tips") }}</v-btn></v-col
        >
        <v-col cols="6" class="py-0"
          ><v-btn class="button-1-xs" @click="to_trend">{{ $t("Learning trends") }}</v-btn></v-col
        >
      </v-row>
      <v-row justify="center" class="mt-8 mb-8">
        <v-col cols="6" class="py-0"
          ><v-btn class="button-1-xs" @click="to_principles">{{
            $t("Learning principles")
          }}</v-btn></v-col
        >
      </v-row>
    </v-container>
  </section>
</template>
<script>
export default {
  methods: {
    to_tips(){
      this.$vuetify.goTo("#tips");

  },
  to_trend(){
      this.$vuetify.goTo("#trend");

  },
  to_principles(){
      this.$vuetify.goTo("#principles");

  },
  },
};
</script>
<style scoped>
.divider {
  width: 72%;
  position: relative;
}
.divider::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  height: 0px;
  width: 29%;
  border: 5px solid var(--unnamed-color-fab120);
}
.titel-1 {
  font: normal normal bold 40px/80px Poppins;
  letter-spacing: 0px;
  color: #2852a0;
  margin-bottom: 16px;
}
.desc {
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-30) / 54px
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-656463);
  text-align: center;
  font: normal normal normal 30px/54px Poppins;
  letter-spacing: 0px;
  color: #656463;
  opacity: 1;
}
.container-1 {
  max-width: 1250px;
}
.button {
  background: #fbfbfb 0% 0% no-repeat padding-box !important;
  border-radius: 0px 80px 10px 0px !important;
  height: 79px !important;
  box-shadow: none;
}
.button-1 {
  background: #fbfbfb 0% 0% no-repeat padding-box !important;
  height: 79px !important;
  width: 100%;
  box-shadow: none;
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-medium) var(--unnamed-font-size-20) / 80px
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-656463);

  font: normal normal medium 20px/80px Poppins;
  letter-spacing: 0px;
  color: #656463;
  opacity: 1;
}
.button-1:hover {
  color: #2852a0;
}
.line {
  position: relative;
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) var(--unnamed-font-size-22)/55px var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-2852a0);

font: normal normal medium 22px/55px Poppins;
letter-spacing: 0px;
color: #2852A0;
opacity: 1;
}
.line::after {
  content: "";
  position: absolute;
  top: 75%;
  transform: translateY(-0%);
  left: -3%;
  width: 120%;
  height: 0;
  border: 1px solid var(--unnamed-color-fab120);
}
@media (max-width: 900px) {
  .divider-xs {
    position: relative;
  }
  .divider-xs::after {
    content: "";
    position: absolute;
    width: 23%;
    height: 0;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 2px solid var(--unnamed-color-fab120);
  }
  .titel-xs {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-bold) var(--unnamed-font-size-16) /
      var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-2852a0);

    font: normal normal bold 16px/25px Poppins;
    letter-spacing: 0px;
    color: #2852a0;
  }
  .desc-xs {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-medium) var(--unnamed-font-size-15) /
      var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-656463);

    font: normal normal 15px/25px Poppins;
    letter-spacing: 0px;
    color: #656463;
    opacity: 1;
  }
  .button-xs {
    width: 100% !important;
    background: #fbfbfb 0% 0% no-repeat padding-box !important;
    border-radius: 17px !important;
    box-shadow: none;
  }
  .button-1-xs {
    text-transform: capitalize !important;
    width: 100% !important;
    background: #fbfbfb 0% 0% no-repeat padding-box !important;
    border-radius: 17px !important;
    box-shadow: none;
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-medium) var(--unnamed-font-size-14) /
      var(--unnamed-line-spacing-35) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-656463);

    font: normal normal 14px/35px Poppins;
    letter-spacing: 0px;
    color: #656463;
    opacity: 1;
  }
  .button-1-xs:hover {
    color: #2852a0;
  }
  .line-xs {
    position: relative;
    text-transform: capitalize !important;
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-medium) var(--unnamed-font-size-14) /
      var(--unnamed-line-spacing-48) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-2852a0);

    font: normal normal bold 14px/48px Poppins;
    letter-spacing: 0px;
    color: #2852a0;
  }
  .line-xs::after {
    content: "";
    position: absolute;
    top: 63%;
    left: -50%;
    height: 0;
    width: 200%;
    border: 2px solid var(--unnamed-color-fab120);
  }
}
</style>
<style>
.text-field
  .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
  > .v-input__control
  > .v-input__slot {
  box-shadow: none;
}
.text-field .theme--light.v-input input {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-21)/var(--unnamed-line-spacing-45) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-656463);
text-align: center;
font: normal normal normal 20px/45px Poppins;
letter-spacing: 0px;
color: #656463;
}
.text-field .theme--light.v-label {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-21)/var(--unnamed-line-spacing-45) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-656463);
text-align: center;
font: normal normal normal 20px/45px Poppins;
letter-spacing: 0px;
color: #656463;
  height: 39px;
  top: 90%;
  transform: translateY(-50%);
}
.text-field .v-input__icon {
  width: 30px;
  height: 30px;
  font-size: 28px;
  font-weight: 100;
  transform: translateY(50%);
}
.text-field .v-icon.v-icon {

  font-weight: 100;
  font-size: 28px;
}
.row-hieght .col {
  max-height: 93%;
}
@media (max-width: 900px) {
  .text-xs
    .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
    > .v-input__control
    > .v-input__slot {
    background: #fbfbfb 0% 0% no-repeat padding-box;
    border-radius: 17px;
    box-shadow: none;
    min-height: 36px !important;
  }
}
</style>
