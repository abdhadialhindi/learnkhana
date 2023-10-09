<template>
    <section >
        <AboutShape v-if="this.$vuetify.breakpoint.name == 'xs' ||
        this.$vuetify.breakpoint.name == 'sm'" class="ooo"></AboutShape>
        <section class="back">
        <div class="d-flex align-end justify-center banner">
            <div class="d-flex flex-column justify-space-around  content">
                <div>
                <h1 class="titel-1" :class="$vuetify.rtl ? 'dire':''">{{ $t("The Future of Learnkhana starts with you!") }}</h1>
                <v-divider class="divider" v-if="this.$vuetify.breakpoint.name == 'sm' || this.$vuetify.breakpoint.name == 'xs'" :class="$vuetify.rtl ? 'direct':''"></v-divider>
            </div>
                <v-divider class="divider" v-if="this.$vuetify.breakpoint.name == 'xl' || this.$vuetify.breakpoint.name == 'lg' || this.$vuetify.breakpoint.name == 'md'" :class="$vuetify.rtl ? 'direct':''"></v-divider>
                <p class="desc " :class="$vuetify.rtl ? 'dire me-6':''">{{ $t("At Learnkhana, our future is rooted in helping companies — interested in what’s next ? ") }}
                   


                    <br> {{ $t("We’re looking for people who believe that we can accomplish so much more together than apart.") }}
                                       


                </p>
                <h2 class="titel-2" :class="$vuetify.rtl ? 'dire':''">{{ $t("Let’s build our future, together!") }}</h2>
            </div>
        </div>
        <v-row justify="center" class="mt-16" :class="$vuetify.rtl ? 'dire':''">
            <v-col cols="10" xl="7" lg="7" md="7" >
                <div class="form"
                    :class="this.$vuetify.breakpoint.name == 'xl' || this.$vuetify.breakpoint.name == 'lg' || this.$vuetify.breakpoint.name == 'md' ? 'px-12 py-12' : 'px-5 py-5'">
                    <div class="d-flex flex-column justify-center " style="height: 7%;"
                        :class="this.$vuetify.breakpoint.name == 'xl' || this.$vuetify.breakpoint.name == 'lg' || this.$vuetify.breakpoint.name == 'md' ? 'mb-12' : 'mb-4'">
                        <h2 class="titel-3">{{ $t("General Information.") }}</h2>
                        <div class="match d-flex">
                        <v-divider class="divider-2" :class="this.$vuetify.breakpoint.name=='xs' || this.$vuetify.breakpoint.name=='sm' ? 'me-1':'me-2'"></v-divider>
                        <v-divider class="divider-3" :class="this.$vuetify.breakpoint.name=='xs' || this.$vuetify.breakpoint.name=='sm' ? '':'ms-2'"></v-divider>
                    </div>
                    </div>
                    <div class=" content-text" style="height: 87%;">

                        <form action="" class="d-flex flex-column justify-space-between" style="height: 100%;">

                            <h2 class="titel-4">{{ $t("First Name*") }}</h2>
                            <input type="text" id="fname" name="firstname" class="text ">



                            <h2 class="titel-4">{{ $t("E-mail*") }}</h2>
                            <input type="text" id="lname" name="lastname" class="text">
                            <h2 class="titel-4">{{ $t("Phone Number*") }}</h2>
                            <input type="text" id="lname" name="lastname" class="text">
                            <h2 class="titel-4">{{ $t("Address*") }}</h2>
                            <input type="text" id="lname" name="lastname" class="text">
                            <div class="d-flex justify-space-between">
                                <h2 class="titel-4">{{ $t("CV*") }}</h2>
                                <p class="desc-1">{{ $t("Attach Files") }}</p>
                            </div>
                            <div class="image-upload text">
                                <label for="file-input">
                                    <v-icon class="attach">mdi-paperclip</v-icon>
                                </label>
                            </div>
                            <input type="file" id="file-input" name="lastname" class="text" style="display: none;">

                            <div class="d-flex justify-space-between">
                                <h2 class="titel-4">{{ $t("Portfolio/ Behance*") }}</h2>
                                <p class="desc-1">{{ $t("Optional") }} <span class="color">*</span></p>
                            </div>
                            <input type="text" id="lname" name="lastname" class="text messege">
                            <h2 class="titel-4">{{ $t("LinkedIn Account*") }}</h2>
                            <input type="text" id="lname" name="lastname" class="text">
                            <h2 class="titel-4">{{ $t("Birth-Date*") }}</h2>

                            <input type="text" id="lname" name="lastname" class="text messege">

                            <v-btn color="primary" class="can" @click="myFilter" :class="{ active: isActive }">{{
                                $t("Submit") }}</v-btn>
                        </form>
                    </div>
                </div>
            </v-col>
        </v-row>
    </section>
    </section>
</template>
<script>
import feather from "feather-icons";
export default {
  data() {
    return {
      
      isActive : false,
    };
  },
  methods: {
    myFilter: function() {
      this.isActive = !this.isActive;
      // some code to filter users
    }
  }
};
</script>
<style scoped>
.back {
    direction: ltr ;
    height: 2200px;
    background: url("@/assets/images/career/career1.svg");
    background-position: right top;
    background-repeat: no-repeat;
    background-size: 40%;


}

.banner {
    width: 65%;
    height: 500px;
}

.content {
    height: 75%;
    width: 75%;
}

.titel-1 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-30)/var(--unnamed-line-spacing-50) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-2852a0);
    
    font: normal normal bold 30px/50px Poppins;
    letter-spacing: 0px;
    color: #2852A0;
    
}

.divider {
    width: 55%;
    border: 2px solid var(--unnamed-color-fab120);
}

.desc {
    width: 91%;
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) var(--unnamed-font-size-22)/var(--unnamed-line-spacing-50) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-656463);
    
    font: normal normal 24px/50px Poppins;
    letter-spacing: 0px;
    color: #656463;
    margin-bottom: 0px;
    
}
.dire {
    direction: rtl;
}
.direct {
    position: relative;
    left: 45%;
}
.titel-2 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-30)/var(--unnamed-line-spacing-50) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-2852a0);
    
    font: normal normal bold 30px/50px Poppins;
    letter-spacing: 0px;
    color: #2852A0;
}

/* edit form */
.form {
    height: 1221px;
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 20px 20px #0000000F;
    border-radius: 20px;
    opacity: 1;
}

.titel-3 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-600) var(--unnamed-font-size-25)/58px var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-2852a0);

    font: normal normal 600 25px/58px Poppins;
    letter-spacing: 0px;
    color: #2852A0;
    opacity: 1;
}
.match {
    width: 33%;
}
.divider-2 {
    width: 29%;
min-width: 29%;
max-width: 29%;
    border: 2px solid #FAB120;
    opacity: 1;
}
.divider-3 {
    width: 69%;
min-width: 69%;
max-width: 69%;
    border: 2px solid #FAB120;
    opacity: 1;
}
.titel-4 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-18)/var(--unnamed-line-spacing-27) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-151d41);
    
    font: normal normal normal 18px/27px Poppins;
    letter-spacing: 0px;
    color: #151D41;
    opacity: 1;
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
    margin: 20px auto;

}

.desc-1 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-15)/var(--unnamed-line-spacing-23) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-a7a4a4);
    
    font: normal normal normal 15px/23px Poppins;
    letter-spacing: 0px;
    color: #A7A4A4;
    opacity: 1;
}

.image-upload>input {
    display: none;
}

.image-upload {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 0 20px;
}

.attach {
    transform: matrix(0.77, 0.64, -0.64, 0.77, 0, 0);
    opacity: 0.53;
}

.color {
    color: red;
}

.can {
    margin-top: 40px;
    text-transform: none;
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-25)/var(--unnamed-line-spacing-38) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-ffffff);

    font: normal normal normal 25px/38px Poppins;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    height: 76px;
    background: var(--unnamed-color-2852a0) 0% 0% no-repeat padding-box;
    background: #2852A0 0% 0% no-repeat padding-box;
    border-radius: 10px;
}

.can:hover {
    background: #93A8CF 0% 0% no-repeat padding-box;
}
.active {
    background: #FAB120 0% 0% no-repeat padding-box !important; 
}
@media (max-width:900px) {
    .ooo {
        position: relative;
        top: 50px;
    }
    .back {
        
        height: 1309px;
        background: url("@/assets/images/career/headermob.png");
        background-size: 40%;
        background-repeat: no-repeat;
        background-position: right 5%;
    }
    .banner {
        width: 100%;
        height: 330px;
    }
    .content {
        width: 80%;
        height: 60%;
    }
    .titel-1 {
        width: 81%;
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-2852a0);

font: normal normal bold 16px/25px Poppins;
letter-spacing: 0px;
color: #2852A0;
opacity: 1;
    }
    .divider {
        margin-top: 10px;
        border: 1px solid #FAB120;
        width: 50%;
        margin-bottom: 30px;
    }
    .direct {
        left: 33%;
    }
    .desc {
        width: 100%;
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-14)/var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-656463);

font: normal normal normal 14px/25px Poppins;
letter-spacing: 0px;
color: #656463;
    }
    .titel-2 {
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-50) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-2852a0);

font: normal normal bold 16px/50px Poppins;
letter-spacing: 0px;
color: #2852A0;
opacity: 1;
    }
    /* edit form */
    .form {
        height: 831px;
background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 5px 10px #00000008;
border-radius: 10px;
    }
    .titel-3 {
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-600) var(--unnamed-font-size-16)/21px var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-2852a0);

font: normal normal 600 16px/21px Poppins;
letter-spacing: 0px;
color: #2852A0;
    }
    .match {
        width: 50%;
    }
    .divider-2 {
        border: 1px solid #FAB120;
        width: 29%;
min-width: 29%;
max-width: 29%;
    }
    .divider-3 {
        border: 1px solid #FAB120;
        width: 70%;
min-width: 70%;
max-width: 70%;
    }
    .text {
        height: 27px;
    }
    .titel-4 {
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-12)/var(--unnamed-line-spacing-18) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-151d41);

font: normal normal normal 12px/18px Poppins;
letter-spacing: 0px;
color: #151D41;
opacity: 1;
    }
    .desc-1 {
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 10px/16px var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-a7a4a4);

font: normal normal normal 10px/16px Poppins;
letter-spacing: 0px;
color: #A7A4A4;
    }
    .can {
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-12)/var(--unnamed-line-spacing-18) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-ffffff);

font: normal normal normal 12px/18px Poppins;
letter-spacing: 0px;
color: #FFFFFF;
margin-top: 10px;
margin-bottom: 0px;
    }
}
@media (max-width:360px) {
    .titel-1 {
        width: 68%;
    }
}
</style>
<style>
.can.v-btn:not(.v-btn--round).v-size--default {
    height: 76px;
    min-width: 30%;
    padding: 0 16px;
    width: 50%;
    border-radius: 10px;
}
@media (max-width:900px) {
    .can.v-btn:not(.v-btn--round).v-size--default {
    height: 30px;
    min-width: 30%;
    padding: 0 16px;
    width: 50%;
    border-radius: 5px;
}
}
</style>