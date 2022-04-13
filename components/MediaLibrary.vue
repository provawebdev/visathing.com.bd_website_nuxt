<template>
  <!-- Media Library Section Start  -->
  <section id="media-library">
    <div class="container">
      <div class="section-header">
        <h2>Media Library</h2>
      </div>
      <div class="row">
        <div
          class="col-lg-4 col-md-6"
          v-for="(con, key) in contents"
          :key="key"
        >
          <div class="media-library-item card" v-show="con.url">
            <iframe
              class="card-img-top"
              :src="'https://www.youtube.com/embed/' + con.url"
            >
            </iframe>
            <h3 class="card-text">{{ con.name }}</h3>
          </div>
        </div>
        <!--<div class="col-lg-4 col-md-6">
                <div class="media-library-item card">
                    <img alt="..." class="card-img-top" src="~/assets/img/media-2.png">
                    <h3 class="card-text">How to address the challenges in Croatia Visa & Work Permit Processing
                    </h3>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="media-library-item card">
                    <img alt="..." class="card-img-top" src="~/assets/img/media-3.png">
                    <h3 class="card-text">Latest update on Romania work permit visa processing | visathing</h3>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="media-library-item card">
                    <img alt="..." class="card-img-top" src="~/assets/img/media-4.png">
                    <h3 class="card-text">Serbia Work Permit Visa for Bangladeshi Update visa processing</h3>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="media-library-item card">
                    <img alt="..." class="card-img-top" src="~/assets/img/media-5.png">
                    <h3 class="card-text">UK Visa Requirements and Processing Tips | VISAThing</h3>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="media-library-item card">
                    <img alt="..." class="card-img-top" src="~/assets/img/media-6.png">
                    <h3 class="card-text">Latest update on Croatia work permit visa processing</h3>
                </div>
            </div> -->
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
      .get("https://b2bdemo.visathing.in/api/country_name")
      .then((response) => {
        this.contents = response.data.contents;
        // console.log(response.data.services);
      });
  },

  methods: {},
};
</script>