<template>
  <div>
   <nuxt-child :data="data" />
    <!-- Page Name -->
    <section class="page-name text-center">
      <div class="container">
        <h1>{{data.name}}</h1>
      </div>
    </section>
    <!-- Page Name -->
    <!-- Page Content Start-->
    <section class="page-content">
      <div class="container">
        <div class="content-box content-box-1">
          <div class="row align-items-center">
            <div class="col-lg-6 col-12 order-1 order-lg-0">
              <div class="content-image">
                <img :src="'https://b2bdemo.visathing.in/storage/Menu/' + data.image" class="img-fluid" :alt="data.name">
              </div>
            </div>
            <div class="col-lg-6 col-12">
              <div class="content-text">
                <div v-html="data.body"> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div class="container" v-for="(con, key2) in data.contents" :key="key2">
        <div v-show="key2 == 0" class="content-box content-box-2">
          <div class="row">
            <div class="col-lg-6 col-12" >
              <div class="content-text">
                <h2>{{con.name}} </h2>
                <div v-html="con.body"> </div>
                 </div>
            </div>
            <div class="col-lg-6 col-12">
              <div class="content-image">
                <img :src="'https://b2bdemo.visathing.in/storage/Content/' + con.image" class="img-fluid" :alt="con.name"> 
              </div>
            </div>
          </div>
        </div>
        <div v-show="key2 == 1" class="content-box content-box-3" >
          <div class="row">
            <div class="col-lg-6 col-12 order-1 order-lg-0">
              <div class="content-image">
                 <img :src="'https://b2bdemo.visathing.in/storage/Content/' + con.image" class="img-fluid" alt=""> 
              </div>
            </div>
            <div class="col-lg-6 col-12">
              <div class="content-text">
                <h2>{{con.name}} </h2>
               <div v-html="con.body"> </div>
              </div>
            </div>
          </div>
        </div>
        <div v-show="key2 == 2" class="content-box content-box-4">
          <div class="row">
            <div class="col-lg-6 col-12">
              <div class="content-text">
                <h2>{{con.name}} </h2>
                <div v-html="con.body"> </div>
                <!-- <ul class="reason-list">
                  <li>
                    <span>01</span>
                    <p>
                      We prioritize the quality of services and care for every
                      individual traveler.
                    </p>
                  </li>
                  <li>
                    <span>02</span>
                    <p>We are fast, efficient and simple</p>
                  </li>
                 
                </ul> -->
               
              </div>
            </div>
            <div class="col-lg-6 col-12">
              <div class="content-image">
                 <img :src="'https://b2bdemo.visathing.in/storage/Content/' + con.image" class="img-fluid" alt=""> 
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
import bgImg from "assets/img/basic-checklist-banner.png";
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
      datas: {},
      data: [],
      image: bgImg,
    };
  },
  created() {
    this.$axios.get("https://b2bdemo.visathing.in/api/manu_list/").then((response) => {
      this.data = response.data.about;
    //  console.log( response.data.about);
    });
  },
};
</script>