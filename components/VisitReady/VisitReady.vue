<template>
  <section class="pt-16 pb-16">
    <v-row justify="center">
      <h1 class="titel-1">
        <span class="span-1">{{ $t("Empower") }}</span
        >{{ $t(" your team today!") }}
      </h1>
    </v-row>
    <v-row justify="center">
      <div class="contain mt-5">
        <span>{{ $t("Visit Learnkhana Library") }}</span>
        <span class="desc ms-3">{{ $t("OR") }}</span>
        <span class="ms-3">{{ $t("Tailor your own customized course") }}</span>
        <span  class="ms-3">{{ $t("that fits your needs.") }}</span>
      </div></v-row
    >
    <v-row justify="center" class="mt-7">
        <v-btn class="btn-1">{{ $t("Visit library") }}</v-btn>
        <v-btn class="btn-1 ms-6 back" >{{ $t("Customized Course") }}</v-btn>
    </v-row>
    <SpacerProject></SpacerProject>
  </section>
</template>
<style scoped>
.titel-1 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-24) / var(--unnamed-line-spacing-40)
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);

  font: normal normal bold 24px/40px Poppins;
  letter-spacing: 0px;
  opacity: 1;
  color: #2852a0;
}
.span-1 {
  color: #fab120;
}
.contain {
  width: 62%;
  background: var(--unnamed-color-2852a0) 0% 0% no-repeat padding-box;
  background: #2852a0 0% 0% no-repeat padding-box;
  border-radius: 20px;
  opacity: 1;
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-18) / var(--unnamed-line-spacing-40)
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
  text-align: center;
  font: normal normal bold 18px/40px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
}
.desc {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-22) / var(--unnamed-line-spacing-25)
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-fab120);
  text-align: center;
  font: normal normal bold 22px/25px Poppins;
  letter-spacing: 0px;
  color: #fab120;
}
.btn-1 {
    width: 12% !important;
    height: 35px !important;
    background: #C9D4E7 0% 0% no-repeat padding-box !important;
border-radius: 10px !important;
box-shadow: none !important;
font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-15)/var(--unnamed-line-spacing-50) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-2852a0);
text-align: center;
font: normal normal bold 15px/50px Poppins;
letter-spacing: 0px;
color: #2852A0;
text-transform: none;
opacity: 1;
}
.back {
    background: #FFFFFF 0% 0% no-repeat padding-box !important;
box-shadow: 0px 3px 6px #0000000A !important;
border: 2px solid #C9D4E7 !important;
}
</style>