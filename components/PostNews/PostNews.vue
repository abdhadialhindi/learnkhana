<template>
    <section>
        <v-container>
            <v-row justify="center">
                <v-col cols="12" md="9" lg="9" xl="9">
                    <div class="content d-flex flex-column justify-space-around" :class="this.$vuetify.breakpoint.name == 'xl' ||
                        this.$vuetify.breakpoint.name == 'lg' ||
                        this.$vuetify.breakpoint.name == 'md'
                        ? 'px-8 py-4'
                        : 'px-4 py-2'
                        ">
                        <div>
                            <h1 class="titel-1">{{ $t("Recent Posts") }}</h1>
                            <v-divider class="divider"></v-divider>

                        </div>
                        <div class="d-flex flex-column justify-space-around width">
                            <div class="d-flex  align-center gap">
                                <img src="@/assets/images/news/1.png" alt="" class="img">
                                <p class="desc">{{ $t("We are thrilled to announce that LearnKhana has won") }}</p>
                            </div>
                            <v-divider class="divider-1"></v-divider>
                            <div class="d-flex  align-center gap">
                                <img src="@/assets/images/news/2.png" alt="" class="img">
                                <p class="desc">{{ $t("This is how we got employees to actually read their code of conduct")
                                }}</p>
                            </div>
                            <v-divider class="divider-1"></v-divider>
                            <div class="d-flex  align-center gap">
                                <img src="@/assets/images/news/3.png" alt="" class="img">
                                <p class="desc">{{ $t("The University of Pennsylvania’s Penn GSE is proud to announce") }}
                                </p>
                            </div>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>
<style scoped>
.content {
    height: 851px;
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 15px 15px #65646312;
    border-radius: 20px;
    opacity: 1;
}

.width {
    height: 80%;
    width: 90%;
}

.titel-1 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-30)/var(--unnamed-line-spacing-46) var(--unnamed-font-family-poppins);
    color: var(--unnamed-color-656463);
    margin-bottom: 30px;
    font: normal normal bold 30px/46px Poppins;
    letter-spacing: 2.1px;
    color: #656463;
    opacity: 1;
}

.divider {
    border: 5px solid var(--unnamed-color-fab120);
    border: 2px solid #FAB120;
    opacity: 1;
    width: 17%;
}

.gap {
    grid-gap: 89px;
    gap: 89px;
}

.desc {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) var(--unnamed-font-size-23)/var(--unnamed-line-spacing-34) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-707070);

    font: normal normal 23px/34px Poppins;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
}

@media (max-width:900px) {
    .content {
        height: 499px;
        /* UI Properties */
        background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 5px 5px #65646314;
        border-radius: 10px;
        opacity: 1;
    }

    .titel-1 {
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
        color: var(--unnamed-color-656463);

        font: normal normal bold 16px/25px Poppins;
        letter-spacing: 1.12px;
        color: #656463;
        opacity: 1;
        margin-bottom: 10px;
    }
    .divider {
        min-width: 26%;
        max-width: 26%;
        width: 26%;
        border: 5px solid var(--unnamed-color-fab120);
border: 2px solid #FAB120;
opacity: 1;
    }
    .img {
        width: 28%;
    }
    .desc {
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) var(--unnamed-font-size-14)/21px var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-707070);

font: normal normal  14px/21px Poppins;
letter-spacing: 0px;
color: #707070;
opacity: 1;
    }
    .gap {
        grid-gap: 21px;
        gap: 21px;
    }
    .width {
        width: 100%;
    }
}</style>