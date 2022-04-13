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
        <div
          class="col-lg-4 col-md-6"
          v-for="(con, key) in data"
          :key="key"
        >
          <div class="media-library-item card" v-show="con.url">
            <iframe
              class="card-img-top"
              :src="'https://www.youtube.com/embed/' + con.url"
            >
            </iframe>
            <h3 class="card-text"><nuxt-link :to="`/media_library/${con.id}`">{{ con.name }}</nuxt-link></h3>
            
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
      datas: {},
      data: [],
      image: bgImg,
    };
  },
  created() {
    this.$axios.get("https://b2bdemo.visathing.in/api/manu_list/").then((response) => {
      this.data = response.data.contents;
      //console.log( response.data.terms);
    });
  },
};
</script>

<style lang="scss" scoped>
</style>