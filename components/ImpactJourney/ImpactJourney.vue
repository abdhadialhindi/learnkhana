<template>
  <section class="mt-16 mb-16">
    <div class="wrapper-titel d-flex align-center justify-space-around">
      <h6 class="titel-1" :class="this.$vuetify.rtl ? 'set' : ''">
        {{ $t("Virtual Instructor Led training") }}
      </h6>
    </div>
    <div class="container-1 d-flex justify-space-between">
      <div class="back d-flex justify-end" :class="this.$vuetify.rtl ? 'reserve' : ''">
        <div class="d-flex flex-column " :class="this.$vuetify.rtl ? 'content-1' : 'content'">
          <div class="move">
            <p
              class="desc"
              v-if="
                this.$vuetify.breakpoint.name == 'xs' ||
                this.$vuetify.breakpoint.name == 'sm'
              "
            >
              {{
                $t(
                  "Looking for an exciting way to train your remote team or employees? "
                )
              }}
              <br>
              {{ $t("Virtual Instructor-Led Training (VILT) is the answer!") }}
            </p>
            <p class="desc mb-0" v-else>
              {{
                $t(
                  "Looking for an exciting way to train your remote team or employees? "

                )
              }}
              <br>
               {{ $t("Virtual Instructor-Led Training (VILT) is the answer!") }}
            </p>
          </div>
          <div class="move-1">
            <p
              class="desc-1 margin"
             
            >
              {{
                $t(
                  "Deliver engaging and interactive training sessions to learners, no matter where they are located. "
                )
              }}
            </p>
            <p class="desc-1 margin">
              {{
                $t(
                  "Our package includes all the digital aids you need, from a Facilitator Guide to PowerPoint presentations, to create an effective and collaborative learning experience."
                )
              }}
            </p>
            <p class="desc-1">
              {{
                $t(
                  " Get ready to see your team grow and succeed, no matter where they are!"
                )
              }}
            </p>
          </div>
        </div>
      </div>
      <div  :class="this.$vuetify.rtl ? 'back-1':'back-2'"></div>
      <div class="text-page">
          <p class="act me-4">{{ $t("Actual picture from original project") }}</p>
        </div>
    </div>
  </section>
</template>
  <style scoped>
.wrapper-titel {
  position: relative;
  width: 100%;
  height: 162px;
}
.wrapper-titel::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 45%;
  height: 100%;
  background: transparent
    linear-gradient(
      102deg,
      var(--unnamed-color-fab120) 0%,
      var(--unnamed-color-ffffff) 100%
    )
    0% 0% no-repeat padding-box;
  background: transparent linear-gradient(102deg, #fab120 0%, #ffffff 100%) 0%
    0% no-repeat padding-box;
  border-radius: 0px 5px 5px 0px;
  z-index: 1;
}
.text-page {
    text-align: end;
    position: absolute;
    bottom: -10px;
    width:40%;
    right: 0;

  }
  .act {
    color: #A5A5A5;
    font-size: 16px;
  }
.titel-1 {
  width: 62%;
  position: relative;
  z-index: 2;
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-25) / var(--unnamed-line-spacing-38)
    var(--unnamed-font-family-poppins);
  color: var(--unnamed-color-2852a0);
  
  font: normal normal bold 25px/38px Poppins;
  letter-spacing: 0.75px;
  color: #2852a0;
  opacity: 1;
}
.set {
  width: 70%;
  text-align: end;
}
.container-1 {
    margin-top: 83px;
  height: 506px;
  position: relative;
}
.back {
  width: 51%;
  height: 100%;
  
}
.reserve {
  position: absolute;
  left: 6%;
}
.content {
  width: 89%;
  justify-content: flex-end;
}
.content-1 {
  width: 89%;
  justify-content: flex-end;
  height: 85%;
}
.desc {
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-medium) var(--unnamed-font-size-23) /
    var(--unnamed-line-spacing-40) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-656463);
  
  font: normal normal 22px/40px Poppins;
  letter-spacing: 0px;
  color: #656463;
}
.desc-1 {
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-medium) var(--unnamed-font-size-23) /
    var(--unnamed-line-spacing-40) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-656463);
  
  font: normal normal 23px/40px Poppins;
  letter-spacing: 0px;
  color: #656463;
  margin-bottom: 0px ;
}
.margin {
  margin-bottom: 30px;
}
.back-2 {
  top: 20px;
  position: absolute;
  right: 0;
  width: 44%;
  height: 468px;
  background: url("@/assets/images/juorney/virtual.png");
  background-size: cover;
}
.back-1 {
  top: 20px;
  position: absolute;
  right: 0;
  width: 44%;
  height: 468px;
  background: url("@/assets/images/juorney/virtual.png");
  background-size: cover;
}

/* .move {
  position: absolute;
  top: 0px;
  left: 5.6%;
  width: 48%;
  margin-bottom: 34px;
} */
.move-1 {
  margin-top: 34px;
}
@media (max-width: 900px) {
  .text-page{
     display: none;
  }
  .wrapper-titel {
    height: 76px;
    margin-bottom: 30px;
  }
  .wrapper-titel::after {
    width: 50%;
  }
  .titel-1 {
    width: 85%;
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-bold) var(--unnamed-font-size-16) /
      var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
    color: var(--unnamed-color-2852a0);
    
    font: normal normal bold 16px/25px Poppins;
    letter-spacing: 0.48px;
    color: #2852a0;
  }
  .container-1 {
    margin-top: 0px;
    height: 620px;
    flex-direction: column-reverse;
  }
  .back {
    width: 100%;
    height: 280px;
    justify-content: center !important;
  }
  .reserve {
    position: relative;
    left: 0%;
    bottom: 13%;
  }
  .content {
    margin-left: 13px;
    width: 90%;
    
  }
  .content-1 {
    margin-left: 13px;
    width: 90%;
  }
  .desc {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-normal) var(--unnamed-font-size-14) /
      var(--unnamed-line-spacing-20) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-656463);
    
    font: normal normal normal 14px/20px Poppins !important;
    letter-spacing: 0px;
    color: #656463;
    opacity: 1;
  }
  .desc-1 {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-normal) var(--unnamed-font-size-14) /
      var(--unnamed-line-spacing-20) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-656463);
    
    font: normal normal normal 14px/20px Poppins !important;
    letter-spacing: 0px;
    color: #656463;
    opacity: 1;
  }
  .margin {
    margin-bottom: 16px;
  }
  .back-2 {
    width: 92%;
    background: url("@/assets/images/juorney/virtual768.png") no-repeat;
    height: 225px;
    background-size: cover;
    border-radius: 0px 0px 100px 0px;
    position: inherit;
  }
  .back-1 {
    width: 92%;
    background: url("@/assets/images/juorney/virtual768.png") no-repeat;
    height: 225px;
    background-size: cover;
    border-radius: 0px 0px 100px 0px;
    position: inherit;
  }
  .move {
  width: 93%;

  position: inherit;
  margin-bottom: 0;
}
.move-1 {
  margin-top: 16px;
}
}

</style>