<template>
  <v-expansion-panels focusable v-model="panel">
    <v-expansion-panel v-for="(lms, i) in lmsOfLearnkhana" :key="i">
      <v-expansion-panel-header>
        <h4 class="mb-0 color-w">{{ lms.name }}</h4>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <br />
        <div class="text-start" style="font-size: 17px" v-html="lms.desc"></div>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script>
export default {
  data: () => ({
    panel: 0,
    length: 3,
    window: 0,
    lmsOfLearnkhana: [
      {
        name: "Fully Customizable",
        desc: `<ul class="ps-12">
          <li>Add your organization's logo</li>
          <li>Set a unique URL with your organization name</li>
          <li>Customize user groups and authorization levels based on your Organizational Structure</li>
          </ul>`,
      },
      {
        name: "Hassle free implementation",
        desc: `<ul class="ps-12"><li>Get attractive designs without coding</li>
                  <li>Enrich your content with interactive videos and external resources</li>
                  <li>Secured and User Friendly></li> </ul>`,
      },
      {
        name: "Smoothly Manageable",
        desc: `<ul class="ps-12"><li>Create personalized and collective learning paths</li>
                  <li>Set deadlines and monitor progress in a real-time</li>
                  <li>Track learners’ learning and review assessment results</li>
                  <li>Assign and Delete Courses</li>
                  <li>Extract various reports at user, team, and organization level</li> </ul>`,
      },
      {
        name: "Engaging “Gamified” Learning Experience",
        desc: `<ul class="ps-12"><li>Create a competitive learning environment through “<s>Rewarding</s> Badges” and “Top Performer” Lists</li>
                  <li>Allow Learners to share their own comments and inquiries through the “Course Discussion Board”</li>
                  <li>Enrich your courses with Engaging tools such as “Interactive Buttons, assessments, assignments and external resources”</li> </ul>`,
      },
    ],
  }),
};
</script>
<style lang="scss">
// .v-application--is-ltr .v-expansion-panel-header {
//   
//   background: rgb(184, 184, 184) !important;;
//   // color: white;
// }
.color-w {
  // color: white !important;
}
// .v-expansion-panel--active > .v-expansion-panel-header--active .v-expansion-panel-header__icon:not(.v-expansion-panel-header__icon--disable-rotate) .v-icon {
//     transform: rotate(-180deg);
//     color: white;
// }

// .theme--light.v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon {
//     color: white;
// }
</style>
