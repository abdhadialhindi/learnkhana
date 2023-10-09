<template>
  <div>
    <div class="">
      <div class="slider-paralax d-flex bg_image bg_image--1">
        <v-container>
          <v-row :class="{ 'ps-16': $vuetify.breakpoint.name == 'lg' }">
            <v-col cols="12">
              <div class="inner" :class="'text-start'">
                <h2 class="heading-title">
                  {{$t("The Future of Learnkhana starts with you!")}}
                </h2>
                <p class="description">
                  {{$t("At Learnkhana, our future is rooted in helping companies — interested in what’s next? We’re looking for people who believe that we can accomplish so much more together than apart")}}.
                </p>
                <p><b>{{$t("Let’s build our future, together!")}}</b></p>

                <div class="slide-btn">
                  <router-link class="btn-default" to="#apply">{{
                    $t("Apply Now")
                  }}</router-link>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    <div id="apply">
      <div class="rn-contact-page ptb--80 bg_color--1">
        <div class="">
          <v-container>
            <v-row align="start" class="row--35">
              <v-col lg="6" md="6" sm="12" cols="12" order="2" order-md="1">
                <div class="text-left section-title mb--20">
                  <h2 class="heading-title">
                    {{$t("General Information.")}}
                  </h2>
                </div>
              </v-col>
            </v-row>

            <v-row align="start" class="pt--10 row--35">
              <v-col lg="12" md="12" sm="12" cols="12" order="2" order-md="1">
                <div class="form-wrapper">
                  <v-row align="center">
                    <v-col class="d-flex" cols="12" sm="6">
                      <v-text-field filled label="First Name"></v-text-field>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                      <v-text-field filled label="Phone Number"></v-text-field>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                      <v-text-field filled label="Address"></v-text-field>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                      <v-text-field filled label="E-mail"></v-text-field>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6" md="6">
                      <v-menu
                        ref="menu"
                        v-model="menu"
                        :close-on-content-click="false"
                        :return-value.sync="date"
                        transition="scale-transition"
                        offset-y
                        max-width="100%"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            filled
                            v-model="date"
                            label="Birth-Date"
                            append-icon="mdi-calendar"
                            v-bind="attrs"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="date"
                          color="secondary"
                          :active-picker.sync="activePicker"
                          :max="
                            new Date(
                              Date.now() -
                                new Date().getTimezoneOffset() * 60000
                            )
                              .toISOString()
                              .substr(0, 10)
                          "
                          min="1950-01-01"
                          @change="save"
                        ></v-date-picker>
                      </v-menu>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                      <v-text-field filled label="University"></v-text-field>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                      <v-text-field
                        filled
                        label="Years of Experience"
                      ></v-text-field>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                      <v-text-field
                        filled
                        label="Current/ Last Job Title"
                      ></v-text-field>
                    </v-col>

                    <v-col class="d-flex" cols="12" sm="6">
                      <v-text-field
                        filled
                        label="Current/ Last Work Place"
                      ></v-text-field>
                    </v-col>

                    <v-col class="d-flex" cols="12" sm="6">
                      <v-file-input
                        truncate-length="15"
                        filled
                        append-icon="mdi-attachment"
                        prepend-icon=""
                        label="Photo"
                      ></v-file-input>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                      <v-text-field
                        filled
                        label="Linkedin Account"
                      ></v-text-field>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                      <v-file-input
                        truncate-length="15"
                        prepend-icon=""
                        filled
                        hide-icon
                        append-icon="mdi-attachment"
                        label="CV"
                      ></v-file-input>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                      <v-text-field
                        filled
                        label="Portfolio/ Behance"
                      ></v-text-field>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6">
                      <v-file-input
                        truncate-length="15"
                        prepend-icon=""
                        append-icon="mdi-attachment"
                        label="Work samples"
                        filled
                        multiple
                      ></v-file-input>
                    </v-col>
                  </v-row>

                  <button class="btn-default" type="submit" value="submit">
                    {{$t("Submit")}}
                  </button>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    activePicker: null,
    date: null,
    menu: false,
  }),
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },
  },
};
</script>
<style>
.v-menu__content {
  max-width: auto !important;
}
</style>
