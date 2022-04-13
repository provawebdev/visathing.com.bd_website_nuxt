<template>
  <div>
    <CheckRequirement />
    <ExploreVisa />
    <EligibilityChecking />
    <EasySteps />
    <Services />
    <MediaLibrary />
    <NewsFeed />

    <!-- Partner Section Start  -->
    <section id="partner-section">
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
    </section>
    <!-- Partner Section End  -->
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
    };
  },
  data() {
    return {};
  },

//   methods: {
//     getApi() {
//       this.$axios
//         .get("http://localhost:8084/api/country_name")
//         .then((response) => {
//           console.log(response.data);
//         });
//     },
//   },
};
</script>