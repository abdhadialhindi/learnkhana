<template>
    <section>
      <v-container class="container-3 d-flex flex-column justify-center align-center">
        <v-row justify="center">
            <v-col cols="12" md="11" class="back" :class="this.$vuetify.breakpoint.name == 'xl' ||
            this.$vuetify.breakpoint.name == 'md' ||
            this.$vuetify.breakpoint.name == 'lg' ? 'px-8 py-7':'py-4'">
        <div class="mb-9">
          <h2 class="titel-1">
            <v-icon class="icon-1 me-2">mdi-chat-processing-outline</v-icon
            >{{ $t("1 Comment") }}
          </h2>
        </div>
        <v-divider
          v-if="
            this.$vuetify.breakpoint.name == 'xl' ||
            this.$vuetify.breakpoint.name == 'md' ||
            this.$vuetify.breakpoint.name == 'lg'
          "
        ></v-divider>
        <div class="d-flex mt-8">
          <v-avatar
            :size="
              this.$vuetify.breakpoint.name == 'xs' ||
              this.$vuetify.breakpoint.name == 'sm'
                ? '40'
                : '108'
            "
            class="avatar"
          >
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"
          /></v-avatar>
          <div
            :class="
              this.$vuetify.breakpoint.name == 'xs' ||
              this.$vuetify.breakpoint.name == 'sm'
                ? 'ms-4'
                : 'ms-8'
            "
          >
            <p class="desc-1">{{ $t("Name") }}</p>
            <p class="desc-2">
              <v-icon>mdi-clock-outline</v-icon>{{ $t("December 21, 2021")
              }}<span
                class="span"
                :class="
                  this.$vuetify.breakpoint.name == 'xs' ||
                  this.$vuetify.breakpoint.name == 'sm'
                    ? 'ms-4'
                    : 'ms-10'
                "
                >{{ $t("Replay") }}</span
              >
            </p>
          </div>
        </div>
        <div class="mt-10 ms-16 mb-16">
          <p
            class="desc-3 "
           :class="this.$vuetify.breakpoint.name=='xs' || this.$vuetify.breakpoint.name=='sm' ? '': 'ms-16'"
          >
            {{ $t("His Comment*") }}
          </p>
         
        </div>
        <v-divider
          v-if="
            this.$vuetify.breakpoint.name == 'xl' ||
            this.$vuetify.breakpoint.name == 'md' ||
            this.$vuetify.breakpoint.name == 'lg'
          "
        ></v-divider>
        <div class="mt-10 mb-12">
          <h2 class="titel-2">{{ $t("Leave Reply") }}</h2>
          <p
            class="desc-4"
            :class="
              this.$vuetify.breakpoint.name == 'xs' ||
              this.$vuetify.breakpoint.name == 'sm'
                ? 'me-6'
                : ''
            "
          >
            {{
              $t(
                "Your email address will not be published. Required fields are marked *"
              )
            }}
          </p>
        </div>
        <v-divider
          class="mb-4"
          v-if="
            this.$vuetify.breakpoint.name == 'xl' ||
            this.$vuetify.breakpoint.name == 'md' ||
            this.$vuetify.breakpoint.name == 'lg'
          "
        ></v-divider>
        <v-row
          class="text-1"
          justify-sm="center"
          :justify="this.$vuetify.breakpoint.name == 'xs' ? 'center' : ''"
        >
          <v-col cols="12" md="6" lg="6" xl="6">
            <h2 class="titel-3">{{ $t("Name*") }}</h2>
            <v-text-field class="text-field" solo></v-text-field>
          </v-col>
          <v-col cols="12" md="6" lg="6" xl="6">
            <h2 class="titel-3">{{ $t("E-mail*") }}</h2>
            <v-text-field class="text-field" solo></v-text-field>
          </v-col>
          <v-col cols="12" md="12" lg="12" xl="12" class="text-area"
            ><h2 class="titel-3">{{ $t("Comment*") }}</h2>
            <v-textarea solo name="input-7-4" height="231"></v-textarea>
            <div class="d-flex align-center">
              <v-checkbox class="check"></v-checkbox>
              <p class="desc-5">
                {{ $t("Save my name, email in this browser for the next time") }}
              </p>
            </div>
            <div class="btn-1">
              <v-btn class="btn">{{ $t("Post Comment") }}</v-btn>
            </div>
          </v-col>
        </v-row>
    </v-col>
    </v-row>
      </v-container>
    </section>
  </template>
  <style scoped>
  .container-3 {
    max-width: 1050px;
  }
  .titel-1 {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-normal) var(--unnamed-font-size-30) /
      var(--unnamed-line-spacing-46) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-746d6d);
    
    font: normal normal normal 30px/46px Poppins;
    letter-spacing: 0px;
    color: #746d6d;
    opacity: 1;
  }
  .icon-1 {
    mix-blend-mode: luminosity;
    width: 48px;
    height: 48px;
    font-size: 38px;
  }
  .desc-1 {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-normal) var(--unnamed-font-size-23) /
      var(--unnamed-line-spacing-34) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-707070);
  
    font: normal normal normal 23px/34px Poppins;
    letter-spacing: 0px;
    color: #707070;
    margin-bottom: 18px;
  }
  .desc-2 {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-normal) var(--unnamed-font-size-23) /
      var(--unnamed-line-spacing-34) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-707070);
    text-align: center;
    font: normal normal normal 23px/34px Poppins;
    letter-spacing: 0px;
    color: #707070;
  }
  .span {
    position: relative;
  }
  .span::after {
    content: "";
    position: absolute;
    left: -20%;
    height: 100%;
    width: 0px;
    border: 5px solid var(--unnamed-color-fab120);
  }
  .span::before {
    content: "";
    position: absolute;
    right: -19%;
    height: 100%;
    width: 0px;
    border: 5px solid var(--unnamed-color-fab120);
  }
  .avatar {
    border: 1px solid #fab120;
  }
  .desc-3 {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-normal) var(--unnamed-font-size-23) /
      var(--unnamed-line-spacing-34) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-707070);
  
    font: normal normal normal 23px/34px Poppins;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
  }
  .titel-2 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
      var(--unnamed-font-size-30) / var(--unnamed-line-spacing-46)
      var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-707070);
    
    font: normal normal bold 30px/46px Poppins;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
    margin-bottom: 33px;
  }
  .desc-4 {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-normal) var(--unnamed-font-size-23) /
      var(--unnamed-line-spacing-34) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-707070);
    
    font: normal normal normal 23px/34px Poppins;
    letter-spacing: 0px;
    color: #707070;
  }
  .titel-3 {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-normal) var(--unnamed-font-size-23) /
      var(--unnamed-line-spacing-34) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-707070);
    font: normal normal normal 23px/34px Poppins;
    letter-spacing: 0px;
    color: #707070;
  }
  .text-field {
    border-radius: 10px;
  }
  .text-area {
    margin-top: 70px;
  }
  .check {
    display: inline;
  }
  .btn {
    background: var(--unnamed-color-2852a0) 0% 0% no-repeat padding-box !important;
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-normal) var(--unnamed-font-size-23) /
      var(--unnamed-line-spacing-34) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-ffffff);
    text-align: center;
    font: normal normal normal 23px/34px Poppins;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
  }
  .btn:hover {
    background: #93a8cf 0% 0% no-repeat padding-box !important;
  }
  .back {
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 10px 10px #65646324;
border-radius: 20px;
  }
  @media (max-width: 900px) {
    .container-3 {
      /* margin-left: 16px;
      margin-right: 16px; */
    }
    .icon-1 {
      width: 24px;
      height: 24px;
      font-size: 20px;
    }
    .titel-1 {
      font: var(--unnamed-font-style-normal) normal
        var(--unnamed-font-weight-bold) var(--unnamed-font-size-16) /
        var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
      letter-spacing: var(--unnamed-character-spacing-0);
      color: var(--unnamed-color-746d6d);
      
      font: normal normal bold 16px/25px Poppins;
      letter-spacing: 0px;
      color: #746d6d;
      opacity: 1;
    }
    .desc-1 {
      font: var(--unnamed-font-style-normal) normal
        var(--unnamed-font-weight-normal) 13px / var(--unnamed-line-spacing-20)
        var(--unnamed-font-family-poppins);
      letter-spacing: var(--unnamed-character-spacing-0);
      color: var(--unnamed-color-707070);
  
      font: normal normal normal 13px/20px Poppins;
      letter-spacing: 0px;
      color: #707070;
      opacity: 1;
      margin-bottom: 5px;
    }
    .desc-2 {
      font: var(--unnamed-font-style-normal) normal
        var(--unnamed-font-weight-normal) 13px / var(--unnamed-line-spacing-20)
        var(--unnamed-font-family-poppins);
      letter-spacing: var(--unnamed-character-spacing-0);
      color: var(--unnamed-color-707070);
      text-align: center;
      font: normal normal normal 13px/20px Poppins;
      letter-spacing: 0px;
      color: #707070;
      opacity: 1;
    }
    .span::after {
      border: 1px solid #fab120;
    }
    .span::before {
      border: 1px solid #fab120;
    }
    .desc-3 {
      font: var(--unnamed-font-style-normal) normal
        var(--unnamed-font-weight-normal) 13px / var(--unnamed-line-spacing-20)
        var(--unnamed-font-family-poppins);
      letter-spacing: var(--unnamed-character-spacing-0);
      color: var(--unnamed-color-707070);
  
      font: normal normal normal 14px/20px Poppins;
      letter-spacing: 0px;
      color: #707070;
      opacity: 1;
    }
    .titel-2 {
      font: var(--unnamed-font-style-normal) normal
        var(--unnamed-font-weight-bold) var(--unnamed-font-size-14) / 21px
        var(--unnamed-font-family-poppins);
      letter-spacing: var(--unnamed-character-spacing-0);
      color: var(--unnamed-color-707070);
      
      font: normal normal bold 14px/21px Poppins;
      letter-spacing: 0px;
      color: #707070;
    }
    .desc-4 {
      font: var(--unnamed-font-style-normal) normal
        var(--unnamed-font-weight-normal) var(--unnamed-font-size-14) / 21px
        var(--unnamed-font-family-poppins);
      letter-spacing: var(--unnamed-character-spacing-0);
      color: var(--unnamed-color-707070);
      
      font: normal normal normal 13px/21px Poppins;
      letter-spacing: 0px;
    }
    .text-1 {
      max-width: 100% !important;
    }
    .btn-1 {
      display: flex;
      justify-content: center;
    }
    .btn {
      font: var(--unnamed-font-style-normal) normal
        var(--unnamed-font-weight-normal) var(--unnamed-font-size-14) / 21px
        var(--unnamed-font-family-poppins);
      letter-spacing: var(--unnamed-character-spacing-0);
      color: var(--unnamed-color-ffffff);
      text-align: center;
      font: normal normal normal 14px/21px Poppins;
      letter-spacing: 0px;
      color: #ffffff;
    }
    .titel-3 {
      font: var(--unnamed-font-style-normal) normal
        var(--unnamed-font-weight-normal) var(--unnamed-font-size-14) / 21px
        var(--unnamed-font-family-poppins);
      letter-spacing: var(--unnamed-character-spacing-0);
      color: var(--unnamed-color-707070);
      
      font: normal normal normal 14px/21px Poppins;
      letter-spacing: 0px;
      color: #707070;
    }
    .desc-5 {
      font: var(--unnamed-font-style-normal) normal
        var(--unnamed-font-weight-normal) var(--unnamed-font-size-14) / 21px
        var(--unnamed-font-family-poppins);
      letter-spacing: var(--unnamed-character-spacing-0);
      color: var(--unnamed-color-707070);
      
      font: normal normal normal 14px/21px Poppins;
      letter-spacing: 0px;
      color: #707070;
    }
    .back {
        border-radius: 10px;
        box-shadow: 0px 5px 5px #65646314;
    }
  }
  </style>
  <style>
  .text-1
    .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
    > .v-input__control
    > .v-input__slot {
    background: #b5b4b31c 0% 0% no-repeat padding-box;
    box-shadow: none;
    border-radius: 10px !important;
  }
  .text-1 .v-text-field.v-text-field--solo .v-input__control input {
    color: black !important;
    opacity: 1;
  }
  .text-area .v-icon.v-icon {
    font-size: 36px;
    color: #65646375;
  }
  .text-area .v-btn:not(.v-btn--round).v-size--default {
    height: 67px;
    width: 33%;
    margin-top: 72px;
    border-radius: 10px;
  }
  @media (max-width: 900px) {
    .text-area .v-btn:not(.v-btn--round).v-size--default {
      width: 54%;
      height: 29px;
      border-radius: 6px;
    }
  }
  </style>