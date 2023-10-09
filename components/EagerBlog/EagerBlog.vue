<template>
  <section class="back mt-16 mb-16">
    <v-row justify="center" class="">
      <div class="text-center divider">
        <h2 class="titel-1 " :class="this.$vuetify.breakpoint.name=='xs' || this.$vuetify.breakpoint.name=='sm' ? 'mt-5 mb-1':'mt-13 mb-5'">
          {{ $t("Eager to learn more") }}<span class="mark">&#33;</span>
        </h2>
        <p class="desc " :class="this.$vuetify.breakpoint.name=='xs' || this.$vuetify.breakpoint.name=='sm' ? 'mb-1 mt-3':' mb-12 '">
          {{ $t("Read more of our timely articles in the L&D industry.​") }}
        </p>
      </div>
    </v-row>
    <v-row justify="center" class="col-text">
      <v-col
        sm="12"
        xs="12"
        lg="4"
        md="4"
        xl="4"
        class="d-flex justify-center align-center text"
        :class="$vuetify.rtl? 'ar': 'en'"
      >
        <v-text-field
          class="myTextField"
          solo-inverted
          dense
          filled
          hide-details
          :label="item"
          background-color="#fff"
        >
        </v-text-field>
        <v-btn class="myBtn">{{ $t("Subscribe")}}</v-btn>
      </v-col></v-row
    >
  </section>
</template>
<script>
export default {
    data () {
        return {
           item : this.$t("Enter Your Email")
        }
    },
    computed: {
    items() {
      return [
        {
          title: this.$t(
            "Enter Your Email"
          ),

          
        },
      
       
        
      ];
    },
  },
}
</script>
<style scoped>
.back {
  background: url("@/assets/images/blog/eager.svg");
  height: 300px;
}
.titel-1 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-30) / var(--unnamed-line-spacing-30)
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: center;
  font: normal normal bold 30px/30px Poppins;
  letter-spacing: 0px;
  opacity: 1;
  color: var(--unnamed-color-fab120);
}
.mark {
  color: #fff;
}
.desc {
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-30) /
    var(--unnamed-line-spacing-40) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
  text-align: center;
  font: normal normal normal 30px/40px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}

@media (max-width: 900px) {
  .back {
    background: url("@/assets/images/blog/g4.png");
    height: 163px;
  }
  .titel-1 {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-bold) var(--unnamed-font-size-16) / 6px
      var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    text-align: center;
    font: normal normal bold 16px/6px Poppins;
    letter-spacing: 0px;
    opacity: 1;
  }
  .desc {
    margin: 0 auto;
    width: 64%;
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-normal) var(--unnamed-font-size-14) /
      var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-ffffff);
    text-align: center;
    font: normal normal normal 14px/25px Poppins;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
  }
}
</style>
<style>
.text .v-text-field > .v-input__control > .v-input__slot > .v-text-field__slot {
  text-align: center;
}
.text
  .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
  > .v-input__control
  > .v-input__slot {
  
  border-radius: unset;
  min-height: 48px;
  justify-content: center;
}
.en .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
  > .v-input__control
  > .v-input__slot {
    border-top-left-radius: 10px !important;
  border-bottom-left-radius: 10px !important;
}
.ar .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
  > .v-input__control
  > .v-input__slot{
    border-top-right-radius: 10px !important;
  border-bottom-right-radius: 10px !important;
  }
.text .v-text-field--filled.v-input--dense.v-text-field--single-line .v-label,
.v-text-field--full-width.v-input--dense.v-text-field--single-line .v-label {
  height: 100%;
  top: 10%;
  width: 100%;
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-20) /
    var(--unnamed-line-spacing-40) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-2852a0);
  text-align: center;
  font: normal normal normal 20px/40px Poppins;
  letter-spacing: 0px;
  color: #2852a0;
}
.text .v-btn:not(.v-btn--round).v-size--default {
  text-transform: capitalize;
  height: 48px;
  background: #fab120 0% 0% no-repeat padding-box;
  
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-20) /
    var(--unnamed-line-spacing-40) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
  text-align: center;
  font: normal normal normal 20px/40px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}
.en .v-btn:not(.v-btn--round).v-size--default{
  border-radius: 0px 10px 10px 0px;
}
.ar .v-btn:not(.v-btn--round).v-size--default{
  border-radius: 10px 0px 0px 10px;
}
.text .theme--light.v-text-field--solo-inverted.v-input--is-focused > .v-input__control > .v-input__slot input {
    color: black;
}
@media (max-width: 900px) {
  .en .v-btn:not(.v-btn--round).v-size--default {
    border-radius: 0px 10px 10px 0px;
  }
  .ar .v-btn:not(.v-btn--round).v-size--default {
    border-radius: 10px 0px 0px 10px;
  }
  .text .v-btn:not(.v-btn--round).v-size--default {
    width: 25%;
    text-transform: capitalize;
    height: 48px;
    background: #fab120 0% 0% no-repeat padding-box;
    
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-normal) var(--unnamed-font-size-12) /
      var(--unnamed-line-spacing-40) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-ffffff);
    text-align: center;
    font: normal normal normal 12px/40px Poppins;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
  }
  .en .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
    > .v-input__control
    > .v-input__slot {
      border-top-left-radius: 10px !important;
    border-bottom-left-radius: 10px !important;
    }
    .ar .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
    > .v-input__control
    > .v-input__slot {
      border-top-right-radius: 10px !important;
      border-bottom-right-radius: 10px !important;
    }
  .text
    .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
    > .v-input__control
    > .v-input__slot {
    
    border-radius: unset;
    min-height: 48px;
    justify-content: center;
    width: 100%;
  }
  .text .v-text-field--filled.v-input--dense.v-text-field--single-line .v-label,
  .v-text-field--full-width.v-input--dense.v-text-field--single-line .v-label {
    height: 100%;
    top: 10%;
    width: 100%;
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-normal) var(--unnamed-font-size-12) /
      var(--unnamed-line-spacing-40) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-2852a0);
    text-align: center;
    font: normal normal normal 12px/40px Poppins;
    letter-spacing: 0px;
    color: #2852a0;
    opacity: 1;
  }
  .col-text .col {
    max-width: 67%;
    padding-bottom: 10px;
    padding-top: 10px;
  }
}
</style>