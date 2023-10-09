<template>
  <section class="mt-16 mb-16">
    <div class="wrapper-titel d-flex align-center justify-space-around ">
      
      <h6 class="titel-1" :class="$vuetify.rtl ? 'set' : ''">
        {{ $t("Measuring Learning Impact") }}
      </h6>
    </div>
    <div class="container-1 d-flex justify-space-between align-center">
      <div class="back d-flex justify-end align-center">
        <div class="d-flex flex-column " :class="$vuetify.rtl&& ($vuetify.breakpoint.name=='md' ||$vuetify.breakpoint.name=='lg' || $vuetify.breakpoint.name=='xl')  ? 'content-1' : 'content'">
          <div>
            <p class="desc">
              {{
                $t(
                  "Don't guess the effectiveness of your employee development program, know it!  "
                )
              }}
              <br>
              {{ $t("LearnKhana's metrics help you evaluate the success of your training and gain valuable insights to make informed decisions for continuous improvement.") }}
            </p>
          </div>
          <div>
            <p class="desc">
              {{
                $t(
                  "With accurate and precise measurements, you'll confidently see the impact of your efforts on your team's growth and development."
                )
              }}
            </p>
          </div>
        </div>
      </div>
      <div class="" :class="$vuetify.rtl&& ($vuetify.breakpoint.name=='md' ||$vuetify.breakpoint.name=='lg' || $vuetify.breakpoint.name=='xl')  ? 'back-1' : 'back-2'"></div>
      <div class="" :class="$vuetify.rtl&& ($vuetify.breakpoint.name=='md' ||$vuetify.breakpoint.name=='lg' || $vuetify.breakpoint.name=='xl')  ? 'text-page-1' : 'text-page'">
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
  text-align: end;
}
.container-1 {
  height: 550px;
  width: 100%;
  position: relative;
}
.text-page {
    text-align: end;
    position: absolute;
    bottom: 80px;
    width:40%;
    right: 0;

  }
  .text-page-1 {
    text-align: start;
    position: absolute;
    bottom: 80px;
    width:40%;
    right: 0;
    bottom: 60px;
  }
  .act {
    color: #A5A5A5;
    font-size: 16px;
  }
.back {
  width: 54%;
  height: 100%;
}
.content {
  width: 90%;
  justify-content: space-around;
  height: 80%;
}
.content-1 {
  width: 90%;
  justify-content: space-around;
  height: 80%;
  position: relative;
  right: 80%;
}

.desc {
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-medium) var(--unnamed-font-size-23) /
    var(--unnamed-line-spacing-40) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-656463);
  
  font: normal normal 23px/40px Poppins;
  letter-spacing: 0px;
  color: #656463;
}
.back-2 {
  width: 43%;
  height: 100%;
  background: url("@/assets/images/consulatyld/impact.png");
  background-size: cover;
}
.back-1 {
  position: absolute;
  right: 0;
  width: 43%;
  height: 100%;
  background: url("@/assets/images/consulatyld/impact.png");
  background-size: contain;
  background-repeat: no-repeat;
}
@media (max-width: 768px) {
  .text-page {
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
    height: 500px;
    flex-direction: column-reverse;
  }
  .back {
    width: 100%;
    height: 250px;
    justify-content: center !important;
  }
  .content {
    margin-left: 13px;
    width: 81%;
    
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
    margin-bottom: 20px;
  }
  .back-2 {
    width: 92%;
    background: url("@/assets/images/consulatyld/impact768.svg") no-repeat;
    height: 225px;
    background-size: cover;
    border-radius: 0px 0px 100px 0px;
  }
}
</style>