<template>
  <div>
   <nuxt-child :data="data" />
     <!-- Page Name -->
    <section class="page-name text-center">
        <div class="container">
            <h1>{{data.name}}</h1>
        </div>
    </section>
    <!-- Page Name -->
    <!-- Page Content Start-->
    <section class="page-content">
        <div class="container">
            <div class="content-box">
            <div v-html="data.body"></div>
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
      titleTemplate: `${this.data.meta_title}`,
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
    };
  },
  created() {
    this.$axios.get("https://b2bdemo.visathing.in/api/refund_menu/").then((response) => {
      this.data = response.data.refund;
    });
  },
};
</script>