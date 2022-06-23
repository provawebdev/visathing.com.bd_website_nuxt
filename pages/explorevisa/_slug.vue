<template>
  <div>
    <nuxt-child :data="data" />
    <section class="page-name text-center">
      <div class="container">
        <h1>{{ data.name }}</h1>
      </div>
    </section>
    <section class="page-content visa-free flexible-submission">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="content-text text-center">
              <h2> {{ data.title }} </h2>
              <p v-html="data.body"></p>
            </div>
          </div>
          <div class="col-12">
            <div class="content-image-gallery">
              <div class="row justify-content-center">
                <div v-for="(cty, c) in data.countries_explore"
                :key="c" class="col-auto">
                  <div class="flag-info text-center">
                    <img class="img-fluid" :alt="cty.name"
                    :src="'https://b2bdemo.visathing.in/storage/flag/' + cty.flag"/>
                    <h3>{{cty.name}}</h3>
                  </div>
                </div>
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
      title: "${this.data.name}",
      titleTemplate: `${this.data.name} - Service`,
    };
  },
  data() {
    return {
      service: [],
      data: [],
    };
  },
  created() {
    this.$axios
      .get(
        "https://b2bdemo.visathing.in/api/explore_visa/" +
          this.$route.params.slug
      )
      .then((response) => {
        this.data = response.data.data;
       //console.log(response.data.data);
      });
  },
};
</script>
