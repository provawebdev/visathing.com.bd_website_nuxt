<template>
  <div>
    <CheckRequirement />
    <ExploreVisa />
    <Services />
    <!-- <EasySteps /> -->
    <EligibilityChecking />
    <MediaLibrary />
    <NewsFeed />

    <!-- <section id="partner-section">
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col">
            <img alt="" class="img-fluid" src="~/assets/img/partner-1.png" />
          </div>
          <div class="col-2">
            <img alt="" class="img-fluid" src="~/assets/img/partner-2.png" />
          </div>
          <div class="col-3">
            <img alt="" class="img-fluid" src="~/assets/img/partner-3.png" />
          </div>
          <div class="col-3">
            <img alt="" class="img-fluid" src="~/assets/img/partner-4.png" />
          </div>
          <div class="col-3">
            <img alt="" class="img-fluid" src="~/assets/img/partner-5.png" />
          </div>
        </div>
      </div>
    </section> -->
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
      titleTemplate: `${this.data.name} - Visa From Bangladesh`,
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
    this.$axios.get("https://b2bdemo.visathing.in/api/manu_list/").then((response) => {
      this.data = response.data.home;
    });
  },

};
</script>