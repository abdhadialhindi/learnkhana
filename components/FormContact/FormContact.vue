<template>
    <section class="hieght">
        <v-container>
            <v-row justify="center">
                <v-col cols="12" md="12" lg="12" xl="12">
                    <v-row justify="space-between" class="mobile">
                        <v-col cols="12" md="6" xl="6" lg="6">
                            <div class="d-flex flex-column justify-space-around content">
                                <h2 class="titel-1">{{ $t("We're here to meet your needs and exceed your expectations!") }}
                                </h2>
                                <v-divider class="divider"></v-divider>
                                <p class="desc ">{{ $t("We understand that everyone is unique, and we're here to provide with the specialized attention and support you need") }}
                                </p>
                                <ul class="link d-flex justify-space-around flex-column">
                                    <li class=" desc-1">
                                        <span>

                                            <v-icon color="#656463">mdi-map-marker</v-icon>
                                            {{
                                                $t("Olaya St, As Sahafah , Riyadh , KSA")
                                            }}
                                        </span>
                                    </li>
                                    <li class=" desc-1">
                                        <span>

                                            <v-icon color="#656463">mdi-map-marker</v-icon>
                                            {{
                                                $t("Dubai Business Bay , Exchange Tower , 2501-15 , UAE")
                                            }}
                                        </span>
                                    </li>
                                    <li class=" desc-1">
                                        <span>

                                            <v-icon color="#656463">mdi-map-marker</v-icon>
                                            {{
                                                $t("Sheraton, Cairo Governorate, Egypt")
                                            }}
                                        </span>
                                    </li>
                                    <li class=" desc-1">
                                        <span>
                                            <v-icon color="#656463">mdi-cellphone</v-icon> +20 102 029
                                            0989
                                        </span>
                                    </li>

                                    <li class=" desc-1">
                                        <span>
                                            <v-icon color="#656463">mdi-email</v-icon>
                                            Info@learnkhana.com
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </v-col>
                        <v-col cols="12" md="6" xl="6" lg="6" class="move">
                            <div class="form-back d-flex flex-column justify-space-around"
                                :class="this.$vuetify.breakpoint.name == 'lg' || this.$vuetify.breakpoint.name == 'xl' || this.$vuetify.breakpoint.name == 'md' ? 'py-5 px-12' : ''">
                                <div class="d-flex flex-column align-center justify-center">
                                    <h1 class="titel-2">{{ $t("Contact Us") }}</h1>
                                    <v-divider class="divider-2"></v-divider>
                                </div>
                                <div class=" content-text" style="height: 80%;">

                                    <form action="" class="d-flex flex-column justify-space-between" style="height: 100%;">
                                        <div class="d-flex justify-space-between">

                                            <input type="text" id="fname" name="firstname" :placeholder="first"
                                                class="text width">


                                            <input type="text" id="lname" name="lastname" :placeholder="last"
                                                class="text width">
                                        </div>
                                        <input type="text" id="lname" name="lastname" :placeholder="job" class="text">
                                        <input type="text" id="lname" name="lastname" :placeholder="email" class="text">
                                        <input type="text" id="lname" name="lastname" :placeholder="company"
                                            class="text">
                                        <input type="text" id="lname" name="lastname" :placeholder="phone"
                                            class="text">

                                        <div class="edits">
                                            <v-menu bottom>
                                                <template v-slot:activator="{ on: menu, attrs }">


                                                    <v-btn v-bind="attrs" v-on="{ ...tooltip, ...menu }" class="text">
                                                        <div class="d-flex justify-space-between align-center edits-1">
                                                            <p class="desc-2">{{ $t("Learnkhana Service*") }}</p>
                                                            <v-icon class="icon">mdi-play</v-icon>
                                                        </div>
                                                    </v-btn>

                                                </template>
                                                <v-list class="near">
                                                    <v-list-item class="text-1">
                                                        <div class="d-flex align-center" style="width: 100%;">
                                                            <v-divider class="divider-3"
                                                                :class="$vuetify.breakpoint.name == 'lg' || $vuetify.breakpoint.name == 'xl' || $vuetify.breakpoint.name == 'md' ? 'me-3' : ''"></v-divider>
                                                            <p class="text-3">{{ $t("Custom Blended Learning Journeys") }}
                                                            </p>
                                                        </div>
                                                    </v-list-item>
                                                    <v-list-item class="text-1">
                                                        <div class="d-flex align-center" style="width: 100%;">
                                                            <v-divider class="divider-3"
                                                                :class="$vuetify.breakpoint.name == 'lg' || $vuetify.breakpoint.name == 'xl' || $vuetify.breakpoint.name == 'md' ? 'me-3' : ''"></v-divider>
                                                            <p class="text-3">{{ $t("Custom self-based learning") }}</p>
                                                        </div>
                                                    </v-list-item>
                                                    <v-list-item class="text-1">
                                                        <div class="d-flex align-center" style="width: 100%;">
                                                            <v-divider class="divider-3"
                                                                :class="$vuetify.breakpoint.name == 'lg' || $vuetify.breakpoint.name == 'xl' || $vuetify.breakpoint.name == 'md' ? 'me-3' : ''"></v-divider>
                                                            <p class="text-3">{{ $t("Ready-made products") }}</p>
                                                        </div>
                                                    </v-list-item>
                                                    <v-list-item class="text-1">
                                                        <div class="d-flex align-center" style="width: 100%;">
                                                            <v-divider class="divider-3"
                                                                :class="$vuetify.breakpoint.name == 'lg' || $vuetify.breakpoint.name == 'xl' || $vuetify.breakpoint.name == 'md' ? 'me-3' : ''"></v-divider>
                                                            <p class="text-3">{{ $t("L&D Consultancy") }}</p>
                                                        </div>
                                                    </v-list-item>
                                                </v-list>
                                            </v-menu>
                                        </div>
                                        <input type="text" id="lname" name="lastname"
                                            :placeholder="what" class="text messege">

                                        <v-btn color="primary" class="button-1" >{{ $t("Let's grow together") }}</v-btn>
                                    </form>



                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>
<script>
export default {
    data() {
        return {
            item1: ["Custom Blended Learning Journeys", "Custom self-based learning", "Ready-made products", "L&D Consultancy"],
            edits_item: ["", "", "", ""],
            first: this.$t("First Name*"),
            last: this.$t("Last Name"),
            job: this.$t("Job Title*"),
            email: this.$t("E-mail*"),
            company: this.$t("Company Name*"),
            phone: this.$t("Phone Number*"),
            what: this.$t("What do you want to add to your employees?")

        };
    },
};
</script>
<style scoped>
.hieght {
    height: 1200px;
}

.titel-1 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-25)/var(--unnamed-line-spacing-45) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-2852a0);
    
    font: normal normal bold 25px/45px Poppins;
    letter-spacing: 0px;
    color: #2852A0;
}

.desc {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) var(--unnamed-font-size-22)/var(--unnamed-line-spacing-45) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-413f3f);
    
    font: normal normal 22px/45px Poppins;
    letter-spacing: 0px;
    color: #413F3F;
}

.desc-1 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-20)/var(--unnamed-line-spacing-30) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-656463);
    
    font: normal normal normal 20px/30px Poppins;
    letter-spacing: 0px;
    color: #656463;
    opacity: 1;
    margin-bottom: 12px;
}

ul {
    list-style: none;
    width: 75%;
    height: 50%;
}

.content {
    height: 600px;
    width: 100%;
}

.divider {
    border: 3px solid #FAB120;
    width: 63%;
}

/* Form edits */
.move {
    position: relative;
}

.form-back {
    bottom: -36%;
    position: absolute;
    width: 100%;
    height: 973px;

    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 20px 20px #7682B71F;
    border-radius: 20px;
    opacity: 1;
}

.titel-2 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-30)/56px var(--unnamed-font-family-poppins);
    color: var(--unnamed-color-2852a0);
    
    font: normal normal bold 30px/56px Poppins;
    letter-spacing: 0.9px;
    color: #2852A0;
}

.divider-2 {
    border: 3px solid #FAB120;
    width: 10%;
    max-width: 10%;
}

.divider-3 {
    border: 1px solid #FAB120;
    width: 10%;
    max-width: 3%;
}

.text {

    height: 58px;
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-18)/var(--unnamed-line-spacing-27) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-2c2c2c);
    
    font: normal normal normal 18px/27px Poppins;
    letter-spacing: 0px;
    color: #2C2C2C;
    background: #b5b4b309 0% 0% no-repeat padding-box;
    border-radius: 10px;

}

.messege {
    height: 150px;
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-18)/var(--unnamed-line-spacing-27) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-2c2c2c);
    
    font: normal normal normal 18px/27px Poppins;
    letter-spacing: 0px;
    color: #2C2C2C;
    background: #b5b4b309 0% 0% no-repeat padding-box;
    border-radius: 10px;
}

.width {
    width: 48%;
}

input:focus::placeholder {
    color: transparent;
}

input::placeholder {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-18)/var(--unnamed-line-spacing-27) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-2c2c2c);
    
    font: normal normal normal 18px/27px Poppins;
    letter-spacing: 0px;
    color: #2C2C2C;
}

.divider-1 {
    width: 20%;
    border: 3px solid #FAB120;

}

select {
    appearance: auto !important;
    padding: 0 10px;
}

.text-1 {
    background: #2852A0 0% 0% no-repeat padding-box;
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) var(--unnamed-font-size-18)/var(--unnamed-line-spacing-27) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-ffffff);
    
    font: normal normal 18px/27px Poppins;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    border-bottom-color: #FFFFFF !important;
    border: 1px solid transparent;
}

.edits-1 {
    width: 100%;
    height: 100%;
}

.desc-2 {
    margin-bottom: 0px;
}

.icon {
    background: transparent;
    letter-spacing: 0px;
    color: #2C2C2C !important;
    transform: rotate(90deg);
}

.near {
    background-color: #2852A0;
    margin-top: 70px;
    border-radius: 5px;
}

.text-3 {
    background: #2852A0 0% 0% no-repeat padding-box;
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) var(--unnamed-font-size-18)/var(--unnamed-line-spacing-27) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-ffffff);
    
    font: normal normal 18px/27px Poppins;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
}

.button-1 {
    text-transform: none;
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-20)/var(--unnamed-line-spacing-30) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-ffffff);
    
    font: normal normal normal 20px/30px Poppins;
    letter-spacing: 0px;
    color: #FFFFFF;
}
/* @media (max-width:900px) {
    .mobile {
        flex-direction: column-reverse;
    }
    .form-back {
        bottom: 0%;
        height: 510px;
    }
} */
</style>
<style>
.edits .v-btn:not(.v-btn--round).v-size--default {
    height: 58px !important;
    color: #2C2C2C;
    background: #b5b4b309 0% 0% no-repeat padding-box;
    border-radius: 10px;
    box-shadow: none;
    width: 100%;
    justify-content: start;
    text-transform: none;
}

.form-back .v-menu__content {
    box-shadow: none;
}

.form-back .v-btn:not(.v-btn--round).v-size--default {
    height: 63px;
}
</style>