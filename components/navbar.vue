<template>
  <!-- Header start-->
  <header>
    <!-- Topbar Start -->
    <div class="topbar d-none d-lg-block">
      <div class="container d-flex justify-content-between">
        <ul class="topbar-left d-flex">
          <li>
            <nuxt-link to="tel:+880 1642924081"
              ><span class="fas fa-phone-alt"></span> (+88) 0196 777 7788
              (Hotline)</nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="mailto:info@gmail.com"
              ><span class="fas fa-envelope"></span> cr@visathing.com</nuxt-link
            >
          </li>
          <li>
            <span class="fas fa-map-marker-alt"></span>1st Floor, Homestead
            Gulshan Link Tower, DCC TA-99, Gulshan-Badda link Road, Gulshan-1,
            Dhaka-1212
          </li>
        </ul>
      </div>
    </div>
    <!-- Topbar End -->
    <!-- Navbar start-->
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <!-- Logo Here -->
        <nuxt-link class="navbar-brand" to="/"
          ><img alt="" class="logo" src="~/assets/img/logo.png"
        /></nuxt-link>
        <div class="d-flex d-lg-none">
          <form
            class="nav-search-bar border-radius-5"
            role="form"
            @submit.prevent="submit"
          >
            <input
              class="nav-search-input"
              placeholder="Application tracking"
              type="text"
              name="status"
              v-model="fields.status"
              required
            />
            <button
              class="nav-search-icon bgc-gradient border-radius-5"
              type="submit"
            >
              <span class="fas fa-search"></span>
            </button>
          </form>
          <button
            aria-controls="offcanvasNav"
            class="navbar-toggler"
            data-bs-target="#offcanvasNav"
            data-bs-toggle="offcanvas"
            type="button"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div
          aria-labelledby="offcanvasNavLabel"
          class="offcanvas offcanvas-start d-flex d-lg-none"
          id="offcanvasNav"
          tabindex="-1"
        >
          <div class="offcanvas-header">
            <button
              aria-label="Close"
              class="btn-close text-reset ms-auto"
              data-bs-dismiss="offcanvas"
              type="button"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav ms-auto align-items-center">
              <li class="nav-item">
                <nuxt-link
                  to="/"
                  aria-current="page"
                  class="nav-link"
                >
                  Home
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  to="/about"
                  class="nav-link"
                  :class="{ active: route === '/about' }"
                >
                  About
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  to="/services"
                  class="nav-link dropdown-toggle"
                  :class="{ active: route === '/services' }"
                  data-bs-toggle="dropdown"
                >
                  Our services
                </nuxt-link>
                <ul class="dropdown-menu">
                  <li v-for="(ser, key) in services" :key="key">
                    <nuxt-link
                      v-bind:to="'/services/' + ser.slug"
                      class="dropdown-item"
                    >
                      {{ ser.name }}
                    </nuxt-link>
                  </li>
                </ul>
              </li>

              <!-- <li class="nav-item">
                <nuxt-link
                  to="/visa-eligibility-checker"
                  class="btn btn-gradient"
                  >Visa Eligibility Checker</nuxt-link
                >
              </li> -->
            </ul>

            <ul class="navbar ms-auto align-items-center">
              <li class="nav-item">
                <a href="http://visathing.org/" target="_blank" class="btn btn-gradient"> Sign in | Sign Up </a>
              </li>
            </ul>
          </div>
        </div>
        <!-- Main Menu -->
        <div class="collapse navbar-collapse" id="navbar">
          <ul class="navbar-nav ms-auto align-items-center">
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/"> Home </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/about" aria-current="page" class="nav-link">
                About
              </nuxt-link>
            </li>
            <li class="nav-item dropdown">
              <nuxt-link
                to="/services"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Our services
              </nuxt-link>
              <ul class="dropdown-menu">
                <li v-for="(ser, key) in services" :key="key">
                  <nuxt-link
                    v-bind:to="'/services/' + ser.slug"
                    class="dropdown-item"
                  >
                    {{ ser.name }}
                  </nuxt-link>
                </li>
              </ul>
            </li>
          </ul>
          <form
            class="nav-search-bar border-radius-5 d-none d-lg-flex"
            @submit.prevent="submit"
          >
            <p v-if="errors.length">
              <span class="fa fa-asterisk text-danger"></span>
            </p>
            <input
              class="nav-search-input"
              placeholder="Application tracking"
              type="text"
              name="status"
              v-model="fields.status"
            />
            <button
              class="nav-search-icon bgc-gradient border-radius-5"
              type="submit"
            >
              <span class="fas fa-search"></span>
            </button>
          </form>
          <ul class="navbar">
            <li class="nav-item">
              <a href="https://visathing.org/" class="btn btn-gradient"> Sign in | Sign Up </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Navbar End-->
  </header>
  <!-- Header End-->
</template>

<script>
import axios from "axios";
import Logo from "~/components/NuxtLogo.vue";
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
  components: {
    Logo,
  },
  name: "Navbar",
  data() {
    return {
      services: [],
      fields: {
        status: "",
      },
      errors: [],
      route: '',
    };
  },
  created() {
    this.$axios
      .get("https://b2bdemo.visathing.in/api/ser_list")
      .then((response) => {
        this.services = response.data.services;
        // console.log(response.data.services);
      });
  },
  methods: {
    //   submit: function (e) {
    //     if (this.fields.status) {
    //       return true;
    //     }
    //     this.errors = [];
    //     if (!this.fields.status) {
    //       this.errors.push("required.");
    //     }
    //     e.preventDefault();

    //    this.$axios
    //       .get("http://localhost:8082/api/get_tracking/" + this.fields.status ,   {
    //   },)
    //  .then(
    //     ({ data }) => (
    //       (this.fields = {})
    //     )
    //   )
    //   .catch((error) => console.log(error));
    //     if (this.fields) {
    //       this.$router
    //         .push({
    //           path: "/visa-application-status/" + this.status,
    //         })
    //          console.log(this.fields);
    //     }
    //   },

    submit() {
      this.$axios
        .get(
          "http://localhost:8082/api/track_website/" + this.fields.status,
          {}
        )
        .then(({ data }) => (this.fields = {}))
        .catch((error) => console.log(error));
        if (this.fields) {
        this.$router.push({
          path: "/visa-application-status/" + this.fields.status,
        });
       // console.log(this.fields.status);
      }
    },

    // submit() {
    //   this.$router
    //     .push({
    //       path: "/visa-application-status/" + this.fields.status,
    //       slug: this.fields.status,
    //       params: { name: this.fields.status},
    //     })
    //     .bind(this.fields.status);
    // },
  },
};
</script>

<style>
</style>