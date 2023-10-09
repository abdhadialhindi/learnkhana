<template>
  <section>
    <v-row justify="center">
      <div class="d-flex flex-column justify-space-between align-center">
        <h1 class="titel-1">
          {{ $t("The success we live ")
          }}<span class="span-1">{{ $t("today") }}</span>
        </h1>
        <v-divider class="divider"></v-divider>
      </div>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="8" lg="8" xl="8" class="back">
        <v-timeline class="time">
          <v-timeline-item class="time-1"
            ><template v-slot:icon>
              <span class="span-2">2023</span>
            </template></v-timeline-item
          >
          <v-timeline-item
            color="transparent"
            fill-dot
            left
            class="time-2"
            @click.native="myFilter0();setBackground()"
            @click.native.once="removeBackground()"
            :class="{ active: isActive0 }"
          >
          <v-avatar slot="icon" class="avatar-6">
            <img :src='require("assets/images/about/timeline.gif")'>
          </v-avatar>
            <v-card class="card-1 align-center justify-center d-flex px-3 card">
              <p class="desc">
                {{
                  $t(
                    "In 2023,we are on an even more ambitious mission of expansion!"
                  )
                }}
              </p>
            </v-card>
          </v-timeline-item>

          <v-timeline-item
            color="#2852A0"
            fill-dot
            left
            class="time-3"
            @click.native="myFilter1();removeBackground();"
            :class="{ active: isActive1 }"
          >
          <v-avatar slot="icon" class="avatar-5">
            <img :src='require("assets/images/about/timeline.gif")'>
          </v-avatar>
            <div class="justify-center align-center item-2 px-2 card2">
              <span class="span-2">2022</span>
            </div>
            <v-card class="card-2 align-center justify-center card2 px-3">
              <p class="desc-1">
                {{
                  $t(
                    "We had the privilege of working with many different companies in multiple regional countries."
                  )
                }}
              </p>
            </v-card>
          </v-timeline-item>

          <v-timeline-item
            color="#2852A0"
            fill-dot
            left
            class="time-3"
            @click.native="myFilter2();removeBackground();"
            :class="{ active: isActive2 }"
          >
          <v-avatar slot="icon" class="avatar-4">
            <img :src='require("assets/images/about/timeline.gif")'>
          </v-avatar>
            <div class="justify-center align-center item-2 px-2 card1">
              <span class="span-2">2021</span>
            </div>
            <v-card class="card-2 align-center justify-center card1 px-3">
              <p class="desc-1">
                {{
                  $t(
                    "We established our compliance arm, to expand our offering in the Mena region."
                  )
                }}
              </p>
            </v-card>
          </v-timeline-item>
          <v-timeline-item
            color="#2852A0"
            fill-dot
            left
            class="time-3"
            @click.native="myFilter3();removeBackground();"
            :class="{ active: isActive3 }"
          >
          <v-avatar slot="icon" class="avatar-3">
            <img :src='require("assets/images/about/timeline.gif")'>
          </v-avatar>
            <div class="card3 justify-center align-center item-2 px-2">
              <span class="span-2">2020</span>
            </div>
            <v-card class="card-2 align-center justify-center card3 px-3">
              <p class="desc-1">
                {{
                  $t(
                    "Learnkhana was incubated by the Egyptian Ministry of CIT."
                  )
                }}
              </p>
            </v-card>
          </v-timeline-item>

          <v-timeline-item
            color="#2852A0"
            fill-dot
            left
            class="time-3"
            @click.native="myFilter4();removeBackground();"
            @click.stop=""

            :class="{ active: isActive4 }"
          >
          <v-avatar slot="icon" class="avatar-2">
            <img :src='require("assets/images/about/timeline.gif")' class="img">
          </v-avatar>
            <div class="card4 justify-center align-center item-2 px-2">
              <span class="span-2">2019</span>
            </div>
            <v-card class="card-2 align-center justify-center card4 px-4">
              <p class="desc-1">
                {{
                  $t(
                    "Launching of our Learnkhana platform with a mission of “Better career and personal lives"
                  )
                }}
              </p>
            </v-card>
          </v-timeline-item>
          <v-timeline-item
            color="transparent"
            fill-dot
            right
            class="time-2 time-5"
            @click.native="myFilter0();setBackground()"
            @click.native.once="removeBackground()"
            :class="{ active: isActive0 }"
          >
          <v-avatar slot="icon" class="avatar-1">
            <img :src='require("assets/images/about/timeline.gif")'>
          </v-avatar>
            <v-card class="card-2 align-center justify-center d-flex px-3">
              <p class="desc-1">
                {{
                  $t(
                    "Learnkhana starts as a learning designing firm under the name of “Learning Lap”"
                  )
                }}
              </p>
            </v-card>
          </v-timeline-item>
          <v-timeline-item class="time-1"
            ><template v-slot:icon>
              <span class="span-2">2018</span>
            </template></v-timeline-item
          >
        </v-timeline>
      </v-col>
    </v-row>
  </section>
</template>
<script>
export default {
  data() {
    return {
      isActive0: false,
      isActive1: false,
      isActive2: false,
      isActive3: false,
      isActive4: false,
    };
  },

  methods: {
    myFilter0() {
      this.isActive0 = !this.isActive0;
    },
    myFilter1() {
      this.isActive1 = !this.isActive1;
    },
    myFilter2() {
      this.isActive2 = !this.isActive2;
    },
    myFilter3() {
      this.isActive3 = !this.isActive3;
    },
    myFilter4() {
      this.isActive4 = !this.isActive4;
    },
    removeBackground() {
    const parent = document.querySelector('.time');
    parent.style.background = 'none';
  },
  setBackground() {
    const parent = document.querySelector('.time');
    parent.style.background = `url(${require("@/assets/images/about/time-1.svg")}) no-repeat -10% 50%/50% 60%`;

  }
  },
};
</script>
<style scoped>
.avatar-5 {
  display: none;
}

.active .avatar-5 {
  display: block;
}
.avatar-4 {
  display: none;
}
.active .avatar-4 {
  display: block;
}
.avatar-3 {
  display: none;
}
.active .avatar-3 {
  display: block;
}
.avatar-2 {
  display: none;
}
.active .avatar-2 {
  display: block;
}
/* .avatar-1 {
  display: none;
}
.active .avatar-1 {
  display: block;
} */
/* .avatar-6 {
  display: none;
}
.active .avatar-6 {
  display: block;
} */
.img {
  width: 200px;
}
.titel-1 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-30) / var(--unnamed-line-spacing-46)
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-2852a0);

  font: normal normal bold 30px/46px Poppins;
  letter-spacing: 0px;
  color: #2852a0;
}

.span-1 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-30) / var(--unnamed-line-spacing-46)
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-fab120);
  font: normal normal bold 30px/46px Poppins;
  letter-spacing: 0px;
  color: #fab120;
}

.divider {
  margin-top: 15px;
  height: 0px;
  width: 80%;
  border: 2px solid #fab120;
}

.span-2 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-25) / var(--unnamed-line-spacing-40)
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
  
  font: normal normal bold 25px/40px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}

.time {
  background: url("@/assets/images/about/time-1.svg") no-repeat;
    background-size: 50% 60%;
    background-position: -10% 50%;
}

.card-1 {
  background: #2852a0 0% 0% no-repeat padding-box;
  opacity: 1;
  width: 383px;
  height: 136px;
}

.card-2 {
  background: #c9d4e7 0% 0% no-repeat padding-box;
  opacity: 1;
  width: 383px;
  height: 136px;
}

.desc-1 {
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-medium) var(--unnamed-font-size-22) /
    var(--unnamed-line-spacing-30) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-0e0e0e);
  font: normal normal 22px/30px Poppins;
  letter-spacing: 0px;
  color: #0e0e0e;
  opacity: 1;
}

.desc {
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-medium) var(--unnamed-font-size-22) /
    var(--unnamed-line-spacing-30) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
  
  font: normal normal 22px/30px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}

.item-2 {
  width: 91px;
  height: 91px;
  border-radius: 50%;
  background: #2852a0;
  margin-bottom: 15px;
}

/* .card {
  display: none !important;
}

.active .card {
  display: flex !important;
} */

.card1 {
  display: none;
}

.active .card1 {
  display: flex;
}

.card2 {
  display: none;
}

.active .card2 {
  display: flex;
}

.card3 {
  display: none;
}

.active .card4 {
  display: flex;
}

.card4 {
  display: none;
}

.active .card3 {
  display: flex;
}
/* .time-2:has(> .back.active) {
  background: url("@/assets/images/about/time-1.svg") no-repeat;
    background-size: contain;
    background-position: 50% 50%;
} */
</style>
<style>
.time.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse)::before {
  height: 89%;
  top: 50%;
  transform: translateY(-51%);

}

.time-1 .v-timeline-item__dot {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 91px;
  height: 91px;
  animation: move ;
  animation-duration: 2s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

}

.time-1 .v-timeline-item__dot .v-timeline-item__inner-dot {
  height: 91px;
  margin: 0px;
  width: 91px;

}

.time-2
  .v-application--is-ltr
  .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse)
  .v-timeline-item--after
  .v-timeline-item__body
  > .v-card:not(.v-card--link)::before,
.v-application--is-ltr
  .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse)
  .v-timeline-item--after
  .v-timeline-item__body
  > .v-card::after {
  border-right-color: #2852a0;

}

.time-2 .v-timeline-item__dot .v-timeline-item__inner-dot {
  border: 1px solid #2852a0 !important;

}

.time-3 .v-timeline-item__body > .v-card:not(.v-card--flat)::after {
  border-right-color: #c9d4e7;
}

.time-3.v-application--is-ltr
  .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse)
  .v-timeline-item--before
  .v-timeline-item__body
  > .v-card:not(.v-card--link)::before,
.v-application--is-ltr
  .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse)
  .v-timeline-item--before
  .v-timeline-item__body
  > .v-card::after {
  top: calc(13% - 10px + 2px);

}

.time-3.v-application--is-ltr
  .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse)
  .v-timeline-item--before
  .v-timeline-item__body
  > .v-card:not(.v-card--link)::before {
  top: calc(13% - 10px + 2px);
}

.time-3
  .v-timeline-item__body
  > .v-card:not(.v-card--flat):not(.v-card--link)::before {
  top: calc(13% - 10px + 2px);
}

.time-5
  .v-application--is-ltr
  .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse)
  .v-timeline-item--after
  .v-timeline-item__body
  > .v-card:not(.v-card--link)::before,
.v-application--is-ltr
  .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse)
  .v-timeline-item--after
  .v-timeline-item__body
  > .v-card::after {
  border-right-color: #c9d4e7;
}

.active.v-timeline-item__body.card {
  display: flex !important;
}
.time-3 .v-avatar {
  width: 50px !important;
  min-width: 50px !important;
  height: 50px !important;
  min-height: 50px !important;
}
/* @keyframes move {
  100% {
    width: 101px;
    height: 101px;

  }
  0% {
    width: 91px;
    height: 91px;
  }
} */
</style>
