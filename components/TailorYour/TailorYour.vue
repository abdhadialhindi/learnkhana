<template>
  <section class="back d-flex justify-start align-center flex-column">
    <div class="text-center ">
      <h1 class="titel-2"><span class="span-2">{{ $t("Empower") }}</span>{{ $t(" your team today!") }}</h1>
    </div>
      <div class="content text-center mt-5 d-flex flex-column justify-space-around align-center">
        
        <p class="desc mb-0 mt-2">
          
          {{ $t("Visit Learnkhana Library") }}
        </p>
        <p class="or mb-0">{{ $t("OR") }}</p>
        <p class="desc-1 mb-1">{{ $t("Tailor Your Own Customized Course") }} <br> {{ $t(" That fits your needs.") }}</p>
        
      </div>
      <v-row justify="center" class="btn-5 mt-5">
        <v-btn class="button-5">{{ $t("Visit library") }}</v-btn>
      </v-row>
      <v-row justify="center" class="btn-5 ">
        <v-btn class="button-4">{{ $t("Customized Course") }}</v-btn>
      </v-row>
    
  </section>
</template>
<style scoped>
.back {
  height: 250px;
}
.span-2 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-14)/7px var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-fab120);

font: normal normal bold 14px/7px Poppins;
letter-spacing: 0px;
color: #FAB120;
}
.titel-2 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-14)/7px var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-2852a0);

font: normal normal bold 14px/7px Poppins;
letter-spacing: 0px;
color: #2852A0;
}
.or {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-14)/5px var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-fab120);
text-align: center;
font: normal normal bold 14px/5px Poppins;
letter-spacing: 0px;
color: #FAB120;
opacity: 1;
}
.content {
  width: 80%;
  height: 99px;
  background: var(--unnamed-color-2852a0) 0% 0% no-repeat padding-box;
background: #2852A0 0% 0% no-repeat padding-box;
border-radius: 20px;
opacity: 1;
}
.titel-1 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-16) / var(--unnamed-line-spacing-25)
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-fab120);
  text-align: center;
  font: normal normal bold 16px/25px Poppins;
  letter-spacing: 0px;
  color: #fab120;
}
.span-1 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-16) / var(--unnamed-line-spacing-25)
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-fab120);
  text-align: center;
  font: normal normal bold 16px/25px Poppins;
  letter-spacing: 0px;
  color: #fab120;
}
.desc {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 13px/7px var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-ffffff);

font: normal normal bold 13px/7px Poppins;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
}
.desc-1 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 13px/6px var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-ffffff);
text-align: center;
font: normal normal bold 13px/15px Poppins;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
}
.button-5 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-12)/var(--unnamed-line-spacing-50) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-2852a0);
text-align: center;
font: normal normal bold 12px/50px Poppins;
letter-spacing: 0px;
color: #2852A0;
text-transform: lowercase;
opacity: 1;
width: 37% !important;
min-width: 37% !important;
max-width: 37% !important;
height: 21px !important;
/* UI Properties */
background: #C9D4E7 0% 0% no-repeat padding-box !important;
box-shadow: 0px 3px 6px #0000000A !important;
border-radius: 7px;
opacity: 1;
}
.btn-5 {
  width: 100%;
}
.button-4 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-12)/var(--unnamed-line-spacing-18) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-2852a0);
text-align: center;
font: normal normal bold 12px/18px Poppins;
letter-spacing: 0px;
color: #2852A0;
opacity: 1;
width: 37% !important;
min-width: 37% !important;
max-width: 37% !important;
height: 21px !important;
box-shadow: 0px 3px 6px #0000000A;
border: 1px solid #C9D4E7 !important;
border-radius: 7px;
opacity: 1;
}
</style>