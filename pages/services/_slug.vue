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
            :class="{ 'col-lg-12 col-md-12 mb-5': data.image > 0 }"
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
            v-show="con.image"
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
                class="arrow-box col-lg-2 col-md-2 col-2"
                v-if="(con.image) && (key + 2 < data.contents.length)"
              >
                <i v-if="con.image"
                  class="far fa-arrow-alt-circle-right"
                  style="font-size: 36px"
                ></i>
              </div>
              <div
                class="arrow-box col-lg-2 col-md-2 col-2"
                v-else-if="key + 1 < data.contents.length"
              >
                <i v-if="con.image"
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
        <div v-if="(key2 + 1) % 2 == 0" class="content-box content-box-2">
          <div class="row" v-if="con.image2">
            <div
              :class="{ 'col-lg-12 col-12': con.image2 > 0 }"
              class="col-lg-6 col-12"
            >
              <div class="content-text">
                <h2 class="fs-34 fs-sm-24 mb-3">{{ con.name }}</h2>
                <div v-html="con.body"></div>
              </div>
            </div>
            <div v-if="con.image2" class="col-lg-6 col-12">
              <div class="content-image">
                <img
                  :src="
                    'https://b2bdemo.visathing.in/storage/Content/' + con.image2
                  "
                  class="img-fluid"
                  :alt="con.name"
                />
              </div>
            </div>
          </div>
           <div class="row" v-else>
            <div
              class="col-lg-12 col-12"
            >
              <div class="content-text">
                <h2 class="fs-34 fs-sm-24 mb-3">{{ con.name }}</h2>
                <div v-html="con.body"></div>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="content-box content-box-3">
          <div class="row">
            <div v-if="con.image2" class="col-lg-6 col-12 order-1 order-lg-0">
              <div class="content-image">
                <img
                  :src="
                    'https://b2bdemo.visathing.in/storage/Content/' + con.image2
                  "
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div
              :class="{ 'col-lg-12 col-12': con.image2 > 0}"
              class="col-lg-6 col-12"
            >
              <div class="content-text">
                <h2 class="fs-34 fs-sm-24 mb-3">{{ con.name }}</h2>
                <div v-html="con.body"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div class="container" v-if="service.cty_services">
        <div class="flag-slider-wrapper">
          <div
            v-swiper="swiperOption"
            class="w-5/6 ml-auto relative swiper-container flag-slider"
            :loadtheme="true"
          >
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="(cty1, c1) in service.cty_services"
                :key="c1"
              >
                <img
                  v-if="cty1.flag"
                  style="height: 126px"
                  :alt="cty1.name"
                  :src="
                    'https://b2bdemo.visathing.in/storage/flag/' + cty1.flag
                  "
                />
                <nuxt-link v-bind:to="'/' + cty1.slug" target="_blank"><p>{{ cty1.name }}</p></nuxt-link>
              </div>
            </div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </div>
        </div>
      </div>
    </section>
 
  </div>
</template>
<script>
import axios from "axios";
import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);
import { directive } from "vue-awesome-swiper";
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
   directives: {
    swiper: directive,
  },
  head() {
    return {
      title: `${this.data.name}`,
      titleTemplate: `${this.data.meta_title}`,
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
       swiperOption: {
        slidesPerView: 5,
        spaceBetween: -10,
        slidesPerGroup: 5,
        loop: true,
        loopFillGroupWithBlank: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        },
      },
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
        // console.log(response.data.service);
      });
  },
};
</script>
