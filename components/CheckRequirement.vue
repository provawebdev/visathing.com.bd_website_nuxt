<template>
  <div>
    <!-- Hero section Start -->
    <section id="hero">
      <div class="container">
        <!-- Hero Content -->

        <div class="hero-content">
          <h1 class="hero-title">Your Visa Partner.</h1>
          <h2 class="hero-subtitle">Need a Visa?</h2>
        </div>
        <form role="form" @submit.prevent="submit">
          <div class="requirement-checker">
            <div class="select-box">
              <label>I'm a Citizen Of</label>
              <select
                aria-label="select"
                class="form-select select-option"
                v-model="fields.cityzen_cty"
              >
                <option value="" selected>Select Your Cityzen Country</option>
                <option value="1">Bangladesh</option>
              </select>
            </div>
            <div class="select-box">
              <label>Travelling to</label>
              <select
                aria-label="select"
                class="form-select select-option"
                v-model="fields.search"
              >
               <option value="" selected> Select Country </option>
                <option
                  v-for="(cty, key) in country_list"
                  :key="key"
                  :value="key"
                >
                  {{ cty }}
                </option>
              </select>
            </div>
            <div class="select-box">
              <label>Purpose of Travelling</label>
              <select
                aria-label="select"
                class="form-select select-option"
                v-model="fields.travel_purpose"
              >
                <option value="" selected>Choose if you want</option>
                <option
                  v-for="(tvl, tvl_key) in tvl_purpose"
                  :key="tvl_key"
                  :value="tvl_key"
                >
                  {{ tvl }}
                </option>
              </select>
            </div>
            <button class="btn-gradient" type="submit">
              Check Requirements
              <!-- <nuxt-link v-bind:to="'/' + fields.search"> Check Requirements </nuxt-link> -->
            </button>
          </div>
        </form>
      </div>
    </section>
    <!-- Hero section End -->
  </div>
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
      country_list: [],
      tvl_purpose: [],
      search: "",
      travel_purpose: "",
      cityzen_cty: "",
      fields: {
        search: "",
        travel_purpose: "",
        cityzen_cty: "",
      },
    };
  },
  created() {
    this.$axios
      .get("https://b2bdemo.visathing.in/api/country_name")
      .then((response) => {
        this.country_list = response.data.country_list;
        this.tvl_purpose = response.data.tvl_purpose;
      });
  },
  methods: {
    submit() {
      this.$axios
        .post("https://b2bdemo.visathing.in/api/country_search/" + this.fields.search)
        .then(
          //  (response) => (this.allusers = response.data)
          ({ data }) => (
            (this.travel_purpose = this.fields.travel_purpose),
            (this.cityzen_cty = this.fields.cityzen_cty),
            (this.fields = {}),
            console.log(data)
          )
        )
        .catch((error) => console.log(error));
      if (this.fields) {
        this.$router
          .push({
            path: "/" + this.fields.search,
            slug: this.fields.search,
            // params: { name: this.fields.travel_purpose },
            // query: {
            //   travel_purpose: this.fields.travel_purpose,
            //   cityzen_cty: this.fields.cityzen_cty,
            // },
          })
          .bind(this.fields);
      }
    },

    // submit() {
    //   this.$router
    //     .push({
    //       path: "/" + this.fields.search,
    //       slug: this.fields,
    //       travel_purpose: this.fields.travel_purpose,
    //       cityzen_cty: this.fields.cityzen_cty,
    //       params: { name: this.fields.travel_purpose},
    //     })
    //     .bind(this.fields);
    // },
  },
};
</script>