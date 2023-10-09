<template>
    <section>
      <div class="page-1 d-flex justify-space-around align-center">
        <div class="help d-flex justify-center flex-column align-center">
          <div class="content ">
            <h2 class="titel-1">{{ $t("Let Us Help You Grow!") }}</h2>
            <p class="desc"  v-if="
          this.$vuetify.breakpoint.name == 'xl' ||
          this.$vuetify.breakpoint.name == 'lg' ||
          this.$vuetify.breakpoint.name == 'md' ">
              {{
                $t(
                  "We’d love to hear more. Tell us a bit about your challenge and we’ll be in touch with you very soon."
                )
              }}
            </p>
            <p class="desc" v-else>{{ $t("We’d love to hear more.") }} <br>{{ $t("Tell us a bit about your challenge and we’ll be in touch with you very soon.") }}</p>
          </div>
          <v-btn color="primary" class="button":class="$vuetify.rtl ? 'button-2' : 'button-1'">{{ $t("let's talk") }}</v-btn>
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
  .help {
    width: 60%;
    height: 230px;
    position: relative;
    box-shadow: 0px 20px 20px #7682b714;
    border-radius: 40px;
    background-color: #fff;
    z-index: 2;
  }
  .content {
      width: 70%;
  }
  .titel-1 {
    
      font: normal normal bold  30px/60px Poppins;
      color: var(--unnamed-color-2852a0);
  }
  .desc {
    
      font: normal normal  25px/46px Poppins;
      color: var(--unnamed-color-413f3f);
  }
  .button-1 {
  font-size: 20px;
  width: 20% !important;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateX(50%) translateY(-50%);
}
.button-2 {
  font-size: 20px;
  width: 20% !important;
  position: absolute;
  top: 50%;
  right: 100%;
  transform: translateX(50%) translateY(-50%);
}
  @media (max-width:768px) {
      .page-1 {
          background-size: contain;
          background-repeat:no-repeat;
          height: 171px;
      }
      .help {
          width: 80%;
          height: 119px;
          border-radius: 10px;
      }
      .content {
          width: 88%;
          height: 85%;
      }
      .titel-1 {
        text-align: center;
          font: normal normal bold  16px/25px Poppins;
      }
      .desc {
        text-align: center;
          font: normal normal  14px/21px Poppins;
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
  .help .v-btn:not(.v-btn--round).v-size--default {
    width: 20%;
      height: 77px;
      border-radius: 12px;
      text-transform: capitalize;
  }
  @media (max-width:768px) {
      .help .v-btn:not(.v-btn--round).v-size--default {
        width: 33%;
      height: 27px;
      border-radius: 5px;
      font: normal normal bold  14px/21px Poppins;
      text-transform: capitalize;
  } 
  }
  </style>