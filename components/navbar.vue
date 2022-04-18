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
            Gulshan Link Tower Gulshan-Badda link Road, Gulshan-1, Dhaka-1212
          </li>
        </ul>
        <ul class="topbar-right d-flex">
          <li class="topbar-signin">
            <nuxt-link to="/signin">
              <span class="fas fa-user-alt"></span>Sign in
            </nuxt-link>
          </li>
          <li class="topbar-signup">
            <nuxt-link to="/signin"
              ><span class="fas fa-sign-out-alt"></span>Sign Up</nuxt-link
            >
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
              name="search"
              :v-model="search"
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
                <nuxt-link to="/" aria-current="page" class="nav-link active">
                  Home
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link to="/about" class="nav-link"> About </nuxt-link>
              </li>
              <li class="nav-item">
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

              <li class="nav-item">
                <nuxt-link
                  to="/visa-eligibility-checker"
                  class="btn btn-gradient"
                  >Visa Eligibility Checker</nuxt-link
                >
              </li>
            </ul>
            <form
              class="nav-search-bar border-radius-5 d-none d-lg-flex"
              role="form"
              @submit.prevent="submit"
            >
             <p v-if="errors.length">
              <span class="fa fa-asterisk text-danger"></span>
            </p>
              <input
                class="nav-search-input"
                placeholder="Application tracking"
                type="text"
                name="search"
                :v-model="search"
                required
              />
              <button
                class="nav-search-icon bgc-gradient border-radius-5"
                type="submit"
              >
                <span class="fas fa-search"></span>
              </button>
            </form>
          </div>
        </div>
        <!-- Main Menu -->
        <div class="collapse navbar-collapse" id="navbar">
          <ul class="navbar-nav ms-auto align-items-center">
            <li class="nav-item">
              <nuxt-link class="nav-link active" to="/"> Home </nuxt-link>
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
            <li class="nav-item">
              <nuxt-link
                to="/visa-eligibility-checker"
                class="btn btn-gradient"
              >
                Visa Eligibility Checker
              </nuxt-link>
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
              type="search"
            />
            <button
              class="nav-search-icon bgc-gradient border-radius-5"
              type="submit"
            >
              <span class="fas fa-search"></span>
            </button>
          </form>
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
      search: "",
      errors: [],
    };
  },
  created() {
    this.$axios
      .get("https://b2bdemo.visathing.in/api/ser_list")
      .then((response) => {
          (this.services = response.data.services);
         // console.log(response.data.services);
      });
  },
  methods: {
    submit: function (e) {
      if (this.search) {
        return true;
      }

      this.errors = [];

      if (!this.search) {
        this.errors.push("required.");
      }

      e.preventDefault();

      this.$axios
        .get("https://visathing.com.bd/track/status/" + this.search)
        .then(({ data }) => (this.search = this.search))
        .catch((error) => console.log(error));
      if (this.search) {
        this.$router
          .push({
            path: "/visa-application-status/" + this.search,
            slug: this.search,
          })
          .bind(this.search);
      }
      console.log(this.search);
    },
  },
};
</script>

<style>
</style>