<template>
  <div>
    <div
      class="rn-page-title-area pt--120 pb--190 bg_image bg_image--4"
      data-black-overlay="5"
    >
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="text-start rn-page-title pt--100">
              <h2
                :class="
                  $vuetify.breakpoint.name == 'lg'
                    ? 'heading-title'
                    : 'text-xl-h4'
                "
              >
                {{ idOfRoute.title }}
              </h2>
              <p v-html="idOfRoute.sub_title"></p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="rn-blog-details pt--50 pb--20 bg_color--1">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="inner-wrapper">
              <div class="inner" style="padding: 0">
                <p v-html="idOfRoute.p1"></p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="rn-blog-details pt--50 pb--20 bg_color--1 bg-gray">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="inner-wrapper">
              <div
                class="flex-wrap blog-single-list-wrapper d-flex pb--20"
                v-if="idOfRoute.p2_title"
              >
                <div class="pe-12">
                  <img
                    src="@/assets/images/blog/blog-07.jpg"
                    alt="BLog Images"
                  />
                </div>
                <div class="content">
                  <h4 class="heading-title">
                    {{ idOfRoute.p2_title }}
                  </h4>
                  <p v-html="idOfRoute.p2"></p>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div
      class="rn-blog-details pt--50 pb--20 bg_color--1"
      v-if="$route.params.id == 'ready-made-products'"
    >
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="inner-wrapper">
              <div class="inner" style="padding: 0">
                <div>
                  <course-categories />
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div>
      <div
        class="rn-blog-details pt--50 pb--20 bg_color--1"
        :class="$route.params.id == 'ready-made-products' ? 'bg-gray' : ''"
      >
        <v-container>
          <v-row>
            <v-col cols="12">
              <div class="inner-wrapper">
                <div class="inner" style="padding: 0">
                  <div
                    class="flex-wrap blog-single-list-wrapper d-flex pb--20"
                    v-if="idOfRoute.p3_title"
                  >
                    <div class="content">
                      <h4 class="heading-title">
                        {{ idOfRoute.p3_title }}
                      </h4>
                      <p v-html="idOfRoute.p3"></p>
                    </div>
                    <div class="ps-12">
                      <img
                        src="@/assets/images/blog/blog-07.jpg"
                        alt="BLog Images"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <div
        class="rn-blog-details ptb--50 pb--20 bg_color--1"
        v-if="$route.params.id == 'ready-made-products'"
      >
        <v-container>
          <v-row>
            <v-col cols="12">
              <div class="inner-wrapper">
                <div class="inner" style="padding: 0">
                  <div>
                    <div>
                      <h2 class="text-center pb--20" color="--color-primary">
                        {{ idOfRoute.learkhanaLMS }}
                      </h2>
                      <lms-categories />
                    </div>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <div class="rn-blog-details pt--50 pb--20 bg_color--1 bg-gray">
        <v-container>
          <v-row>
            <v-col cols="12">
              <div class="inner-wrapper">
                <div class="inner" style="padding: 0">
                  <div
                    class="flex-wrap blog-single-list-wrapper d-flex pb--20"
                    v-if="idOfRoute.p4_title"
                  >
                    <div class="pe-12">
                      <img
                        src="@/assets/images/blog/blog-07.jpg"
                        alt="BLog Images"
                      />
                    </div>
                    <div class="content word-break">
                      <h4 class="heading-title">
                        {{ idOfRoute.p4_title }}
                      </h4>
                      <p v-html="idOfRoute.p4"></p>
                      <v-expansion-panels
                        focusable
                        v-if="$route.params.id == 'ready-made-products'"
                      >
                        <v-expansion-panel>
                          <v-expansion-panel-header>
                            <h4
                              class="mb-0"
                              style="font-size: 16px"
                              v-html="idOfRoute.p4_expand"
                            ></h4>
                          </v-expansion-panel-header>
                          <v-expansion-panel-content>
                            <br />
                            <div
                              class="text-start ps-12"
                              style="font-size: 17px"
                              v-html="idOfRoute.p4_expand_ul"
                            ></div>
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                      </v-expansion-panels>
                    </div>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <div class="rn-blog-details pt--50 pb--20 bg_color--1">
        <v-container>
          <v-row>
            <v-col cols="12">
              <div class="inner-wrapper">
                <div class="inner" style="padding: 0">
                  <div
                    class="flex-wrap blog-single-list-wrapper d-flex pb--20"
                    v-if="idOfRoute.p5_title"
                  >
                    <div class="content word-break">
                      <h4 class="heading-title">
                        {{ idOfRoute.p5_title }}
                      </h4>
                      <p v-html="idOfRoute.p5"></p>
                    </div>
                    <div class="ps-12">
                      <img
                        src="@/assets/images/blog/blog-07.jpg"
                        alt="BLog Images"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <div
        class="service-area bg_color--5 plr--120"
        v-if="$route.params.id == 'custom-blended-learning-journeys'"
      >
        <div class="service-white-wrapper pt--50 pb--100">
          <v-row class="service-main-wrapper">
            <v-col cols="12">
              <div class="text-center section-title">
                <h2 class="head-title">
                  Mix and match for the ultimate experience!
                </h2>
                <v-icon color="black" size="100">mdi-plus</v-icon>
              </div>
            </v-col>

            <!-- Start Single Service  -->
            <v-col
              algin="center"
              lg="6"
              md="6"
              sm="6"
              cols="12"
              v-for="(service, i) in services"
              :key="i"
              class="pb--10"
            >
              <v-card
                class="service service__style--2 text-left"
                :class="`bg-color-card-${i}`"
                height="100%"
              >
                <div class="">
                  <h2 class="head-title">{{ service.title }}</h2>
                  <div d class="content">
                    <p v-html="service.desc"></p>
                  </div>
                </div>
              </v-card>
            </v-col>
            <!-- End Single Service  -->
          </v-row>
        </div>
      </div>
      <div v-if="$route.params.id == 'ready-made-products'" align="center" class="pb--50">
        <h4 class="heading-title">New mission unlocked.</h4>
        <h6>Meet the needs of your training in a fun way!</h6>
        <simulations />
      </div>
      <div
        class="rn-finding-us-area attacment-fixed rn-finding-us ptb--120 bg_color--1 bg_image bg_image--18"
        data-black-overlay="5"
        v-if="idOfRoute.title_of_cta"
      >
        <v-container>
          <v-row>
            <v-col lg="8" offset-lg="2">
              <div class="inner">
                <div class="content-wrapper">
                  <div class="text-center content white">
                    <h4 class="theme-gradient">{{ idOfRoute.title_of_cta }}</h4>
                    <p>
                      {{ idOfRoute.desc_of_cta }}
                    </p>
                    <router-link class="btn-default" to="/contact"
                      >Let's Talk</router-link
                    >
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
import feather from "feather-icons";
import CourseCategories from "../../components/course-categories/CourseCategories.vue";
import Simulations from "../../components/simulations/Simulations.vue";

export default {
  components: { CourseCategories, Simulations },
  computed: {
    idOfRoute() {
      return this.data[this.$route.params.id];
    },
  },
  data() {
    return {
      services: [
        {
          title: "Educational videos",
          desc: `Learn with educational videos that are easy to understand, engaging, and effective. Bite-sized content allows learners to digest the material at their own pace and apply the knowledge in instructor-led sessions.
                <br />                <br />
                With our educational videos, learners can stay focused, motivated, and up-to-date with the latest topics and trends.
          `,
        },
        {
          title: "E-Learning",
          desc: `Transform your employee training and development with eLearning activities that captivate and motivate. Give your employees the tools they need to achieve their goals and reach their full potential with engaging and impactful eLearning experiences.
                 <br /><br />
                Unlock the power of eLearning and its potential to enhance your employees’ learning journey.
          `,
        },
      ],
      data: {
        "custom-self-based-learning": {
          title: "Custom self-based learning",
          sub_title: `<strong>Are you in search of a learning solution that is both budget-friendly and tailored to your specific needs?</strong><br/>
          <br /> Look no further!`,
          p1: `<span>Our customized self-based learning solutions are the perfect choice for you!</span>
                <br />
                <br />
                  <span>At Learnkhana, we use our expertise in designing effective learning solutions to provide you with a personalized journey that:</span><br />
                 <ul class="ps-12">
                      <li ><span>&nbsp;Can be provided to a large number of learners simultaneously</span></li>
                      <li ><span>&nbsp;Standardizes the learning experience for all learners</span></li>
                      <li ><span>&nbsp;Satisfies your needs through a tailored design</span></li>
                      <li ><span>&nbsp;Offers different formats according to your preference</span></li>
                  </ul>
                  <p ><span>No matter the size of your budget, our customized self-based learning solutions are the perfect fit for you!</span></p>

                  <p >Check our different formats below.<br>
                  <span>And learn more about how we can help you create an effective learning experience for your employees or clients</span><span>:</span></p>`,
          p2_title: "Interactive eLearning",
          p2: `Take your employees on an interactive eLearning journey designed to engage and impact their performance!
                  <br/>
                  <br/>
                  Our eLearning modules will provide your staff with an immersive experience that includes interactive presentations, game elements, infographic charts, quizzes, and assessments.
                  <br/>
                  <br/>
                  Our modules are designed to challenge, inspire and motivate your employees, giving them the skills and knowledge needed to succeed.
                  <br/>
                  <br/>
                  With our eLearning, your employees will be equipped with the tools and resources to enhance their performance and reach their full potential.`,
          p3_title: "Video-based Journeys",
          p3: `Searching for a learning solution that includes a human factor, yet is self-based and customized to your needs?
                  <br/>
                  Lights, camera, action…
                  <br/>
                  <br/>
                  Who said self-based is devoid of human interaction?
                  <br/>
                  <br/>
                  Our customized video-based modules are a blend of engaging videos and complementary activities that aid the learning process.
                  <br/>
                  <br/>
                  With learning retention-enhancing visuals, professional editing and camera angles, role plays, case studies, storytelling, quizzes and assessments, and job aids, our modules provide the perfect platform for learning success.`,
          p4_title: "Screencast Videos",
          p4: `Do you need engaging video tutorials that explain step-by-step how to use a certain program?
                  <br/>
                  <br/>Do you want to teach your employees about the company’s systems and how to use them?
                  <br/>
                  Then LearnKhana’s customized screencasts are the perfect fit for you!
                  <br/>
                  <br/>
                  Our screencast modules are video tutorials that are ideal for delivering program/system-related content.
                  <br/>
                  <br/>
                  As they engage the learner with smooth transitioning between screens and visuals that aid the learning process.`,
          p5_title: "Animated Videos",
          p5: `Do you want to create educational videos with an edge?
                  <br />
                  <br />
                  Videos that are unique to your brand/company?
                  <br />
                  <br />
                  Add a fun factor to your educational videos through animation!
                  <br />
                  <br />
                  Whether you want the characters to be relatable and realistic, or imaginary and out of this world!
                  <br />
                  <br />
                  We’ve got you covered, engage your employees with your content using compelling storylines and unique characters, that are animated to the style of your choice.`,
          title_of_cta: "Not sure which service is right for you?",
          desc_of_cta:
            "We are here to help! Just fill out this form to schedule your free call where we will guide you to your best package.",
        },
        "custom-blended-learning-journeys": {
          title: "Custom Blended Learning Journeys",
          sub_title: `Mix To Match Your Learner Needs!`,
          p1: `Are you looking for a custom blended learning journey that perfectly matches the needs of your learners?&nbsp;
                  <br />
                  Are you unsure of how to blend digital and traditional face-to-face training methods?&nbsp;
                  <br /><br />
                  LearnKhana can help you navigate these decisions and create the ideal learning mix for your learners.&nbsp;
                  <br /><br />
                  Our L&amp;D experts will work with you to find the right blend of delivery techniques that will maximize the ROI and satisfaction of your training program.&nbsp;
                  <br /><br />
                  Get the best of both worlds with LearnKhana&apos;s blended learning solutions and achieve the best results for your training.`,
          p2_title: "Classroom Instructor-Led training",
          p2: `
          If you're looking for an engaging, interactive, and effective way to train your team, consider classroom instructor-led training!
          <br /><br />
          With this option, you can bring your team together in one physical place and benefit from personalized, face-to-face instruction.
          <br /><br />
          Your instructor-led training package will include all of the necessary materials and resources, including a Facilitator Guide, Participant Guide, PowerPoint presentation, and any other handouts.
          <br /><br />
          Our experienced instructors will ensure that everyone in your group gets the most out of the training experience.
          `,
          p3_title: "Virtual Instructor Led training",
          p3: `
          If you want to create a collaborative learning experience for your remote employees or team, then virtual Instructor Led Training (VILT) may be the perfect option for you!
          <br /><br />
          With VILT, you can deliver engaging and interactive training sessions, no matter where your learners are located.
          <br /><br />
          We will provide you with a Facilitator Guide, Participant Guide, PowerPoint presentation, and any other digital aids you may need to ensure your learners have an effective learning experience.
          <br /><br />
          Let's get started today and create an immersive learning experience for all your remote learners!
          `,

          p4_title: "Customized simulation",
          p4: `
          Do you need a customized simulation to create a learning environment that's tailored to your exact requirements?
          <br />
          Our custom simulations are designed to replicate real-world work and challenges so that participants can put their knowledge and skills into practice through physical, hands-on activities.
          <br /><br />
          Our custom simulation package includes everything you need to get started, including:
          <ul  class="ps-12">
            <li>Facilitator Guide</li>
            <li>Game Cards & Boards</li>
            <li>Handouts & Sheets</li>
            <li>PowerPoint Slides</li>
            <li>Any other essential elements</li>
          </ul>
          We understand how important it is to create the perfect learning environment for your participants, and our customizable simulations are the perfect solution.
          `,

          p5_title: "Reinforcing Tools",
          p5: `
          Do you want to ensure that your training sessions are effective and that your employees retain the knowledge and skills they've acquired?
          <br />  <br />
          Reinforcing the delivered training with post-training activities is the best way to do so. With games, quizzes, short videos, messages, and more.
          <br />  <br />
          We can help you create an environment where your employees can practice their newly acquired skills in a safe and secure way, ensuring that up to 75% of the knowledge gained is retained!
          <br />  <br />
          Don’t let your training efforts go to waste – Learn more about how we can help you reinforce your training and ensure better knowledge and skill retention.

          `,
        },
        "ready-made-products": {
          title: "Ready-made products",
          sub_title: `Finding the perfect training solution for your needs has never been simpler! <br />`,
          p1: `<span >With LearnKhana&apos;s extensive library of ready-made products, you can select from over 100+ courses and simulations to suit your specific requirements.&nbsp;</span>
          <br /><br />
                <span >Easily manage and track the progress of your learners through our intuitive Learning Management System (LMS).&nbsp;</span>
                <br /><br />
                <span >Get ready for success - take advantage of LearnKhana&apos;s ready-made products today!</span>`,
          p2_title: "LK Video Library",
          p2: `Are you looking for a specific course topic? 
                <br /><br />
                Check out our extensive video library for 100+ self-paced video training programs in various fields to help you stay ahead of the learning curve. 
                <br /><br />
                Not only are these programs designed to satisfy your learning needs, but each one also comes enhanced with job aids and assessments to further enhance your learning experience. 
                <br /><br />
                So what are you waiting for? 
                <br /><br />
                Find the course that’s right for you
                            today!
                `,
          p3_title: "LK Learning Management System",
          p3: `Tracking your teams’ development is just a few clicks away!
              LearnKhana’s Learning Management System (LMS) is a hassle-free way to follow up with your employees’ development.
                <br />   <br />
              What is a Learning Management System (LMS)?
              <br />   <br />
              An LMS is a software that aids the administration, documentation, tracking, reporting, and delivery of educational content.`,
          learkhanaLMS: "Why LearnKhana LMS Is Different?",
          p4_title: "LearnKhana Simulations",
          p4: `Tired of boring old training methods? <br />
            Make learning fun with LearnKhana’s ready-made simulations! 
            <br /><br />
            Training simulations are designed to mimic real-life work and situations. 
            <br /><br />
            With simulations, you can expect better knowledge and skill retention, improved problem-solving skills, increased motivation, and the ability to apply what was learned in the work environment. 
            <br /><br />
            Try LearnKhana's simulations today and make training more enjoyable for your employees! <br />
            `,
          p4_expand: `<b>Each simulation includes:</b>`,
          p4_expand_ul: `<ul>
              <li>Facilitator Guide</li>
              <li>Game Cards & Boards</li>
              <li>Handouts & Sheets</li>
              <li>PowerPoint Slides</li>
              <li>Any other essential elements</li>
            </ul>`,
        },
        "l&d-consultancy": {
          title: "L&D Consultancy",
          sub_title: `<strong>Do you want to develop your human capital, but don't know where to begin?</strong><br/><br/>
            Look no further than LearnKhana's experienced team.`,
          p1: `Whether you know exactly what you want or you&apos;re completely in the dark, LearnKhana&rsquo;s diverse team of L&amp;D professionals can show you the way!
                  <br /><br />
                  LearnKhana&rsquo;s team has a variety of expertise in the learning and development field with hands-on experience in localizing the best international practices to suit the MENA region!&nbsp;
                  <br /><br />
                  With hundreds of project experiences for clients all over Egypt and Golf under their belt, LearnKhana&rsquo;s team can identify and satisfy your needs through innovative solutions.&nbsp;`,
          p2_title: "L&D Strategy and Roadmap.",
          p2: `Creating a learning and development strategy aligns your human capital’s capabilities, skills, and competencies with your company’s needs and business goals, and helps you track their progress along the way with distinctive key performance indicators.
                 <br/><br />
                  Utilize LearnKhana’s expertise to set the strategy that is right for you!`,
          p3_title: "Assessing Learning Needs",
          p3: `Unsure of your learning needs?      <br/><br />
                    Let LearnKhana's Learning Need Assessment service help you bridge the gap between your current skills, knowledge, and abilities and what you desire.
                   <br/><br />
                    Our comprehensive assessment service will provide you with the insights you need to develop an effective learning plan. With our expert guidance, you can take the necessary steps to sharpen your skills and reach your goals.`,
          p4_title: "Measuring Learning Impact",
          p4: `Measure the impact of your employee development efforts with greater accuracy and precision. Assess the effectiveness of your training designs and evaluate their post-training impact to gain valuable insights into your program's success.
                   <br/><br />
                  With the right metrics in place, you can confidently measure the impact of your learning initiatives and make informed decisions to continuously improve your employee development program.
          `,
          p5_title: "E-learning Transformation",
          p5: `Are you looking for a way to train experience for all your employees, but don't know where to start?<br/><br />
                Let the experts at LearnKhasform your traditional training programs and take them to the digital world.
               <br/><br />
                Trying to create a unified learning guide for you on your digital transformation journey, where our team can provide the answers you need on why, when, and how to begin the process.
               <br/><br />
                With our help, you can ensure a smooth transition and maximize the benefits of a digital training program.`,
          title_of_cta:
            "Let us help you take the first step on your journey to success!",
          desc_of_cta: "",
        },
      },
    };
  },
};
</script>
<style scoped>
.bg-gray {
  background: rgb(231, 231, 231) !important;
}
.bg-color-card-0 {
  background: linear-gradient(to left, #fff 0, rgb(204, 204, 204) 100%);
}
.bg-color-card-1 {
  background: linear-gradient(to right, #fff 0, rgb(204, 204, 204) 100%);
}
</style>
