<template>
  <div>
   <nuxt-child :data="data" />
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
  baseURL: "http://localhost:8084/api",

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
    this.$axios.get("http://localhost:8084/api/manu_list/").then((response) => {
      this.data = response.data.about;
      console.log( response.data.about);
    });
  },
};
</script>