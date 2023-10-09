<template>
  <section>
    <SpacerProject class="space"></SpacerProject>
    <v-container>
      <v-row justify="center">
        <v-col
          cols="11"
          class="mb-4"
          xs="9"
          :class="this.$vuetify.breakpoint.name == 'xs' ? 'px-3' : 'px-0'"
        >
          <div>
            <p class="desc-1" :class="this.$vuetify.breakpoint.name == 'xs' || this.$vuetify.breakpoint.name == 'sm' ? 'ms-3': ''">
              {{
                $t(
                  "5 Ways That Storytelling Can Improve Your New Hire Online Training Program"
                )
              }}
            </p>
            <p class="desc-2">
              {{
                $t(
                  "Whether you’re a seasoned professional or just starting out in your career, everyone can benefit from a good story. Stories help us to understand and remember important information, and can be a great way to onboard new employees."
                )
              }}
            </p>
            <p class="desc-2">
              {{
                $t(
                  "But not all stories are created equal. The best stories for onboarding new hires are those that are fun and exciting, but also practical and contextual. Authenticity is key - if your stories feel contrived, they’re likely to fall flat. With that in mind, here are some insider tips for adding storytelling to your new hire onboarding program."
                )
              }}
            </p>
            <p class="desc-2">
              {{
                $t(
                  "When onboarding new employees, you want to give them enough information so they feel equipped to do their job, but not so much that they feel overwhelmed. Storytelling is a good way to ease them in and help them understand and remember important information."
                )
              }}
            </p>
            <p class="desc-2">
              {{
                $t(
                  "Here are some insider tips to add storytelling to your new hire onboarding program:"
                )
              }}
            </p>
          </div>
          <div>
            <div
              class="d-flex"
              :class="
                this.$vuetify.breakpoint.name == 'lg' ||
                this.$vuetify.breakpoint.name == 'md' ||
                this.$vuetify.breakpoint.name == 'xl'
                  ? 'mt-8 mb-8'
                  : 'margin align-center'
              "
            >
              <v-divider
                vertical
                class="divider me-2"
               
              ></v-divider>
              <p class="desc-1">
                {{ $t("Start with the why.") }}
              </p>
            </div>
            <p class="desc-2">
              {{
                $t(
                  "When you’re onboarding new employees, it’s important to set the context for why they’re learning what they’re learning. Otherwise, it can all feel like a jumble of disconnected information. Stories are a great way to do this because they help learners understand the bigger picture and how their individual roles fit into it."
                )
              }}
            </p>
          </div>
          <div>
            <div
              class="d-flex"
              :class="
                this.$vuetify.breakpoint.name == 'lg' ||
                this.$vuetify.breakpoint.name == 'md' ||
                this.$vuetify.breakpoint.name == 'xl'
                  ? 'mt-8 mb-8'
                  : 'margin align-center'
              "
            >
              <v-divider
                vertical
                class="divider me-2"
                
              ></v-divider>
              <p class="desc-1">
                {{ $t("Make it relatable.") }}
              </p>
            </div>
            <p class="desc-2">
              {{
                $t(
                  "The best stories are those that feel personal and relatable. When learners can see themselves in the story, they’re more likely to pay attention and remember what they learn. When you’re creating your narrative, think about ways to make it relevant to your audience. What challenges do your new hires face? How can your story help them overcome these challenges?"
                )
              }}
            </p>
          </div>
          <div>
            <div
              class="d-flex"
              :class="
                this.$vuetify.breakpoint.name == 'lg' ||
                this.$vuetify.breakpoint.name == 'md' ||
                this.$vuetify.breakpoint.name == 'xl'
                  ? 'mt-8 mb-8'
                  : 'margin align-center'
              "
            >
              <v-divider
                vertical
                class="divider me-2"
               
              ></v-divider>
              <p class="desc-1">
                {{ $t("Use characters wisely.") }}
              </p>
            </div>
            <p class="desc-2">
              {{
                $t(
                  "Characters are an essential part of any good story, but you need to use them wisely. Too many characters can be confusing, and if they’re not well developed, they won’t be memorable. Choose a few key characters that will help illustrate your point and give them some personality traits that will make them stand out in your learner’s mind."
                )
              }}
            </p>
          </div>
          <div>
            <div
              class="d-flex"
              :class="
                this.$vuetify.breakpoint.name == 'lg' ||
                this.$vuetify.breakpoint.name == 'md' ||
                this.$vuetify.breakpoint.name == 'xl'
                  ? 'mt-8 mb-8'
                  : 'margin align-center'
              "
            >
              <v-divider
                vertical
                class="divider me-2"
             
              ></v-divider>
              <p class="desc-1">
                {{ $t("Make it interactive.") }}
              </p>
            </div>
            <p class="desc-2">
              {{
                $t(
                  "Stories are more engaging when they involve the reader or listener in some way. Ask questions throughout the narrative to ensure that your learner is following along and understanding the key points. At the end of the story, invite them to reflect on what they learned and how they can apply it in their own work situation."
                )
              }}
            </p>
          </div>
          <div>
            <div
              class="d-flex"
              :class="
                this.$vuetify.breakpoint.name == 'lg' ||
                this.$vuetify.breakpoint.name == 'md' ||
                this.$vuetify.breakpoint.name == 'xl'
                  ? 'mt-8 mb-8'
                  : 'margin align-center'
              "
            >
              <v-divider
                vertical
                class="divider me-2"
              
              ></v-divider>
              <p class="desc-1">
                {{ $t("Don’t Forget to Learn.") }}
              </p>
            </div>
            <p class="desc-2">
              {{
                $t(
                  "While these stories make great conversation starters, they should always include a “moral” or “teaching moment.” It doesn’t have to be explicit; it works better when it’s not. In the first example, the one about the key card, there are multiple takeaways. “Security is important—that’s why the doors are biometrically locked.” “People are forgetful, so keep your key card on a lanyard.” You don’t necessarily have to spell out the learning goal or objective right off the bat. Just imply it, then use a quiz, simulation, or branching scenario to be sure they got it."
                )
              }}
              <br />
              
            </p>
            <p class="desc-1">{{ $t("Conclusion") }}</p>
            <p class="desc-2">
              {{
                $t(
                  "A good story can bring abstract concepts to life and make them memorable. When onboarding new employees, stories can be used to ease them into the company culture and help them understand their roles within the organization."
                )
              }}
            </p>
            <p class="desc-2">
              {{
                $t(
                  "The best stories are those that feel personal and relatable, with a clear beginning, middle, and end. By making the story interactive and inviting reflection, you can ensure that your new hires are engaged and ready to start their jobs. "
                )
              }}
            </p>
            <p class="desc-1">{{ $t("Sources:") }}</p>
            
            <p class="desc-2">
              <v-icon class="dot"></v-icon>
              {{
                $t(
                  "Secrets To Successfully Incorporate Storytelling Into New Hire Online Training. Pappas, eLearning industry."
                )
              }}
            </p>
            
            <p class="desc-2">
              <v-icon class="dot"></v-icon>
              {{
                $t(
                  "the Secret L&D Manager: Building a learning culture in a global organization. Author, target training."
                )
              }}
            </p>
          </div>
          <div
            :class="
              this.$vuetify.breakpoint.name == 'lg' ||
              this.$vuetify.breakpoint.name == 'md' ||
              this.$vuetify.breakpoint.name == 'xl'
                ? 'mt-8 mb-8'
                : 'mt-5 mb-5'
            "
          >
            <p class="desc-4">
              {{ $t("Farah waleed") }}
            </p>
            <p class="desc-3">
                <v-icon class="icon" v-if="this.$vuetify.breakpoint.name=='xs'" x-small >mdi-clock-check-outline</v-icon>
              {{ $t("December 21, 2021") }}
              
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
 
  <style scoped>
  .space {
    display: none;
  }
.desc-1 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-30) / var(--unnamed-line-spacing-60)
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-2852a0);
  
  font: normal normal bold 28px/60px Poppins;
  letter-spacing: 0px;
  color: #2852a0;
  opacity: 1;
  
}
.desc-2 {
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-medium) var(--unnamed-font-size-25) /
    var(--unnamed-line-spacing-45) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-656463);
  
  font: normal normal 24px/38px Poppins;
  letter-spacing: 0px;
  color: #656463;
  opacity: 1;
  margin-bottom: 65px;
}
.divider {
  border: 2px solid var(--unnamed-color-2852a0);
}
.desc-3 {
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-25) /
    var(--unnamed-line-spacing-38) var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-707070);

  font: normal normal normal 25px/38px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.desc-4 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-25) / var(--unnamed-line-spacing-38)
    var(--unnamed-font-family-poppins);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-2852a0);
  margin-bottom: 0px;
  font: normal normal bold 25px/38px Poppins;
  letter-spacing: 0px;
  color: #2852a0;
  opacity: 1;
}
.dot {
  width: 15px !important;
height: 15px !important;
/* UI Properties */
background: var(--unnamed-color-2852a0) 0% 0% no-repeat padding-box;
border: 1px solid var(--unnamed-color-fab120);
background: #2852A0 0% 0% no-repeat padding-box;
border: 1px solid #FAB120;
opacity: 1;
border-radius: 50%;
}
@media (max-width: 768px) {
  .desc-1 {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-bold) var(--unnamed-font-size-16) /
      var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-2852a0);
    
    font: normal normal bold 14px/25px Poppins !important;
    letter-spacing: 0px;
    color: #2852a0;
    opacity: 1;
    margin-top: 10px;
    
  }
  .desc-2 {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-normal) var(--unnamed-font-size-14) /
      var(--unnamed-line-spacing-20) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-656463);
    
    font: normal normal normal 14px/20px Poppins !important;
    letter-spacing: 0px;
    color: #656463;
    opacity: 1;
    margin-bottom: 33px;
  }
  .desc-4 {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-bold) var(--unnamed-font-size-14) /
      var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-2852a0);

    font: normal normal bold 14px/25px Poppins;
    letter-spacing: 0px;
    color: #2852a0;
    opacity: 1;
  }
  .desc-3 {
    font: var(--unnamed-font-style-normal) normal
      var(--unnamed-font-weight-normal) var(--unnamed-font-size-14) /
      var(--unnamed-line-spacing-25) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-707070);

    font: normal normal normal 14px/25px Poppins;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
  }
  .icon {
    font-size: 16px;
  }
  .divider {
    /* width: 0px;
    min-width: 0px;
    max-width: 0px; */
    border:2px solid #2852A0;
    /* min-height: 50%;
    max-height: 50%;
    height: 50%; */
   margin: 8px -1px;
  }
  .margin {
    height: 40px;
  }
}
@media (max-width:380px) {
  .space {
    display: block;
  }
}
</style>
<style>
.desc-3 .icon{
width: 15px;
height: 15px;
}
</style>