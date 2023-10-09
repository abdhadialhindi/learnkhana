<template>
  <div>
    <div class="mb-2 d-flex" >
      <span v-for="i in 14" :key="i" class="ml-5 bolts" style="background-color: #CED8E9; height: 13.4px; width: 13.4px;"></span>
    </div>
    <section>

    <div class="height" v-if="this.$vuetify.breakpoint.name == 'xs' || this.$vuetify.breakpoint.name == 'sm' ">
      <div class="back-2-xs"></div>
      <div class="back-xs pt-16">
        <div class="width-content-xs ms-8 mt-8">
          <p class="" :class="$vuetify.rtl ? 'titel-1-xs-ar':'titel-1-xs'">
            <span class="span-1-xs">{{ $t("Who") }}</span
            >{{ $t(" we are") }}
          </p>
          <p class="titel-2-xs" :class="$vuetify.rtl ? '':''">{{ $t("We are a Regional Edtech company") }}</p>
          <div v-for="(item, i) in items" :key="i" class="d-flex flex-column justify-space-around" :style="{height : $vuetify.rtl ? '48px' :'60px'}">
            <p class="titel-3-xs">
              <span class="span-2-xs">{{ item.desc }}</span
              >{{ item.title }}
            </p>
          </div>
          <p class="titel-2-xs">{{ $t("Our Purpose Is To") }}</p>
          <p class="titel-3">
            <span class="span-2-xs">{{ $t("Build ") }}</span
            >{{
              $t(
                "impactful, engaging, and fit-of-purpose learning experiences."
              )
            }}
          </p>
        </div>
      </div>

    </div>
    <div class="hieght" v-else>
      <div  :class="$vuetify.rtl ? 'back' : 'back'" class="d-flex justify-center">
        <div class="width-content  mt-8 d-flex flex-column justify-space-around  mb-5 " :class="$vuetify.rtl ? 'ms-12' : ''">
          <p class="titel-1">
            <span class="span-1">{{ $t("Who") }}</span
            >{{ $t(" We Are") }}
          </p>
          <p class="titel-2">{{ $t("We are a Regional Edtech company") }}</p>
          <div v-for="(item, i) in items" :key="i">
            <p class="titel-3">
              <span class="span-2">{{ item.desc }}</span
              >{{ item.title }}
            </p>
          </div>
          <p class="titel-2">{{ $t("Our Purpose Is To") }}</p>
          <p class="titel-3">
            <span class="span-2">{{ $t("Build ") }}</span
            >{{
              $t(
                "impactful, engaging, and fit-of-purpose learning experiences."
              )
            }}
          </p>
        </div>

      </div>

      <div  :class="$vuetify.rtl ? 'back-2': 'back-2'" class="d-flex align-center"></div>
      <div :class="$vuetify.rtl ? 'back-5': 'back-5'"></div>
    </div>
  </section>
  <div class="d-flex" style="position:relative; top:-100px" >
    <span v-for="i in 14" :key="i" class="ml-5 bolts" style="background-color: #CED8E9; height: 13.4px; width: 13.4px;"></span>
  </div>
  </div>

</template>
<script>
export default {
  data() {
    return {
      disabled: false,
    };
  },
  computed: {
    items() {
      return [
        {
          title: this.$t(
            " integrated ecosystems of ready-made, customized learning solutions in One Place!"
          ),
          desc: this.$t("Providing"),
        },
        {
          title: this.$t("corporates, providers, government, NGOs, and individuals."),
          desc: this.$t("To "),
        },
        {
          
          desc: this.$t("Through our"),
          title: this.$t(
            " platforms, learning design, and consulting services"
          ),
          
        },
        {
          desc: this.$t("Empowered "),
          title: this.$t("by innovation technology and team learning expertise.")
        }
      ];
    },
  },
};
</script>
<style scoped>
.hieght {
  position: relative;
  height: 710px;
}
.back {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 65%;
  height: 600px;
  background: var(--unnamed-color-2852a0) 0% 0% no-repeat padding-box;
  border: 2px solid var(--unnamed-color-fab120);
  background: #2852a0 0% 0% no-repeat padding-box;
  border: 2px solid #fab120;
  border-radius: 0px 200px 200px 0px;
  opacity: 1;
}
.back-1 {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  width: 63%;
  height: 600px;
  background: var(--unnamed-color-2852a0) 0% 0% no-repeat padding-box;
  border: 2px solid var(--unnamed-color-fab120);
  background: #2852a0 0% 0% no-repeat padding-box;
  border: 2px solid #fab120;
  border-radius: 200px 0px 0px 200px;
  opacity: 1;
}
.back::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: url("@/assets/images/who/backz.png");
  z-index: 2;
  border-radius: 200px 0px 0px 200px;
  background-size: contain;
}
.back-1::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: url("@/assets/images/who/backz.png");
  z-index: 2;
  border-radius: 200px 0px 0px 200px;
  background-size: contain;
}
.back-2 {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  width: 43%;
  height: 600px;

 background-size: cover !important;
  background: url("@/assets/images/who/who0.png");
  
  border-radius: 300px 0px 0px 300px;
  opacity: 1;
}
.back-3 {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 43%;
  height: 600px;
background-size: cover !important;
  
  background: url("@/assets/images/who/who0.png");
  
  border-radius: 0px 300px 300px 0px;
  opacity: 1;
}
.back-4{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 43%;
  height: 600px;
  background-repeat: no-repeat !important;
  
  background: url("@/assets/images/who/who1.png");
  
  border-radius: 0px 300px 300px 0px;
  opacity: 1;
}
.back-5 {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  width: 43%;
  height: 600px;
  background-repeat: no-repeat !important;
  
  background: url("@/assets/images/who/who1.png");
  
  border-radius: 300px 0px 0px 300px;
  opacity: 1;
}
.img {
  position: absolute;
  z-index: 3;
}

.width-content {
  width: 80%;
  background: url("@/assets/images/home/linetext.png");
  background-size: cover;
  background-position-y: center;
}
.titel-1 {
  width: 319px;
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-40) / var(--unnamed-line-spacing-60)
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  
  font: normal normal bold 40px/60px Poppins;
  letter-spacing: 0px;
  color: #ffff;
  position: relative;
  margin-bottom: 25px;
}
.titel-1::after {
  border-radius: 5px;
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 0;
  width: 44%;
  border: 3px solid var(--unnamed-color-fab120);
  transform: translateY(30px);
}
.titel-1::before {
  border-radius: 5px;
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  height: 0;
  width: 48%;
  border: 3px solid var(--unnamed-color-fab120);
  transform: translateY(30px);
}
.span-1 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-40) / var(--unnamed-line-spacing-60)
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-fab120);
  
  font: normal normal bold 40px/60px Poppins;
  letter-spacing: 0px;
  color: #fab120;
}
.span-2 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-22) / var(--unnamed-line-spacing-40)
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-fab120);
  
  font: normal normal bold 22px/40px Poppins;
  letter-spacing: 0px;
  color: #fab120;
}
.titel-3 {
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-22) /
    var(--unnamed-line-spacing-40) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
  
  font: normal normal normal 22px/40px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
}
.titel-2 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-23) / var(--unnamed-line-spacing-30)
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
 
  font: normal normal bold 25px/30px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  margin-top: 25px;
}
@media (max-width: 768px) {
  .bolts{
    display:none;
  }
  .height {
    position: relative;
    height: 850px;
  }
  .back-xs {
    position: absolute;
    width: 100%;
    height: 570px;
    bottom: 9%;
    left: 0;
    z-index: 1;
    background: var(--unnamed-color-2852a0) 0% 0% no-repeat padding-box;
    border: 1px solid var(--unnamed-color-fab120);
    background: #2852a0 0% 0% no-repeat padding-box;
    border: 1px solid #fab120;
    border-radius: 0px 0px 100px 0px;
    opacity: 1;
  }
  .back-2-xs {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    height: 293px;
    border: 1px solid var(--unnamed-color-fab120);
    background: transparent url("@/assets/images/home/whomobre.png")
      0% 0% no-repeat padding-box;
    border: 1px solid #fab120;
    background-size: cover;
    border-radius: 0px 0px 0px 100px;
    opacity: 1;
  }
  .titel-1-xs {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-bold) var(--unnamed-font-size-18) /
      var(--unnamed-line-spacing-60) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-ffffff);
    
    font: normal normal bold 18px Poppins;
    letter-spacing: 0px;
    color: #ffffff;
    position: relative;
  }
  .titel-1-xs-ar {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-bold) var(--unnamed-font-size-18) /
      var(--unnamed-line-spacing-60) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-ffffff);
    
    font: normal normal bold 18px Poppins;
    letter-spacing: 0px;
    color: #ffffff;
    position: relative;
  }
  .titel-1-xs-ar::after {
    content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  height: 0;
  width: 135px;
  border: 3px solid var(--unnamed-color-fab120);
  margin-top: 25px;
  }
  .titel-1-xs::after {
    content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 0;
  width: 135px;
  border: 3px solid var(--unnamed-color-fab120);
  margin-top: 25px;
  }
  .span-1-xs {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-bold) var(--unnamed-font-size-18) /
      var(--unnamed-line-spacing-60) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-fab120);
    
    font: normal normal bold 24px/60px Poppins;
    letter-spacing: 0px;
    color: #fab120;
  }
  .titel-2-xs {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-bold) var(--unnamed-font-size-14) /
      var(--unnamed-line-spacing-30) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-ffffff);
    
    font: normal normal bold 14px/30px Poppins;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
    
  }
  .titel-3 {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-normal) var(--unnamed-font-size-14) /
      var(--unnamed-line-spacing-20) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-ffffff);
    
    font: normal normal normal 14px/20px Poppins;
    letter-spacing: 0px;
    color: #ffffff;
    margin-bottom: 20px;
  }
  .titel-3-xs {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-14)/var(--unnamed-line-spacing-20) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-ffffff);

font: normal normal normal 14px/20px Poppins;
letter-spacing: 0px;
color: #FFFFFF;
  }
  .span-2-xs {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-bold) var(--unnamed-font-size-14) /
      var(--unnamed-line-spacing-20) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-fab120);
    
    font: normal normal bold 14px/20px Poppins;
    letter-spacing: 0px;
    color: #fab120;
  }
}
@media (max-width:350px) {
  
  .back-xs {
    height: 575px;
    bottom: 5%;
  }
  .titel-2-xs {
    font-size: 13px;
  }
  .titel-3-xs {
    font-size: 12px;
  }
}
</style>
