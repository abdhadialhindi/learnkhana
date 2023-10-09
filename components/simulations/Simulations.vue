<template>
  <v-container>

    <v-dialog v-model="dialog">
      <v-card>
        <v-toolbar color="primary" dark>{{ simulation_name }}</v-toolbar>
        <v-card-text>
          <div class="text-h2 pa-12 d-flex">
            <v-col cols="12" md="4" sm="6">
              <img :src="dialogImg" alt=""/>
            </v-col>
            <v-col cols="12" md="6" sm="6" c>
              <v-simple-table class="d-flex" dense>
                <thead>
                  <tr>
                    <th class="text-start">Competencies</th>
                    <th class="text-start">Number of attendees</th>
                    <th class="text-start">Language</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{{ Competencies }}</td>
                    <td>{{ NumberOfAttendees }}</td>
                    <td>{{ languages }}</td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-col>
          </div>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn text @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-row>
      <v-col cols="12">
        <div class="slick-space-gutter--15 slickdot--20">
          <VueSlickCarousel
            v-bind="settings"
            class="rn-slick-activation slick-dotted rn-slick-dot"
          >
            <!-- Start Single Portfolio  -->
            <div
              class="single_im_portfolio"
              v-for="(item, i) in portfolioContent"
              :key="i"
              @click="handleDialog(i)"
            >
              <div class="im_portfolio">
                <div class="thumbnail_inner">
                  <div class="thumbnail">
                    <a href="portfolio-details.html">
                      <img
                        class="w-100"
                        :src="item.src"
                        alt="Portfolio Images"
                      />
                    </a>
                  </div>
                </div>
                <div class="content">
                  <div class="inner">
                    <div class="portfolio_heading">
                      <div class="category_list">
                        {{ item.category }}
                      </div>
                      <h4 class="heading-title">
                        {{ item.title }}
                      </h4>
                    </div>
                    <div class="portfolio_hover">
                      <p>{{ item.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Single Portfolio  -->
          </VueSlickCarousel>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
export default {
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      simulation_name: '',
      Competencies: '',
      NumberOfAttendees: '',
      languages: '',
      dialog: false,
      dialogImg: '',
      portfolioContent: [
        {
          src: require("../../assets/images/simulations/CLUE.png"),
          category: "",
          title: "CRIME IN UPPER EGYPT",
          description:
            "",
        },
        {
          src: require("../../assets/images/simulations/HS.png"),
          category: "",
          title: "High Season",
          description:
            "",
        },
        {
          src: require("../../assets/images/simulations/PM.png"),
          category: "",
          title: "Pizzeria Maestro",
          description:
            "",
        },
        {
          src: require("../../assets/images/simulations/RESCUE-M.png"),
          category: "",
          title: "RESCUE MISSION",
          description:
            "",
        },
        {
          src: require("../../assets/images/simulations/RM.png"),
          category: "",
          title: "ROYAL MISSION",
          description:
            "",
        },
        {
          src: require("../../assets/images/simulations/STF.png"),
          category: "",
          title: "SHIPPING THE FUTURE",
          description:
            "",
        },
        {
          src: require("../../assets/images/simulations/TI.png"),
          category: "",
          title: "THE ISLANDS",
          description:
            "",
        },
        {
          src: require("../../assets/images/simulations/TM.png"),
          category: "",
          title: "THE MAESTRO",
          description:
            "",
        },
        {
          src: require("../../assets/images/simulations/UA.png"),
          category: "",
          title: "Universal Agreement",
          description:
            "",
        },
        {
          src: require("../../assets/images/simulations/TC.png"),
          category: "",
          title: "The COURT",
          description:
            "",
        },
      ],
      // for all works
      settings: {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        spaceBetween: 15,

        responsive: [
          {
            breakpoint: 890,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 770,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 490,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
        ],
      },
    };
  },
  methods: {
    handleDialog(index) {
      this.dialog = true
      this.simulation_name = this.portfolioContent[index].title
      this.dialogImg = this.portfolioContent[index].src
      this.Competencies = 1234
      this.NumberOfAttendees = 13232
      this.languages = 'English / Arabic'
    }
  }
};
</script>
