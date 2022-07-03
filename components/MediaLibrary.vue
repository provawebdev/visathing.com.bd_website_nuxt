<template>
  <!-- Media Library Section Start  -->
  <section id="media-library" class="bg-gray">
    <div class="container">
      <div class="section-header">
        <h2>Media Library</h2>
      </div>
      <div class="row">
        <div v-for="(con, key) in contents"
          :key="key" v-show="con.url"
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
      <div class="view-all-btn">
        <nuxt-link to="/media_library">
          <button class="btn-gradient">View All</button>
        </nuxt-link>
      </div>
    </div>
  </section>
  <!-- Media Library Section End  -->
</template>
<script>
import axios from "axios";

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
  mounted() {},

  data() {
    return {
      contents: [],
    };
  },
  created() {
    this.$axios
      .get("https://b2bdemo.visathing.in/api/content_list")
      .then((response) => {
        this.contents = response.data.contents;
        // console.log(response.data.services);
      });
  },

  methods: {},
};
</script>