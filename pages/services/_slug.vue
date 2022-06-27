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
          <div
            :class="{ 'col-lg-12 col-md-12 mb-5': data.image === null }"
            class="col-lg-6 col-md-10 mb-5"
          >
            <div v-html="data.body"></div>
          </div>
          <div v-if="data.image" class="col-lg-6 col-md-10">
            <img
              :src="
                'https://b2bdemo.visathing.in/storage/Submenu/' + data.image
              "
              class="rounded img-fluid"
              :alt="data.name"
            />
          </div>
        </div>
      </div>
    </section>
     <section id="visa-consultancy-wrapper" class="bg-gray">
      <div class="container">
        <div class="row justify-content-center">
          <div
            v-for="(con, key) in data.contents"
            :key="key"
            v-show="con.image !== NULL"
            class="col-lg-3 col-md-4 col-10 mb-4"
          >
            <div class="row">
              <div class="col-lg-10 col-md-10 col-10">
                <div class="online-application box-item">
                  <div class="icon-box">
                    <img
                      style="height: 51px; width: 51px"
                      :src="
                        'https://b2bdemo.visathing.in/storage/Content/' +
                        con.image
                      "
                      :alt="con.name"
                    />
                  </div>
                  <div class="box-title">
                    <p class="fs-16">{{ con.name }}</p>
                  </div>
                </div>
              </div>
              <div
                class="arrow-box col-lg-2 col-md-2 col-2" v-if="key +1 < data.contents.length"
                style="
                  justify-items: center;
                  justify-content: center;
                  text-align: center;
                  margin: auto;
                "
              >
                <i
                  class="far fa-arrow-alt-circle-right"
                  style="font-size: 36px"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
     </section>
    <section id="visa-consultancy-wrapper">
       <div class="container" v-for="(con, key2) in data.contents" :key="key2">
        <div v-if="((key2 +1) % 2 == 0)" class="content-box content-box-2">
          <div class="row">
            <div class="col-lg-6 col-12" >
              <div class="content-text">
                <h2 class="fs-34 fs-sm-24 mb-3">{{con.name}}</h2>
                <div v-html="con.body"> </div>
                 </div>
            </div>
            <div class="col-lg-6 col-12">
              <div class="content-image">
                <img :src="'https://b2bdemo.visathing.in/storage/Content/' + con.image2" class="img-fluid" :alt="con.name"> 
              </div>
            </div>
          </div>
        </div>
        <div v-else class="content-box content-box-3" >
          <div class="row">
            <div class="col-lg-6 col-12 order-1 order-lg-0">
              <div class="content-image">
                 <img :src="'https://b2bdemo.visathing.in/storage/Content/' + con.image2" class="img-fluid" alt=""> 
              </div>
            </div>
            <div class="col-lg-6 col-12">
              <div class="content-text">
                <h2 class="fs-34 fs-sm-24 mb-3">{{con.name}} </h2>
               <div v-html="con.body"> </div>
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
      title: `${this.data.name}`,
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
      service: [],
    };
  },
  created() {
    this.$axios
      .get(
        "https://b2bdemo.visathing.in/api/ser_list/" + this.$route.params.slug
      )
      .then((response) => {
        this.data = response.data.data;
        this.service = response.data.service;
        // console.log(response.data.data);
      });
  },
};
</script>
