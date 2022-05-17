<template>
  <div>
   <section class="page-name text-center">
      <div class="container">
        <h1>Media Library</h1>
      </div>
    </section>
      <section id="media-library">
    <div class="container">
     
      <div class="row">
        <div v-for="(con, key) in contents"
          :key="key"
          v-show="con.url"
          class="col-lg-4 col-md-4"
        >
          <div class="media-library-item card">
            <iframe
              class="card-img-top"
              :src="'https://www.youtube.com/embed/' + con.url"
            >
            </iframe>
            <h3 class="card-text">{{ con.name }}</h3>
            
          </div>
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
      titleTemplate: `%s ${this.$route.name} - VISAThing`,
    };
  },
  data() {
    return {
      contents: {},
      data: [],
      image: bgImg,
    };
  },
  created() {
    this.$axios.get("https://b2bdemo.visathing.in/api/content_list/").then((response) => {
      this.contents = response.data.contents_all;
      //console.log( response.data.terms);
    });
  },
};
</script>

<style lang="scss" scoped>
</style>