<template>
  <div class="ptb--20 bg-color">
    <title-section
      :stick="true"
      :smallTitle="smallTitle"
      :title="title"
      :subTitle="subTitle"
    ></title-section>
    <div class="rn-testimonial-area pt--50">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="rn-testimonial-content">
              <v-row align="center">
                <v-col md="6" sm="12" cols="12" class="tesimonail-conent-inner">
                  <v-tabs-items show-arrows-on-hover v-model="tab">
                    <v-tab-item
                      v-for="(item, i) in testimonialContent"
                      :key="i"
                    >
                      <v-card flat>
                        <v-card-text>
                          <div class="description mt_dec--20">
                            <p v-html="item.description">
                            </p>
                          </div>
                          <div class="author-info">
                            <h6>
                              <span>{{ item.name }}</span> -
                              {{ item.designation }}
                            </h6>
                          </div>
                          <div class="author-info">
                            <h6>
                              <strong>{{ item.desc }}</strong>
                            </h6>
                          </div>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>
                  </v-tabs-items>
                </v-col>
                <v-col md="6" sm="12" cols="12" class="mt_md--40 mt_sm--40">
                  <v-tabs v-model="tab" centered hide-slider center-active>
                    <v-tab
                      v-for="item in tabItems"
                      :key="item.id"
                      :ripple="false"
                    >
                      <div class="thumb">
                        <img :src="item.src" alt="testimonial image" />
                      </div>
                    </v-tab>
                  </v-tabs>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      title: this.$t("What Do Our Clients Says"),
      subTitle: this.$t("About Us"),
      smallTitle: this.$t("TESTIMONIAL"),
      testimonialContent: [
        {
          name: this.$t("Mariam El Masri"),
          description:
            this.$t("It was refreshing to work with a team of professionals who truly partnered with us to co-design and create the content we wanted. It's refreshing to find L&D professionals who understand the science of human learning and work following international standards. Additionally, the team was very open and receptive to feedback throughout the journey, always accommodating our requests. We would certainly do it again and again."),
          designation: this.$t("Technical Director."),
          desc: this.$t("Quest Human Development & Change Agents"),
        },
        {
          name: this.$t("Yomna Makky"),
          description:
            this.$t("Besides how unique their provided solutions are, how professional they are... <br/>We actually got more than that. The 'co-design' approach they adopted in handling our needs was a positive indicator that they care & truly listen to their clients and are keen on fulfilling a personalized and customized solution."),
          designation: this.$t("Solution Architect."),
          desc: this.$t("Quest Human Development & Change Agents"),
        },
        {
          name: this.$t("Mohammed Issa"),
          description:
            this.$t("Highly professional, very committed, and creative enough to design your idea in the training to be a real project with a high level of engagement and efficacy."),
          designation: this.$t("Regional Education Manager."),
          desc: this.$t("Masimo International SARL"),
        },
        {
          name: this.$t("Mahmoud Abdelal"),
          description:
            this.$t("One of the quick, courteous, and very helpful companies we have been working with in the material designing field, for the last two years. The team was very supportive and exceeded our expectations in providing high-quality and creative training tools, they showed a great level of dedication and flexibility and they still do, they worked hand to hand with us and they really added a great value that was clearly reflected in our client’s deliverables.<br/>We are definitely looking forward to more collaboration between our company Quick-Wins and Learnkhana."),
          designation: this.$t("Senior Consultant."),
          desc: this.$t("Quick-Wins Consulting and Training"),
        },
        {
          name: "Mahmoud ElSayed",
          description:
            "I would like to thank LearnKhana for the Online Facilitation Train Training program that they delivered to Masr ElKheir Organization. It was a great learning experience that helped me and the training team to transform face-to-face training into Online facilitation. In addition To that LearnKhana team provided 1-1 to each trainer to ensure all learning outcomes are met. ",
          designation: "HR Senior Specialist.",
          desc: "Masr Elkheir",
        },
        {
          name: this.$t("Ahmed Yamany"),
          description:
            this.$t("Learnkhan is a very Potential Partner, we don't consider them as a training provider as their contributions & work professionalism are really obvious. we worked together in many strategic projects and with many methods (ILT, E-learning, & Blended Learning)"),
          designation: this.$t("L & D Manager."),
          desc: this.$t("B.TECH For Trade & Distribution"),
        },
        {
          name: this.$t("Marwa Elarif"),
          description:
            this.$t("My experience with Learning Lab was very successful! The assignment went very smoothly, they showed a great deal of flexibility and professionalism in meeting our requirements."),
          designation: this.$t("Capacity Development Advisor."),
          desc: this.$t("GIZ"),
        },
      ],

      tabItems: [
        {
          id: 1,
          src: require("@/assets/images/client/testimonial-1.jpg"),
        },
        {
          id: 2,
          src: require("@/assets/images/client/testimonial-2.jpg"),
        },
        {
          id: 3,
          src: require("@/assets/images/client/testimonial-3.jpg"),
        },
        {
          id: 4,
          src: require("@/assets/images/client/testimonial-4.jpg"),
        },
        {
          id: 5,
          src: require("@/assets/images/client/testimonial-5.jpg"),
        },
        {
          id: 6,
          src: require("@/assets/images/client/testimonial-9.jpg"),
        },
        {
          id: 7,
          src: require("@/assets/images/client/testimonial-7.jpg"),
        }
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.bg-color {
  background-image: url("@/assets/images/ourwork/learnkhana-website-artboards_06.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>