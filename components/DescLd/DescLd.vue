<template>
  <section>
    
    <v-container>
      <v-row justify="center">
        <v-col
          cols="11"
          class="mb-4"
          xs="9"
          :class="this.$vuetify.breakpoint.name == 'xs' ? 'px-3' : 'px-0'"
        >
          <div>
            <p class="desc-1">
              {{
                $t(
                  "Whether you know exactly what you want or you're completely in the dark, LearnKhana’s diverse team of L&D professionals can show you the way"
                )
              }}
            </p>
            <p class="desc-2">
              {{
                $t(
                  "LearnKhana’s team has a variety of expertise in the learning and development field with hands-on experience in localizing the best international practices to suit the MENA region!"
                )
              }}
            </p>
            <p class="desc-2">
              {{
                $t(
                  "With hundreds of project experiences for clients all over Egypt and Golf under their belt, LearnKhana’s team can identify and satisfy your needs through innovative solutions."
                )
              }}
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <!-- <SpacerProject v-if="this.$vuetify.breakpoint.name=='lg' || this.$vuetify.breakpoint.name=='md' || this.$vuetify.breakpoint.name=='xl'"></SpacerProject> -->
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
    margin-bottom: 33px;
  }
}
</style>