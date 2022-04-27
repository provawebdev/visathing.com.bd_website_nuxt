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
                v-model="fields.search" required
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
              <label>Visa Category</label>
              <select
                aria-label="select"
                class="form-select select-option"
                v-model="fields.v_category"
              >
                <option value="" selected>Choose if you want</option>
                <option
                  v-for="(v_category, vc_key) in v_categories"
                  :key="vc_key"
                  :value="v_category.id"
                >
                  {{ v_category.name }}
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
      v_categories: [],
      search: "",
      v_category: "",
      cityzen_cty: "",
      fields: {
        search: "",
        v_category: "",
        cityzen_cty: "",
      },
    };
  },
  created() {
    this.$axios
      .get("https://b2bdemo.visathing.in/api/country_name")
      .then((response) => {
        this.country_list = response.data.country_list;
        this.v_categories = response.data.v_categories;
      });
  },
  methods: {
    submit() {
      this.$axios
        .post("https://b2bdemo.visathing.in/api/country_search/" + this.fields.search ,   {
        search: this.fields.search, 
        v_category: this.fields.v_category,
        cityzen_cty: this.fields.cityzen_cty
    },)
        
        .then(
          //  (response) => (this.allusers = response.data)
          ({ data }) => (
           // (this.v_category = this.fields.v_category),
           // (this.cityzen_cty = this.fields.cityzen_cty),
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
            // params: { name: this.fields.v_category },
            // query: {
            //   v_category: this.fields.v_category,
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
    //       v_category: this.fields.v_category,
    //       cityzen_cty: this.fields.cityzen_cty,
    //       params: { name: this.fields.v_category},
    //     })
    //     .bind(this.fields);
    // },
  },
};
</script>