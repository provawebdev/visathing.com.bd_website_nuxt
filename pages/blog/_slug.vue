<template>
  <div>
    <nuxt-child :data="data" />
    <!-- Page Name -->
    <section class="page-name text-center">
      <div class="container">
        <h1>{{ data.name }}</h1>
      </div>
    </section>
    <section class="page-content blog blog-details">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-7">
            <div class="media-library-item card news-item shadow-none h-auto">
              <h3 class="news-item-title">{{ data.name }}</h3>
              <div class="news-item-header">
                <p>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.99935 11.8332C2.7776 11.8332 0.166016 9.22159 0.166016 5.99984C0.166016 2.77809 2.7776 0.166504 5.99935 0.166504C9.2211 0.166504 11.8327 2.77809 11.8327 5.99984C11.8327 9.22159 9.2211 11.8332 5.99935 11.8332ZM5.99935 10.6665C7.23703 10.6665 8.42401 10.1748 9.29918 9.29967C10.1744 8.4245 10.666 7.23751 10.666 5.99984C10.666 4.76216 10.1744 3.57518 9.29918 2.70001C8.42401 1.82484 7.23703 1.33317 5.99935 1.33317C4.76167 1.33317 3.57469 1.82484 2.69952 2.70001C1.82435 3.57518 1.33268 4.76216 1.33268 5.99984C1.33268 7.23751 1.82435 8.4245 2.69952 9.29967C3.57469 10.1748 4.76167 10.6665 5.99935 10.6665ZM6.58268 5.99984H8.91602V7.1665H5.41602V3.08317H6.58268V5.99984Z"
                      fill="#86868B"
                    /></svg
                  >{{ formatDate(data.created_at) }}
                </p>
              </div>
              <img
                :src="'https://b2bdemo.visathing.in/storage/Content/' + data.image"
                class="img-fluid"
                :alt="data.name"
              />
              <div v-html="data.body"></div>
            </div>
          </div>
          <div class="col-lg-4 col-md-5">
            <div class="sidebar sticky-md-top">
              <form
                class="
                  d-none d-md-flex
                  blog-search-bar
                  align-items-center
                  justify-content-between
                "
              >
                <input type="text" placeholder="Search" />
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z"
                    fill="#86868B"
                  />
                </svg>
              </form>
              <div class="latest-posts-block">
                <h3 class="sidebar-block-name">Latest Posts</h3>
                <div
                  v-for="(con, key) in contents"
                  :key="key"
                  class="post-item d-flex align-items-start"
                >
                  <img
                    :src="'https://b2bdemo.visathing.in/storage/Content/' + con.image" class="img-responsive col-md-3"
                    :alt="con.name"
                  />
                  <div class="post-item-body">
                    <p class="post-item-title">
                      <nuxt-link v-bind:to="'/blog/'+con.slug">{{ con.name }}</nuxt-link>
                    </p>
                    <p class="post-item-time">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.0013 11.8333C2.77955 11.8333 0.167969 9.22174 0.167969 5.99999C0.167969 2.77824 2.77955 0.166656 6.0013 0.166656C9.22305 0.166656 11.8346 2.77824 11.8346 5.99999C11.8346 9.22174 9.22305 11.8333 6.0013 11.8333ZM6.0013 10.6667C7.23898 10.6667 8.42596 10.175 9.30113 9.29982C10.1763 8.42465 10.668 7.23767 10.668 5.99999C10.668 4.76231 10.1763 3.57533 9.30113 2.70016C8.42596 1.82499 7.23898 1.33332 6.0013 1.33332C4.76363 1.33332 3.57664 1.82499 2.70147 2.70016C1.8263 3.57533 1.33464 4.76231 1.33464 5.99999C1.33464 7.23767 1.8263 8.42465 2.70147 9.29982C3.57664 10.175 4.76363 10.6667 6.0013 10.6667ZM6.58464 5.99999H8.91797V7.16666H5.41797V3.08332H6.58464V5.99999Z"
                          fill="#86868B"
                        /></svg
                      ><span>{{ formatDate(con.created_at) }}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="categories-block">
                <h3 class="sidebar-block-name">Categories</h3>
                <ul class="categories-list">
                  <li class="d-flex justify-content-between align-items-center">
                    <span>Visa</span> <span>5</span>
                  </li>
                  <li class="d-flex justify-content-between align-items-center">
                    <span>Passport</span> <span>5</span>
                  </li>
                  <li class="d-flex justify-content-between align-items-center">
                    <span>Work visa</span>
                    <span>5</span>
                  </li>
                  <li class="d-flex justify-content-between align-items-center">
                    <span>Student visa</span> <span>5</span>
                  </li>
                  <li class="d-flex justify-content-between align-items-center">
                    <span>Business</span> <span>5</span>
                  </li>
                </ul>
              </div>
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
      title: `${this.data.name}`,
      titleTemplate: `${this.data.name}`,
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content: this.data.meta_keywords,
        },
        {
          hid: "description",
          name: "description",
          content: this.data.meta_description,
        },
        {
          hid: "author",
          name: "author",
          content: "Afroza Akter Prova",
        },
        // Open Graph
        {
          hid: "og:title",
          property: "og:title",
          content: this.data.meta_title,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.data.meta_description,
        },
        // Twitter Card
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.data.meta_title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.data.meta_description,
        },
      ],
    };
  },
  data() {
    return {
      data: [],
      contents: [],
      image: bgImg,
    };
  },
  created() {
    this.$axios
      .get("https://b2bdemo.visathing.in/api/content_show/" + this.$route.params.slug)
      .then((response) => {
        this.data = response.data.content;
        this.contents = response.data.contents;
       // console.log(response.data.content);
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