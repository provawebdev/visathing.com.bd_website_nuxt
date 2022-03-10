<template>
  <div>
    <!-- Hero section Start -->
    <section id="hero">
      <div class="container">
        <!-- Hero Content -->

        <div class="hero-content">
          <h1 @click="getApi" class="hero-title">Your Visa Partner.</h1>
          <h2 class="hero-subtitle">Need a Visa?</h2>
        </div>
        <div class="requirement-checker">
          <div class="select-box">
            <label>I'm a Citizen Of</label>
            <select aria-label="select" class="form-select select-option">
              <option selected>Bangladesh</option>
              <option value="1">Bangladesh</option>
            </select>
          </div>
          <div class="select-box">
            <label>Travelling to</label>
            <select aria-label="select" class="form-select select-option">
              <option selected>Belgium</option>
              <option value="1">Belgium</option>
            </select>
          </div>
          <div class="select-box">
            <label>Purpose of Travelling</label>
            <select aria-label="select" class="form-select select-option">
              <option selected>Choose if you want</option>
              <option value="1">One</option>
            </select>
          </div>
          <button class="btn-gradient">
            <a href="/basic-information.html">Check Requirements</a>
          </button>
        </div>
      </div>
    </section>
    <!-- Hero section End -->

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