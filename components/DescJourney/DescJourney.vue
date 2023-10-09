<template>
    <section>
      <SpacerProject></SpacerProject>
      <v-container>
        <v-row justify="center">
          <v-col
            cols="11"
            class="mb-4"
            xs="9"
            :class="this.$vuetify.breakpoint.name == 'xs' ? 'px-0' : 'px-0'"
          >
            <div>
              <div class="d-flex align-center mb-5">
                <img src="@/assets/images/juorney/unsure.png" alt="" class="me-3">
                <p class="desc-1 mb-0 width">{{ $t("Are you looking for a custom blended learning journey that perfectly matches the needs of your learners?") }}</p>
              </div>
              
              <p class="desc-1">
                {{
                  $t(
                    ""
                  )
                }}
              </p>
              <div class="d-flex align-center mb-5">
                <img src="@/assets/images/juorney/look.png" alt="" class="me-3">
                <p class="desc-1 mb-0 width">{{ $t("Are you unsure of how to blend digital and traditional face-to-face training methods?") }}</p>
              </div>
              
              <p class="desc-1">
                {{
                  $t(
                    " "
                  )
                }}
              </p>
              <p class="desc-3">{{ $t("LearnKhana can help you navigate these decisions and create the ideal learning mix for your learners. ") }}</p>
              <p class="desc-2">
                {{
                  $t(
                    "Our L&D experts will work with you to find the right blend of delivery techniques that will maximize the ROI and satisfaction of your training program."
                  )
                }}
              </p>
              <p class="desc-2">
                {{
                  $t(
                    "Get the best of both worlds with LearnKhana's blended learning solutions and achieve the best results for your training."
                  )
                }}
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <!-- <SpacerProject></SpacerProject> -->
      
    </section>
  </template>
  <style scoped>
  .desc-1 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
      var(--unnamed-font-size-30) / var(--unnamed-line-spacing-60)
      var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-2852a0);
    
    font: normal normal bold 28px/50px Poppins;
    letter-spacing: 0px;
    color: #2852a0;
    opacity: 1;
    margin-bottom: 52px;
  }
  .desc-2 {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-medium) var(--unnamed-font-size-25) /
      var(--unnamed-line-spacing-45) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-656463);
    
    font: normal normal 22px/45px Poppins;
    letter-spacing: 0px;
    color: #656463;
    opacity: 1;
    margin-bottom: 36px;
  }
  .desc-3 {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-medium) var(--unnamed-font-size-25) /
      var(--unnamed-line-spacing-45) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-656463);
    
    font: normal normal 22px/45px Poppins;
    letter-spacing: 0px;
    color: #656463;
    opacity: 1;
    margin-bottom: 0px !important;
  }
  @media (max-width: 768px) {
    .desc-1 {
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
      font: var(--unnamed-font-style-normal) normal
        var(--unnamed-font-weight-normal) var(--unnamed-font-size-14) /
        var(--unnamed-line-spacing-20) var(--unnamed-font-family-poppins);
      letter-spacing: var(--unnamed-character-spacing-0);
      color: var(--unnamed-color-656463);
      
      font: normal normal normal 14px/20px Poppins !important;
      letter-spacing: 0px;
      color: #656463;
      opacity: 1;
      margin-bottom: 33px;
    }
    .desc-3 {
        font: var(--unnamed-font-style-normal) normal
        var(--unnamed-font-weight-normal) var(--unnamed-font-size-14) /
        var(--unnamed-line-spacing-20) var(--unnamed-font-family-poppins);
      letter-spacing: var(--unnamed-character-spacing-0);
      color: var(--unnamed-color-656463);
      
      font: normal normal normal 14px/20px Poppins !important;
      letter-spacing: 0px;
      color: #656463;
      opacity: 1;
      margin-bottom: 33px !important;
    }
    .width {
      
    }
  }
  </style>