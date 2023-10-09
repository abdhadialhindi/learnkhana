<template>
  <section class="mb-16">
    <v-row justify="center">
      <div class="d-flex justify-center align-center flex-column">
        <h1 class="titel-1">
          {{ $t("The success we live ")
          }}<span class="span-1">{{ $t("today") }}</span>
        </h1>
        <v-divider class="divider"></v-divider>
      </div>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-slide-group class="" v-model="onboarding" :class="$vuetify.rtl? 'time-1':'time'">
          <template v-slot:next>
            <img
              :src="
                $vuetify.rtl
                  ? require('@/assets/images/about/left.png')
                  : require('@/assets/images/about/right.png')
              "
              alt=""
            />
          </template>
          <template v-slot:prev>
            <img
              :src="
               $vuetify.rtl
                  ? require('@/assets/images/about/right.png')
                  : require('@/assets/images/about/left.png')
              "
              alt=""
            />
          </template>
          <v-slide-item >
            <v-card class="d-flex contain">
              <div class="d-flex justify-center align-center flex-column left">
                <div class="circul d-flex justify-center align-center">
                  <span class="year">2023</span>
                </div>
                <div>
                  <v-divider vertical class="short-line"></v-divider>
                </div>
                <div class="small-circul small-circul-1">
                  
            <img :src='require("assets/images/about/timeline.gif")'>
          
                </div>
                <div>
                  <v-divider vertical class="long-line"></v-divider>
                </div>
                <div class="small-circul">
            <img :src='require("assets/images/about/timeline.gif")'>
          
                </div>
                <div>
                  <v-divider vertical class="short-line"></v-divider>
                </div>
                <div class="circul d-flex justify-center align-center"><span class="year">2018</span></div>
              </div>
              <div class="d-flex justify-end align-center flex-column">
                <div class=" d-flex justify-center align-center px-3" :class="$vuetify.rtl ? 'content-2':'content'">
                  <p class="desc">{{ $t("In 2023,we are on an even more ambitious mission of expansion!") }}</p>
                </div>
                <div>
                  <img src="@/assets/images/about/timesm.png" alt="" />
                </div>
                <div class=" d-flex justify-center align-center px-3" :class="$vuetify.rtl ? 'content-3':'content-1'">
                  <p class="desc-1">{{ $t("Learnkhana starts as a learning designing firm under the name of “Learning Lap”") }}</p>
                </div>
              </div>
            </v-card>
          </v-slide-item>
          <v-slide-item >
            <v-card class="d-flex contain">
              <div class="d-flex justify-center align-center flex-column left">
                <div class="circul d-flex justify-center align-center">
                  <span class="year">2020</span>
                </div>
                <div>
                  <v-divider vertical class="short-line"></v-divider>
                </div>
                <div class="small-circul small-circul-1"> 
            <img :src='require("assets/images/about/timeline.gif")'>
          </div>
                <div>
                  <v-divider vertical class="long-line"></v-divider>
                </div>
                
                  <div class="small-circul">
            <img :src='require("assets/images/about/timeline.gif")'>
          
                </div>
                <div>
                  <v-divider vertical class="short-line"></v-divider>
                </div>
                <div class="circul d-flex justify-center align-center"><span class="year">2019</span></div>
              </div>
              <div class="d-flex justify-end align-center flex-column">
                <div class="content-1 d-flex justify-center align-center px-3" >
                  <p class="desc-1">{{ $t("Learnkhana was incubated by the Egyptian Ministry of CIT.") }}</p>
                </div>
                <div class="hieght">
                  
                </div>
                <div class="content-1 d-flex justify-center align-center px-2">
                  <p class="desc-1">{{ $t("Launching of Learnkhana platform with a mission of “Better career and personal lives.") }}</p>
                </div>
              </div>
            </v-card>
          </v-slide-item>
          <v-slide-item >
            <v-card class="d-flex contain">
              <div class="d-flex justify-center align-center flex-column left">
                <div class="circul d-flex justify-center align-center">
                  <span class="year">2022</span>
                </div>
                <div>
                  <v-divider vertical class="short-line"></v-divider>
                </div>
                <div class="small-circul small-circul-1">
                  
            <img :src='require("assets/images/about/timeline.gif")'>
          
                </div>
                <div>
                  <v-divider vertical class="long-line"></v-divider>
                </div>
                <div class="small-circul">
                  
            <img :src='require("assets/images/about/timeline.gif")'>
          
                </div>
                <div>
                  <v-divider vertical class="short-line"></v-divider>
                </div>
                <div class="circul d-flex justify-center align-center"><span class="year">2021</span></div>
              </div>
              <div class="d-flex justify-end align-center flex-column">
                <div class=" d-flex justify-center align-center px-2" :class="$vuetify.rtl? 'content-3':'content-1'">
                  <p class="desc-1">{{ $t("We had the privilege of working with many different companies in multiple regional countries.") }}</p>
                </div>
                <div class="hieght">
                  
                </div>
                <div class=" d-flex justify-center align-center px-2" :class="$vuetify.rtl? 'content-3':'content-1'">
                  <p class="desc-1">{{ $t("We established our compliance arm, to expand our offering in the Mena region.") }}</p>
                </div>
              </div>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-col>
    </v-row>
  </section>
</template>
<script>
export default {
  data() {
    return {
      disabled: false,
      length: 4,
      onboarding: 0,
    };
  },
  computed: {
    items() {
      return [
        {
          title: this.$t(
            "The University of Pennsylvania’s Penn GSE is proud to announce that Learnkhana, has won.."
          ),

          src: require("@/assets/images/ourwork/group4.png"),
        },
        {
          title: this.$t(
            "A Cost and Time Efficient Solution: How a 3000-Employee Leading Company Improved Their LMS."
          ),
          src: require("@/assets/images/ourwork/group3.png"),
        },
        {
          title: this.$t(
            "This is how we got employees to actually read their code of conduct by using this simple strategy."
          ),

          src: require("@/assets/images/ourwork/group2.png"),
        },
        {
          title: this.$t(
            "This is how we got employees to actually read their code of conduct by using this simple strategy."
          ),
          src: require("@/assets/images/ourwork/group1.png"),
        },
      ];
    },
  },
  methods: {
      next () {
        this.onboarding = this.onboarding + 1 === this.length
          ? 0
          : this.onboarding + 1
      },
      prev () {
        this.onboarding = this.onboarding - 1 < 0
          ? this.length - 1
          : this.onboarding - 1
      },
    },
};
</script>
<style scoped>
.titel-1 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-16) / var(--unnamed-line-spacing-25)
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-2852a0);
  font: normal normal bold 16px/25px Poppins;
  letter-spacing: 0px;
  color: #2852a0;
}
.span-1 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-16) / var(--unnamed-line-spacing-25)
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-fab120);
  
  font: normal normal bold 16px/25px Poppins;
  letter-spacing: 0px;
  color: #fab120;
}
.divider {
  margin-top: 8px;
  width: 70%;
  height: 0px;
  border: 1px solid #fab120;
}
.contain {
  width: 370px;
  grid-gap: 12px;
  gap: 12px;
  box-shadow: none !important;
}
/* .left {
  width: 31%;
} */
.circul {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--unnamed-color-2852a0);
  border: 3px solid #FFFFFF;
}
.year {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-14) / var(--unnamed-line-spacing-24)
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
  
  font: normal normal bold 14px/24px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}
.short-line {
  min-height: 13.5px;
  max-height: 13.5px;
  border: 1px solid #707070;
}
.small-circul-1 {
  margin-bottom: 5px;
}
.small-circul {
  
    width: 22px;
    height: 12px;
    /* background: #ffffff;
    border-radius:50% ;
    border: 1px solid #2852A0; */
}
.long-line {
max-height: 193px;
min-height: 193px;
border: 1px solid #707070;
}
.content {
  width: 250px;
height: 100px;
    background: var(--unnamed-color-2852a0) 0% 0% no-repeat padding-box;
background: #2852A0 0% 0% no-repeat padding-box;
position: relative;
}
.content-2 {
  width: 250px;
height: 100px;
    background: var(--unnamed-color-2852a0) 0% 0% no-repeat padding-box;
background: #2852A0 0% 0% no-repeat padding-box;
position: relative;
}
.content::after {
  content: '';
  position: absolute;
  left: -8%;
  top: 10%;
  width: 0px;
  height: 0px;
  border-bottom: 10px solid transparent;
  border-left:  10px solid transparent;
  border-top: 10px solid transparent;
  border-right: 10px solid #2852A0;
}
.content-2::after {
  content: '';
  position: absolute;
  left: 100%;
  top: 10%;
  width: 0px;
  height: 0px;
  border-bottom: 10px solid transparent;
  border-left:  10px solid #2852A0;
  border-top: 10px solid transparent;
  border-right: 10px solid transparent;
}

.desc {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) var(--unnamed-font-size-14)/var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-ffffff);

/* font: normal normal  14px/25px Poppins; */
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;

}
.content-1 {
  position: relative;
  width: 250px;
height: 100px;
background: #C9D4E7 0% 0% no-repeat padding-box;
}
.content-3 {
  position: relative;
  width: 250px;
height: 100px;
background: #C9D4E7 0% 0% no-repeat padding-box;
}
.desc-1 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) var(--unnamed-font-size-14)/var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-0e0e0e);

/* font: normal normal  14px/25px Poppins; */
letter-spacing: 0px;
color: #0E0E0E;
opacity: 1;
}
.content-1::after {
  content: '';
  position: absolute;
  left: -8%;
  top: 10%;
  width: 0px;
  height: 0px;
  border-bottom: 10px solid transparent;
  border-left:  10px solid transparent;
  border-top: 10px solid transparent;
  border-right: 10px solid #C9D4E7;
}
.content-3::after {
  content: '';
  position: absolute;
  left: 100%;
  top: 10%;
  width: 0px;
  height: 0px;
  border-bottom: 10px solid transparent;
  border-left:  10px solid #C9D4E7;
  border-top: 10px solid transparent;
  border-right: 10px solid transparent;
}
.hieght {
  height: 108px;
}
</style>
<style>
.time.v-slide-group:not(.v-slide-group--has-affixes) > .v-slide-group__next {
    display: flex;
    position: absolute;
    top: 100%;
    width: 20%;
    height: 60px;
    left: 45%;
    pointer-events: all;
}
.time-1.v-slide-group:not(.v-slide-group--has-affixes) > .v-slide-group__next {
    display: flex;
    position: absolute;
    top: 100%;
    width: 20%;
    height: 60px;
    left: 35%;
    pointer-events: all;
}
.time.v-slide-group.v-item-group > .v-slide-group__prev {
    cursor: pointer;
    display: flex;
    position: absolute;
    top: 100%;
    width: 20%;
    height: 60px;
    left: 35%;
}
.time-1.v-slide-group.v-item-group > .v-slide-group__prev {
    cursor: pointer;
    display: flex;
    position: absolute;
    top: 100%;
    width: 20%;
    height: 60px;
    left: 45%;
}
</style>