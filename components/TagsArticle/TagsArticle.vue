<template>
    <section>
        <v-container>
            <v-row justify="center" v-if="this.$vuetify.breakpoint.name=='md' || this.$vuetify.breakpoint.name=='lg' || this.$vuetify.breakpoint.name=='xl'">
                <v-col cols="11">
                    <v-row align="center" >
                        <span class="desc ms-7" >{{ $t("Tags") }}</span>
                        <v-btn class="button ms-7" >{{ $t("#storytelling") }}</v-btn>
                        <v-btn class="button ms-7">{{ $t("#online training") }}</v-btn>
                        <v-btn class="button ms-7">{{ $t("#new hire onboarding") }}</v-btn>
                    </v-row>
                </v-col>
            </v-row>
            <section v-else>
            <v-row justify="center" >
               <span class="desc-xs">{{ $t("Tags") }}</span>
            </v-row>
            <v-row justify="center" class="mt-5 mb-5">
                <v-btn class="button " >{{ $t("#storytelling") }}</v-btn>
                 <v-btn class="button ms-3">{{ $t("#online training") }}</v-btn>
            </v-row>
            <v-row justify="center">
                <v-btn class="button ">{{ $t("#new hire onboarding") }}</v-btn>
            </v-row>
        </section>
        </v-container>
    </section>
</template>
<style scoped>
.desc {
    position: relative;
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 27px/var(--unnamed-line-spacing-40) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-2852a0);
text-align: center;
font: normal normal bold 27px/40px Poppins;
letter-spacing: 0px;
color: #2852A0;
opacity: 1;
}
.desc::after {
    content: '';
    position: absolute;
    width: 50%;
    height: 0;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid var(--unnamed-color-fab120);
border: 1px solid #FAB120;
opacity: 1;
}
.button {
    box-shadow: none !important;
    height: 50px !important;
/* UI Properties */
background: #93A8CF14 0% 0% no-repeat padding-box !important;
border-radius: 15px;
text-transform: none;
font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-24)/var(--unnamed-line-spacing-35) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-746d6d);

font: normal normal normal 24px/35px Poppins;
letter-spacing: 0px;
color: #746D6D;
}
@media (max-width:900px) {
    .desc-xs {
        position: relative;
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-2852a0);
text-align: center;
font: normal normal bold 16px/25px Poppins;
letter-spacing: 0px;
color: #2852A0;
    }
    .desc-xs::after {
        content: '';
    position: absolute;
    width: 50%;
    height: 0;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid var(--unnamed-color-fab120);
border: 1px solid #FAB120;
opacity: 1;
    }
    .button {
        height: 23px !important;
/* UI Properties */
background: #93A8CF14 0% 0% no-repeat padding-box;
border-radius: 5px;
opacity: 1;
box-shadow: none;
font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-11)/17px var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-746d6d);

font: normal normal normal 11px/17px Poppins;
letter-spacing: 0px;
color: #746D6D;
    }
}
</style>