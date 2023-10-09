<template>
  <footer class="footer-area footer-style-01 bg-color  pb-10" :class="$vuetify.breakpoint.name=='xs' || $vuetify.breakpoint.name=='sm' ? 'pt-2': 'pt-16'">
    <v-row justify="center">
      <v-col cols="12" md="10" xl="10" lg="10">
        <div class="footer-wrapper pt--20">
          <v-container :class="$vuetify.breakpoint.name=='xs' || $vuetify.breakpoint.name=='sm' ? '': 'container'">
            <v-row justify="center">
              <v-col lg="4" md="4" sm="6" cols="12">
                <div class="ft-text">
                  <div class="logo">
                    <a href="/" class="img-res"><img :src="logo" alt="brand image" class="img-footer" /></a>
                  </div>
                  <div class="desc">
                    {{
                      $t(
                        "Our team of experts is here to provide you with the guidance and support that you need for a successful learningand development journey."
                      )
                    }}
                    <br />
                    {{
                      $t(
                        "Contact us today to start exploring our comprehensive range of services."
                      )
                    }}
                  </div>
                  <br />
                  <h4 class="title-one">
                    {{ $t("Follow Us") }}
                  </h4>
                  <v-row>
                    <a href="https://www.facebook.com/LearnkhanaBusiness"
                      ><i
                        class="fab fa-facebook-f icon"
                        style="
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          font-size: 20px;
                        "
                      ></i>
                    </a>
                    <a href="https://twitter.com/LearnKhana"
                      ><v-icon class="icon ms-2">mdi-twitter</v-icon></a
                    >
                    <a href="https://www.instagram.com/learnkhana/"
                      ><v-icon class="icon ms-2">mdi-instagram</v-icon></a
                    >
                    <a href="https://www.linkedin.com/company/29020344/admin/"
                      ><i
                        class="fab fa-linkedin-in icon ms-2"
                        style="
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          font-size: 20px;
                        "
                      ></i
                    ></a>
                    <a href="https://www.youtube.com/@learnkhana1811"
                      ><v-icon class="icon ms-2">mdi-youtube</v-icon></a
                    >
                  </v-row>
                </div>
              </v-col>
              <v-col
                lg="3"
                offset-xl="1"
                md="6"
                sm="6"
                cols="12"
                class=" "
                :class="$vuetify.breakpoint.name=='xs' || $vuetify.breakpoint.name=='sm' ? '': 'pl-12'"
              >
                <div class="footer-link">
                  <h4 class="title-footer">{{$t("Company")}}</h4>
                  <ul class="ft-link">
                    <li class="font-li">
                      <span>
                      <router-link to="">{{$t("Our Services")}}</router-link>
                    </span>
                    </li>
                    <li class="font-li">
                      <span>
                      <router-link :to="localePath('/about-us')">{{
                        $t("About us")
                      }}</router-link>
                      </span>
                    </li>
                    <li class="font-li">
                      <span>
                      <router-link :to="localePath('/blog')">{{$t("Blog")}}</router-link>
                    </span>
                    </li>
                    <li class="font-li">
                      <span>
                      <router-link :to="localePath('/Career')">{{$t("Careers")}}</router-link>
                    </span>
                    </li>
                  </ul>
                </div>
                <div class="footer-link">
                  <h4 class="title-footer">{{ $t("Quick link") }}</h4>
                  <ul class="ft-link">
                    <li class="font-li">
                      <span>
                      <router-link to="/">{{
                        $t("Learnkhana library")
                      }}</router-link>
                      </span>
                    </li>
                  </ul>
                </div>
              </v-col>
              <v-col lg="5" md="4" sm="6" cols="12" class="mt_md--40 ">
                <div class="footer-link">
                  <h4 class="title-footer">{{$t("Contact Us")}}</h4>
                  <ul class="ft-link">
                    <li class="font-li">
                      <span>
                      <router-link to="/">
                        <v-icon color="white">mdi-map-marker</v-icon>
                        {{
                          $t("Olaya St, As Sahafah , Riyadh , KSA")
                        }}</router-link
                      >
                    </span>
                    </li>
                    <li class="font-li">
                      <span>
                      <router-link to="/">
                        <v-icon color="white">mdi-map-marker</v-icon>
                        {{
                          $t("Dubai Business Bay , Exchange Tower , 2501-15 , UAE")
                        }}</router-link
                      >
                    </span>
                    </li>
                    <li class="font-li">
                      <span>
                      <router-link to="/">
                        <v-icon color="white">mdi-map-marker</v-icon>
                        {{
                          $t("Sheraton, Cairo Governorate, Egypt")
                        }}</router-link
                      >
                    </span>
                    </li>
                    <li class="font-li">
                      <span>
                      <router-link to="/"
                        ><v-icon color="white">mdi-phone</v-icon> +20 102 029
                        0989</router-link
                      >
                    </span>
                    </li>

                    <li class="font-li">
                      <span>
                      <router-link to="/"
                        ><v-icon color="white">mdi-email</v-icon>
                        Info@learnkhana.com</router-link
                      >
                    </span>
                    </li>
                  </ul>
                </div>
                <br />
                <div class="footer-link">
                  <h4 class="title-footer">{{ $t("Join our newsletter.") }}</h4>
                  <span class="font-span">{{ $t("Waiting for your message is not your important time") }} </span>
                  <v-text-field
                    :class="$vuetify.rtl ? 'color-1': 'color'"
                    is-booted
                    style="{ border-bottom: 1px solid #fff;border-bottom-right-radius: 28px ; }"
                    clear-icon="my-input"
                    elevation-12
                    :placeholder="$t('Enter Your Email')"
                    enclosed
                    ><template v-slot:append>
                     <v-btn text rounded class="footer-btn">{{ $t("Send") }} </v-btn>
                    </template></v-text-field
                  >

                </div>
              </v-col>
            </v-row>


          </v-container>
        </div>
      </v-col>
    </v-row>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      logo: require("@/assets/images/home/logofooter.svg"),
      socialList: [
        {
          icon: "fa-facebook-f",
          url: "https://www.facebook.com/LearnkhanaBusiness",
        },
        {
          icon: "fa-linkedin-in",
          url: "https://www.linkedin.com/company/llabonline2/?viewAsMember=true",
        },
      ],
    };
  },
};
</script>
<style scoped>
.title-one {
  color: #fab120;

  font: normal normal bold 30px/46px Poppins;
  letter-spacing: 0px;
  color: #fab120;
  opacity: 1;
}
.icon {
  width: 37px;
  height: 38px;
  background-color: #fff;
  border-radius: 50%;
  color: var(--primary) !important;
}
.title-footer {
  color: #fab120 !important;
  font: normal normal 600 25px/46px Poppins !important;
}

.font-li {

  font: normal normal 300 12px/34px Poppins !important;
}
.font-span {

  font: normal normal 300 16px/34px Poppins !important;
}

.footer-btn {
  border: 1px solid #fff;
  position: relative !important;
  top: 1px !important;

}
.color-p {
  color: #fff !important;
}

.move-icon {
  transform: scaleX(-1);
}
@media (width<767px) {
  .media-icon {
    width: 15%;
    border: none;
    margin-left: 8px;
  }
  .img-res {
    width: 100%;
  }
  .img-res .img-footer{
    max-width: 100%;
  }
  .title-one {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
color: var(--unnamed-color-fab120);

font: normal normal bold 30px/25px Poppins;
letter-spacing: 0.8px;
color: #FAB120;
opacity: 1;
margin-bottom: 26px;
  }
}
</style>
<style lang="scss" scoped>
.desc {
  color: #fff;
  font-size: 17px;
}
.bg-color {
  background-image: url("@/assets/images/home/backfooter.svg");
  background-size: cover;
  background-repeat: no-repeat;
}

</style>
<style>
.font-span .v-text-field > .v-input__control > .v-input__slot:before, .v-text-field > .v-input__control > .v-input__slot:after {
    bottom: -1px;
    content: "";
    left: 0;
    position: absolute;
    border-bottom-right-radius: 28px 28px !important;
    width: 94%;
    color: #fff !important;
}
.font-span .v-text-field > .v-input__control > .v-input__slot:before {
    border-color: inherit;
    border-style: solid;
    border-width: thin 0 0 0;
    border-color: #fff !important;
    border-bottom-right-radius: 28px 28px !important;
    width: 94%;

}
 .color.theme--light.v-text-field > .v-input__control > .v-input__slot:before {
    border-color: #fff;
    width: 88%;
}
.color-1.theme--light.v-text-field > .v-input__control > .v-input__slot:before {
    border-color: #fff;
    width: 100%;
    margin-left: 60px;
}
.my-input.v-input .v-input__slot {
  border-bottom-right-radius: 28px 28px !important;
}
</style>
