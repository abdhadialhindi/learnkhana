<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" md="5" xl="5" lg="5">
                <v-row justify="space-between" class=" mb-15">
                   <h2 class="titel-1">{{ $t("Result-Oriented:") }}</h2>
                   <div class="d-flex justify-space-between">
                    <p class="desc desc-1">{{ $t("We identify and act to realize our desired outcomes in a timely, efficient, and cost-effective manner.") }}</p>
                    <img src="@/assets/images/about/1.png" alt="" class="img">
                   </div>
                </v-row>
                <v-row justify="space-between" class="mb-15 margin-top">
                   <h2 class="titel-1">{{ $t("Productive Relationships:") }}</h2>
                   <div class="d-flex justify-space-between">
                    <p class="desc desc-1">{{ $t("We believe that building and sustaining positive relationships with is foundational to our success.") }}</p>
                    <img src="@/assets/images/about/2.png" alt="" class="img">
                   </div>
                </v-row>
                <v-row justify="space-between" class="margin-top2">
                   <h2 class="titel-1">{{ $t("Change Agility:") }}</h2>
                   <div class="d-flex justify-space-between">
                    <p class="desc desc-1">{{ $t("We aknowledge that change can create opportunities, and we embrace and adapt to the evolving landscape of our industry.") }}</p>
                    <img src="@/assets/images/about/3.png" alt="" class="img">
                   </div>
                </v-row>
            </v-col>
             <v-col cols="1" md="1" lg="1" xl="1" >
            <div class="d-flex justify-space-around align-center height" >
                <v-divider vertical  class="divider"></v-divider>
                <v-divider vertical class="divider-1"></v-divider>
                <v-divider vertical class="divider"></v-divider>
            </div>
             </v-col>
             <v-col cols="12" md="5" xl="5" lg="5" >
                <v-row justify="space-between" class="margin-1 ">
                   <h2 class="titel-1 " :class="$vuetify.rtl? '':'margin-2'">{{ $t("Seizing Accountability:") }}</h2>
                   <div class="d-flex justify-space-between " v-if="!$vuetify.rtl">
                    <img src="@/assets/images/about/4.png" alt="" class="img img-12">
                    <p class="desc">{{ $t("Said the strive to improve through proactive solutions and preventive measures.") }}</p>
                    
                   </div>
                   <div class="d-flex justify-space-between " v-else>
                    
                    <p class="desc">{{ $t("Said the strive to improve through proactive solutions and preventive measures.") }}</p>
                    <img src="@/assets/images/about/4.png" alt="" class="img img-12">
                   </div>
                </v-row>
                <v-row justify="space-between" class="margin-1">
                   <h2 class="titel-1  pe-16" :class="$vuetify.rtl? '':'margin-2'">{{ $t("Self-Growth:") }}</h2>
                   <div class="d-flex justify-space-between" v-if="!$vuetify.rtl">
                    <img src="@/assets/images/about/5.png" alt="" class="img">
                    <p class="desc desc-1">{{ $t("We are passionate to continuously develop and nurture our employees’ professional and personal growth.") }}</p>
                    
                   </div>
                   <div class="d-flex justify-space-between" v-else>
                    
                    <p class="desc desc-1">{{ $t("We are passionate to continuously develop and nurture our employees’ professional and personal growth.") }}</p>
                    <img src="@/assets/images/about/5.png" alt="" class="img">
                   </div>
                </v-row>
                <v-row justify="space-between" class="margin-1">
                   <h2 class="titel-1 " :class="$vuetify.rtl? '':'margin-2'">{{ $t("Technical Excellence:") }}</h2>
                   <div class="d-flex justify-space-between" v-if="!$vuetify.rtl">
                    <img src="@/assets/images/about/6.png" alt="" class="img">
                    <p class="desc desc-1">{{ $t("We are committed to providing the highest standard of technical knowledge, skills, and expertise to the success of our business.") }}</p>
                    
                   </div>
                   <div class="d-flex justify-space-between" v-else>
                    
                    <p class="desc desc-1">{{ $t("We are committed to providing the highest standard of technical knowledge, skills, and expertise to the success of our business.") }}</p>
                    <img src="@/assets/images/about/6.png" alt="" class="img">
                   </div>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
<style scoped>
.titel-1 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-25)/var(--unnamed-line-spacing-38) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-2852a0);

font: normal normal bold 25px/38px Poppins;
letter-spacing: 0px;
color: #2852A0;
opacity: 0.99;
margin-bottom: 12px;
}
.desc {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-22)/var(--unnamed-line-spacing-33) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-413f3f);

font: normal normal normal 22px/33px Poppins;
letter-spacing: 0px;
color: #413F3F;
opacity: 0.99;
}
.img {
    
opacity: 1;
width: 36% ;
height: 80%;
}
.margin {
    margin-bottom: 40px !important;
}
.margin-1 {
    margin-bottom: 80px;
}
.divider {
    max-height: 85%;
    color: black;
    margin: auto 0px;
    min-height: 85%;
}
.divider-1 {
    max-height: 100%;
    color: #2852A0;
    border: 1px solid #2852A0;
}
.height {
    height: 100%;
}
.margin-top {
    margin-top: 75px !important;
}
.margin-top2 {
    margin-top: 95px !important;
}
.margin-2{
    margin: 0 auto;
    margin-bottom: 10px;
}
@media (max-width: 1024px) {
    .img-12 {
        width: 40%;
    }
    .desc {
        font-size: 18px;
    }
    .margin-2 {
        margin-left: 70px;
    }
    .titel-1 {
        font-size: 22px;
    }
    .desc-1 {
        font-size: 16px;
    }
}
</style>