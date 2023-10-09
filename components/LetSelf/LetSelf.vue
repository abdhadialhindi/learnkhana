<template>
    <section>
      <div class="page-1 d-flex justify-space-around align-center">
        <div class="container-4 d-flex justify-center flex-column align-center">
          <div class="content " :class="this.$vuetify.breakpoint.name=='xs' || this.$vuetify.breakpoint.name=='sm'? '': 'me-16'">
            <h2 class="titel-1">{{ $t("Not sure which service is right for you?") }}</h2>
            <p class="desc">
              {{
                $t(
                  "We are here to help! Just fill out this form to schedule your free call where we will guide you to your best package."
                )
              }}
            </p>
          </div>
          <v-btn color="primary" class="button" :class="$vuetify.rtl ? 'button-2' : 'button-1'">{{ $t("let's talk") }}</v-btn>
        </div>
      </div>
    </section>
  </template>
  <style scoped>
  .page-1 {
    height: 380px;
    width: 100%;
    background: url("@/assets/images/consulatyld/backtalk.png");
    position: relative;
    background-size: 100% 100%;
  }
  .page-1::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("@/assets/images/consulatyld/overlaytalk.png");
    z-index: 1;
  }
  .container-4 {
    width: 64%;
    height: 230px;
    position: relative;
    box-shadow: 0px 20px 20px #7682b714;
    border-radius: 40px;
    background-color: #fff;
    z-index: 2;
  }
  .content {
      width: 77%;
  }
  .titel-1 {
    
      font: normal normal bold  30px/46px Poppins;
      color: var(--unnamed-color-2852a0);
  }
  .desc {
    
      font: normal normal  25px/40px Poppins;
      color: var(--unnamed-color-413f3f);
  }
  .button-1 {
      width: 20% ;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateX(50%) translateY(-50%);
      
  }
  .button-2{
    width: 20% ;
      position: absolute;
      top: 50%;
      right: 100%;
      transform: translateX(50%) translateY(-50%);
      
  }
  @media (max-width:768px) {
      .page-1 {
          background-size: contain;
          background-repeat:no-repeat;
          height: 196px;
      }
      .container-4 {
          width: 89%;
          height: 145px;
          border-radius: 10px;
      }
      .content {
          width: 94%;
      }
      .titel-1 {
        
          font: normal normal bold  16px/25px Poppins;
      }
      .desc {
        
          font: normal normal  12px/21px Poppins;
      }
      .button {
          width: 33%;
          top: 100%;
          right: 50%;
          transform: translateX(50%) translateY(-50%);
      }
  }
  @media (max-width: 320px) {
    .desc {
      font: normal normal  10px/15px Poppins;
    }
  }
  </style>
  <style>
  .container-4 .v-btn:not(.v-btn--round).v-size--default {
    width: 26%;
      height: 77px;
      border-radius: 12px;
      text-transform: capitalize;
  }
  @media (max-width:768px) {
      .container-4 .v-btn:not(.v-btn--round).v-size--default {
      height: 27px;
      border-radius: 5px;
      font: normal normal bold  14px/21px Poppins;
      text-transform: capitalize;
      width: 33%;
  } 
  }
  </style>