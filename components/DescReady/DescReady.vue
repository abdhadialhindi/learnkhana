<template>
  <section>
    
    <v-container>
      <v-row justify="center">
        <v-col
          cols="11"
          class="mb-4"
          xs="9"
          :class="this.$vuetify.breakpoint.name == 'xs' ? 'px-3' : 'px-2'"
        >
          <div >
            <p class="desc-1">
              {{
                $t(
                  "With LearnKhana's extensive library of ready-made products, you can select from over"
                )
              }}
            </p>
            <div class="d-flex align-center margin">
              <img src="@/assets/images/ready/right.svg" alt="" class="img" />
              <p class="desc-2 ms-7">
                {{
                  $t(
                    "100+ courses and simulations to suit your specific requirements."
                  )
                }}
              </p>
            </div>
            <div class="d-flex align-center margin">
                <img src="@/assets/images/ready/right.svg" alt="" class="img" />
              <p class="desc-2 ms-7">
                {{
                  $t(
                    "Easily manage and track the progress of your learners through our intuitive Learning Management System (LMS)."
                  )
                }}
              </p>
            </div>
            <p class="desc-2 ">
              <span class="get me-4">{{ $t("Get ready for success") }}</span>
              {{ $t("take advantage of LearnKhana's ready-made products today!") }}
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
  width: 85%;
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
</style>