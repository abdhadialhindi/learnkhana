<template>
  <div>
    <div
      class="rn-page-title-area pt--100 pb--100 bg_image bg_image--27"
      data-black-overlay="7"
    >
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="text-center blog-single-page-title pt--20" style="color: white">
              <h6 class="heading-title" style="color: white">
                {{ idOfRoute.title }}<br key="" />
              </h6>
              <h4 style="color: white">
                {{ idOfRoute.sub_title }}
              </h4>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="rn-blog-details pt--20 pb--20 bg_color--1">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="inner-wrapper">
              <div class="inner">
                <p v-html="idOfRoute.p1"></p>
                <div class="flex-wrap blog-single-list-wrapper d-flex">
                  <div class="pe-12">
                    <img src="@/assets/images/blog/blog-07.jpg" alt="BLog Images" />
                  </div>
                  <div class="content">
                    <h4 class="heading-title">
                      {{ idOfRoute.p2_title }}
                    </h4>
                    <p v-html="idOfRoute.p2"></p>
                  </div>
                </div>
                <h4 class="heading-title">{{ idOfRoute.p3_title }}</h4>
                <p class="mt--25 mt_sm--5" v-html="idOfRoute.p3"></p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    idOfRoute() {
      return this.data[this.$route.params.id];
    },
  },
  data() {
    return {
      data: {
        "a-cost-and-time-efficient-solution": {
          title: this.$t("A Cost and Time Efficient Solution!"),
          sub_title: this.$t("How a 3000-Employee Leading Trading and Manufacturing Company Improved Their LMS."),
          p1_title: "",
          p1: this.$t("One of our clients, a leading trading and manufacturing company with more than 3,000 employees, was seeking a way to enrich their LMS to develop their employees and utilize their platform to its maximum potential. But with a tight budget and limiting time constraints, they were struggling to find a solution that provides a variety of courses with their brand identity for their employees."),
          p2_title: this.$t("The motivational factor is crucial."),
          p2: this.$t("After a couple of consultation sessions, we tailored a solution according to their needs, which was providing them with several ready-made courses from LearnKhana’s library, and re-edit them to match their brand identity, while also producing new courses based on their needs and common market needs to be added to LearnKhana’s library, for them and other clients to choose from."),
          p3_title: "Higher course completion rates!",
          p3: this.$t("The company was extremely satisfied with the results, and the employees were more eager to open their platform and discover the new courses and develop their skills, which overall increased the company’s self-learning culture leading to higher course completion rates."),
        },
        "this-is-how-we-got-employees": {
          title: this.$t("This is how we got employees to actually read their code of conduct by using this simple strategy."),
          sub_title: ``,
          p1_title: "",
          p1: this.$t("One of our clients was struggling with engagement in their online code of conduct. The courses were text-heavy and their LMS supported video only MP4 format, which made it hard to use learning tools. <br/><br/> In addition, the company found that the vast majority of their employees were skipping the program overall. <br/><br/> It was hard to keep people engaged in our courses. The content was boring and the format was not interactive."),
          p2_title:
            this.$t("We created engaging content for their courses: custom illustrations and videos"),
          p2: this.$t("We decided to redevelop their courses with more engaging content. We worked with a team of designers to create custom illustrations and videos. <br/><br/>We worked so hard on the design and content of the videos. The characters were really special and customized."),
          p3_title:
            this.$t("The new courses were a hit with employees, with positive feedback and lower skipping rates!"),
          p3: this.$t("The new courses were well-received by employees. The feedback was positive and the skipping rates decreased by 70%. <br/><br/> We were able to upskill their employees with more engaging content."),
        },
        "this-is-how-we-got-employees": {
          title: this.$t("This is how we got employees to actually read their code of conduct by using this simple strategy."),
          sub_title: ``,
          p1_title: "",
          p1: this.$t("One of our clients was struggling with engagement in their online code of conduct. The courses were text-heavy and their LMS supported video only MP4 format, which made it hard to use learning tools. <br/><br/> In addition, the company found that the vast majority of their employees were skipping the program overall. <br/><br/> It was hard to keep people engaged in our courses. The content was boring and the format was not interactive. "),
          p2_title:
            this.$t("We created engaging content for their courses: custom illustrations and videos"),
          p2: this.$t("We decided to redevelop their courses with more engaging content. We worked with a team of designers to create custom illustrations and videos. <br/><br/> We worked so hard on the design and content of the videos. The characters were really special and customized. "),
          p3_title:
            this.$t("The new courses were a hit with employees, with positive feedback and lower skipping rates!"),
          p3: this.$t("The new courses were well-received by employees. The feedback was positive and the skipping rates decreased by 70%. <br/><br/> We were able to upskill their employees with more engaging content. "),
        },
        "learnKhana-wins-the-penn-wharton-innovation-fund-award": {
          title: this.$t("LearnKhana Wins The Penn Wharton Innovation Fund Award"),
          sub_title: this.$t("We are thrilled to announce that LearnKhana has won the Penn Wharton Innovation Fund Award!"),
          p1_title: "",
          p1: this.$t("This prestigious award seeks to fund startups with committed founders who are dedicated to bringing innovative products to market and who have a clear need for seed funding in order to achieve their goals."),
          p2_title: "",
          p2: this.$t("At LearnKhana, we are dedicated to providing a transformative learning experience to our global community of learners. We strive to be the most innovative and adaptive education platform in the industry, offering personalized and immersive learning experiences for learners of all ages and abilities. Our mission is to provide learners around the world with the tools they need to learn, create, and succeed."),
          p3_title: "",
          p3: this.$t("This award will help us to continue to build on our existing products and services, helping us to reach even more learners across the globe. With the Penn Wharton Innovation Fund’s support, we will be able to further develop our platform and expand our reach into new markets and communities. <br/><br/>  We are truly honored to have been selected to receive this award and excited to see what the future has in store for our team and our learners. <br/><br/> Thank you to the Penn Wharton Innovation Fund for their trust and support!"),
        },
        "penn-gse-alumni-startup": {
          title: this.$t("Penn GSE Alumni Startup, Learnkhana, Wins Prestigious Award!"),
          sub_title: ``,
          p1_title: "",
          p1: this.$t("The University of Pennsylvania’s Graduate School of Education (Penn GSE) is proud to announce that its alumni-founded startup, Learnkhana, has won the prestigious Upenn GSE Best Project 2019 award.'"),
          p2_title: "",
          p2: this.$t("The award recognizes Learnkhana’s mission to revolutionize the way education is delivered around the world. <br/><br/> Learnkhana is a platform which provides learners with personalized, interactive learning experiences. It uses a blend of video, audio, and text to engage learners and help them reach their educational goals."),
          p3_title: "",
          p3: this.$t("The award was judged on a number of criteria including innovation and impact on education, quality of the product and team, and potential for long-term success. <br/><br/> Learnkhana’s innovative approach to education has already helped over 1 million learners in over 50 countries around the world. The platform provides education in a variety of subjects, including math, science, history, and language. <br/><br/> The award is a testament to the hard work, dedication, and passion of the Learnkhana team and the impact they are making in the field of education. "),
        },
      },
    };
  },
};
</script>
<style scoped>


</style>
