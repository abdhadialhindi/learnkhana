<template>
  <div class="pt-16 pb-16 back-ground">
    <v-container>
      <v-row justify="center" class="pt-16 pb-16">
        <v-col cols="12" md="5" sm="12">
          <h1 class="color">{{ $t("A customized learning experiences") }}</h1>
          
        </v-col>
        <v-col cols="12" md="1" sm="12"><v-divider vertical color="#fff"></v-divider></v-col>
        <v-col cols="12" md="6" sm="12">
          <p class="mt-6" style="font-size: 30px !important;">
            {{
              $t(
                "Deliver the right learning experience to the right people in the right format."
              )
            }}
          </p>
          <p class="mt-0" style="font-size: 23px !important; ">
            {{ $t("With learnKhana business, you've got option for everyone.") }}
          </p>
        </v-col>
      </v-row>
    </v-container> 
  </div>
</template>
<style lang="scss" scoped>
.back-ground {
  background: linear-gradient(to bottom, #fff 0, var(--color-primary) 100%);
}
.color {
  background: -webkit-linear-gradient(#8192b1,var(--color-primary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  // color: linear-gradient(to bottom, #fff 0, var(--color-primary) 100%);
  font-size: 64px;
}
p {
  color: var(--color-primary) !important;
  font-size: 20px !important;
  line-height: 45px !important;
}
@media (width<767px) {
  .color {

    font-size: 32px;
    text-align: center;
  }
}
@media (width<375px) {
  .padding {
    padding: 0px 0px 0px 0px !important;
  }
}
</style>
