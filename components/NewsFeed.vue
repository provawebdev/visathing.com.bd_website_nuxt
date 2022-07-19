<template>
  <!-- News Section Start  -->
  <section class="pt-0" id="news">
    <div class="container">
      <div class="section-header">
        <h2>News Feed</h2>
      </div>
      <div class="row g-3">
        <div
          v-for="(con, key) in contents"
          :key="key"
          v-show="con.category == 'News Feed'"
          class="col-lg-4 col-md-4"
        >
          <div class="media-library-item card news-items">
            <img v-if="con.image"
              alt="..."
              class="card-img-top"
              :src="'https://b2bdemo.visathing.in/storage/Content/' + con.image"
            />
            <div class="item-content">
              <div class="news-item-body py-0">
                <p class="news-item-title">{{ con.name }}</p>
                <p class="news-item-text" v-html="con.summary"></p>
              </div>
              <div class="news-item-footer d-flex justify-content-between">
                <nuxt-link class="news-item-link" v-bind:to="'/blog/' + con.slug"
                  >Read More</nuxt-link>
                <!-- <a class="news-item-link" href="#">
                  <svg
                    fill="none"
                    height="15"
                    viewBox="0 0 16 15"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.8375 12.25L8 14.875L6.1625 12.25H1.25C1.05109 12.25 0.860322 12.171 0.71967 12.0303C0.579018 11.8897 0.5 11.6989 0.5 11.5V1C0.5 0.801088 0.579018 0.610322 0.71967 0.46967C0.860322 0.329018 1.05109 0.25 1.25 0.25H14.75C14.9489 0.25 15.1397 0.329018 15.2803 0.46967C15.421 0.610322 15.5 0.801088 15.5 1V11.5C15.5 11.6989 15.421 11.8897 15.2803 12.0303C15.1397 12.171 14.9489 12.25 14.75 12.25H9.8375ZM9.05675 10.75H14V1.75H2V10.75H6.94325L8 12.259L9.05675 10.75Z"
                      fill="#2B2B2B"
                    />
                  </svg>
                  <span>5</span></a
                > -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="view-all-btn">
        <nuxt-link to="/blog">
          <button class="btn-gradient">View All</button>
        </nuxt-link>
      </div>
    </div>
  </section>
  <!-- News Section End  -->
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
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en-us", options);
    },
  },
};
</script>