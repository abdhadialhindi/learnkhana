<template>
  <div>
    <v-navigation-drawer v-model="drawer" fixed :right="$vuetify.rtl" width="100%" height="550px" bottom
      class="hieght-navigation" :class="drawer == true ? 'navigation' : 'navigation-hide'">
      <v-list-item class="pa-5 px-10">
        <div class="logo">
          <img style="max-width: 137px !important; height: 32px; pointer-events: none !important;" src="../../assets/images/home/logoheader.svg"
            alt="brand-image" />
        </div>
        <v-spacer></v-spacer>

        <v-icon @click="drawer = !drawer" class="icon-nav" color="primary" width="25" height="25">
          mdi-close
        </v-icon>
      </v-list-item>
      <scrollactive bezier-easing-value=".5,0,.35,1" :offset="71">
        <v-list>
          <v-list-item :ripple="false" :key="$t('Home')" :to="localePath('/')" link>
            <v-list-item-content class="font-item px-10">
              <v-list-item-title>{{ $t("Home") }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-group :key="$t('Services')" :ripple="false" :class="$vuetify.rtl && ($vuetify.breakpoint.name=='xs' ||$vuetify.breakpoint.name=='sm') ? 'px-10':''">
            <template v-slot:activator>
              <v-list-item-content class="font-item">
                <v-list-item-title v-text="$t('Services')"></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item link v-for="item in ServicesdropDownItems" :to="localePath(item.to)" :key="item.title" :ripple="false">
              <v-list-item-content>
                <v-list-item-title v-text="item.title" class="font-list ps-10"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item :ripple="false" v-for="item in items" :key="item.title" :to="localePath(item.to)" link>
            <v-list-item-content class="font-item px-10">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item :ripple="false" :key="$t('Blog')" target="_blank" link>
            <router-link to="/blog">
              <v-list-item-content class="font-item px-10">
                <v-list-item-title>{{ $t("Blog") }}</v-list-item-title>
              </v-list-item-content>
            </router-link>
          </v-list-item>
        </v-list>
      </scrollactive>
    </v-navigation-drawer>
    <v-app-bar color="#fff" app fixed height="52" class="responsive" :class="drawer == true ? 'app-bar-transition px-0' : 'px-0'">
      <router-link to="/" class="logo ms-4" :class="drawer == true ? 'img-transition' : ''">
        <slot name="logo"></slot>
      </router-link>
      <div class="d-flex justify-center align-center width-lang">
      <v-btn text color="primary" @click="changeLangToArabic" class="lang mx-0 px-0" x-small> Ar </v-btn>
      <div class="d-flex align-center">
        <v-divider class=" divider" vertical inset></v-divider>
      </div>
      <v-btn text color="primary" @click="changeLangToEnglish" class="lang mx-0 px-0" x-small> En </v-btn>
    </div>

      <v-btn x-small text color="primary" class="contact" :class="drawer == true ? 'btn-transition' : ''"><router-link :to="localePath('/contact')">{{ $t("contact us") }}</router-link></v-btn>

      <img src="@/assets/images/home/menu-bar.svg" alt="" @click="drawer = !drawer">

      <v-app-bar id="learning-courses" height="36" class="position-2" v-if="$route.path == '/' || $route.path == '/ar'"
        style="top: 60px;">
        <v-spacer></v-spacer>
        <div style="margin:auto; display: flex; position: relative; ">
          <h1 class="desc-2 text-center mt-2">
            <span class="title-2">{{ $t(" ”Access”") }}
            </span> {{ $t("Our Course Library Here!”") }}
          </h1>
          <v-btn color="primary" class="ml-5 " large :class="$vuetify.rtl ? 'edit-button-ar' :'edit-button'"> {{ $t("Visit Link") }}</v-btn>

        </div>
        <v-spacer></v-spacer>

        <v-icon small color="primary" class="pl-3 mb-2 ms-5 me-5" @click="removeElement()">mdi-close</v-icon>
      </v-app-bar>
    </v-app-bar>

    <!-- <v-app-bar id="learning-courses" v-if="  $route.path=='/'"  height="36" class="third-app-bar d-flex justify-space-between" app>
      <div>
        <v-btn color="primary" class="visit-link"  x-small>Visit Link</v-btn>
      </div>
        <p class="desc">
          <span class="title">Start</span> Learning<span class="title"
            > "Access" </span
          > Your Course Here !
        </p>
        <div>
        <v-icon small color="primary" class="pl-3 mb-2" @click="removeElement()">mdi-close</v-icon>
      </div>
    </v-app-bar> -->
    <v-app-bar color="#fff" height="88" class="desktop" app>
      <v-spacer></v-spacer>

      <router-link to="/" class="logo me-10">
        <slot name="logo"></slot>
        <!-- <slot name="logo-dark"></slot> -->
      </router-link>
      <v-spacer></v-spacer>

      <v-toolbar-items class=" me-16" :class="$vuetify.rtl ? 'margin-1' : 'margin'">
        <v-hover>
          <v-btn @click="deleteActiveHome" :to="localePath('/')" :ripple="false" text link>{{ $t("Home") }}</v-btn>
        </v-hover>
        <v-menu bottom min-width="240" offset-y transition="scroll-y-reverse-transition" class="menu-transparent">
          <template v-slot:activator="{ on, attrs }">
            <v-hover v-slot="{ hover }">
              <v-btn :class="hover ? 'v-btn--active' : ''" :ripple="false" text v-bind="attrs" v-on="on">
                {{ $t("Services") }}
              </v-btn>
            </v-hover>
          </template>
          <v-sheet class="list-opacity">
            <v-list class="list-opacity">
              <v-list-item v-for="(item, index) in ServicesdropDownItems" :key="index" :to="localePath(item.to)" class=" ">

                <v-list-item-title class="color-title d-flex justify-start align-center"><v-divider class="divider-3 me-2"></v-divider>{{
                  item.title
                }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-sheet>
        </v-menu>
        <template v-for="item in items">
          <v-hover v-slot="{ hover }" :key="item.title">
            <v-btn @click="deleteActiveHome" :key="item.title" :to="localePath(item.to)" :ripple="false" text link>{{
              item.title }}</v-btn>
          </v-hover>
        </template>
        <v-hover v-slot="{ hover }">
          <v-btn :class="hover ? 'v-btn--active' : ''" target="_blank" :ripple="false" text link><router-link :to="localePath('/blog')">
              {{ $t("Blog") }}</router-link></v-btn>
        </v-hover>
        <!-- <v-hover v-slot="{ hover }">
          <v-btn
            :class="hover ? 'v-btn--active' : ''"
            target="_blank"

            :ripple="false"
            text
            link
            ><router-link to="/blog">
            {{ $t("Contact Us") }}</router-link></v-btn
          >

        </v-hover> -->

      </v-toolbar-items>
      <v-spacer></v-spacer>
      <router-link :to="localePath('/contact')">
        <v-btn color="primary" class="ml-5 me-3" large>{{ $t("Contact Us") }}</v-btn>
      </router-link>
      <v-btn text color="black" @click="changeLangToArabic" class="lang px-0 mx-0"> Ar </v-btn>
      <div class="d-flex align-center">
        <v-divider class="mx-2 divider" vertical inset></v-divider>
      </div>
      <v-btn text color="black" @click="changeLangToEnglish" class="lang px-0 mx-0"> En </v-btn>
      <v-spacer></v-spacer>
      <!-- <v-app-bar color="#2852A0" class="position" app >
      <v-container>
        <v-row>
          <v-spacer></v-spacer>
          <v-btn class="me-16" height="55" width="156" small>
            Contact US
          </v-btn>
        </v-row>
      </v-container>
    </v-app-bar> -->
      <v-app-bar id="learning-courses" height="60" class="position-2" v-if="$route.path == '/' || $route.path == '/ar'"
        style="top: 92px;" >
        <v-spacer></v-spacer>
        <div style="margin:auto; display: flex;">
          <h1 class="desc-2 text-center mt-2">
            <span class="title-2">{{ $t(" ”Access”") }}
            </span> {{ $t("Our Course Library Here!”") }}
          </h1>
          <v-btn color="primary" class="ml-5" large>{{ $t("Visit Link") }}</v-btn>

        </div>
        <v-spacer></v-spacer>

        <v-icon small color="primary" class="pl-3 mb-2" @click.native="removeElement()" style="position: relative; z-index: 5; cursor: pointer;">mdi-close</v-icon>
      </v-app-bar>
    </v-app-bar>



  </div>
</template>

<script>
import feather from "feather-icons";
export default {
  data() {
    return {
      drawer: false,
      icon: "menu",
      closeIcon: "x",
      isTop: true,
    };
  },
  computed: {
    ServicesdropDownItems() {
      return [
        {
          title: this.$t("Custom Self-Based Learning."),
          to: "/Custom-self-based-Learning",
        },
        {
          title: this.$t("Custom Blended Learning Journeys."),
          to: "/custom-blended-learning-journeys",
        },
        {
          title: this.$t("Ready-made Products."),
          to: "/ready-made-products",
        },
        {
          title: this.$t("L&D Consultancy."),
          to: "/LD-Consultancy",
        },
      ];
    },
    items() {
      return [
        {
          title: this.$t("About Us"),
          to: "/about-us",
        },
        {
          title: this.$t("Why Us"),
          to: "/why-us",
        },
        // {
        //   title: this.$t("Contact us"),
        //   to: "/why-us",
        // },
        // {
        //   title: this.$t("Blog"),
        //   to: "/blog",
        // }
      ];
    },
  },
  mounted() {
    this.deleteActiveHome();
    this.onResize();
    window.onscroll = () => {
      let bottomOfWindow = window.pageYOffset === 0;

      if (bottomOfWindow) {
        this.isTop = true; // replace it with your code
      } else {
        this.isTop = false;
      }
    };
    window.addEventListener("resize", this.onResize, { passive: true });
  },
  methods: {
    deleteActiveHome() {
      var element = document.getElementById("الرئيسية");
      setTimeout(() => {
        if (element) {
          if (
            this.$i18n.locale == "ar" &&
            this.$route.path !== "/" &&
            this.$route.path !== "/ar"
          ) {
            element.classList.remove("v-btn--active");
          } else {
            element.classList.add("v-btn--active");
          }
        }
      }, 100);
    },
    watch: {
      isXs(value) {
        if (!value) {
          if (this.drawer) {
            this.drawer = false;
          }
        }
      },
    },
    onResize() {
      this.isXs = window.innerWidth < 1024;
    },
    changeLangToEnglish() {
      this.$router.push(
        this.switchLocalePath('en')
      )
      if(this.$i18n.locale !== 'en') {
        this.$vuetify.rtl = !this.$vuetify.rtl
      }



      this.deleteActiveHome();
    },
    changeLangToArabic() {
      this.$router.push(
        this.switchLocalePath("ar")
      );
      if(this.$i18n.locale !== 'ar') {
        this.$vuetify.rtl = !this.$vuetify.rtl
      }

      this.deleteActiveHome();
    },
    iconSvg(icon) {
      return feather.icons[icon].toSvg();
    },
    removeElement() {
      document.getElementById('learning-courses').remove();
    }
  },
};
</script>
<style scoped lang="css">
.responsive {
  flex-wrap: nowrap !important;
}

.position {
  position: fixed;
  top: 88px;
  z-index: 10;
}

.position-2 {


  position: absolute;
  top: 162px;
  z-index: 10;
  border-bottom-right-radius: 25px !important;
  border-bottom-left-radius: 25px !important;
  box-shadow: 0px 6px 6px 1px #114097 !important;


}
.position-2::after {
  height: 10px;
  content: "";
  position: absolute;
  top: 57px;
  left: 0px;
  right: 0px;
  z-index: 2;
  bottom: -10px;
  border-bottom-right-radius: 25px !important;
  border-bottom-left-radius: 25px !important;
  border-bottom: 2px solid #fab12094;
}

.menu-transparent {}

.color-title {
  color: black !important;
}

.color-title:hover {
  transition: linear 0.5;
  transform: translateX(8px);
  background-color: transparent;
}
.divider-3{
  transition: linear 0.5;
  min-width: 16px;
  max-width: 16px;
  width: 16px;
  height: 0px;
  transition: linear 0.5;
border: 1px solid var(--unnamed-color-fab120);
  display: none;
}
.color-title:hover .divider-3 {
display: block;
}
/* .color-title:hover::after{
  content: "";
  position: absolute;
  top: 50%;
  left: 0px ;

  height: 0% ;
  width: 0px ;
  border: 1px solid var(--unnamed-color-fab120) !important;
  transform: translateX(-10%)  translateY(-50%) rotate(90deg);



} */

.v-list-item__title:hover {
  background-color: transparent;
}

a.btn-default.btn-border.btn-opacity,
button.btn-default.btn-border.btn-opacity {
  border: 2px solid black;
  color: var(--color-black) !important;
}

a.btn-default.btn-border.btn-opacity:hover,
button.btn-default.btn-border.btn-opacity:hover {
  border: 2px solid var(--color-opacity-1);
  color: var(--color-white) !important;
}

.img {
  width: 303px !important;
}

.margin {
  margin-right: 80px !important;
}

.margin-1 {
  margin-left: 80px !important;
}

.divider {
  border-color: black !important;
  height: 26px;
}

.list-opacity {
  box-shadow: 10px 6px 10px #00000029;
  background: #ffffff 0% 0% no-repeat padding-box;
}

.responsive {
  top: 0px !important;
}

.img-transition {
  display: none;
}

.btn-transition {
  transform: translateX(0%);
  margin-left: 30px;

  left: 0%;
}

.lang {
  font-size: 14px !important;
  margin: 0 12px !important;
}

.contact {
  transition: 10s linear;
  width: 67px;
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-600) var(--unnamed-font-size-12) / var(--unnamed-line-spacing-18) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-2852a0);
  text-align: right;
  font-weight: 600;
  letter-spacing: 0px;
  color: #2852a0;
  opacity: 1;
  height: 17px;
}

.navigation {
  transition: 0.5s ease !important;
}

.navigation-hide {
  transition: 0.5s ease !important;
}

.hieght-navigation {
  max-height: calc(100% - 67px) !important;
}

.icon-nav {
  background: #6564632e;
  font-size: 16px;
  width: 25px;
  height: 25px;
}

.font-item {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) var(--unnamed-font-size-14) / var(--unnamed-line-spacing-19) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-656463);

  font: normal normal medium 14px/19px Poppins;
  letter-spacing: 0px;
  color: #656463;
  opacity: 1;
}

.app-bar-transition {
  transition: 5s ease-in !important;
}

.font-list {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) var(--unnamed-font-size-12) / var(--unnamed-line-spacing-18) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0) !important;
  color: var(--unnamed-color-413f3f) !important;

  font: normal normal medium 12px/18px Poppins !important;
  letter-spacing: 0px !important;
  color: #000000 !important;
  opacity: 1;
}

.top {
  display: none;
  top: 52px;
}

.third-app-bar {
  display: none;
  border-radius: 0px 0px 100px 0px !important;
  top: 68px;
  width: calc(100% - 7px);
  border-bottom: 5px solid #2852a0;

}

.responsive {
  display: none;
}

.title {
  text-transform: capitalize;
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-fab120);

  font-size: 12px !important;
  letter-spacing: 0px;
  color: #fab120;
}

.title-2 {
  text-transform: capitalize;
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-fab120);

  font-size: 25px;
  letter-spacing: 0px;
  color: #fab120;
}

.desc {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-9) / var(--unnamed-line-spacing-18) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-2852a0);
  text-align: center !important;
  font: bold Poppins;
  letter-spacing: 0px;
  font-size: 12px !important;
  color: #2852a0;
}

.desc-2 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-9) / var(--unnamed-line-spacing-18) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-2852a0);
  text-align: center !important;
  font: bold Poppins;
  letter-spacing: 0px;
  font-size: 25px;
  color: #2852a0;
}

/* .desktop:hover .position-2 {
  display: block;
  justify-content: center;
} */

.position-2:hover {
  display: block;
  justify-content: center;
}

@media (max-width: 1024px) {

  .position-2 {
    display: block;
    border-radius: 0px 0px 100px 0px !important;


  }
  .position-2::after {
    content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: -10px;
  border-bottom-right-radius: 25px !important;
  border-bottom-left-radius: 25px !important;
  border-bottom: none;
  }

  .desktop {
    display: none;
  }

  .position {
    display: none;
  }

  .top {
    display: block;

  }

  .third-app-bar {
    display: block;
  }

  .responsive {
    display: block;
  }

  .title-2 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-12)/var(--unnamed-line-spacing-18) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-fab120);
    font: normal normal bold 12px/18px Poppins;
    letter-spacing: 0px;
    color: #FAB120;
  }

  .desc-2 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-12)/var(--unnamed-line-spacing-18) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-2852a0);

    font: normal normal bold 12px/18px Poppins;
    letter-spacing: 0px;
    color: #2852A0;
  }

  .edit-button {
    position: absolute;
    border-radius: 5px 5px 100px 5px;
    width: 33% !important;
    min-width: 33% !important;
    height: 16px !important;
    top: 125%;
    left: 85%;
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) var(--unnamed-font-size-12)/var(--unnamed-line-spacing-18) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-ffffff);
    text-align: center;
    font: normal normal  12px/18px Poppins;
    letter-spacing: 0px;
    color: #FFFFFF;
    text-transform: none;

  }
  .edit-button-ar {
    position: absolute;
    border-radius: 5px 5px 100px 5px;
    width: 65% !important;
    min-width: 40% !important;
    height: 16px !important;
    top: 125%;
    left: 50%;
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) var(--unnamed-font-size-12)/var(--unnamed-line-spacing-18) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-ffffff);
    text-align: center;
    font: normal normal  12px/18px Poppins;
    letter-spacing: 0px;
    color: #FFFFFF;
    text-transform: none;
  }
}
@media (max-width:768px) {
  .lang {
    width: 5% !important;
    min-width: 5% !important;
    max-width: 5% !important;
  }
  .width-lang {
    width: 10% !important;
  }
  .responsive {
   padding-left: 0px !important;
   padding-right: 0px !important;
  }
}
</style>
<style>
.responsive .v-toolbar__content {
  flex-wrap: nowrap;
  justify-content: space-between;
}

.v-overlay__scrim {
  border-radius: inherit;
  bottom: 0;
  height: 0px;
  left: 0;
  position: absolute;
}

@media (max-width: 768px) {
  .position-2 {
    box-shadow: none !important;
  }
  .position-2::after {
    content: "";
    width: 0% !important;
    border: none;
  }
  .third-app-bar {

    position: relative !important;
    z-index: 5 !important;
  }

  .third-app-bar .v-toolbar__content {

    flex-wrap: nowrap;
    justify-content: space-between;
    margin: auto;
  }

  .third-app-bar p {
    margin: auto;
  }

  .visit-link {
    border-radius: 0px 0px 100px 0px !important;
    position: absolute;
    margin: 18px 0px 0px 0px;
    margin-left: 60%;
  }
 
}
@media (max-width:360px) {
  .responsive .v-toolbar__content {
  padding-left: 0px !important;
  padding-right: 0px !important;
 }
}
</style>
