<template>
    <section>
        <v-container>
            <v-row justify="center">
                <v-col cols="12" xl="9" lg="9" md="9">
                  <v-row>
                    <div class="width">
                        <h1 class="titel-1"> {{ $t("A Cost and Time Efficient Solution:") }}</h1>
                        <p class="desc">{{ $t("How a 3000-Employee Leading Trading and Manufacturing Company Improved Their LMS.") }}</p>
                    </div>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="12" md="11" lg="11" xl="11" class="padding">
                        <div class="back d-flex justify-end px-16 py-8 slash">
                            <v-btn class="button-1" color="primary">{{ $t("News") }}</v-btn>

                        </div>
                    </v-col>
                  </v-row>

                </v-col>
            </v-row>
            <v-container>
            <v-row justify="center">
                <v-col cols="12" md="11" class="padding">
                    <v-row >
                    <p class="desc-1">{{ $t("One of our clients, a leading trading and manufacturing company with more than 3,000 employees, was seeking a way to enrich their LMS to develop their employees and utilize their platform to its maximum potential. But with a tight budget and limiting time constraints, they were struggling to find a solution that provides a variety of courses with their brand identity for their employees.") }}</p>
                    <div class="d-flex flex">
                        <v-divider
                vertical
                class="divider me-2"

              ></v-divider>
              <p class="desc-2"> {{ $t("The motivational factor is crucial.") }}</p>
                    </div>
                    <p class="desc-3">{{ $t("After a couple of consultation sessions, we tailored a solution according to their needs, which was providing them with several ready-made courses from LearnKhana’s library, and re-slashe them to match their brand identity, while also producing new courses based on their needs and common market needs to be added to LearnKhana’s library, for them and other clients to choose from.") }}</p>
                    <div class="d-flex flex">
                        <v-divider
                vertical
                class="divider me-2"

              ></v-divider>
              <p class="desc-2"> {{ $t("Higher course completion rates!") }}</p>
                    </div>
                    <p class="desc-3">{{ $t("The company was extremely satisfied with the results, and the employees were more eager to open their platform and discover the new courses and develop their skills, which overall increased the company’s self-learning culture leading to higher course completion rates.") }}</p>
                  </v-row>
                  <v-row justify="start">
                    <img src="@/assets/images/news/facebook.png" alt="" class="me-4 img">
                    <img src="@/assets/images/news/linkedin.png" alt="" class="me-4 img">
                    <img src="@/assets/images/news/twitter.png" alt="" class="me-4 img">
                  </v-row>
                </v-col>
            </v-row>
        </v-container>
        </v-container>
    </section>
</template>
<style scoped>
.width {
    width: 90%;
}
.titel-1 {
    font: normal normal bold 30px/70px Poppins;
    color: var(--unnamed-color-2852a0);
}
.desc {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) var(--unnamed-font-size-25)/var(--unnamed-line-spacing-50) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-746d6d);

font: normal normal  25px/50px Poppins;
letter-spacing: 0px;
color: #746D6D;
opacity: 1;
}
.back {
    height: 515px;
    background: url("@/assets/images/news/banner.png") 0% 0% no-repeat padding-box;
/* background: #FFFFFF 0% 0% no-repeat padding-box; */
background-size: contain;
border-radius: 30px;
position: relative;
}
.button-1 {
    background: var(--unnamed-color-2852a0) 0% 0% no-repeat padding-box;
background: #2852A0 0% 0% no-repeat padding-box;
border-radius: 50px 0px 50px 10px;
font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) 27px/var(--unnamed-line-spacing-45) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-ffffff);
text-align: center;
font: normal normal  27px/45px Poppins;
letter-spacing: 0px;
color: #FFFFFF;
text-transform: none;
}
.desc-1 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-22)/var(--unnamed-line-spacing-50) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-746d6d);

font: normal normal normal 22px/50px Poppins;
letter-spacing: 0px;
color: #746D6D;
opacity: 1;
}
.divider {
  border: 2px solid var(--unnamed-color-2852a0);
}
.desc-2 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-30)/var(--unnamed-line-spacing-50) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-2852a0);

font: normal normal bold 30px/50px Poppins;
letter-spacing: 0px;
color: #2852A0;
}
.desc-3 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-22)/var(--unnamed-line-spacing-50) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-746d6d);

font: normal normal normal 23px/50px Poppins;
letter-spacing: 0px;
color: #746D6D;
margin-bottom: 32px;
}
@media (max-width:900px) {
    .titel-1 {
        font: normal normal bold 16px/70px Poppins;
    }
    .desc{
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) var(--unnamed-font-size-15)/var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-746d6d);

font: normal normal medium 15px/25px Poppins;
letter-spacing: 0px;
color: #746D6D;
opacity: 1;
    }
    .back {
        height: 240px;
        padding: 12px 25px !important;
    }
    .button-1 {
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) var(--unnamed-font-size-12)/15px var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-ffffff);
text-align: center;
font: normal normal 12px/15px Poppins;
letter-spacing: 0px;
color: #FFFFFF;
border-radius: 50px 0px 50px 10px;
    }
    .desc-1 {
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) var(--unnamed-font-size-14)/var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-746d6d);

font: normal normal medium 14px/25px Poppins;
letter-spacing: 0px;
color: #746D6D;
    }
    .desc-2 {
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-16)/17px var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-2852a0);

font: normal normal bold 16px/17px Poppins;
letter-spacing: 0px;
color: #2852A0;
margin-bottom: 12px;
    }
    .divider {
        margin-bottom: 12px !important;
        align-self: center;
    }
    .desc-3 {
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) var(--unnamed-font-size-14)/var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-746d6d);

font: normal normal medium 14px/25px Poppins;
letter-spacing: 0px;
color: #746D6D;
    }
    .padding {
        padding: 0px !important;
    }
    .flex {
        align-items: center;
    }
    .img {
        width: 12%;
    }
}
@media (max-width:361px) {
    .titel-1 {
        line-height: 20px;
        margin-bottom: 12px;   
     }
}
</style>
<style>
.slash .v-btn:not(.v-btn--round).v-size--default{
    height: 61px !important;
    min-width: none !important;
    width: 37% !important;
    border-radius: 50px 0px 50px 10px !important;
}
@media (max-width:900px) {
    .slash .v-btn:not(.v-btn--round).v-size--default {
        height: 20px !important;
        min-width: none !important;
        width: 30% !important;
    }
}
</style>
