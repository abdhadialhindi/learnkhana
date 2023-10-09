<template>
  <div>
    <div class="text-center">
      <div class="about">
        <div class="container">
          <span class="text-center small_title bold" v-if="smallTitle">{{
            smallTitle
          }}</span>
          <h2 :class="'text-center ' + textColor" v-if="title">
            <span v-if="dashes"  style="color:white !important;">{{ dashes }}</span>
            {{ title }}
            <span v-if="dashes" style="color:white !important;">{{ dashes }}</span>
            </h2>
          <h2 class="text-center heading-title" :color="textColor" :style="{margin:0, color: textColor +'!important'}" v-if="subTitle">
            <span class="word">{{ wordColor }}</span> {{ subTitle }}
          </h2>
          <div v-if="stick"  :class="$route.path=='/article' ? 'stick':'stick-horizontal'"></div>
        </div>
      </div>
      <p class="'description ptb--10'" :style="{color: descColor +'!important', fontWeight: fontWeight +'!important'}">
        {{ desc }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    dashes: { type: String, default: "" },
    smallTitle: { type: String, default: "" },
    title: { type: String, default: "" },
    subTitle: { type: String, default: "" },
    desc: {
      type: String,
      default: "",
    },
    wordColor : {type: String,default: ""},
    stick: { type: Boolean, default: false},
    textColor: { type: String, default: "" },
    descColor: { type: String, default: "" },
    fontWeight: { type: String, default: "" },

  },
};
</script>
<style scoped>
.container {
  margin: 0 auto;
  width: 100%;
  text-align: center;
  padding: 5px;
  color: var(--color-primary);
}
.word {
  color: var(--unnamed-color-fab120) !important;
}

.container h2 {
  color: var(--color-primary);
}
.small_title {
  font-weight: bold;
  color: var(--color-secondary) !important;
}
.description {
  justify-content: center;
  font-size: 25px !important;
  color: var(--unnamed-color-413f3f) !important;
}
.stick-horizontal {
  transform: translateX(15%);
margin: auto;
width: 50%;
height: 30px;
/* UI Properties */
background: transparent url('../../assets/images/stick-horizontal/1.svg') 0% 0% no-repeat padding-box;

}
.stick {
  margin: auto;
max-width: 100% ;
height: 30px;
/* UI Properties */
background: transparent url('../../assets/images/stick-horizontal/1.svg') 0% 0% no-repeat padding-box; 
}
@media (max-width:900px) {
  .stick {
    max-width: 90%;
  }
  .stick-horizontal {
    width: 80%;
    transform: translateX(0%);
  }
}
</style>
