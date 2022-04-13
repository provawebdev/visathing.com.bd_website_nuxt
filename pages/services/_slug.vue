<template>
  <div>
    <nuxt-child :data="data" />
    <!-- Page Name -->
    <section class="page-name text-center">
      <div class="container">
        <h1>{{ data.name }}</h1>
      </div>
    </section>
    <!-- Page Name -->
    <!--Visa Consultancy Layout Start -->
    <section id="visa-consultancy-wrapper">
      <div class="container">
        <div class="row justify-content-center">
          <div :class="{ 'col-lg-12 col-md-12 mb-5': data.image === null }" class="col-lg-6 col-md-10 mb-5">
            <h2 class="fs-34 fs-sm-24 mb-3">{{ data.name }}</h2>
            <p v-html="data.body"></p>
          </div>
          <div v-if="data.image" class="col-lg-6 col-md-10">
            <img
              :src="'https://b2bdemo.visathing.in/storage/Submenu/' + data.image"
              class="rounded img-fluid"
              :alt="data.name"
            />
          </div>
        </div>
        <!-- <div class="content-box content-box-4 my-120">
                <div class="row justify-content-center">
                    <div class="col-lg-6 col-10 order-1 order-lg-0">
                        <div class="content-image">
                            <img src="" class="img-fluid" alt="">
                        </div>
                    </div>
                    <div class="col-lg-6 col-10 ">
                        <div class="content-text">
                            <h2>hhh</h2>
                            <p> </p>
                           <ul class="reason-list">
                                <li><span>01</span>
                                    <p>Studying Your Background & Travel History.</p>
                                </li>
                                <li><span>02</span>
                                    <p>Creating Checklist based on Profile Merit.</p>
                                </li>
                                <li><span>03</span>
                                    <p>Identifying Loop Holes and Eliminating those.</p>
                                </li>
                                <li><span>04</span>
                                    <p>Preparing Best Visa Application Approach.</p>
                                </li>
                            </ul>
                            <p><span>Please Note:</span>&nbsp;Our Consultancy Fee is excluding Logistics Fee,
                                Visa Fee, VFS Fee, Translation & Notary, Asset Declaration, Travel Insurance
                                and/or other related charges. Our service is to properly guide you to prepare
                                your visa application documents both in verbal & written forms.
                            </p>
                        </div>
                    </div>
                </div>
            </div> -->

        <div class="row justify-content-center">
          <!-- line 1 -->
          <div
            v-for="(con, key) in data.contents"
            :key="key"
            v-show="con.body == NULL"
            class="col-lg-3 col-md-4 col-10 mb-4"
          >
            <div class="online-application box-item">
              <div class="icon-box">
                <img
                  :src="'https://b2bdemo.visathing.in/storage/Content/' + con.image"
                  :alt="con.name"
                />
              </div>
              <div class="box-title">
                <p class="fs-16">{{ con.name }}</p>
              </div>
            </div>
          </div>
          <!-- line 1 -->

          <div class="col-11 col-lg-12 col-md-10">
            <div class="visathing-best">
              <div class="d-flex justify-content-center">
                <div class="accordion faq-wrapper w-100" id="accordionExample">
                  <div
                    v-for="(con, key) in data.contents"
                    :key="key"
                    v-show="con.body != NULL"
                    class="accordion-item"
                  >
                    <h2 class="accordion-header" v-bind:id="'headingOne' + key">
                      <button
                        class="accordion-button"
                        :class="{ collapsed: key !== 0 }"
                        type="button"
                        data-bs-toggle="collapse"
                        v-bind:data-bs-target="'#collapseOne' + key"
                        aria-expanded="true"
                        v-bind:aria-controls="'collapseOne' + key"
                      >
                        {{ con.name }}
                      </button>
                    </h2>
                    <div
                      v-bind:id="'collapseOne' + key"
                      class="accordion-collapse collapse"
                      :class="{ show: key === 0 }"
                      v-bind:aria-labelledby="'headingOne' + key"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <p v-html="con.body"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Visa Consultancy Layout End -->
    <!--Visa Consultancy Layout Bottom Box Start -->
    <section id="visa-consultancy-bottom-box">
      <div class="container"></div>
    </section>
    <!--Visa Consultancy Layout Bottom Box End -->
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
      title: "",
      titleTemplate: `%s ${this.data.name} - VISAThing`,
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
      .get("https://b2bdemo.visathing.in/api/ser_list/" + this.$route.params.slug)
      .then((response) => {
        this.data = response.data.data;
        this.service = response.data.service;
        console.log(response.data.service);
      });
  },
};
</script>
