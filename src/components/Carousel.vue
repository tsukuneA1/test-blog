<template>
  <div id="carousel-container">
    <carousel-3d :controls-visible="true" :clickable="false" :autoplay="true">
      <slide v-for="(slide, i) in slides" :key="i" :index="i">
        <img :src="slide" alt="Slide">
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
import * as Vue from 'vue'
import 'vue-carousel-3d/dist/vue-carousel-3d.min.css';
import Carousel3d from 'vue-carousel-3d';

export default {
  components: {
    'carousel-3d': Carousel3d.Carousel3d,
    'slide': Carousel3d.Slide
  },
  data() {
    return {
      slides: [
        'https://placehold.it/360x270',
        'https://placehold.it/360x270',
        'https://placehold.it/360x270'
      ]
    };
  }
};
</script>

<style scoped>
#carousel-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}
</style>
