<template>
    <section class="back d-flex justify-center align-center">
        
          <div class="text-center d-flex justify-center align-center flex-column content">
            <h1 class="titel-1"><span class="span-1">{{ $t("Enjoy working ") }}</span>{{ $t("with a group of professionals who is") }}</h1>
            <div class="d-flex justify-center match">
                <v-divider class="divider-1" :class="this.$vuetify.breakpoint.name=='xs' || this.$vuetify.breakpoint.name=='sm'? 'me-1': 'me-2'"></v-divider>
            <v-divider class="divider ms-2" :class="this.$vuetify.breakpoint.name=='xs' || this.$vuetify.breakpoint.name=='sm'? '': 'ms-2'"></v-divider>
        </div>
            <p class="desc">{{ $t("We are motivated and guided by these values to create a successful and deeply fulfilling experience for everyone we touch.") }}</p>
          </div>
        
    </section>
</template>
<style scoped>
.back {
    background: url("@/assets/images/about/enjoy.png");
    height: 500px;
    background-size: cover;
}
.content {
    width: 70%;
    grid-gap: 22px;
    gap: 22px;
}
.titel-1 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-30)/var(--unnamed-line-spacing-46) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-ffffff);
text-align: center;
font: normal normal bold 30px/46px Poppins;
letter-spacing: 0px;
color: #FFFFFF;
}
.match {
  width: 32%;
}
.divider {
  border-radius: 1px;
  border: 3px solid var(--unnamed-color-fab120);
  border: 3px solid #fab120;
  opacity: 1;
  width: 71%;
  max-width: 71%;
  min-width: 71%;
  height: 0px;
}
.divider-1 {
  border: 3px solid var(--unnamed-color-fab120);
  border: 3px solid #fab120;
  opacity: 1;
  width: 27%;
  max-width: 27%;
  min-width: 27%;
  height: 0px;
}
.span-1 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-30)/var(--unnamed-line-spacing-46) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-fab120);
text-align: center;
font: normal normal bold 30px/46px Poppins;
letter-spacing: 0px;
color: #FAB120;
}
.desc {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) var(--unnamed-font-size-24)/var(--unnamed-line-spacing-35) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-ffffff);
text-align: center;
font: normal normal  24px/46px Poppins;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 0.99;
}
@media (max-width:900px) {
    .back {
        background: url("@/assets/images/about/enjoymob.png");
    }
    .titel-1 {
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
text-align: center;
font: normal normal bold 16px/25px Poppins;
letter-spacing: 0px;
opacity: 1;
    }
    .span-1 {
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-fab120);
text-align: center;
font: normal normal bold 16px/25px Poppins;
letter-spacing: 0px;
color: #FAB120;
    }
    .desc {
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) var(--unnamed-font-size-14)/21px var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-ffffff);
text-align: center;
font: normal normal  14px/21px Poppins;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 0.99;
    }
    .divider {
        width: 72%;
  max-width: 72%;
  min-width: 72%;
        
        border: 1px solid #FAB120;
    }
    .back {
        height: 237px;
    }
    .content {
        grid-gap: 10px;
        gap: 10px;
    }
    .divider-1 {
        width: 29%;
  max-width: 29%;
  min-width: 29%;
        border: 1px solid #FAB120;
    }
    .match {
        width: 48%;
    }
}
</style>