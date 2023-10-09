<template>
  <section>
    <div
      class="container-1"
      v-if="
        this.$vuetify.breakpoint.name == 'xs' ||
        this.$vuetify.breakpoint.name == 'sm'
      "
    >
      <div class="back-2-xs"></div>
      <div class="back-xs d-flex justify-space-around">
        <div class="content-xs d-flex flex-column justify-space-around">
          <div>
            <p class="titel-1-xs">{{ $t("Customized simulation") }}</p>
            <v-divider class="divider-xs mt-6"></v-divider>
          </div>
          <div>
            <p class="desc-1-xs">
              {{
                $t(
                  "Do you need a customized simulation to create a learning environment that's tailored to your exact requirements? Our custom simulations are designed to replicate real-world work and challenges so that participants can put their knowledge and skills into practice through physical, hands-on activities."
                )
              }}
            </p>
          </div>
          <div>
            
          </div>
          
        </div>
      </div>
      <div class="under">
            <p class="desc-2-xs">
              {{
                $t(
                  "Our custom simulation package includes everything you need to get started, including:"
                )
              }}
            </p>
          </div>
          <div class="under-1 ">
      <div class="d-flex flex-column map">
              <div v-for="(item, i) in items" :key="i" class="d-flex v-img-xs">
                <img :src="item.src" alt="" class="img-xs" />
                <p class="desc-1-xs">{{ item.title }}</p>
              </div>
            </div>
          </div>
          <div class="under-2">
            <p class="desc-3-xs">{{ $t("We understand how important it is to create the perfect learning environment for your participants, and our customizable simulations are the perfect solution.") }}</p>
          </div>
    </div>
    <section v-else>
      <div class="container-1">
        <div class="back d-flex " :class="$vuetify.rtl ? 'justify-center' : 'justify-end'">
          <div class="content d-flex flex-column justify-space-around">
            <div>
              <p class="titel-1">{{ $t("Customized simulation") }}</p>
              <v-divider class="divider mt-6"></v-divider>
            </div>
            <div>
              <p class="desc-1">
                {{
                  $t(
                    "Do you need a customized simulation to create a learning environment that's tailored to your exact requirements?"
                  )
                }}
              </p>
              <p class="desc-1">
                {{
                  $t(
                    "Our custom simulations are designed to replicate real-world work and challenges so that participants can put their knowledge and skills into practice through physical, hands-on activities."
                  )
                }}
              </p>
            </div>
          </div>
        </div>

        <div class="back-2"></div>
      </div>
      <div class="text-rich ">
        <p class="desc" style="color: black; font-weight: bold;">
          {{
            $t(
              "Our custom simulation package includes everything you need to get started, including:"
            )
          }}
        </p>
      </div>
      <v-row justify="center" class="row" align="center">
        <div
          v-for="(item, i) in items"
          :key="i"
          class="d-flex justify-space-around ms-5 var"
        >
          <p class="desc-4  me-4">{{ item.title }}</p>
          <v-divider class="stick me-4" vertical v-if="i != 4"></v-divider>
        </div>
      </v-row>
      <div class="text-rich-1 mt-6 " :class="$vuetify.rtl ? 'margin': 'margin-1'">
        <p class="desc">
          {{
            $t(
              "We understand how important it is to create the perfect learning environment for your participants, and our customizable simulations are the perfect solution."
            )
          }}
        </p>
      </div>
    </section>
  </section>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    items() {
      return [
        {
          title: this.$t("Facilitator Guide"),

          src: require("@/assets/images/juorney/arrowjourney.svg"),
        },
        {
          title: this.$t("Game Cards & Boards"),
          src: require("@/assets/images/juorney/arrowjourney.svg"),
        },
        {
          title: this.$t("Handouts & Sheets"),

          src: require("@/assets/images/juorney/arrowjourney.svg"),
        },
        {
          title: this.$t("PowerPoint Slides"),
          src: require("@/assets/images/juorney/arrowjourney.svg"),
        },
        {
          title: this.$t("Any other essential elements"),
          src: require("@/assets/images/juorney/arrowjourney.svg"),
        },
      ];
    },
  },
};
</script>
<style scoped>
.container-1 {
  position: relative;
  height: 450px;
  width: 100%;
}
.back {
  position: absolute;
  height: 450px;
  width: 59.5%;
  top: 0;
  left: 0;
  z-index: 2;
  background: url("@/assets/images/juorney/customj.svg");
  border: 1px solid #707070;
  border-radius: 200px 0px 0px 0px;
}
.back-2 {
  position: absolute;
  height: 450px;
  width: 40.5%;
  top: 0;
  right: 0;
  z-index: 1;
  background: url("@/assets/images/icons/j1.png");
  border-radius: 0px 200px 0px 0px;
  background-size: cover;
}
/* .back-2::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent linear-gradient(183deg, #2852a0c4 0%, #ffffff00 100%)
    0% 0% no-repeat padding-box;
  border-radius: 0px 200px 0px 0px;
} */
.content {
  width: 82%;
}
.titel-1 {
  font: normal normal bold 30px/60px Poppins;
  margin-bottom: 0 !important;
  color: var(--unnamed-color-ffffff);
}
.divider {
  width: 343px;
  height: 0px;
  border: 5px solid var(--unnamed-color-fab120);
  border: 5px solid #fab120;
}
.desc-1 {
  font: normal normal 22px/45px Poppins;
  color: var(--unnamed-color-ffffff);
  margin-bottom: 0px;
}
.text-rich {
  width: 82%;
  margin: auto;
  margin-top: 42px;
  margin-bottom: 25px;
}
.desc {
  font: normal normal 22px/45px Poppins;
  color: var(--unnamed-color-2852a0);
}

.desc-4 {
  font: normal normal bold 20px/45px Poppins;
  color: var(--unnamed-color-ffffff);
  margin-bottom: 0px;
}
.stick {
  height: 40px;
  border: 2px solid var(--unnamed-color-fab120);
  border: 2px solid #fab120;
}
.row {
  height: 75px;
  background: var(--unnamed-color-2852a0) 0% 0% no-repeat padding-box;
  border: 1px solid var(--unnamed-color-707070);
  background: #2852a0 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  border-radius: 0px 0px 200px 200px;
}
.text-rich-1 {
  width: 82%;
  margin: auto;
  margin-bottom: 25px;
}
.margin {
  margin-right: 120px;
}
.margin-1 {
  margin-left: 120px;
}
@media (max-width: 786px) {
  .container-1 {
    height: 1050px;
  }
  .back-xs {
    width: 100%;
    height: 301px;
    position: absolute;
    top: 24%;
    left: 0;
    background: #2852a0;
    background-size: cover;
    border: 0.25px solid #fab120;
    border-radius: 0px 0px 100px 0px;
  }
  .back-2-xs {
    width: 100%;
    height: 261px;
    border-radius: 100px 0px 0px 0px;
    position: absolute;
    top: 0;
    left: 0;
    background: url("@/assets/images/juorney/customob.png");
    background-size: cover;
  }
  /* .back-2-xs::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0.25px solid var(--unnamed-color-fab120);
    background: transparent linear-gradient(32deg, #2852a0c4 0%, #ffffff00 100%)
      0% 0% no-repeat padding-box;
    border-radius: 100px 0px 0px 0px;
  } */
  .titel-1-xs {
    font: normal normal bold 16px/25px Poppins;
    color: var(--unnamed-color-ffffff);
    margin-bottom: 0 !important;
  }
  .divider-xs {
    width: 146px;
    height: 0px;

    border: 3px solid var(--unnamed-color-fab120);
    border: 3px solid #fab120;
    opacity: 1;
    margin-top: 5px !important;
  }
  .desc-1-xs {
    font: normal normal 15px/25px Poppins;
    color: var(--unnamed-color-ffffff);
  }
  .desc-2-xs {
    font: normal normal bold 14px/25px Poppins;
    color: var(--unnamed-color-656463);
  }
  .img-xs {
    width: 4%;
    height: 9px;
  }
  .content-xs {
    width: 84%;
  }
  .v-img-xs {
    margin-bottom: 12px;
    align-items: center;
  }
  .under {
    margin: 0 auto;
    width: 80%;
    position: relative;
    top: 55%;
  }
  .under-1 {
    position: relative;
    top: 58%;
    background: var(--unnamed-color-2852a0) 0% 0% no-repeat padding-box;
border: 1px solid var(--unnamed-color-707070);
background: #2852A0 0% 0% no-repeat padding-box;
border: 1px solid #707070;
border-radius: 0px 100px 0px 0px;
opacity: 1;
  }
  .map {
    width: 80%;
    margin: 20px auto;
  }
  .under-2 {
    position: relative;
    top: 60%;
    width: 80%;
    margin: 0 auto;
  }
  .desc-3-xs {
    font: normal normal  14px/25px Poppins;
    color: var(--unnamed-color-656463);
  }
}
@media (max-width:335px) {
  .desc-1-xs{
    font-size: 13px;
  }
}
</style>
