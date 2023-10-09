<template>
    <section>
        <SpacerProject></SpacerProject>
        <v-row justify="center">
            <div class="responsive">
                <h1 class="titel-1" :class="$vuetify.rtl ? 'change-dir':''">{{ $t("The Power of our numbers.") }}</h1>
                <img src="../../assets/images/stick-horizontal/1.svg" alt="" class="img">
            </div>
        </v-row>
        <v-container>
            <v-row justify="center">
                <v-col cols="12" md="3" lg="3" xl="3" sm="6" xs="12" class="d-flex justify-center align-center" v-for="(counter, i) in counterUpContent"
          :key="i">
                    <div class="d-flex justify-center align-center content" >
                        <div class="d-flex flex-column justify-center align-center border">
                            <h2 class="titel-2"><VisibilitySensor @change="onChange">
                  <countTo
                    :endVal="status ? counter.endVal : 5"
                    :autoplay="countUp"
                    :duration="4000"
                  ></countTo>
                </VisibilitySensor>+</h2>
                            <p class="desc">{{ counter.desc }}</p>
                        </div>
                    </div>
                </v-col>
                <!-- <v-col cols="12" md="6" lg="3" xl="3" class="d-flex justify-center align-center"> -->
                    <!-- <div class="d-flex justify-center align-center content">
                        <div class="d-flex flex-column justify-center align-center border">
                            <h2 class="titel-2">{{ $t("100+") }}</h2>
                            <p class="desc">{{ $t("SATISFIED CUSTOMERS") }}</p>
                        </div>
                    </div> -->
                <!-- </v-col> -->
                <!-- <v-col cols="12" md="6" lg="3" xl="3" class="d-flex justify-center align-center"> -->
                    <!-- <div class="d-flex justify-center align-center content">
                        <div class="d-flex flex-column justify-center align-center border">
                            <h2 class="titel-2">{{ $t("80+") }}</h2>
                            <p class="desc">{{ $t("RETURNING CUSTOMERS") }}</p>
                        </div>
                    </div> -->
                <!-- </v-col> -->
                <!-- <v-col cols="12" md="6" lg="3" xl="3" class="d-flex justify-center align-center">
                    <div class="d-flex justify-center align-center content">
                        <div class="d-flex flex-column justify-center align-center border">
                            <h2 class="titel-2">{{ $t("100+") }}</h2>
                            <p class="desc">{{ $t("INNOVATIVE PROJECTS") }}</p>
                        </div>
                    </div>
                </v-col> -->
            </v-row>
        </v-container>
        <SpacerProject></SpacerProject>
    </section>
</template>
<script>
import VisibilitySensor from "vue-visibility-sensor";
import countTo from "vue-count-to";
import feather from "feather-icons";
export default {
  props: {
    without: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    countTo,
    VisibilitySensor,
  },
  data() {
    return {
      title: "Experts growth",
      text_color: "secondary--text",
      desc: "Join Them And Experience The Learnkhana Difference!",
      desc_color: "white",
      font_weight: "bold",
      countUp: true,
      status: false,
      counterUpContent: [
        {
          // icon: "heart",
          endVal: 5,
          desc : this.$t("YEARS OF GROWTH")
         
        },
        {
          // icon: "heart",
          endVal: 100,
          desc : this.$t("SATISFIED CUSTOMERS")
          
        },
        {
          // icon: "clock",
          endVal: 80,
          desc : this.$t("RETURNING CUSTOMERS")
          
        },
        {
          // icon: "check-circle",
          endVal: 100,
          desc : this.$t("INNOVATIVE PROJECTS")
        },
        // {
        //   // icon: "award",
        //   endVal: 100,
          
        // },
      ],
    };
  },
  methods: {
    onChange(isVisible) {
      if (isVisible) {
        this.status = true;
      }
    },
    iconSvg(icon) {
      return feather.icons[icon].toSvg();
    },
  },
};
</script>
<style scoped>
.titel-1 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-30)/var(--unnamed-line-spacing-48) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-2852a0);
    
    font: normal normal bold 30px/48px Poppins;
    letter-spacing: 0px;
    color: #2852A0;
    opacity: 1;
}
.change-dir {
    position: relative;
    right: 25% ;
    font-size: 40px;
  }

.img {
    width: 90%;
}

.content {
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 15px 20px #151D410F;
    opacity: 1;
    border-radius: 50%;
    height: 280px;
    width: 100%;
}

.border {
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 2px solid #59615D33;
    opacity: 1;
    border-radius: 50% !important;
    height: 233px;
    width: 85%;
    /* border-top-right-radius: 15px solid ; */


    position: relative;

}

.border::after {
    content: '';
    position: absolute;
    width: 98%;
    height: 100%;
    top: 0;
    left: 0;
    transform: rotate(-45deg) scale(1.08) ;
    border-right-color: #2852A0 !important;
    border: 8px solid transparent;
    border-radius: 50%;
    /* transition: 1s linear; */

}
.border:hover::after {
    /* border-right-color: transparent !important;
    border-left-color: #2852A0 !important; */
    transform: rotate(135deg) scale(1.08);

}

.desc {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-600) var(--unnamed-font-size-18)/32px var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-2852a0);
text-align: center;
    font: normal normal 600 18px/32px Poppins;
    letter-spacing: 0px;
    color: #2852A0;
    text-transform: uppercase;
    opacity: 1;
}

.titel-2 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-43)/var(--unnamed-line-spacing-64) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-2852a0);
    text-align: center;
    font: normal normal bold 43px/64px Poppins;
    letter-spacing: 0px;
    color: #2852A0;
    opacity: 1;
}

@media (max-width:900px) {
    .content {
        width: 55%;
        height: 183px;
    }

    .border {
        width: 164px;
        height: 164px;
    }

    .border::after {
        transform: rotate(-45deg) scale(1.0) translateX(6px);
        height: 100%;
        border: 4px solid transparent;
    }

    .titel-2 {
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-31)/var(--unnamed-line-spacing-47) var(--unnamed-font-family-poppins);
        letter-spacing: var(--unnamed-character-spacing-0);
        color: var(--unnamed-color-2852a0);
        text-align: center;
        font: normal normal bold 31px/47px Poppins;
        letter-spacing: 0px;
        color: #2852A0;
        opacity: 1;
    }

    .desc {
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-600) var(--unnamed-font-size-12)/21px var(--unnamed-font-family-poppins);
        letter-spacing: var(--unnamed-character-spacing-0);
        color: var(--unnamed-color-2852a0);
        text-align: center;
        font: normal normal 600 12px/21px Poppins;
        letter-spacing: 0px;
        color: #2852A0;
        text-transform: uppercase;
        opacity: 1;
    }

    .titel-1 {
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-18)/var(--unnamed-line-spacing-24) var(--unnamed-font-family-poppins);
        letter-spacing: var(--unnamed-character-spacing-0);
        color: var(--unnamed-color-2852a0);
        text-align: center;
        font: normal normal bold 18px/24px Poppins;
        letter-spacing: 0px;
        color: #2852A0;
        opacity: 1;
    }
    .img {
width: 50%;
    }
    .responsive {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .change-dir {
  
        width: 100%;
        position: relative;
        right: 0% !important;
    }
}
@media (max-width:360px) {
    .content {
        width: 183px;
    }
}
</style>