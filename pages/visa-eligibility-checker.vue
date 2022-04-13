<template>
  <div>
   <nuxt-child :data="data" />
     <!-- Page Name -->
  <section class="page-name text-center">
    <div class="container">
      <h1>Visa Eligibility Checker</h1>
    </div>
  </section>
  <!-- Page Name -->

  <!-- Eligibility Checker Layout Start -->
  <section id="eligibility-checker-wrapper">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-8 col-sm-12 text-center mb-4">
          <div class="eligibility-title-wrapper">
            <h2 class="title">Visa Eligibility Checker</h2>
            <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt morbi sit sed
              netus diam justo,
              elementum at. Mauris dui.</p>
          </div>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12">
          <div class="eligibility-body">
            <!-- line 1 -->
            <div class="eligibility-container">
              <div class="row align-items-end justify-content-center">
                <div class="col-lg-6 col-md-9 mb-lg-0">
                  <form id='eligibility-form'>
                    <div class="list-form-country">
                      <select class="form-select">
                        <option selected>Belgium</option>
                        <option value="1">One</option>
                      </select>
                    </div>
                    <div class="list-form-age">
                      <select class="form-select">
                        <option selected>Age 18-30 Years</option>
                        <option value="1">One</option>
                      </select>
                    </div>
                    <div class="list-form-plan">
                        <div id="tabs">
                          <ul class="d-none">
                            <li><a href="#tabs-1">Tab 1</a></li>
                            <li><a href="#tabs-2">Tab 2</a></li>
                          </ul>
                          <!-- Form Section Here -->
                          <div id="tabs-1">
                            <label><span>01. How Log Do Yo Plan To Stay?</span></label>
                            <div class="form-check form-option">
                              <input class="form-check-input" type="radio" name="checkbox" id="sate_one_one">
                              <label class="form-check-label" for="sate_one_one">
                                Less then 90 days
                              </label>
                            </div>
                            <div class="form-check form-option">
                              <input class="form-check-input" type="radio" name="checkbox" id="sate_one_two">
                              <label class="form-check-label" for="sate_one_two">
                                More then 190 days
                              </label>
                            </div>
                          </div>
                          <div id="tabs-2">
                            <label><span>02. How Log Do Yo Plan To Stay?</span></label>
                            <div class="form-check form-option">
                              <input class="form-check-input" type="radio" name="checkbox" id="sate_two_one">
                              <label class="form-check-label" for="sate_two_one">
                                Less then 190 days
                              </label>
                            </div>
                            <div class="form-check form-option">
                              <input class="form-check-input" type="radio" name="checkbox" id="sate_two_two">
                              <label class="form-check-label" for="sate_two_two">
                                More then 290 days
                              </label>
                            </div>
                          </div>
                        </div>
                        <!-- Next Prev Button Here -->
                        <div class="mt-4">
                          <input type="button" id="btnPrevious" value="Bank" class="form-previous-btn"/>
                          <input type="button" id="btnNext" value="Next" class="form-next-btn" />
                        </div>
                    </div>
                  </form>
                </div>
                <div class="col-lg-6 col-md-9 col-sm-12 mt-4">
                  <div class="check-progress">
                    <div id="circle" class="position-relative"><span>85%</span></div>
                    <button class="btn-gradient">Download PDF <span class="fas fa-download"></span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Eligibility Checker Layout End -->
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
      title: "",
      titleTemplate: `%s ${this.$route.name} - VISAThing`,
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
      console.log( response.data.about);
    });
  },
};
</script>