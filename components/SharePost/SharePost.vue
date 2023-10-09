<template>
  <section>
    <div>
      <h2 class="text-center titel-2">
        {{ $t("Share post") }}
      </h2>
    </div>
    <v-row justify="center" class="button mt-16">
        <div class="content">
            
      <v-btn class="button-1 me-2 px-1" 
        ><v-icon class="icon-1 me-3 ms-1">mdi-facebook</v-icon
        >{{ $t("Facebook") }}</v-btn
      >
      <v-btn class="button-2 " :class="this.$vuetify.breakpoint.name=='sm' || this.$vuetify.breakpoint.name=='xs' ? 'me-0':'me-2'"
        ><v-icon class="icon-1 me-4">mdi-twitter</v-icon
        >{{ $t("Twitter") }}</v-btn
      >
    
      <v-btn class="button-3 me-3"
        ><v-icon class="icon-1 me-4">mdi-linkedin</v-icon
        >{{ $t("LinkedIn") }}</v-btn
      >
      <v-btn class="button-4 "
        ><v-icon class="icon-1 me-4">mdi-email</v-icon>{{ $t("E-mail") }}</v-btn
      >
    
    </div>
    </v-row>
  </section>
</template>
<style scoped>
.titel-2 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-35) / var(--unnamed-line-spacing-53)
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-2852a0);
  text-align: center;
  font: normal normal bold 35px/53px Poppins;
  letter-spacing: 0px;
  color: #2852a0;
  opacity: 1;
}
.button-1 {
  text-transform: capitalize;
  width: 14%;
  height: 50px;
  background: #334c8c 0% 0% no-repeat padding-box !important;
  border-radius: 10px;
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-20) /
    var(--unnamed-line-spacing-30) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
  
  font: normal normal normal 20px/30px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  
}
.button-2 {
  text-transform: capitalize;
  width: 14%;
  height: 50px;
  background: #00a6de 0% 0% no-repeat padding-box !important;
  border-radius: 10px;
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-20) /
    var(--unnamed-line-spacing-30) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
  
  font: normal normal normal 20px/30px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
}
.button-3 {
  text-transform: capitalize;
  width: 14%;
  height: 50px;
  background: #0b69c7 0% 0% no-repeat padding-box !important;
  border-radius: 10px;
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-20) /
    var(--unnamed-line-spacing-30) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
  
  font: normal normal normal 20px/30px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
}
.button-4 {
  text-transform: capitalize;
  background: #ff0000 0% 0% no-repeat padding-box !important;
  border-radius: 10px;
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-20) /
    var(--unnamed-line-spacing-30) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
  
  font: normal normal normal 20px/30px Poppins;

  letter-spacing: 0px;
  color: #ffffff;
}
.content {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
}
@media (max-width: 900px) {
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
  .content {
    width: 65%;
    display: grid;
    grid-template-columns: 48% 48%;
    margin: 0 auto;
   flex-direction: column;
  }
  .button-1{
    border-radius: 5px;
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-14)/21px var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-ffffff);

font: normal normal normal 14px/21px Poppins;
letter-spacing: 0px;
color: #FFFFFF;
  }
  .button-2 {
    border-radius: 5px;
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-14)/21px var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-ffffff);

font: normal normal normal 14px/21px Poppins;
letter-spacing: 0px;
color: #FFFFFF;
  } 
  .button-3 {
    border-radius: 5px;
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-14)/21px var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-ffffff);

font: normal normal normal 14px/21px Poppins;
letter-spacing: 0px;
color: #FFFFFF;
  }
  .button-4 {
    border-radius: 5px;
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-14)/21px var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-ffffff);

font: normal normal normal 14px/21px Poppins;
letter-spacing: 0px;
color: #FFFFFF;
  }
  .icon-1 {
    width: 12px;
    height: 12px;
    font-size: 15px;
    
  }
}
</style>
<style>
.button .v-btn:not(.v-btn--round).v-size--default {
  width: 14%;
  height: 50px;
}
@media (max-width:900px) {
    .button .content .v-btn:not(.v-btn--round).v-size--default {
  min-width: 108px;
  height: 29px;
  margin: 10px auto !important;
}
}
</style>