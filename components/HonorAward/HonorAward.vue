<template>
    <section>
        <v-row justify="center">
            <div class="responsive">
                <h1 class="titel-1" :class="$vuetify.rtl ? 'change-dir':''">{{ $t("Honored With Awards") }}</h1>
                <img src="../../assets/images/stick-horizontal/1.svg" alt="" class="img">
            </div>
        </v-row>
        <v-row justify="center">
            <v-col cols="12" md="6" lg="4" xl="4" class="d-flex justify-center align-center">
                <img src="@/assets/images/why/pen.svg" alt="" class="img-1">
            </v-col>
            <v-col cols="12" md="6" lg="4" xl="4" class="d-flex justify-center align-center">
                <img src="@/assets/images/why/in.svg" alt="" class="img-1">
            </v-col>
        </v-row>
        <SpacerProject></SpacerProject>
    </section>
</template>
<style scoped>
.titel-1 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-30)/var(--unnamed-line-spacing-60) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-2852a0);

font: normal normal bold 30px/60px Poppins;
letter-spacing: 0px;
color: #2852A0;
opacity: 1;
}
.change-dir {
    position: relative;
    right: 21% ;
    font-size: 40px;
  }

.img {
    width: 75%;
}
@media (max-width:900px) {
    .responsive {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .titel-1 {
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-18)/var(--unnamed-line-spacing-60) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-2852a0);

font: normal normal bold 18px/30px Poppins;
letter-spacing: 0px;
color: #2852A0;
opacity: 1;
    }
    .img {
        width: 50%;
    }
    .img-1 {
        width: 61.5%;
    }
    .change-dir {
        width: 100%;
        position: relative;
        right: 40% !important;
    }
}
</style>