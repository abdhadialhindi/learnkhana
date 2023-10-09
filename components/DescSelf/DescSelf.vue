<template>
    <section>
      
      <v-container>
        <v-row justify="center">
          <v-col
            cols="11"
            class=""
            xs="9"
            :class="this.$vuetify.breakpoint.name == 'xs' ? 'px-0' : 'px-2 '"
          >
            <div >
              <p class="desc-1">
                {{
                  $t(
                    "Our customized self-based learning solutions are the perfect choice for you!"
                  )
                }}
              </p>
              <p class="desc-3">{{ $t("At Learnkhana, we leverage our proficiency in creating efficient educational solutions to offer you a customized learning experience that is both compelling and effective in making a difference.") }}</p>
              <div class="d-flex align-center margin">
                <img src="@/assets/images/ready/right.svg" alt="" class="img" />
                <p class="desc-2 ms-7">
                  {{
                    $t(
                      "Can be provided to a large number of learners simultaneously"
                    )
                  }}
                </p>
              </div>
              <div class="d-flex align-center margin">
                  <img src="@/assets/images/ready/right.svg" alt="" class="img" />
                <p class="desc-2 ms-7">
                  {{
                    $t(
                      "Standardizes the learning experience for all learners"
                    )
                  }}
                </p>
              </div>
              <div class="d-flex align-center margin">
                  <img src="@/assets/images/ready/right.svg" alt="" class="img" />
                <p class="desc-2 ms-7">
                  {{
                    $t(
                      "Satisfies your needs through a tailored design"
                    )
                  }}
                </p>
              </div>
              <div class="d-flex align-center margin">
                  <img src="@/assets/images/ready/right.svg" alt="" class="img" />
                <p class="desc-2 ms-7">
                  {{
                    $t(
                      "Offers different formats according to your preference"
                    )
                  }}
                </p>
              </div>
              <p class="desc-3">{{ $t("No matter the size of your budget, our customized self-based learning solutions are the perfect fit for you!") }}</p>
              <p class="get ">
                
                {{ $t("Check our different formats below.") }}
              </p>
              <p class="desc-3">{{ $t("And learn more about how we can help you create an effective learning experience for your employees or clients:") }}</p>
              </div>
          </v-col>
        </v-row>
      </v-container>
      <!-- <SpacerProject></SpacerProject> -->
    </section>
  </template>
    <style scoped>
  .desc-1 {
    width: 100%;
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
      var(--unnamed-font-size-30) / var(--unnamed-line-spacing-60)
      var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-2852a0);
  
    font: normal normal bold 30px/60px Poppins;
    letter-spacing: 0px;
    color: #2852a0;
    opacity: 1;
    margin-bottom: 38px;
  }
  .desc-2 {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-medium) var(--unnamed-font-size-25) /
      var(--unnamed-line-spacing-45) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-656463);
  
    font: normal normal 25px/45px Poppins;
    letter-spacing: 0px;
    color: #656463;
    opacity: 1;
    
    display: inline-block;
  }
  .desc-3 {
    color: var(--unnamed-color-656463);
    font: normal normal 24px/45px Poppins;
  }
  .get {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
      var(--unnamed-font-size-30) / var(--unnamed-line-spacing-50)
      var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-2852a0);
  
    font: normal normal bold 30px/50px Poppins;
    letter-spacing: 0px;
    color: #2852a0;
    opacity: 1;
  }
  .margin {
      margin-bottom: 38px;
  }
  @media (max-width: 768px) {
    .desc-1 {
      width: 95%;
      font: var(--unnamed-font-style-normal) normal
        var(--unnamed-font-weight-bold) var(--unnamed-font-size-16) /
        var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
      letter-spacing: var(--unnamed-character-spacing-0);
      color: var(--unnamed-color-2852a0);
  
      font: normal normal bold 16px/25px Poppins !important;
      letter-spacing: 0px;
      color: #2852a0;
      opacity: 1;
      margin-bottom: 21px;
    }
    .desc-2 {
      width: 93%;
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
      margin-bottom: 33px;
    }
    .desc-3 {
        font: normal normal normal 14px/20px Poppins !important;   
    }
    .get {
      display: block;
      font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-50) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-2852a0);
  
  font: normal normal bold 16px/50px Poppins;
  letter-spacing: 0px;
  color: #2852A0;
  opacity: 1;
    }
    .img {
      width: 12%;
    }
  }
  @media (max-width:360px) {
    .get {
      line-height: 30px;
    }
  }
  </style>