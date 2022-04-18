<template>
  <!-- News Section Start  -->
  <section class="pt-0" id="news">
    <div class="container">
      <div class="section-header">
        <h2>News Feed</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
          morbi sit sed netus diam justo, elementum at. Mauris dui.
        </p>
      </div>
      <div class="row g-3">
        <div
          v-for="(con, key) in contents"
          :key="key"
          v-show="con.category == 'News Feed'"
          class="col-lg-4 col-md-6"
        >
          <div class="media-library-item card news-items">
            <img
              alt="..."
              class="card-img-top"
              :src="'https://b2bdemo.visathing.in/storage/Content/' + con.image"
            />
            <div class="item-content">
              <div class="news-item-header">
                <p>
                  <svg
                    fill="none"
                    height="13"
                    viewBox="0 0 10 13"
                    width="10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.333984 12.8335C0.333984 11.5958 0.82565 10.4088 1.70082 9.53366C2.57599 8.65849 3.76297 8.16683 5.00065 8.16683C6.23833 8.16683 7.42531 8.65849 8.30048 9.53366C9.17565 10.4088 9.66732 11.5958 9.66732 12.8335H0.333984ZM5.58398 9.38191V11.6668H8.30173C8.09321 11.0785 7.73136 10.5565 7.25357 10.1548C6.77579 9.75311 6.1994 9.48629 5.58398 9.38191ZM4.41732 11.6668V9.38191C3.8019 9.48629 3.22551 9.75311 2.74773 10.1548C2.26995 10.5565 1.90809 11.0785 1.69957 11.6668H4.41732ZM5.00065 7.5835C3.0669 7.5835 1.50065 6.01725 1.50065 4.0835C1.50065 2.14975 3.0669 0.583496 5.00065 0.583496C6.9344 0.583496 8.50065 2.14975 8.50065 4.0835C8.50065 6.01725 6.9344 7.5835 5.00065 7.5835ZM5.00065 6.41683C6.28982 6.41683 7.33398 5.37266 7.33398 4.0835C7.33398 2.79433 6.28982 1.75016 5.00065 1.75016C3.71148 1.75016 2.66732 2.79433 2.66732 4.0835C2.66732 5.37266 3.71148 6.41683 5.00065 6.41683Z"
                      fill="#86868B"
                    />
                  </svg>
                  Author Name
                </p>
                <p>
                  <svg
                    fill="none"
                    height="12"
                    viewBox="0 0 12 12"
                    width="12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.99935 11.8332C2.7776 11.8332 0.166016 9.22159 0.166016 5.99984C0.166016 2.77809 2.7776 0.166504 5.99935 0.166504C9.2211 0.166504 11.8327 2.77809 11.8327 5.99984C11.8327 9.22159 9.2211 11.8332 5.99935 11.8332ZM5.99935 10.6665C7.23703 10.6665 8.42401 10.1748 9.29918 9.29967C10.1744 8.4245 10.666 7.23751 10.666 5.99984C10.666 4.76216 10.1744 3.57518 9.29918 2.70001C8.42401 1.82484 7.23703 1.33317 5.99935 1.33317C4.76167 1.33317 3.57469 1.82484 2.69952 2.70001C1.82435 3.57518 1.33268 4.76216 1.33268 5.99984C1.33268 7.23751 1.82435 8.4245 2.69952 9.29967C3.57469 10.1748 4.76167 10.6665 5.99935 10.6665ZM6.58268 5.99984H8.91602V7.1665H5.41602V3.08317H6.58268V5.99984Z"
                      fill="#86868B"
                    />
                  </svg>
                  {{ formatDate(con.created_at) }}
                </p>
              </div>
              <div class="news-item-body py-0">
                <h3 class="news-item-title">{{ con.name }}</h3>
                <p class="news-item-text" v-html="con.summary"></p>
              </div>
              <div class="news-item-footer d-flex justify-content-between">
                <nuxt-link class="news-item-link" v-bind:to="'/blog/' + con.slug"
                  >Read More</nuxt-link>
                <a class="news-item-link" href="#">
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
                  <!--<span>5</span>--></a
                >
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
      .get("https://b2bdemo.visathing.in/api/country_name")
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