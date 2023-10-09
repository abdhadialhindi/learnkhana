<template>
  <section class="back d-flex align-center">
    <v-row justify="" align="center">
      <v-col cols="10" class="contain">
        <v-row justify="space-between">
          <v-col cols="12" lg="7" md="7" xl="7" class="d-flex padding align-end">
            <div class="d-flex align-end ">
              <img src="@/assets/images/about/succes.png" alt="" />
            </div>
          </v-col>
          <v-col cols="12" md="5" xl="5" lg="5" class="defualt">
            <div class="d-flex flex-column justify-space-between content">
              <div>
                <h2 class="titel-1">{{ $t("Our Success story.") }}</h2>
              </div>
              <div>
                <v-divider class="divider"></v-divider>
              </div>
              <div>
                <p class="desc">
                  {{
                    $t(
                      "Learnkhana started its journey in 2018, built around one goal to become the most preferred strategic partner of corporate learning technology solutions while having an expert staff and the latest technological abilities."
                    )
                  }}
                </p>
              </div>
              <div class="d-flex align-center ">
                <img src="@/assets/images/about/5years.png" alt="" class="img me-3" />
                <p class="titel-2">{{ $t("+5 YEARS OF EXPERIENCE") }}</p>
              </div>
              <div>
                <p class="desc">
                  {{
                    $t(
                      "Since our start, we are working passionately to provide the best quality and service for our partners all around the world."
                    )
                  }}
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>
<style scoped>
.back {
  background-image: url("@/assets/images/about/banner.png");
  height: 800px;
  background-size: contain;
  background-position-x: right;
}
.contain {
  padding: 0px !important;
}
.defualt {
  display: flex;
  height: 140%;
}
.titel-1 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-30) / var(--unnamed-line-spacing-48)
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-2852a0);

  font: normal normal bold 30px/48px Poppins;
  letter-spacing: 0px;
  color: #2852a0;
  opacity: 1;
}
.divider {
  width: 60%;
  height: 0px;
  border: 3px solid #fab120;
}
.desc {
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-24) /
    var(--unnamed-line-spacing-45) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-413f3f);

  font: normal normal normal 18px/45px Poppins;
  letter-spacing: 0px;
  color: #413f3f;
}
.titel-2 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-30) / var(--unnamed-line-spacing-60)
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-2852a0);
  font: normal normal bold 30px/60px Poppins;
  letter-spacing: 0px;
  opacity: 1;
}
.content {
    grid-gap: 16px;
    gap: 18px;
}
.padding {
    padding: 0px;
}
</style>