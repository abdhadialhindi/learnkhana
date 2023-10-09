<template>
  <div :class="`bg-color ${about ? 'pt--20' : 'ptb--120'}`">
    <v-container cl>
      <v-row class="row--35 pt--20" align="center">
        <v-col lg="7" md="7" cols="12">
          <div class="about-inner inner">
            <div class="section-title">
              <!-- <span class="subtitle">My About Details</span> -->
              <h1 class="heading-title title-color">
               {{ $t("Who We Are") }}  <span class="dot-color">.</span>
                <div class="ptb--15">
                  <div class="hr-color"></div>
                </div>
              </h1>

              <p class="description mt_dec--20">
                {{
                  $t(
                    "We specialize in providing tailored solutions to meet your needs, to ensure that your business is equipped with the right skills to succeed."
                  )
                }}
              </p>
            </div>
            <!-- End .section-title -->
            <div class="tab-wrapper mt--30">
              <v-row>
                <v-col lg="12">
                  <div class="tab-default">
                    <v-tabs v-model="tab" flat hide-slider>
                      <v-tab
                        v-for="item in items"
                        :key="item.id"
                        :ripple="false"
                      >
                        {{ item.name }}
                      </v-tab>
                    </v-tabs>

                    <v-tabs-items v-model="tab">
                      <v-tab-item
                        transition="fade-transition"
                        v-for="item in tabContent"
                        :key="item.id"
                      >
                        <v-card flat>
                          <v-card-text>
                            <div class="single-tab-content">
                              <div>
                                <div
                                  style="color: #2852a0; font-weight: 900"
                                  v-for="(item, i) in item.content"
                                  :key="i"
                                >
                                  <p
                                    class="description mt_dec--50"
                                    v-html="item.desc1"
                                  ></p>
                                </div>
                              </div>
                              <div v-if="item.isSkill">
                                <ul class="ps-12 pt-2">
                                  <li
                                    style="font-weight: 900"
                                    v-for="(skill, i) in item.skills"
                                    :key="i"
                                  >
                                    {{ skill.name }}
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </v-card-text>
                        </v-card>
                      </v-tab-item>
                    </v-tabs-items>
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-col>
        <v-col lg="5" md="5" cols="12">
          <div class="thumbnail">
            <img
              slot="thum-img"
              class="w-100"
              style="width: 75% !important"
              :src="items[tab].src"
              alt="About Images"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    about: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      title: this.$t("About Us"),
      tab: 0,
      items: [
        {
          id: 1,
          name: this.$t("Mission"),
          src: require("@/assets/images/whoweare/mission-500-x-665.jpg"),
        },
        {
          id: 2,
          name: this.$t("Vision"),
          src: require("@/assets/images/whoweare/vision500x665.jpg"),
        },
        {
          id: 3,
          name: this.$t("Values"),
          src: require("@/assets/images/whoweare/values500x665.jpg"),
        },
      ],
      //   ary: #2852a0;
      // --color-secondary: #fab120;
      tabContent: [
        {
          id: 1,
          content: [
            {
              desc: this.$t(
                "At learnkhana, our mission is to Build impactful, engaging, and fit-of-purpose learning experiences"
              ),
              desc1: this.$t(
                'To Build <strong style="color: #fab120">impactful, engaging, and fit-of-purpose</strong> learning experiences.'
              ),
            },
          ],
        },
        {
          id: 2,
          content: [
            {
              desc: this.$t(
                "At learnkhana, our mission is to Build impactful, engaging, and fit-of-purpose learning experiences"
              ),
              desc1: this.$t(
                "We take a value-driven approach to every training we undertake to help organizations achieve their business objectives by helping them train their employees, partners, and clients effectively."
              ),
            },
          ],
        },
        {
          id: 3,
          isSkill: true,
          skills: [
            {
              name: this.$t("Technical Excellence"),
            },
            {
              name: this.$t("Seizing Accountability"),
            },
            {
              name: this.$t("Result Oriented"),
            },
            {
              name: this.$t("Change Agility"),
            },
            {
              name: this.$t("Self-Growth"),
            },
          ],
          content: [
            {
              desc: this.$t(
                "We love what we do, and we love our clients and employees. We choose to operate with values that are important to us:"
              ),
              desc1: this.$t(
                "We love what we do, and we love our clients and employees. We choose to operate with values that are important to us:"
              ),
            },
          ],
        },
      ],
    };
  },
};
</script>
<style>
.title-color {
  color: var(--color-primary);
}
.hr-color {
  background-color: var(--color-secondary) !important;
  width: 21%;
  height: 5px;
}
.dot-color {
  color: var(--color-secondary) !important;
  font-size: 120%;
}
</style>
<style lang="scss" scoped>
.bg-color {
  background-image: url("@/assets/images/ourwork/learnkhana-website-artboards_08.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
