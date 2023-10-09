<template>
    <section class="pt-16 pb-16" >
      <SpacerProject></SpacerProject>
      
      <div
        class="container-1"
        v-if="
          this.$vuetify.breakpoint.name == 'xs' ||
          this.$vuetify.breakpoint.name == 'sm'
        "
      >
        <div class="back-xs">
          <div
            class="d-flex justify-end align-start flex-column content-1-xs py-10"
          >
            <p class="titel-1-xs mb-2">
              {{ $t("Video-Based Journeys") }}
            </p>
            <v-divider class="divider-xs"></v-divider>
          </div>
        </div>
        <div class="back-2-xs">
          <div class="d-flex flex-column content-xs">
            <div>
              <p class="desc-xs mb-0">
                {{
                  $t(
                    "Looking for a learning solution that combines the best of both worlds - human interaction and self-based learning? "
                  )
                }}
                <br>
                {{ $t("Lights, camera, action - our video-based modules have got you covered!") }}
              </p>
              
            </div>
            <div>
              <p class="desc-xs mb-0">
                {{
                  $t(
                    "Our customized modules are packed with engaging videos, role plays, case studies, quizzes, and more to make learning exciting and effective. With professional editing and captivating visuals, our modules are designed to enhance learning retention and promote success."
                  )
                }}
              </p>
            </div>
            <p class="desc-xs">
              {{
                $t(
                  "Let's bring learning to life together!"
                )
              }}
            </p>
          </div>
        </div>
      </div>
      <div class="container-1" v-else>
        <div class="back"></div>
        <div class="text-page">
          <p class="act ms-4">{{ $t("Actual picture from original project") }}</p>
        </div>
        <div class="back-2">
          <div class="d-flex justify-content-around flex-column content mt-16 ms-16">
            <p class="titel-1">
              {{ $t("Video-Based Journeys") }}
            </p>
            <v-divider class="divider"></v-divider>
            <div class="mt-5">
              <p class="desc mb-0">
                {{
                  $t(
                    "Looking for a learning solution that combines the best of both worlds - human interaction and self-based learning? Lights, camera, action - our video-based modules have got you covered!"
                  )
                }}
              </p>
              
            </div>
            <div>
              <p class="desc desc-2 mb-0">
                {{
                  $t(
                    "Our customized modules are packed with engaging videos, role plays, case studies, quizzes, and more to make learning exciting and effective. With professional editing and captivating visuals, our modules are designed to enhance learning retention and promote success."
                  )
                }}
              </p>
              
            </div>
            <p class="desc">
                {{
                  $t(
                    "Let's bring learning to life together!"
                  )
                }}
              </p>
          </div>
        </div>
      </div>
      <!-- <SpacerProject></SpacerProject> -->
    </section>
  </template>
      <style scoped>
  .container-1 {
    height: 670px;
    position: relative;
  }
  .back {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    height: 550px;
    width: 55.6%;
    background: url("@/assets/images/self/video.png");
    border-radius: 0px 55px 55px 0px;
    background-size: cover;
  }
  .back::after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: transparent linear-gradient(352deg, #2852a0b5 0%, #dbdfe600 100%)
      0% 0% no-repeat padding-box;
    border-radius: 0px 55px 55px 0px;
  }
  .back-2 {
    position: absolute;
    top: 20%;
    right: 0;
 
    width: 60%;
    height: 500px;
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    background: #ffffff 0% 0% no-repeat padding-box;
  
    border-radius: 40px 0px 0px 40px;
    z-index: 2;
  }
  .text-page {
    
    position: absolute;
    bottom: 90px;
    width:40%;
    left: 0;

  }
  .act {
    color: #A5A5A5;
    font-size: 16px;
  }
  .content {
    width: 71%;
    
    grid-gap: 12px;
    gap: 12px;
  }
  .titel-1 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
      var(--unnamed-font-size-25) / var(--unnamed-line-spacing-38)
      var(--unnamed-font-family-poppins);
    color: var(--unnamed-color-2852a0);
  
    font: normal normal bold 25px/38px Poppins;
    letter-spacing: 0.07px;
    color: #2852a0;
  }
  .divider {
    width: 414px;
    height: 0px;
    border: 5px solid var(--unnamed-color-fab120);
    border: 5px solid #fab120;
  }
  .desc {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-medium) var(--unnamed-font-size-23) /
      var(--unnamed-line-spacing-40) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-656463);
    
    font: normal normal 19px/30px Poppins;
    letter-spacing: 0px;
    color: #656463;
  }
  .desc-1 {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-medium) var(--unnamed-font-size-23) /
      var(--unnamed-line-spacing-40) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-656463);
  
    font: normal normal 20px/30px Poppins;
    letter-spacing: 0px;
    color: #656463;
    margin-bottom: 0px !important;
  }
  @media (max-width: 1280px) {
    .content {
      width: 91%;
    }
  }
  @media (max-width: 900px) {
    .container-1 {
      height: 520px;
    }
    .back-xs {
      height: 201px;
      position: relative;
      top: 0;
      left: 0;
      background: url("@/assets/images/self/video.png");
      border-radius: 100px 0px 0px 0px;
      background-size: cover;
    }
    .back-xs::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
  
      border-radius: 100px 0px 0px 0px;
    }
    .content-1-xs {
      height: 100%;
      width: 80%;
      margin: 0 auto;
    }
    .titel-1-xs {
      font: var(--unnamed-font-style-normal) normal
        var(--unnamed-font-weight-bold) var(--unnamed-font-size-16) /
        var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
      color: var(--unnamed-color-ffffff);
      
      font: normal normal bold 16px/25px Poppins;
      letter-spacing: 0.05px;
      color: #ffffff;
    }
    .divider-xs {
      width: 210px;
      height: 0px;
      border: 2px solid var(--unnamed-color-fab120);
      border: 2px solid #fab120;
      opacity: 1;
    }
  
    .back-2-xs {
      height: 300px;
      position: absolute;
      bottom: 0;
      left: 0;
      background: #ffffff 0% 0% no-repeat padding-box;
      box-shadow: 0px 10px 10px #0000000d;
      border-radius: 0px 0px 100px 0px;
    }
    .content-xs {
      width: 85%;
      margin: 0 auto;
      height: 100%;
    }
    .desc-xs {
      font: var(--unnamed-font-style-normal) normal
        var(--unnamed-font-weight-normal) var(--unnamed-font-size-14) /
        var(--unnamed-line-spacing-20) var(--unnamed-font-family-poppins);
      letter-spacing: var(--unnamed-character-spacing-0);
      color: var(--unnamed-color-656463);
      
      font: normal normal normal 14px/20px Poppins !important;
      letter-spacing: 0px;
      color: #656463;
      opacity: 1;
      margin-bottom: 10px !important;

    }
  }
  @media (max-width:360px) {
    .desc-xs {
      font-size: 13px !important;
    }
  }
  </style>