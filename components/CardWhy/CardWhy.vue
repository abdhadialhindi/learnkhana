<template>
  <virtual-scroller  :mode="mode">
  <section>
    <SpacerProject></SpacerProject>
    <v-row justify="center">
      <div class="d-flex justify-center align-center flex-column mb-10">
        <h1 class="titel-1">{{ $t("What Makes Our Work Unique?") }}</h1>
        <img
          src="../../assets/images/stick-horizontal/1.svg"
          alt=""
          class="img"
        />
      </div>
    </v-row>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8" xs="8" lg="12" md="12" xl="12">
          <v-row justify="center" class="content">
            <v-col cols="12" lg="4" md="4" xl="4">
              <div
                class="card-1 d-flex flex-column align-center justify-center px-6"
              >
                <img src="@/assets/images/why/2.svg" alt="" class="img-1" />

                <h2 class="titel-2">{{ $t("One-Stop Shop.") }}</h2>
                <p class="desc">
                  {{
                    $t(
                      "We provide you customizable learning journeys, at speed and price that will delight you, not only that but also journeys that suit your company’s needs."
                    )
                  }}
                </p>
              </div>
            </v-col>
            <v-col cols="12" lg="4" md="4" xl="4"
              ><div
                class="card-2 d-flex flex-column align-center justify-center px-8 text-center"
              >
                <img src="@/assets/images/why/1.svg" alt="" class="img2" />

                <h2 class="titel-3">{{ $t("Expert LXD Team.") }}</h2>
                <p class="desc-1">
                  {{
                    $t(
                      "Our team’s years of experience make us a dynamic technology partner, who can harness modern technology to accelerate and utilize."
                    )
                  }}
                </p>
              </div>
            </v-col>
            <v-col cols="12" lg="4" md="4" xl="4">
              <div
                class="card-3 d-flex flex-column align-center justify-center"
              >
                <img src="@/assets/images/why/3.svg" alt="" class="img-1" />

                <h2 class="titel-2">{{ $t("Utilizing Media Tools") }}</h2>
                <p class="desc">
                  {{ $t("Development to reduce timelines.") }}
                  <br />
                  {{
                    $t(
                      " We determine the appropriate technology solutions and project methodologies that meet your company’s goals."
                    )
                  }}
                </p>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <SpacerProject></SpacerProject>
  </section>
</virtual-scroller>
</template>
<script>
import { VirtualScroller } from 'vue-virtual-scroller'

export default {
  components: {
    VirtualScroller
  },
  data() {
    return {
      items: ['Item 1', 'Item 2', 'Item 3', /* ... */],
      mode: 'variable'
    }
  }
}
</script>
<style scoped>
.titel-1 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-30) / var(--unnamed-line-spacing-50)
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-2852a0);

  font: normal normal bold 30px/50px Poppins;
  letter-spacing: 0px;
  color: #2852a0;
  opacity: 1;
}
.card-1 {
  text-align: center;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  border: 6px solid var(--unnamed-color-fab120);
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 6px solid #fab120;
  border-radius: 75px;
  opacity: 1;
  position: relative;
  height: 350px;
}
.img-1 {
  width: 33%;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.titel-2 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-23) / var(--unnamed-line-spacing-25)
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-2852a0);
  
  font: normal normal bold 23px/25px Poppins;
  letter-spacing: 0px;
  color: #2852a0;
  opacity: 1;
  margin-bottom: 16px;
}
.desc {
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-20) /
    var(--unnamed-line-spacing-35) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-413f3f);
  text-align: center;
  font: normal normal normal 20px/35px Poppins;
  letter-spacing: 0px;
  color: #413f3f;
  opacity: 1;
}
.card-2 {
  height: 350px;
  /* UI Properties */
  background: var(--unnamed-color-2852a0) 0% 0% no-repeat padding-box;
  background: #2852a0 0% 0% no-repeat padding-box;
  border-radius: 75px;
  opacity: 1;
  position: relative;
}
.img2 {
  width: 33%;
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.titel-3 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-23) / var(--unnamed-line-spacing-25)
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-fab120);
  
  font: normal normal bold 23px/25px Poppins;
  letter-spacing: 0px;
  color: #fab120;
  margin-bottom: 16px;
}
.desc-1 {
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-20) /
    var(--unnamed-line-spacing-35) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
  text-align: center;
  font: normal normal normal 20px/35px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}
.card-3 {
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  border: 6px solid var(--unnamed-color-2852a0);
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 6px solid #2852a0;
  border-radius: 75px;
  opacity: 1;
  position: relative;
  height: 350px;
}
@media (max-width: 900px) {
  .titel-1 {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-bold) var(--unnamed-font-size-18) / 26px
      var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-2852a0);
    text-align: center;
    font: normal normal bold 18px/26px Poppins;
    letter-spacing: 0px;
    color: #2852a0;
    opacity: 1;
  }
  .img {
    width: 50%;
    margin-bottom: 30px;
  }
  .content {
    flex-direction: column-reverse;
  }
  .card-3 {
    height: 250px;
    /* UI Properties */
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    border: 3px solid var(--unnamed-color-2852a0);
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 3px solid #2852a0;
    border-radius: 40px;
    opacity: 1;
    margin-bottom: 30px;
  }
  .img-1 {
    width: 33%;
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  }

  .desc {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 13px/var(--unnamed-line-spacing-20) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-413f3f);
text-align: center;
font: normal normal normal 13px/20px Poppins;
letter-spacing: 0px;
color: #413F3F;
opacity: 1;
  }
  .card-2 {
    height: 250px;
/* UI Properties */
background: var(--unnamed-color-2852a0) 0% 0% no-repeat padding-box;
background: #2852A0 0% 0% no-repeat padding-box;
border-radius: 40px;
opacity: 1;
margin-bottom: 30px;
  }
  .titel-3 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-16)/16px var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-fab120);

font: normal normal bold 16px/16px Poppins;
letter-spacing: 0px;
color: #FAB120;
  }
  .desc-1 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 13px/var(--unnamed-line-spacing-20) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-ffffff);
text-align: center;
font: normal normal normal 13px/20px Poppins;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
  }
  .card-1 {
    height: 250px;
/* UI Properties */
background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
border: 3px solid var(--unnamed-color-fab120);
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 3px solid #FAB120;
border-radius: 40px;
opacity: 1;
  }
  .titel-2 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-16)/16px var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-2852a0);

font: normal normal bold 16px/16px Poppins;
letter-spacing: 0px;
color: #2852A0;
opacity: 1;
  }
}
</style>