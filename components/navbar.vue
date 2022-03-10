<template>

      <!-- Header start-->
<header>
    <!-- Topbar Start -->
    <div class="topbar d-none d-lg-block">
        <div class="container d-flex justify-content-between">
            <ul class="topbar-left d-flex">
                <li><a href="tel:+880 1642924081"><span class="fas fa-phone-alt"></span>+880 1642924081</a></li>
                <li><a href="mailto:info@gmail.com"><span class="fas fa-envelope"></span>info@gmail.com</a></li>
                <li><span class="fas fa-map-marker-alt"></span>3517 W. Gray St.
                    Utica, Pennsylvania 57867
                </li>
            </ul>
            <ul class="topbar-right d-flex">
                <li class="topbar-signin"><a href="/signin.html">
                    <span class="fas fa-user-alt"></span>Sign in
                </a></li>
                <li class="topbar-signup"><a href="/signup.html"><span class="fas fa-sign-out-alt"></span>Sign
                    Up</a></li>
            </ul>
        </div>
    </div>
    <!-- Topbar End -->
    <!-- Navbar start-->
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
            <!-- Logo Here -->
            <a class="navbar-brand" href="/index.html"><img alt="" class="logo" src="~/assets/img/logo.png"></a>
            <div class="d-flex d-lg-none">
                <form class="nav-search-bar border-radius-5">
                    <input class="nav-search-input" placeholder="Application tracking" type="search">
                    <button class="nav-search-icon bgc-gradient border-radius-5" type="submit"><span
                            class="fas fa-search"></span></button>
                </form>
                <button aria-controls="offcanvasNav" class="navbar-toggler" data-bs-target="#offcanvasNav"
                        data-bs-toggle="offcanvas" type="button">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div aria-labelledby="offcanvasNavLabel" class="offcanvas offcanvas-start d-flex d-lg-none"
                 id="offcanvasNav"
                 tabindex="-1">
                <div class="offcanvas-header">
                    <button aria-label="Close" class="btn-close text-reset ms-auto" data-bs-dismiss="offcanvas"
                            type="button"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav ms-auto align-items-center">
                        <li class="nav-item">
                            <a aria-current="page" class="nav-link active"> <nuxt-link to="/"> Home </nuxt-link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"><nuxt-link to="/about"> About </nuxt-link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/basic-information.html">Our Services</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/visa-consultancy.html">- Visa Consultancy</a></li>
                                <li><a class="dropdown-item" href="/visa-processing-in-india.html">- Visa Processing in
                                    India</a></li>
                                <li><a class="dropdown-item" href="/visa-processing-in-nepal.html">- Visa Processing in
                                    Nepal</a></li>
                                <li><a class="dropdown-item" href="/e-visa-processing.html">- E-Visa Processing</a></li>
                                <li><a class="dropdown-item" href="/one-way-collection.html">- One Way Collection</a></li>
                                <li><a class="dropdown-item" href="/document-legalization.html">- Document
                                    Legalization</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="btn btn-gradient" href="/visa-eligibility-checker.html">Visa Eligibility
                                Checker</a>
                        </li>
                    </ul>
                    <form class="nav-search-bar border-radius-5 d-none d-lg-flex">
                        <input class="nav-search-input" placeholder="Application tracking" type="search">
                        <button class="nav-search-icon bgc-gradient border-radius-5" type="submit"><span
                                class="fas fa-search"></span></button>
                    </form>
                </div>
            </div>
            <!-- Main Menu -->
            <div class="collapse navbar-collapse" id="navbar">
                <ul class="navbar-nav ms-auto align-items-center">
                    <li class="nav-item">
                        <a class="nav-link active"><nuxt-link to="/"> Home </nuxt-link></a>
                    </li>
                    <li class="nav-item">
                        <a aria-current="page" class="nav-link"><nuxt-link to="/about"> About </nuxt-link></a>
                    </li>
                    <li class="nav-item dropdown">
                        <nuxt-link to="/services" class="nav-link  dropdown-toggle" data-bs-toggle="dropdown"> Our services </nuxt-link>
                        <ul class="dropdown-menu">
                            <li v-for="(ser, key) in services" :key="key"><nuxt-link v-bind:to="'/' + ser.name" class="dropdown-item"> {{ser.name}} </nuxt-link></li>
                            <!--<li><a class="dropdown-item" href="/visa-processing-in-india.html">Visa Processing in
                                India</a></li>
                            <li><a class="dropdown-item" href="/visa-processing-in-nepal.html">Visa Processing in
                                Nepal</a></li>
                            <li><a class="dropdown-item" href="/e-visa-processing.html">E-Visa Processing</a></li>
                            <li><a class="dropdown-item" href="/one-way-collection.html">One Way Collection</a></li>
                            <li><a class="dropdown-item" href="/document-legalization.html">Document
                                Legalization</a></li> -->
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="btn btn-gradient" href="/visa-eligibility-checker.html">Visa Eligibility
                            Checker</a>
                    </li>
                </ul>
                <form class="nav-search-bar border-radius-5 d-none d-lg-flex">
                    <input class="nav-search-input" placeholder="Application tracking" type="search">
                    <button class="nav-search-icon bgc-gradient border-radius-5" type="submit"><span
                            class="fas fa-search"></span></button>
                </form>
            </div>
        </div>
    </nav>
    <!-- Navbar End-->
</header>
<!-- Header End-->

</template>

<script>
import Logo from "~/components/NuxtLogo.vue";
export default {
      components: {
    Logo,
  },
  name: "Navbar",
   data() {
    return {
      services: [],
    };
  },
  created() {
    this.$axios
      .get("http://localhost:8084/api/ser_list")
      .then((response) => {
          (this.services = response.data.services);
         // console.log(response.data.services);
      });
  },
};
</script>

<style>
</style>