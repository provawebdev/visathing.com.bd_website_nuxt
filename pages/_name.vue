<template>
  <div>
    <nuxt-child :service="service" />
    <!-- Page Name -->
    <section class="page-name text-center">
      <div class="container">
        <h1>{{service.name}}</h1>
      </div>
    </section>
    <!-- Page Name -->
    <!-- Visa Processing in India Layout Start -->
    <section id="visa-india-wrapper">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-10 mb-4">
            <h2 class="fs-34 fs-sm-24 mb-3">Visa Processing in India</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              tellus pellentesque gravida egestas sem molestie. Sit accumsan
              mattis a vel netus accumsan, pellentesque tellus. Morbi ligula
              laoreet duis blandit duis. Cursus quis dui pellentesque vulputate
              quis aenean egestas. Euismod morbi ultricies rhoncus sollicitudin
              praesent.
            </p>
            <p>
              Eget pretium mauris pulvinar in. Venenatis nunc, dolor in tortor
              commodo elementum aenean. In amet, nibh scelerisque adipiscing
              habitant. Turpis tempus, libero varius mi pellentesque eget
              lectus. Nisl, dui, consectetur eget eget sed.Aliquam odio massa
              quam egestas erat tempor amet velit urna. Viverra auctor arcu
              ultrices cursus sapien in in arcu. Pharetra id hendrerit donec
              venenatis gravida blandit quam euismod. Id vel pharetra sit
              pellentesque felis, sociis.
            </p>
          </div>
          <div class="col-lg-6 col-md-10">
            <img
              src="assets/img/processing-india.png"
              class="text-center rounded img-fluid"
              alt="processing-image"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- Visa Processing in India Layout End -->
  </div>
</template>
<script>
import axios from "axios";
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
      titleTemplate: `%s ${this.service.name} - VISAThing`,
    };
  },
  data() {
    return {
      services: [],
      service: [],
    };
  },
  created() {
    this.$axios.get("http://localhost:8084/api/ser_list/"+ this.$route.params.name).then((response) => {
      this.service = response.data.service;
      console.log( response.data);
    });
  },
};
</script>
