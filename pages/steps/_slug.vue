<template>
  <div>
    <nuxt-child :data="data" />
    <!-- Page Name -->
    <section class="page-name text-center">
      <div class="container">
        <h1>{{ data.name }}</h1>
      </div>
    </section>
  
    <section id="visa-consultancy-wrapper">
      <div class="container">
        <div class="row justify-content-center">
          <div :class="{ 'col-lg-12 col-md-12 mb-5': data.image === null }" class="col-lg-6 col-md-10 mb-5">
            <h2 class="fs-34 fs-sm-24 mb-3">{{ data.name }}</h2>
            <div v-html="data.body"></div>
          </div>
          <div v-if="data.image" class="col-lg-6 col-md-10">
            <img
              :src="'https://b2bdemo.visathing.in/storage/Submenu/' + data.image"
              class="rounded img-fluid"
              :alt="data.name"
            />
          </div>
        </div>
      </div>
    </section>
    
  </div>
</template>
<script>
import axios from "axios";
import bgImg from "assets/img/basic-checklist-banner.png";
import {
  cacheAdapterEnhancer,
  throttleAdapterEnhancer,
} from "axios-extensions";
const http = axios.create({
  baseURL: "https://b2bdemo.visathing.in/api",

  adapter: throttleAdapterEnhancer(axios.defaults.adapter, {
    threshold: 10 * 1000,
  }),
});
export default {
  head() {
    return {
      title: "",
      titleTemplate: `${this.data.name} - VISAThing`,
    };
  },
  data() {
    return {
      data: [],
      image: bgImg,
    };
  },
  created() {
    this.$axios
      .get("https://b2bdemo.visathing.in/api/content_show/" + this.$route.params.slug)
      .then((response) => {
        this.data = response.data.content;
       // console.log(response.data.content);
      });
  },
  methods: {
  },
};
</script>