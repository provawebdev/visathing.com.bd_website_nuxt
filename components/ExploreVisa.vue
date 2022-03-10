<template>
  <!-- Explore Section Start -->
  <section id="explore">
    <div class="container">
      <div class="section-header">
        <h2 class="danger">Explore Your Visa</h2>
      </div>

      <div class="row justify-content-md-between justify-content-center mb-4">
        <div
          class="col-md-2 col-4"
          v-for="(data, key) in data_all"
          :key="key"
          v-show="key == 0"
        >
          <a
            href="/visa-free.html"
            class="tablinks"
            onmouseover="openCity(event,'exploreVisa0')"
          >
            <div class="step-box border-radius-5 text-center">
              <h3>{{ data.name }}</h3>
              <p>({{ data.countries_explore.length }} Countries)</p>
            </div>
          </a>
        </div>
        <div
          class="col-md-2 col-4"
          v-for="(data2, key2) in data_all"
          :key="key2"
          v-show="key2 == 1"
        >
          <a
            href="/on-arrival-visa.html"
            class="tablinks"
            onmouseover="openCity(event, 'exploreVisa1')"
          >
            <div class="step-box border-radius-5 text-center">
              <h3>{{ data2.name }}</h3>
              <p>({{ data2.countries_explore.length }} Countries)</p>
            </div>
          </a>
        </div>
        <div
          class="col-md-2 col-4"
          v-for="(data3, key3) in data_all"
          :key="key3"
          v-show="key3 == 2"
        >
          <a
            href="/e-visa.html"
            class="tablinks"
            onmouseover="openCity(event, 'exploreVisa2')"
          >
            <div class="step-box border-radius-5 text-center">
              <h3>{{ data3.name }}</h3>
              <p>({{ data3.countries_explore.length }} Countries)</p>
            </div>
          </a>
        </div>
        <div class="col-12 d-md-none">
          <div class="divider-lg"></div>
        </div>
        <div
          class="col-md-2 col-4"
          v-for="(data4, key4) in data_all"
          :key="key4"
          v-show="key4 == 3"
        >
          <a
            href="/flexible-submission.html"
            class="tablinks"
            onmouseover="openCity(event, 'exploreVisa3')"
          >
            <div class="step-box border-radius-5 text-center">
              <h3>{{ data4.name }}</h3>
              <p>({{ data4.countries_explore.length }} Countries)</p>
            </div>
          </a>
        </div>
        <div
          class="col-md-2 col-4"
          v-for="(data5, key5) in data_all"
          :key="key5"
          v-show="key5 == 4"
        >
          <a
            href="/flexible-submission.html"
            class="tablinks"
            onmouseover="openCity(event, 'exploreVisa4')"
          >
            <div class="step-box border-radius-5 text-center">
              <h3>{{ data5.name }}</h3>
              <p>({{ data5.countries_explore.length }} Countries)</p>
            </div>
          </a>
        </div>
      </div>
      <!-- Swiper -->

      <div id="exploreVisa0" class="tabcontent">
        <!-- Swiper -->
        <div class="flag-slider-wrapper">
          <div
            v-swiper="swiperOption"
            class="w-5/6 ml-auto relative swiper-container flag-slider"
            :loadtheme="true"
          >
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="(cty1, c1) in datas1.countries_explore"
                :key="c1"
              >
                <img
                  class="h-64 w-64"
                  style="height: 124px; width: 190px"
                  :alt="cty1.name"
                  :src="'http://localhost:8084/storage/flag/' + cty1.flag"
                />
                <p>{{ cty1.name }}</p>
              </div>
            </div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </div>
        </div>
      </div>
      <div id="exploreVisa1" class="tabcontent" style="display: none">
        <!-- Swiper -->
        <div class="flag-slider-wrapper">
          <div
            v-swiper:mySwiper="swiperOption2"
            class="w-5/6 ml-auto relative swiper-container flag-slider clearfix"
            :loadtheme="false"
          >
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="(cty2, c2) in datas2.countries_explore"
                :key="c2"
              >
                <img
                  class="h-64 w-64"
                  style="height: 124px; width: 190px"
                  :alt="cty2.name"
                  :src="'http://localhost:8084/storage/flag/' + cty2.flag"
                />
                <p>{{ cty2.name }}</p>
              </div>
            </div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </div>
        </div>
      </div>
      <div id="exploreVisa2" class="tabcontent" style="display: none">
        <!-- Swiper -->
        <div class="flag-slider-wrapper">
          <div
            v-swiper:mySwiper3="swiperOption3"
            class="w-5/6 ml-auto relative swiper-container flag-slider clearfix"
            :loadtheme="false"
          >
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="(cty3, c3) in datas3.countries_explore"
                :key="c3"
              >
                <img
                  class="h-64 w-64"
                  style="height: 124px; width: 190px"
                  :alt="cty3.name"
                  :src="'http://localhost:8084/storage/flag/' + cty3.flag"
                />
                <p>{{ cty3.name }}</p>
              </div>
            </div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </div>
        </div>
      </div>
      <div id="exploreVisa3" class="tabcontent" style="display: none">
        <!-- Swiper -->
        <div class="flag-slider-wrapper">
          <div
            v-swiper:mySwiper4="swiperOption4"
            class="w-5/6 ml-auto relative swiper-container flag-slider clearfix"
            :loadtheme="false"
          >
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="(cty4, c4) in datas4.countries_explore"
                :key="c4"
              >
                <img
                  class="h-64 w-64"
                  style="height: 124px; width: 190px"
                  :alt="cty4.name"
                  :src="'http://localhost:8084/storage/flag/' + cty4.flag"
                />
                <p>{{ cty4.name }}</p>
              </div>
            </div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </div>
        </div>
      </div>
      <div id="exploreVisa4" class="tabcontent" style="display: none">
        <!-- Swiper -->
        <div class="flag-slider-wrapper">
          <div
            v-swiper:mySwiper5="swiperOption5"
            class="w-5/6 ml-auto relative swiper-container flag-slider clearfix"
            :loadtheme="false"
          >
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="(cty5, c5) in datas5.countries_explore"
                :key="c5"
              >
                <img
                  class="h-64 w-64"
                  style="height: 124px; width: 190px"
                  :alt="cty5.name"
                  :src="'http://localhost:8084/storage/flag/' + cty5.flag"
                />
                <p>{{ cty5.name }}</p>
              </div>
            </div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </div>
        </div>
      </div>
      <div class="clearfix"></div>
    </div>
  </section>
  <!-- Explore Section End -->
</template>

<script>
import axios from "axios";
import Swiper, { Navigation, Pagination } from "swiper";
//import "swiper/swiper-bundle.css";

Swiper.use([Navigation, Pagination]);
import { directive } from "vue-awesome-swiper";
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
  directives: {
    swiper: directive,
  },

  mounted() {},

  data() {
    return {
      data_all: [],
      datas: [],
      datas1: [],
      datas2: [],
      datas3: [],
      datas4: [],
      datas5: [],
      services: [],
      //banners: ["/slider-1.png", "/slider-2.png", "/slider-3.png"],
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: -10,
        slidesPerGroup: 4,
        loop: true,
        loopFillGroupWithBlank: true,
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
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
      swiperOption2: {
        slidesPerView: 3,
        spaceBetween: -10,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
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
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
      swiperOption3: {
        slidesPerView: 3,
        spaceBetween: -10,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
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
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
      swiperOption4: {
        slidesPerView: 3,
        spaceBetween: -10,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
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
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
      swiperOption5: {
        slidesPerView: 3,
        spaceBetween: -10,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
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
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
    };
  },
  created() {
    this.$axios
      .get("http://localhost:8084/api/country_name")
      .then((response) => {
        (this.datas1 = response.data.datas1),
          (this.datas2 = response.data.datas2),
          (this.datas3 = response.data.datas3),
          (this.datas4 = response.data.datas4),
          (this.datas5 = response.data.datas5),
          (this.data_all = response.data.data_all),
          (this.services = response.data.services);
         // console.log(response.data.datas1);
      });

    // try {
    //   let res = await http.get(
    //     "http://localhost:8084/api/country_name"
    //   );
    //   this.datas = res.data.datas;
    //   console.log(res.data.datas);
    // } catch (error) {
    //   console.log(error);
    // }
  },

  methods: {
    // onSwiperRedied(swiper) {
    //   console.log("Swiper redied!", swiper);
    // },
    // onSwiperSlideChangeTransitionStart() {
    //   console.log("SwiperSlideChangeTransitionStart!");
    // },
    // onSwiperClickSlide(index, reallyIndex) {
    //   console.log("Swiper click slide!", reallyIndex);
    // },
  },
};
</script>
<style>
.swiper-pagination-bullet.swiper-pagination-bullet-active::after {
  @apply w-48 h-48;
}
</style>

