<template>
  <div class="bg-color " :class="$vuetify.breakpoint.name=='xs' ||$vuetify.breakpoint.name=='sm' ? '':'ptb--80'">
    <v-row>
     <v-col
      cols="12">
      <div class="section-title " :class="$vuetify.breakpoint.name=='xs' ||$vuetify.breakpoint.name=='sm' ? 'pt-5 ':'pb--50'">
        <h2 class='text-center heading-title titel-1'>
            <span class="primary--text">{{ titleWithWhite }}</span> <span class="title-color">{{ titleWithYellow }}</span>
          </h2>
          <p class="text-center desc" style="font-size: 30px"
          >
            {{ subTitle }}
        </p>
      </div>
    </v-col>
    <v-col align="center" :class="$vuetify.breakpoint.name=='xs' ||$vuetify.breakpoint.name=='sm' ? ' pb-5':''">
      <v-btn  color="primary" x-large to='/contact'>{{
          $t("Lets Talk")
        }}</v-btn>
    </v-col>
    <!-- Start Single Counterup  -->

    <!-- Start Single Counterup  -->
  </v-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        titleWithWhite: this.$t("We're your"),
        titleWithYellow: this.$t('strategic partner.'),
        subTitle:  this.$t("Let's move skills forward together!"),
      };
    },
  };
</script>
<style scoped>
.title-color {
  color: var(--color-secondary);
}
@media (max-width:900px) {
 .titel-1 {
  font: normal normal bold 18px/19px Poppins !important;
 }
 .desc {
  font: normal normal bold 14px/19px Poppins !important;
 }
}
</style>
