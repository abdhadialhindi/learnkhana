<template>
    <section class="">
      <div class="wrapper-titel d-flex align-center justify-space-around" :class="this.$vuetify.breakpoint.name== 'lg' || this.$vuetify.breakpoint.name== 'xl' || this.$vuetify.breakpoint.name== 'md' ? 'space': ''">
        <h6 class="titel-1" :class="$vuetify.rtl ? 'set' : ''">
          {{ $t("LearnKhana Simulations") }}
        </h6>
      </div>
      <div class="container-1 d-flex justify-space-between">
        <div class="back d-flex justify-end align-center" :class="$vuetify.rtl ? 'reserve' : ''">
          <div class="d-flex flex-column content justify-space-around">
            <div class="move">
              <p
                class="desc"
                v-if="
                  this.$vuetify.breakpoint.name == 'xs' ||
                  this.$vuetify.breakpoint.name == 'sm'
                "
              >
                {{
                  $t(
                    "Bored with traditional training methods?  "
                  )
                }}
                <br>
                {{ $t("Let's make learning exciting with LearnKhana's simulations!") }}
              </p>
              <p class="desc mb-0" v-else>
                {{
                  $t(
                    "Bored with traditional training methods?  "
  
                  )
                }}
                <br>
                 {{ $t("Let's make learning exciting with LearnKhana's simulations!") }}
              </p>
            </div>
            <!-- <div class="move-1"> -->
              <p
                class="desc-1  width"
               
              >
                {{
                  $t(
                    "Our simulations replicate real-life work situations, enhancing knowledge and skill retention. They also boost problem-solving abilities, motivation, and the ability to apply what's learned in the work environment. "
                  )
                }}
              </p>
              <p class="desc-1 margin width">
                {{
                  $t(
                    "Say goodbye to boring training - say hello to interactive simulations and watch your team thrive!"
                  )
                }}
              </p>
              
            <!-- </div> -->
          </div>
        </div>
        <div  :class="this.$vuetify.rtl ? 'back-1':'back-2'"></div>
      </div>
    </section>
  </template>
    <style scoped>
  .wrapper-titel {
    position: relative;
    width: 100%;
    height: 162px;
  }
  .wrapper-titel::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 45%;
    height: 100%;
    background: transparent
      linear-gradient(
        102deg,
        var(--unnamed-color-fab120) 0%,
        var(--unnamed-color-ffffff) 100%
      )
      0% 0% no-repeat padding-box;
    background: transparent linear-gradient(102deg, #fab120 0%, #ffffff 100%) 0%
      0% no-repeat padding-box;
    border-radius: 0px 5px 5px 0px;
    z-index: 1;
  }
  .titel-1 {
    width: 62%;
    position: relative;
    z-index: 2;
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
      var(--unnamed-font-size-25) / var(--unnamed-line-spacing-38)
      var(--unnamed-font-family-poppins);
    color: var(--unnamed-color-2852a0);
    
    font: normal normal bold 25px/38px Poppins;
    letter-spacing: 0.75px;
    color: #2852a0;
    opacity: 1;
  }
  .set {
    text-align: end;
  }
  .container-1 {
      margin-top: 83px;
    height: 506px;
    position: relative;
  }
  .back {
    width: 51%;
    height: 100%;
    
  }
  .reserve {
    position: absolute;
    left: 8%;
  }
  .content {
    width: 89%;
    justify-content: flex-end;
    height: 90%;
  }
  .desc {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-medium) var(--unnamed-font-size-23) /
      var(--unnamed-line-spacing-40) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-656463);
    
    font: normal normal 22px/40px Poppins;
    letter-spacing: 0px;
    color: #656463;
  }
  .desc-1 {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-medium) var(--unnamed-font-size-23) /
      var(--unnamed-line-spacing-40) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-656463);
    
    font: normal normal 23px/40px Poppins;
    letter-spacing: 0px;
    color: #656463;
    margin-bottom: 0px ;
  }
  .width {
    width: 110%;
  }
  .margin {
    margin-bottom: 15px;
  }
  .back-2 {
    top: 20px;
    position: absolute;
    right: 0;
    width: 44%;
    height: 468px;
    background: url("@/assets/images/ready/simu.svg");
    background-size: cover;
  }
  .back-1 {
    top: 20px;
    position: absolute;
    right: 0;
    width: 44%;
    height: 468px;
    background: url("@/assets/images/ready/simu.svg");
    background-size: cover;
  }
  
  /* .move {
    position: absolute;
    top: 0px;
    left: 5.6%;
    width: 48%;
    margin-bottom: 34px;
  } */
  .move-1 {
    /* margin-top: 34px; */
  }
  .space {
    margin-bottom: -40px;
  }
  @media (max-width: 900px) {
    .wrapper-titel {
      height: 76px;
      margin-bottom: 30px;
    }
    .wrapper-titel::after {
      width: 50%;
    }
    .titel-1 {
      width: 85%;
      font: var(--unnamed-font-style-normal) normal
        var(--unnamed-font-weight-bold) var(--unnamed-font-size-16) /
        var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
      color: var(--unnamed-color-2852a0);
      
      font: normal normal bold 16px/25px Poppins;
      letter-spacing: 0.48px;
      color: #2852a0;
    }
    .container-1 {
      margin-top: 0px;
      height: 555px;
      flex-direction: column-reverse;
    }
    .width {
        width: 100%;
    }
    .back {
      width: 100%;
      height: 280px;
      justify-content: center !important;
    }
    .reserve {
      position: relative;
      left: 0%;
    }
    .content {
      margin-left: 13px;
      width: 90%;
      height: 100%;
      
    }
    .desc {
      font: var(--unnamed-font-style-normal) normal
        var(--unnamed-font-weight-normal) var(--unnamed-font-size-14) /
        var(--unnamed-line-spacing-20) var(--unnamed-font-family-poppins);
      letter-spacing: var(--unnamed-character-spacing-0);
      color: var(--unnamed-color-656463);
      
      font: normal normal normal 14px/20px Poppins !important;
      letter-spacing: 0px;
      color: #656463;
      opacity: 1;
    }
    .desc-1 {
      font: var(--unnamed-font-style-normal) normal
        var(--unnamed-font-weight-normal) var(--unnamed-font-size-14) /
        var(--unnamed-line-spacing-20) var(--unnamed-font-family-poppins);
      letter-spacing: var(--unnamed-character-spacing-0);
      color: var(--unnamed-color-656463);
      
      font: normal normal normal 14px/20px Poppins !important;
      letter-spacing: 0px;
      color: #656463;
      opacity: 1;
    }
    .margin {
      margin-bottom: 16px;
    }
    .back-2 {
      width: 92%;
      background: url("@/assets/images/ready/simu.svg") no-repeat;
      height: 225px;
      background-size: cover;
      border-radius: 0px 0px 100px 0px;
      position: inherit;
    }
    .back-1 {
      width: 92%;
      background: url("@/assets/images/ready/simu.svg") no-repeat;
      height: 225px;
      background-size: cover;
      border-radius: 0px 0px 100px 0px;
      position: inherit;
    }
    .move {
    width: 93%;
  
    position: inherit;
    margin-bottom: 0;
  }
  .move-1 {
    margin-top: 16px;
  }
  }
  
  </style>