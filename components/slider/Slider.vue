<template>
  <div class="back-ground-home">
    <div class="overlay"></div>

    <v-row justify="center" align="center" class="row">
      <v-col cols="12" xs="12" sm="12" md="9">
        <h1 :class="$vuetify.rtl ? 'title-2' : 'title-1'">
          {{ $t("Learning is What Drives The Next Era of Business.") }}
        </h1>
        <p
          class="mt-5  "
          :class="$vuetify.rtl ? 'divider-1' : 'divider-2'"
        >
          {{
            $t(
              "We're the all-in-one learning solution that provides impactful programmes for everyone"
            )
          }}
        </p>
        <div class="d-flex mt-13 ms-8 space align-center">
          <v-btn class="button" v-on:click.native="myFilter"  :class="{active: isActive}"
            ><span class="text-button">{{ $t("Get Started") }}</span>
          </v-btn>
          <div class="d-flex align-center icon-space">
            <v-icon class="icon-slider">mdi-play-circle</v-icon>
            <p class="icon-text">{{ $t("Watch Video") }}</p>
          </div>
        </div>
      </v-col>
    </v-row>

    <div class="spacer-blue"></div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";

export default {
  components: { VueSlickCarousel },
  data() {
    return {
      isActive: false,
      index: null,
      sliderContent: {
        className: "text-start",
        img: "@/assets/images/service/Outro Promos.mp4",
        title: this.$t("Learning is What Drives The Next Era of Business."),
        desc: this.$t(
          "We're the all-in-one learning solution that provides impactful programmes for everyone."
        ),
        src: "https://www.youtube.com/watch?v=ZOoVOfieAF8",
      },
      settings: {
        fade: true,
        dots: true,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        margin: 20,
        adaptiveHeight: true,
      },
    };
  },
  methods: {
    myFilter: function() {
      this.isActive = !this.isActive;
      console.log("llllllll")
      // some code to filter users
    }
  }
};
</script>
<style scoped>
.back-ground-home {
  position: relative;
  background: transparent url("../../assets/images/home/screen shot.png")
    no-repeat padding-box;
  top: 0;
  background-size: 100% 100%;
  width: 100%;
  height: 627px;
}
.overlay {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0;

  background-color: #2852a0a8;
}
.row {
  height: 100%;
  margin: 0 !important;
}
/* .divider-1 {
  width: 0px;
  height: 96px;

  border: 5px solid var(--unnamed-color-fab120);

  opacity: 1;
} */
.divider-2 {
  width: 100%;
  position: relative;
  font-weight: Medium;
  color: #e5e8ec;
  font-size: 25px;
  width: 80%;
  height: 73px;
}
.divider-2::after {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-40%);
  left: -4.5%;
  width: 0px;
  height: 68px;
  border: 3px solid var(--unnamed-color-ffffff);
}
.divider-1 {
  width: 100%;
  position: relative;
  font-weight: Medium;
  color: #e5e8ec;
  font-size: 25px;
  width: 80%;
  height: 73px;
}
.divider-1::after {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-40%);
  right: -4.5%;
  width: 0px;
  height: 65px;
  border: 3px solid var(--unnamed-color-ffffff);
}
.title-img {
  width: 1062px;
  height: 73px;
}
.title-img2 {
  width: 627px;
  height: 102px;
}
.space {
  gap: 46px;
  grid-gap: 46px;
}

.icon-slider {
  cursor: pointer;
  width: 60px;
  height: 60px;
  /* UI Properties */
  border: 2px solid var(--unnamed-color-ffffff);
  border: 2px solid #ffffff;
  opacity: 1;
  border-radius: 50%;
  font-size: 48px;
  color: var(--unnamed-color-ffffff);
}
.icon-slider:hover {
  color: var(--unnamed-color-fab120);
  box-shadow: 0px 0px 10px var(--unnamed-color-ffffff);
}
.icon-space {
  gap: 14px;
  grid-gap: 14px;
}
.img-watch {
  cursor: pointer;
}
.spacer-blue {
  width: 100%;
  height: 46px;
  background: var(--unnamed-color-2852a0) 0% 0% no-repeat padding-box;
}
.title-1 {
  display: inline-block;
  position: relative;
  width: 60%;
  font-size: 35px;
  color: var(--unnamed-color-ffffff);
  font-weight: 600;
  line-height: 2.8rem;
}
.title-1::after {
  content: "";
  position: absolute;
  top: 0;
  left: -6%;
  width: 0px;
  height: 96px;
  /* UI Properties */
  border: 3px solid var(--unnamed-color-fab120);

  opacity: 1;
}
.title-2 {
  display: inline-block;
  position: relative;
  width: 60%;
  font-size: 35px;
  color: var(--unnamed-color-ffffff);
  font-weight: 600;
  line-height: 2.8rem;
}
.title-2::after {
  content: "";
  position: absolute;
  top: 1%;
  right: -6%;
  width: 0px;
  height: 50px;

  /* UI Properties */
  border: 3px solid var(--unnamed-color-fab120);

  opacity: 1;
}
.button {
  background: var(--unnamed-color-ffffff);
  transition: .1s linear ;
  border-bottom-right-radius: 40px;
  border-top-left-radius: 40px;
  width: 237px;
  height: 52px !important;
}
.button:hover {
  background-color: #c9d4e7;
}
.button:hover .text-button {
  color: var(--unnamed-color-ffffff);
}
.text-button {
  transition: .1s ease-in-out;
  text-transform: none !important;
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-medium) var(--unnamed-font-size-22) /
    var(--unnamed-line-spacing-33) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-2852a0);
  
  font: normal normal  600 30px/33px Poppins;
  letter-spacing: 0px;
  color: #2852a0;
  opacity: 1;
}
.icon-text {
  font-size: 20px;
  color: var(--unnamed-color-ffffff);
}
.active {
  transition: 0.1s linear ;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 40px;
  border-top-right-radius: 40px;
  background-color: #fab120 !important;
}
@media (max-width: 768px) {
  .back-ground-home {
    top: 39px;
    height: 385px;
  }
  .title-1 {
    font-size: 16px;
    width: 60%;
    margin-left: 42px;
    line-height: 1.3rem;
  }
  .title-2 {
    font-size: 16px;
    width: 60%;
    margin-right: 42px;
    line-height: 1.3rem;
  }
  .title-2::after {
    height: 35px;
    border: 1px solid var(--unnamed-color-fab120);
  }
  .title-1::after {
    height: 35px;
    border: 1px solid var(--unnamed-color-fab120);
  }
  .divider-2 {
    width: 259px;
    font-size: 16px !important;
    margin-left: 42px;
    line-height: 1.2rem !important;
  }
  .divider-1 {
    width: 259px !important;
    font-size: 16px !important;
    margin-right: 42px;
    line-height: 1.2rem !important;
  }
  .divider-1::after {
    content: '';
    border: 1px solid var(--unnamed-color-ffffff);
    height: 53px;
    right: -5.8%;
    top: 33%;
  }
  .divider-2::after {
    border: 1px solid var(--unnamed-color-ffffff);
    height: 53px;
    left: -5.8%;
    top: 33%;
  }
  .button {
    width: 100px !important;
    height: 29px !important;
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 15px 0px;
  }
  .active {
  transition: .1s linear ;
  border-radius: 0px 15px;
}
  .text-button {
    text-transform: none;
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-medium) var(--unnamed-font-size-9) /
      var(--unnamed-line-spacing-18) var(--unnamed-font-family-poppins);
    /* letter-spacing: var(--unnamed-character-spacing-0) !important; */
    color: var(--unnamed-color-2852a0);
    
    font: normal normal  7px/18px Poppins;
letter-spacing: 0px !important;
  }
  .space {
    grid: 16px;
    grid-gap: 16px;
  }
  .icon-space {
    grid: 8px;
    grid-gap: 8px;
  }
  .icon-slider {
    width: 26px;
    height: 26px;
    font-size: 20px;
  }
  .icon-text {
    font: normal normal  12px/18px Poppins;
  }
  .spacer-blue {
    height: 8px;
  }
}
</style>

