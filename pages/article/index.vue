<template>
    <div>
        <PortofolioArticle data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></PortofolioArticle>
        <SpacerProject></SpacerProject>
        <TextArticle class="mb-16 m" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></TextArticle>
        
        <TagsArticle data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></TagsArticle>
        <!-- <SpacerProject></SpacerProject> -->
        <SharePost class="mt-16 " data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></SharePost>
        <SpacerProject></SpacerProject>
        <CommentArticle class="mt-16 mb-16" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></CommentArticle>
        <SpacerProject></SpacerProject>
        <CardArticle data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000"></CardArticle>
        <SpacerProject></SpacerProject>

    </div>
</template>
<script>
import AOS from 'aos';
export default {
  mounted() {
    this.$nextTick(() => {
      // AOS has been initialized and is ready to use
    })
  }
}
</script>