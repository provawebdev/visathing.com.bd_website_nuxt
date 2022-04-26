<template>
  <div>
    <nuxt-child :data="data" />
    <!-- Basic info banner start -->
    <section
      id="basic-hero-banner"
      :style="{ backgroundImage: `url(${image})` }"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10 px-4">
            <div class="online-apply-wrapper">
              <div class="online-apply-header">
                <div class="apply-cuntry-flug fs-20 fs-sm-12">
                  <img
                    :src="'https://b2bdemo.visathing.in/storage/flag/' + data.flag"
                    height="50px"
                    :alt="data.name"
                  />
                  {{ data.name }} Visa From Bangladesh
                </div>
                <div class="apply-button">
                  <a
                    href="javascript:"
                    class="btn fs-14 fs-sm-12 btn-light"
                    data-bs-toggle="modal"
                    data-bs-target="#vsSignUpModal"
                    >Apply Online</a
                  >
                </div>
              </div>
              <div class="online-apply-body">
                <table class="info-box-wrapper fs-20 fs-sm-14">
                  <tbody>
                    <tr>
                      <td>Capital City</td>
                      <td>{{ data.capital_city }}</td>
                    </tr>
                    <tr>
                      <td>Currency</td>
                      <td>{{ data.currency }}</td>
                    </tr>
                    <tr>
                      <td>Local Time</td>
                      <td>{{ data.local_time }}</td>
                    </tr>
                    <tr>
                      <td>Telephone Code</td>
                      <td>+{{ data.telephone_code }}</td>
                    </tr>
                    <tr>
                      <td>Bank</td>
                      <td>Closed on {{ data.bank_info }}</td>
                    </tr>
                    <tr>
                      <td>Exchange Rate</td>
                      <td>{{ data.exchange_rate }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- Banner bottom button section start ---->
          <div class="col-lg-12">
            <div class="apply-prograssing">
              <div
                class="item"
                v-for="(ser, key) in data.cty_services"
                :key="key"
              >
                <a
                  href="#"
                  class="btn fs-14 fs-sm-10 btn-outline-light checked"
                  >{{ ser.name }}</a
                >
              </div>
              <!--<div class="item">
                <a
                  href="#"
                  class="btn fs-14 fs-sm-10 btn-outline-light notchecked"
                  >Documents Legalization</a
                >
              </div>-->
            </div>
          </div>
          <!-- Banner bottom button section end ---->
        </div>
      </div>
    </section>
    <!-- Basic info banner end -->

    <!-- Requirements Form Box Start -->
    <section id="requirement-form-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
           <form role="form" @submit.prevent="submit">
          <div class="requirement-checker
                d-flex
                bg-white-gray
                justify-content-between">
            <div class="select-box">
              <label>I'm a Citizen Of</label>
              <select
                aria-label="select"
                class="form-select select-option"
                v-model="fields.cityzen_cty"
              >
                <option selected>Bangladesh</option>
                <option value="1">Bangladesh</option>
              </select>
            </div>
            <div class="select-box">
              <label>Travelling to</label>
              <select
                aria-label="select"
                class="form-select select-option"
                v-model="fields.search"
              >
                <option
                  v-for="(cty, key) in country_list"
                  :key="key"
                  :value="key"
                >
                  {{ cty }}
                </option>
              </select>
            </div>
            <div class="select-box">
              <label>Purpose of Travelling</label>
              <select
                aria-label="select"
                class="form-select select-option"
                v-model="fields.travel_purpose"
              >
                <option selected>Choose if you want</option>
                <option
                  v-for="(tvl, tvl_key) in tvl_purpose"
                  :key="tvl_key"
                  :value="tvl_key"
                >
                  {{ tvl }}
                </option>
              </select>
            </div>
            <button class="btn-gradient" type="submit">
              Check Requirements
              <!-- <nuxt-link v-bind:to="'/' + fields.search"> Check Requirements </nuxt-link> -->
            </button>
          </div>
        </form>
           
          </div>
        </div>
      </div>
    </section>
    <!-- Requirements Form Box End -->

    <!-- Services Lists Lyoaut Start -->
    <section id="service-lists-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-5 col-sm-12 mb-5">
            <div class="left-sidebar-widget">
              <div class="sidebar-header">
                <h4 class="fs-20">Services For Belgium</h4>
              </div>

              <div class="sidebar-lists">
                <ul class="nav" id="myTab" role="tablist">
                  <li class="fs-16 nav-item" role="presentation">
                    <button
                      class="active"
                      id="basic-info-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#basic-info"
                      type="button"
                      role="tab"
                      aria-controls="basic-info"
                      aria-selected="true"
                    >
                      Basic Information
                    </button>
                  </li>
                  <li class="fs-16" role="presentation">
                    <button
                      class=""
                      id="checklist-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#checklist"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Checklist
                    </button>
                  </li>
                  <!-- <li class="fs-16" role="presentation">
                    <button
                      class=""
                      id="cmc-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#cmc"
                      type="button"
                      role="tab"
                      aria-controls="cmc"
                      aria-selected="false"
                    >
                      Customize My Checklist
                    </button>
                  </li> -->
                  <li class="fs-16" role="presentation">
                    <button
                      class=""
                      id="vfpt-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#vfpt"
                      type="button"
                      role="tab"
                      aria-controls="vfpt"
                      aria-selected="false"
                    >
                      Visa Fees & Processing Time
                    </button>
                  </li>
                  <li class="fs-16" role="presentation">
                    <button
                      class=""
                      id="forms-downloads-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#forms-downloads"
                      type="button"
                      role="tab"
                      aria-controls="forms-downloads"
                      aria-selected="false"
                    >
                      Forms & Downloads
                    </button>
                  </li>
                  <li class="fs-16" role="presentation">
                    <button
                      class=""
                      id="useful-link-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#useful-link"
                      type="button"
                      role="tab"
                      aria-controls="useful-link"
                      aria-selected="false"
                    >
                      Useful Links
                    </button>
                  </li>
                  <li class="fs-16" role="presentation">
                    <button
                      class=""
                      id="faq-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#faq"
                      type="button"
                      role="tab"
                      aria-controls="faq"
                      aria-selected="false"
                    >
                      FAQ
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-9 col-md-7 col-sm-12">
            <div class="tab-content service-item-body">
              <!-- ----------------------------------------------------------------------- -->
              <!--                     Basic information body content                      -->
              <!-- ----------------------------------------------------------------------- -->
              <div
                class="tab-pane fade show active"
                id="basic-info"
                role="tabpanel"
                aria-labelledby="basic-info-tab"
              >
                <p v-html="data.basic_info"></p>
              </div>
              <!-- ----------------------------------------------------------------------- -->
              <!--                         Checklist body content                          -->
              <!-- ----------------------------------------------------------------------- -->
              <div
                class="tab-pane fade"
                id="checklist"
                role="tabpanel"
                aria-labelledby="checklist-tab"
              >
                <!-- line 1 -->
                <div v-for="(vcat, vcat_key) in data.visacat" :key="vcat_key">
                  <h3 class="fs-20">{{ vcat.name }} Required</h3>
                  <div class="list-items">
                    <ul
                      v-for="(check, check_key) in checklists"
                      :key="check_key"
                    >
                      <li v-if="vcat.id == check.pivot.vcat_id">
                        <div class="item-icon">
                          <span>{{ check_key + 1 }}</span>
                        </div>
                        <div class="item-content">
                          {{ check.name }}: {{ check.short_details }}
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- ----------------------------------------------------------------------- -->
              <!--                   Customize my checklist body content                   -->
              <!-- ----------------------------------------------------------------------- -->
              <!-- <div
                class="tab-pane fade"
                id="cmc"
                role="tabpanel"
                aria-labelledby="cmc-tab"
              >
               
                <div class="checklist-container">
                  <div class="row align-items-end">
                    <div class="col-lg-6 col-md-12 mb-lg-0">
                      <form id="checklist-form">
                        <div class="list-form-country">
                          <h4 class="fs-20">Country</h4>
                          <select class="form-select">
                            <option selected>Belgium</option>
                            <option value="1">One</option>
                          </select>
                        </div>
                        <div class="list-form-type">
                          <h4 class="fs-20">Passport Type</h4>
                          <select class="form-select">
                            <option selected>Ordinary passport</option>
                            <option value="1">One</option>
                          </select>
                        </div>
                        <div>
                          <h4 class="fs-20">Passport Validity</h4>
                          <div class="list-form-passport">
                            <div id="tabs">
                              <ul class="d-none">
                                <li><a href="#tabs-1">Tab 1</a></li>
                                <li><a href="#tabs-2">Tab 2</a></li>
                                <li><a href="#tabs-3">Tab 3</a></li>
                                <li><a href="#tabs-4">Tab 4</a></li>
                              </ul>
                             
                              <div id="tabs-1">
                                <h5>
                                  <span
                                    >Your Current Passport Has a Minimum
                                    Validity of</span
                                  >
                                </h5>
                                <div class="form-check list-form-option">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="checkbox"
                                    id="step_1_one"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="step_1_one"
                                  >
                                    Less then 6 month
                                  </label>
                                </div>
                                <div class="form-check list-form-option">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="checkbox"
                                    id="step_1_two"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="step_1_two"
                                  >
                                    Less then 8 month
                                  </label>
                                </div>
                                <div class="form-check list-form-option">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="checkbox"
                                    id="step_1_three"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="step_1_three"
                                  >
                                    Less then 10 month
                                  </label>
                                </div>
                                <div class="form-check list-form-option">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="checkbox"
                                    id="step_1_four"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="step_1_four"
                                  >
                                    Less then 12 month
                                  </label>
                                </div>
                              </div>
                              <div id="tabs-2">
                                <h5>
                                  <span
                                    >Your Current Passport Has a Minimum
                                    Validity of</span
                                  >
                                </h5>
                                <div class="form-check list-form-option">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="checkbox"
                                    id="step_2_one"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="step_2_one"
                                  >
                                    Less then 14 month
                                  </label>
                                </div>
                                <div class="form-check list-form-option">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="checkbox"
                                    id="step_2_two"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="step_2_two"
                                  >
                                    Less then 16 month
                                  </label>
                                </div>
                                <div class="form-check list-form-option">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="checkbox"
                                    id="step_2_three"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="step_2_three"
                                  >
                                    Less then 18 month
                                  </label>
                                </div>
                                <div class="form-check list-form-option">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="checkbox"
                                    id="step_2_four"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="step_2_four"
                                  >
                                    Less then 20 month
                                  </label>
                                </div>
                              </div>
                              <div id="tabs-3">
                                <h5>
                                  <span
                                    >Your Current Passport Has a Minimum
                                    Validity of</span
                                  >
                                </h5>
                                <div class="form-check list-form-option">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="checkbox"
                                    id="step_3_one"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="step_3_one"
                                  >
                                    Less then 22 month
                                  </label>
                                </div>
                                <div class="form-check list-form-option">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="checkbox"
                                    id="step_3_two"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="step_3_two"
                                  >
                                    Less then 24 month
                                  </label>
                                </div>
                                <div class="form-check list-form-option">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="checkbox"
                                    id="step_3_three"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="step_3_three"
                                  >
                                    Less then 26 month
                                  </label>
                                </div>
                                <div class="form-check list-form-option">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="checkbox"
                                    id="step_3_four"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="step_3_four"
                                  >
                                    Less then 28 month
                                  </label>
                                </div>
                              </div>
                              <div id="tabs-4">
                                <h5>
                                  <span
                                    >Your Current Passport Has a Minimum
                                    Validity of</span
                                  >
                                </h5>
                                <div class="form-check list-form-option">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="checkbox"
                                    id="step_4_one"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="step_4_one"
                                  >
                                    Less then 30 month
                                  </label>
                                </div>
                                <div class="form-check list-form-option">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="checkbox"
                                    id="step_4_two"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="step_4_two"
                                  >
                                    Less then 32 month
                                  </label>
                                </div>
                                <div class="form-check list-form-option">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="checkbox"
                                    id="step_4_three"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="step_4_three"
                                  >
                                    Less then 34 month
                                  </label>
                                </div>
                                <div class="form-check list-form-option">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="checkbox"
                                    id="step_4_four"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="step_4_four"
                                  >
                                    Less then 36 month
                                  </label>
                                </div>
                              </div>
                            </div>
                          
                            <div class="mt-4">
                              <input
                                type="button"
                                id="btnPrevious"
                                value="Bank"
                                class="form-previous-btn"
                              />
                              <input
                                type="button"
                                id="btnNext"
                                value="Next"
                                class="form-next-btn"
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 mt-4">
                      <div class="check-progress">
                        <div id="circle" class="position-relative">
                          <span>85%</span>
                        </div>
                        <button class="btn-gradient">
                          Download PDF <span class="fas fa-download"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->
              <!-- ----------------------------------------------------------------------- -->
              <!--                Visa Fees & Processing Time body content                 -->
              <!-- ----------------------------------------------------------------------- -->
              <div
                class="tab-pane fade"
                id="vfpt"
                role="tabpanel"
                aria-labelledby="vfpt-tab"
              >
                <!-- Form 1 -->
                <div class="visa-fee-form-wrapper">
                  <h3 class="fs-24">Visa Fee Checker</h3>
                  <form role="form">
                    <div class="form-wrapper">
                      <div class="form-item">
                        <h4 class="fs-16">Country</h4>
                        <select class="form-select" v-model="fields.country , selected2">
                          <option :selected="selected" :value="data.id">{{ data.name }}</option>
                        </select>
                      </div>
                      <div class="form-item">
                        <h4 class="fs-16">Passport Type</h4>
                        <select class="form-select" v-model="fields.passport_type">
                          <option :value="null" selected> Select Passport Type </option>
                          <option v-for="(p_type, p_key) in passport_types" :key="p_key" :value="p_type.id">{{p_type.name}}</option>
                          </select>
                      </div>
                      <div class="form-item">
                        <h4 class="fs-16">Visa Type</h4>
                        <select class="form-select"  v-model="fields.visa_type" @change="findFee()">
                        <option value="null" selected> Select Visa Type </option>
                           <option v-for="(v_type, v_key) in visa_types" :key="v_key" :value="v_type.id">{{v_type.name}} </option>
                        </select>
                      </div>
                      <div class="form-item">
                        <h4 class="fs-16">Number of Entry</h4>
                        <select class="form-select" v-model="fields.visa_fee">
                          <option value="null" selected>  Select Number of Entry </option>
                           <option v-for="(vt, vt_key) in visafees" :key="vt_key" :value="vt.visa_fee">{{vt.entry_name}}</option>
                        </select>
                      </div>
                      <div class="form-item">
                        <input
                          type="submit"
                          class="btn btn-gradient fs-14"
                          value="Check Visa Fee" 
                        />
                      </div>
                    </div>
                  </form>
                 <br> <h3 class="fs-24"> Visa Fee: {{this.fields.visa_fee}}</h3>
                </div>
                <!-- Form 2 -->
                <div class="service-change-form-wrapper">
                  <h3 class="fs-24">Calculate VISAThing Service Charge</h3>
                  <form @submit.prevent="calculate2">
                    <div class="form-wrapper">
                      <div class="form-item">
                        <h4 class="fs-16">Services</h4>
                        <select class="form-select" v-model="fields.service" required>
                        <option value="null" selected> Select Service Type </option>
                          <option selected v-for="(ser, ser_key) in data.cty_services" :key="ser_key" :value="ser.charge">{{ser.name}}</option>
                        </select>
                      </div>
                      <div class="form-item">
                        <h4 class="fs-16">No of Traveler</h4>
                        <input type="number" class="form-control" v-model="fields.no_of_traveler" placeholder="5" required>
                        </div>
                      <div class="form-item">
                        <input
                          type="submit"
                          class="btn btn-gradient fs-14"
                          value="Calculate Charge"
                        />
                      </div>
                    </div>
                  </form> <br />
                  <h3 class="fs-24"> Total Charge: {{result2}}</h3>
                </div>
              </div>
              <!-- ----------------------------------------------------------------------- -->
              <!--                     Forms & Downloads body content                      -->
              <!-- ----------------------------------------------------------------------- -->
              <div
                class="tab-pane fade"
                id="forms-downloads"
                role="tabpanel"
                aria-labelledby="forms-downloads-tab"
              >
                <!-- Short Term -->
                <div
                  v-for="(app, app_key) in appform"
                  :key="app_key"
                  class="download-list"
                >
                  <div class="icon"><i class="fas fa-arrow-right"></i></div>
                  <h4 class="fs-20">
                    Visa Application Form ({{ app.app_name }})
                  </h4>
                  <a
                    class="btn btn-gradient"
                    :href="
                      'https://b2bdemo.visathing.in/storage/app_form/' + app.app_form
                    "
                    download
                    >Download</a
                  >
                </div>
              </div>
              <!-- ----------------------------------------------------------------------- -->
              <!--                        Useful Link body content                         -->
              <!-- ----------------------------------------------------------------------- -->
              <div
                class="tab-pane fade"
                id="useful-link"
                role="tabpanel"
                aria-labelledby="useful-link-tab"
              >
                <div class="useful-link-wrapper">
                  <img
                    class="text-center"
                    src="~/assets/img/404.png"
                    alt="404-image"
                    width="100%"
                  />
                  <h5 class="fs-24 fs-md-20">
                    Unavailable Useful Links For Belgium
                  </h5>
                </div>
              </div>
              <!-- ----------------------------------------------------------------------- -->
              <!--                            FAQ body content                             -->
              <!-- ----------------------------------------------------------------------- -->
              <div
                class="tab-pane fade"
                id="faq"
                role="tabpanel"
                aria-labelledby="faq-tab"
              >
                <!-- line 1 -->
                <div class="accordion faq-wrapper" id="accordionExample">
                  <div
                    v-for="(con, key) in data.countries_faq"
                    :key="key"
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
                        {{ con.question }}
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
                        <p v-html="con.answer"></p>
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
    <!-- Services Lists Lyoaut End -->
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
      titleTemplate: `%s ${this.data.name} - VISAThing`,
      meta: [
           {
          hid: "keyords",
          name: "meta_kewords",
          content: this.data.meta_kewords,
        },
        {
          hid: "description",
          name: "description",
          content: this.data.meta_description,
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
      query: "",
      data: [],
      checklists: [],
      appform: [],
      travel_purpose: [],
      passport_types: [],
      visa_types: [],
      visa_fees: [],
      visafees: [],
      image: bgImg,
      fields: {
        country: "",
        search: "",
        travel_purpose: "",
        cityzen_cty: "",
        service: "",
        no_of_traveler: "",
        passport_type: "",
        visa_type: "",
      },
      result2: 0,
      selected: 'null',
      selected2: 1,
      country_list: [],
    };
  },

  created() {
    this.$axios
      .get("https://b2bdemo.visathing.in/api/country/" + this.$route.params.slug , {
        search: this.search, 
        travel_purpose: this.travel_purpose,
        cityzen_cty: this.cityzen_cty
      })
      .then((response) => {
        this.data = response.data.data;
        this.checklists = response.data.checklists;
        this.appform = response.data.appform;
        this.travel_purpose = response.data.travel_purpose;
        this.passport_types = response.data.passport_types;
        this.visa_fees = response.data.visa_fees;
        this.country_list = response.data.country_list;
        this.tvl_purpose = response.data.tvl_purpose;
        this.travel_purpose= response.data.travel_purpose;
        this.visa_types = response.data.visa_types;
       //  console.log( response.data);
      });
  },
  methods: {
     calculate2() {
      //this.service = this.fields.service;
      this.result2 = parseInt(this.fields.service) * parseInt(this.fields.no_of_traveler);
    },
   
    async findFee() {
    try {
      const res = await http.get("https://b2bdemo.visathing.in/api/visafee_search/"+ this.data.id + "/" + this.fields.passport_type + "/" + this.fields.visa_type);
      this.visafees = res.data.visafees;
    } catch (error) {
      console.log(error);
  }
    },
     submit() {
      this.$axios
        .post("https://b2bdemo.visathing.in/api/country_search/" + this.fields.search)
        .then(
          ({ data }) => (
            (this.travel_purpose = this.fields.travel_purpose),
            (this.cityzen_cty = this.fields.cityzen_cty),
            (this.fields = {})
          )
        )
        .catch((error) => console.log(error));
      if (this.fields) {
        this.$router
          .push({
            path: "/" + this.fields.search,
            slug: this.fields,
          })
          .bind(this.fields);
      }
    },
   
  },
};
</script>
