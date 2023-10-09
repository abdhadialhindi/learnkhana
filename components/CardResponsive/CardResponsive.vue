<template>
  <section>
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <div
            class="d-flex justify-center flex-column align-center width-title"
          >
            <h1 class="titel-1">
              <span class="word">{{$t("News")}}</span>{{$t("and Work insight")}}
            </h1>
            <img
              src="@/assets/images/ourwork/font-img.png"
              alt=""
              class="img"
            />
            <p class="desc">
              {{$t("We’ve got everything you need to deliver flexible and effective skills development for your entire workforce.")}}

            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="mt-10">
      <v-row justify="center" class="media">
        <v-col cols="12" v-for="(item, index) in items" :key="index">
          <div
            class="card-responsive d-flex justify-end align-end mb-10  pe-5"
            :style="`background-image:url(${item.src})`"
          >
            <div class="overlay"></div>
            <div class="mt-2 height ">
              <div class="d-flex justify-end button-edit">
              <v-btn width="71" height="24" color="primary" class="button-1"
                ><span class="button-new"><router-link :to="localePath('/news')"> {{$t("news")}} </router-link></span>
              </v-btn>
            </div>
            <div class="px-3">
              <p class="desc-card">{{ item.title }}</p>
              <v-divider inset class="divider"></v-divider><v-btn text class="button-text" width="79" height="20">
                <router-link :to="localePath('/news')"> {{ $t('read more') }}</router-link>
               </v-btn>
            </div>
            </div>

          </div>
        </v-col>
      </v-row>
    </v-container>
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
    next() {
      this.onboarding =
        this.onboarding + 1 === this.length ? 0 : this.onboarding + 1;
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1;
    },
  },
};
</script>
<style scoped>
.titel-1 {
  font-size: 18px;
  font-weight: bold;
  color: var(--unnamed-color-2852a0);
  line-height: 20px;
}
.word {
  color: var(--unnamed-color-fab120);
}
.img {
  position: relative;
  right: 8%;
  top: 6px;
}
.desc {
  color: #2c2c2c;
  font-size: 16px;
  font-weight: 500 !important;
  width: 85%;
  margin-top: 18px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
.card-responsive {
  background-size: cover;
  position: relative;
  box-shadow: 0px 3px 6px #00000012;
  border-radius: 40px 40px 0px 0px;
  opacity: 1;
  height: 241px;
  background-size: contain;

}
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(#ffffff2c, #ffffff50, #2852a0e0);
  border-radius: 40px 40px 0px 0px;
  box-shadow: 0px 3px 6px #00000012;
  opacity: 1;
}
.button-1 {
  border-radius: 15px 6px 15px 6px !important;
}
.button-new {
    text-transform: capitalize;
  font-size: 9px;
  color: var(--unnamed-color-ffffff);
}
.desc-card {
  position: relative;
  z-index: 13;
  color: var(--unnamed-color-2852a0);
  font-size: 14px !important;
  line-height: 22px !important;
}
.button-text {
    text-transform: capitalize;
    color: var(--unnamed-color-2852a0);
    font-weight: normal ;
}
.divider {
  display: none;
    width: 239px;
    border: 1px solid #FFFFFF;
    max-width: none;
}
.height {
  height: 60%;
  width: 100%;
  border-radius: 0px 6px 0px 0px;
  background-image: linear-gradient( #d6dbe46c,#FFFFFF94);
  box-shadow: 0px 3px 6px #00000012;
border-radius: 0px 6px 0px 0px;
transition: linear 0.1s;
}
.card-responsive:hover .height{
  box-shadow: 0px 3px 6px #00000012;
  border-radius: 40px 40px 0px 0px;
  height: 100%;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}
.card-responsive:hover {
  padding-left: 0px !important;
  padding-right: 0px !important;
  background-size: cover;
}
.card-responsive:hover .button-edit {
  justify-content: flex-start !important;
}
.card-responsive:hover .button-text {
  font-weight: bold;
}
.card-responsive:hover .divider {
  display: block;
  margin-left: 0px;
  margin-bottom: 10px;
}
@media (max-width:344px) {
  .height {
    height: 75%;
  }
}
</style>
