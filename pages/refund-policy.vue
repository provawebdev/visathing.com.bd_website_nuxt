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
      title: "",
      titleTemplate: `%s ${this.$route.name} - VISAThing`,
    };
  },
  data() {
    return {
      data: [],
      image: bgImg,
    };
  },
  created() {
    this.$axios.get("https://b2bdemo.visathing.in/api/manu_list/").then((response) => {
      this.data = response.data.refund;
     // console.log( response.data.about);
    });
  },
};
</script>