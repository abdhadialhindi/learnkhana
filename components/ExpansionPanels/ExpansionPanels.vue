<template>
  <section>
    <SpacerProject></SpacerProject>
    <v-row justify="center">
      <div class="contain">
        <h1 class="titel-1">
          {{ $t("Why LearnKhana LMS Is ")
          }}<span class="span-1">{{ $t("Different?") }}</span>
        </h1>
        <img
          src="../../assets/images/stick-horizontal/1.svg"
          alt=""
          class="stick"
        />
      </div>
    </v-row>
    <v-row justify="center" class="mt-14 mb-5">
      <v-col sm="10" xs="10" md="7" lg="7" xl="7">
        <v-expansion-panels class="panel">
          <v-expansion-panel active-class="color">
            <v-expansion-panel-header class="header-panel">{{
              $t("Fully Customizable")
            }}</v-expansion-panel-header>
            <v-expansion-panel-content class="content">
              <div class="d-flex align-center margin-1">
                <img src="@/assets/images/icons/icon mobile.svg" alt="" class="me-3">
                <p class="desc">{{ $t("Add your organization's logo ") }}</p>
              </div>
              <div class="d-flex align-center margin-1">
                <img src="@/assets/images/icons/icon mobile.svg" alt="" class="me-3">
                <p class="desc">
                  {{ $t("Set a unique URL with your organization name") }}
                </p>
              </div>
              <div class="d-flex align-center margin-1">
                <img src="@/assets/images/icons/icon mobile.svg" alt="" class="me-3 mb-4">
                <p class="desc" style="line-height: 25px;">
                  {{
                    $t(
                      "Customize user groups and authorization levels based on your Organizational Structure"
                    )
                  }}
                </p>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
    <v-row justify="center" class="mt-14 mb-5">
      <v-col sm="10" xs="10" md="7" lg="7" xl="7">
        <v-expansion-panels class="panel">
          <v-expansion-panel active-class="color">
            <v-expansion-panel-header class="header-panel">{{
              $t("Hassle free implementation")
            }}</v-expansion-panel-header>
            <v-expansion-panel-content class="content">
              <div class="d-flex align-center margin-1">
                <img src="@/assets/images/icons/icon mobile.svg" alt="" class="me-3">
                <p class="desc-1">
                  {{ $t("Get attractive designs without coding ") }}
                </p>
              </div>
              <div class="d-flex align-center margin-1">
                <img src="@/assets/images/icons/icon mobile.svg" alt="" class="me-3">
                <p class="desc-1">
                  {{
                    $t(
                      "Enrich your content with interactive videos and external resources "
                    )
                  }}
                </p>
              </div>
              <div class="d-flex align-center margin-1">
                <img src="@/assets/images/icons/icon mobile.svg" alt="" class="me-3">
                <p class="desc-1">{{ $t("Ecured and User Friendly") }}</p>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
    <v-row justify="center" class="mt-14 mb-5">
      <v-col sm="10" xs="10" md="7" lg="7" xl="7">
        <v-expansion-panels class="panel">
          <v-expansion-panel active-class="color">
            <v-expansion-panel-header class="header-panel">{{
              $t("Smoothly manageable")
            }}</v-expansion-panel-header>
            <v-expansion-panel-content class="content">
              <div class="d-flex align-center margin-1">
                <img src="@/assets/images/icons/icon mobile.svg" alt="" class="me-3">
                <p class="desc-1">
                  {{
                    $t("Create personalized and collective learning paths    ")
                  }}
                </p>
              </div>
              <div class="d-flex align-center margin-1">
                <img src="@/assets/images/icons/icon mobile.svg" alt="" class="me-3">
                <p class="desc-1">
                  {{ $t("Set deadlines and monitor progress in a real-time") }}
                </p>
              </div>
              <div class="d-flex align-center margin-1">
                <img src="@/assets/images/icons/icon mobile.svg" alt="" class="me-3">
                <p class="desc-1">
                  {{
                    $t(
                      "Track learners’ learning and review assessment results "
                    )
                  }}
                </p>
              </div>
              <div class="d-flex align-center margin-1">
                <img src="@/assets/images/icons/icon mobile.svg" alt="" class="me-3">
                <p class="desc-1">{{ $t("Assign and Delete Courses ") }}</p>
              </div>
              <div class="d-flex align-center margin-1">
                <img src="@/assets/images/icons/icon mobile.svg" alt="" class="me-3">
                <p class="desc-1">
                  {{
                    $t(
                      "Extract various reports at user, team, and organization level "
                    )
                  }}
                </p>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
    <v-row justify="center" class="mt-14 mb-5">
      <v-col sm="10" xs="10" md="7" lg="7" xl="7">
        <v-expansion-panels class="panel">
          <v-expansion-panel active-class="color">
            <v-expansion-panel-header class="header-panel">{{
              $t("Engaging ''Gamified'' journeys")
            }}</v-expansion-panel-header>
            <v-expansion-panel-content class="content">
              <div class="d-flex align-center margin margin-1" style="">
                <img src="@/assets/images/icons/icon mobile.svg" alt="" class="me-3 mb-4">
                <p class="desc-1 " style="line-height: 25px;">
                  {{
                    $t(
                      "Create a competitive learning environment through “Rewarding Badges” and “Top Performer” Lists   "
                    )
                  }}
                </p>
              </div>
              <div class="d-flex align-center margin margin-1">
                <img src="@/assets/images/icons/icon mobile.svg" alt="" class="me-3 mb-4">
                <p class="desc-1 " style="line-height: 25px;">
                  {{
                    $t(
                      "Allow Learners to share their own comments and inquiries through the “Course Discussion Board”"
                    )
                  }}
                </p>
              </div>
              <div class="d-flex align-center margin last margin-1">
                <img src="@/assets/images/icons/icon mobile.svg" alt="" class="me-3 mb-4">
                <p class="desc-1 " style="line-height: 25px;">
                  {{
                    $t(
                      "Enrich your courses with Engaging tools such as “Interactive Buttons, assessments, assignments and external resources” "
                    )
                  }}
                </p>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
    <SpacerProject></SpacerProject>
  </section>
</template>
<style scoped>
.margin {
  margin-top: 25px;
}
.last {
  margin-bottom: 15px;
}
.titel-1 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-40) / var(--unnamed-line-spacing-60)
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-2852a0);

  font: normal normal bold 40px/60px Poppins;
  letter-spacing: 0px;
  color: #2852a0;
}
.span-1 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-40) / var(--unnamed-line-spacing-60)
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-fab120);

  font: normal normal bold 40px/60px Poppins;
  letter-spacing: 0px;
  color: #fab120;
}
.stick {
  width: 100%;
}
.header-panel {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-23) / var(--unnamed-line-spacing-33)
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
  text-align: center;
  font: normal normal bold 23px/33px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  background: var(--unnamed-color-2852a0) 0% 0% no-repeat padding-box;
  background: #2852a0 0% 0% no-repeat padding-box !important;

  border-radius: 15px;
}
.panel {
  background: var(--unnamed-color-2852a0) 0% 0% no-repeat padding-box !important;
  background: #2852a0 0% 0% no-repeat padding-box;

  border-radius: 15px;
}
.content {
  background: #f2f2f2 0% 0% no-repeat padding-box;
  border-radius: 15px;
  padding: 15px 24px 16px !important;
}
.desc {
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-medium) var(--unnamed-font-size-20) /
    var(--unnamed-line-spacing-46) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  /* color: var(--unnamed-color-0e0e0e); */
  
  font: normal normal 20px/46px Poppins;
  letter-spacing: 0px;
  color: #746d6d;
}
.desc-1 {
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-medium) var(--unnamed-font-size-20) /
    var(--unnamed-line-spacing-60) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-746d6d);
  
  font: normal normal 20px/60px Poppins;
  letter-spacing: 0px;
  color: #746d6d;
}
.color .header-panel {
  color: #fab120;
}
@media (max-width: 900px) {
  .titel-1 {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-bold) var(--unnamed-font-size-16) /
      var(--unnamed-line-spacing-60) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    text-align: center;
    font: normal normal bold 16px/20px Poppins;
  }
  .span-1 {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-bold) var(--unnamed-font-size-16) /
      var(--unnamed-line-spacing-60) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-fab120);
    text-align: center;
    font: normal normal bold 16px/20px Poppins;
    letter-spacing: 0px;
    color: #fab120;
  }
  .stick {
    width: 50%;
  }
  .contain {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .panel {
    border-radius: 10px;
  }
  .header-panel {
    border-radius: 10px;
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-14)/7px var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-ffffff);
text-align: center;
font: normal normal bold 14px/7px Poppins;
letter-spacing: 0px;
color: #FFFFFF;
  }
  .desc {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-14)/var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-746d6d);

font: normal normal normal 14px/25px Poppins;
letter-spacing: 0px;
color: #746D6D;
  }
  .desc-1 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-14)/var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-746d6d);

font: normal normal normal 14px/25px Poppins;
letter-spacing: 0px;
color: #746D6D;
  }
  .content {
    border-radius: 10px;
  }
  .margin-1 {
    margin-bottom: 15px;
  }
}
</style>
<style>
/* .panel.theme--light.v-expansion-panels .v-expansion-panel { */
/* background: var(--unnamed-color-2852a0) 0% 0% no-repeat padding-box !important;
background: #2852A0 0% 0% no-repeat padding-box;
box-shadow: 10px 10px 99px #D3D3D329;
border-radius: 15px;
} */
.panel.theme--light.v-expansion-panels
  .v-expansion-panel-header
  .v-expansion-panel-header__icon
  .v-icon {
  color: #ffffff;
  font-size: 32px;
}
@media (max-width: 900px) {
    .panel.theme--light.v-expansion-panels
  .v-expansion-panel-header
  .v-expansion-panel-header__icon
  .v-icon {
  color: #ffffff;
  font-size: 18px;
}
}
</style>
