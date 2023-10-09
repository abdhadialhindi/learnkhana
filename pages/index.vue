<template>
  <div>
    <slider class="" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="2000"></slider>
    <!-- <business></business> -->
    <service class="service mt-15" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="2000"></service>
    <help class="mb--180" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="2000"></help>

    <our-work data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="2000"></our-work>
    <SpacerSlider 
     ></SpacerSlider>
    <experts class="" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="2000"></experts>
    <!-- <client></client> -->
    <!-- <about></about> -->
    <!-- <news></news> -->
    <CardResponsive class="mb--120 news" v-if="this.$vuetify.breakpoint.name=='xs' || this.$vuetify.breakpoint.name=='sm'" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="2000"></CardResponsive>
    <SliderNews class=" news" v-else data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="2000"></SliderNews>

    <WhoweAre data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="2000" ></WhoweAre>

    <!--  testimonial -->
    <CarouselHome class="" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="2000"></CarouselHome>
    <strategic-partner class="partner" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="2000"></strategic-partner>
  </div>
</template>

<script>
import AOS from 'aos';
export default {
  name: "IndexPage",
  data() {
    return {
      // title: this.title,
      description: `Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet`,
      image: "/bg-image-16-oo.jpg"
    };
  },
  computed:{
    title() {
      return this.$t("Home")
    }
  },
  mounted() {
    this.$nextTick(() => {
      // AOS has been initialized and is ready to use
    })
  },
  head() {

    return {
      title: this.title,
      description: this.description,
      link: [
        {
          rel: 'canonical',
          href: 'https://frolicking-platypus-67395f.netlify.app/',
          hid: 'canonical'
        },
      ],
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      meta: [

      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: 'title',
      name: 'title',
      property: 'og:title',
      content: this.title
    },
        {
          property: 'og:image:width',
          content: '1500',
        },
        {
          property: 'og:image:height',
          content: '1500',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content:'https://frolicking-platypus-67395f.netlify.app/',
        },

        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:locale',
          property: 'og:locale',
          content: 'en_US',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.image,
        },
        {
          hid: 'og:image-name',
          name: 'og:image',
          content: this.image,
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.image,
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.image,
        },
        { hid: 'fb:app_id', name: 'fb:app_id', content: 'different content' },
        {
          hid: 'facebook:pageId',
          name: 'facebook:pageId',
          content: this.title,
        },
        {
          hid: 'facebook:appId',
          name: 'facebook:appId',
          content: this.title,
        },

        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title,
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content:this.image,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description,
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@mdotacademy',
        },
        {
          hid: 'twitter:creator',
          name: 'twitter:creator',
          content: '@markshust',
        },
      ],
    }
  }
};
</script>
<style scoped>
.service {
  background: url("@/assets/images/home/who.png");
}
.news {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 1013px;
  background: url("@/assets/images/home/news.png");
}
.who {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url("@/assets/images/home/whobig.png");
  background-position-y: center;
  background-size: 75%;
  background-repeat: no-repeat;
  height: 1154px;
}
.partner {
  background-color: #E6E6E6;
}
@media (max-width:900px) {
 .service {
  background: url("@/assets/images/home/servicemob.png");
  background-repeat: no-repeat;
  background-size: contain;
 } 
 .news {
  padding-top: 105px;
  height: auto;
  background: url("@/assets/images/home/newsmob.png");
  background-repeat: repeat;
  background-size: contain;
 }
 .who {
  background: url("@/assets/images/home/whomob.png");
 }
}
</style>
