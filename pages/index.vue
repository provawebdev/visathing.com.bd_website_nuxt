<template>
  <div>
    <CheckRequirement />
    <ExploreVisa />
    <Services />
    <!-- <EasySteps /> -->
    <EligibilityChecking />
    <MediaLibrary />
    <NewsFeed />
  </div>
</template>

<script>
import axios from "axios";
import Logo from "~/components/NuxtLogo.vue";
import CheckRequirement from "../components/CheckRequirement";
import ExploreVisa from "../components/ExploreVisa";
import EligibilityChecking from "../components/EligibilityChecking";
import EasySteps from "../components/EasySteps";
import Services from "../components/Services";
import MediaLibrary from "../components/MediaLibrary";
import NewsFeed from "../components/NewsFeed";

import {
  cacheAdapterEnhancer,
  throttleAdapterEnhancer,
} from "axios-extensions";

export default {
  components: {
    Logo,
    CheckRequirement,
    ExploreVisa,
    EligibilityChecking,
    EasySteps,
    Services,
    MediaLibrary,
    NewsFeed,
  },
  mounted() {
    if (!process.server && window.jQuery) {
    }
  },
  head() {
    return {
      title: "VISAThing - Your visa partner",
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
    this.$axios.get("https://b2bdemo.visathing.in/api/home_menu/").then((response) => {
      this.data = response.data.home;
    });
  },

};
</script>