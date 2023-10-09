<template>
    <section>
        <v-container class="container">
            <v-row class="mt-5 mb-5">
                <div class="form-back d-flex flex-column justify-space-around"
                    :class="this.$vuetify.breakpoint.name == 'lg' || this.$vuetify.breakpoint.name == 'xl' ? 'py-5 px-12' : ''">
                    <div class="d-flex flex-column align-center justify-center">
                        <h1 class="titel-2">{{ $t("Contact Us") }}</h1>
                        <v-divider class="divider-2"></v-divider>
                    </div>
                    <div class=" content-text" style="height: 80%;">

                        <form action="" class="d-flex flex-column justify-space-between px-2" style="height: 100%;">
                            <div class="d-flex justify-space-between">

                                <input type="text" id="fname" name="firstname" :placeholder="first" class="text width">


                                <input type="text" id="lname" name="lastname" :placeholder="last" class="text width">
                            </div>
                            <input type="text" id="lname" name="lastname" :placeholder="job" class="text">
                            <input type="text" id="lname" name="lastname" :placeholder="email" class="text">
                            <input type="text" id="lname" name="lastname" :placeholder="company" class="text">
                            <input type="text" id="lname" name="lastname" :placeholder="phone" class="text">

                            <div class="edit">
                                <v-menu bottom>
                                    <template v-slot:activator="{ on: menu, attrs }">


                                        <v-btn v-bind="attrs" v-on="{ ...menu }" class="text">
                                            <div class="d-flex justify-space-between align-center edit-1">
                                                <p class="desc-2">{{ $t("Learnkhana Service*") }}</p>
                                                <v-icon class="icon">mdi-play</v-icon>
                                            </div>
                                        </v-btn>

                                    </template>
                                    <v-list class="near">
                                        <v-list-item class="text-1">
                                            <div class="d-flex align-center" style="width: 100%;">
                                                <v-divider class="divider-3"
                                                    :class="this.$vuetify.breakpoint.name == 'sm' || this.$vuetify.breakpoint.name == 'xs' ? 'me-3' : ''"></v-divider>
                                                <p class="text-3">{{ $t("Custom Blended Learning Journeys") }}
                                                </p>
                                            </div>
                                        </v-list-item>
                                        <v-list-item class="text-1">
                                            <div class="d-flex align-center" style="width: 100%;">
                                                <v-divider class="divider-3"
                                                    :class="this.$vuetify.breakpoint.name == 'xs' || this.$vuetify.breakpoint.name == 'sm' ? 'me-3' : ''"></v-divider>
                                                <p class="text-3">{{ $t("Custom self-based learning") }}</p>
                                            </div>
                                        </v-list-item>
                                        <v-list-item class="text-1">
                                            <div class="d-flex align-center" style="width: 100%;">
                                                <v-divider class="divider-3"
                                                    :class="this.$vuetify.breakpoint.name == 'sm' || this.$vuetify.breakpoint.name == 'xs' ? 'me-3' : ''"></v-divider>
                                                <p class="text-3">{{ $t("Ready-made products") }}</p>
                                            </div>
                                        </v-list-item>
                                        <v-list-item class="text-1">
                                            <div class="d-flex align-center" style="width: 100%;">
                                                <v-divider class="divider-3"
                                                    :class="this.$vuetify.breakpoint.name == 'sm' || this.$vuetify.breakpoint.name == 'xs' ? 'me-3' : ''"></v-divider>
                                                <p class="text-3">{{ $t("L&D Consultancy") }}</p>
                                            </div>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </div>
                            <input type="text" id="lname" name="lastname"
                                :placeholder="what" class="text messege">

                            <v-btn color="primary" class="button-1 mb-8">{{ $t("Let's grow together") }}</v-btn>
                        </form>



                    </div>
                </div>

            </v-row>
            <v-row>
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
            </v-row>
        </v-container>
        <div class="hieght"></div>
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
.icon {
    font-size: 18px;
    background: transparent;
    letter-spacing: 0px;
    color: #2C2C2C !important;
    transform: rotate(90deg);
}
.hieght {
    height: 100px;
}
.container {
    max-width: 94%;
    margin-left: auto;
    margin-right: auto;
}

.form-back {
    height: 510px;
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 10px 10px #6564630D;
    border-radius: 18px;
}

.titel-2 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-16)/26px var(--unnamed-font-family-poppins);
    color: var(--unnamed-color-2852a0);
    
    font: normal normal bold 16px/26px Poppins;
    letter-spacing: 0.48px;
    color: #2852A0;
    opacity: 1;
}

.divider-2 {
    width: 20%;
    border: 2px solid #FAB120;
}

.text {
    height: 28px;
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-12)/var(--unnamed-line-spacing-18) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-2c2c2c);
    
    font: normal normal normal 12px/18px Poppins;
    letter-spacing: 0px;
    color: #2C2C2C;
    background: #b5b4b309 0% 0% no-repeat padding-box;
    border-radius: 5px;
}

input:focus::placeholder {
    color: transparent;
}

input::placeholder {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-18)/var(--unnamed-line-spacing-27) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-2c2c2c);
    
    font: normal normal normal 12px/18px Poppins;
    letter-spacing: 0px;
    color: #2C2C2C;
}

.width {
    width: 48%;
}

.edit-1 {
    width: 100%;
    height: 100%;
}

.desc-2 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-12)/var(--unnamed-line-spacing-18) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-2c2c2c);
    
    font: normal normal normal 12px/18px Poppins;
    letter-spacing: 0px;
    color: #2C2C2C;
    margin-bottom: 0px;
}

.text-3 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) var(--unnamed-font-size-14)/21px var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-ffffff);
    
    font: normal normal 14px/21px Poppins;
    letter-spacing: 0px;
    color: #FFFFFF;
}

.near {
    background-color: #2852A0;
    margin-top: 30px;
    border-radius: 5px;
}

.divider-3 {
    min-width: 5%;
    max-width: 5%;
    border: 1px solid #FAB120;
}

.text-1 {
    padding-left: 0px !important;
    padding-right: 0px !important;
    margin-left: 10px !important;
    margin-right: 10px !important;
    border-bottom-color: #ffffff07 !important;
    border: 1px solid transparent;
}

.messege {
    height: 72px;
}

.button-1 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-12)/var(--unnamed-line-spacing-18) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-ffffff);
    
    font: normal normal normal 12px/18px Poppins;
    letter-spacing: 1px;
    color: #FFFFFF;
}

/* edit content */
.titel-1 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-2852a0);

    font: normal normal bold 16px/25px Poppins;
    letter-spacing: 0px;
    color: #2852A0;
}

ul {
    list-style: none;
    width: 94%;
    height: 50%;
}

.divider {
    border: 2px solid #FAB120;
    width: 61%;
}

.content {
    height: 500px;
    max-width: 94%;
    margin-left: auto;
    margin-right: auto;
}

.desc {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) var(--unnamed-font-size-14)/var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-656463);
    
    font: normal normal 14px/25px Poppins;
    letter-spacing: 0px;
    color: #656463;
}
.desc-1 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-14)/21px var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-656463);
    
    font: normal normal normal 14px/21px Poppins;
    letter-spacing: 0px;
    color: #656463;
}
</style>
<style>
.edit .v-btn:not(.v-btn--round).v-size--default {
    height: 26px;
    color: #2C2C2C;
    background: #b5b4b309 0% 0% no-repeat padding-box;
    border-radius: 5px;
    box-shadow: none;
    width: 100%;
    justify-content: start;
    text-transform: none;
}

.form-back .v-menu__content {
    box-shadow: none;
}

.form-back .v-menu__content .v-list-item {
    padding-left: 0px;
    padding-right: 0px;
    margin-left: 0px;
    margin-right: 0px;
}

.form-back .v-btn:not(.v-btn--round).v-size--default {
    text-transform: none;
    height: 31px;
}

</style>