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
            </div>
          </div>
        </div>
      </div>
    </section>

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
                <option value="bangladesh">Bangladesh</option>
                 <option value="visathing.in">India</option>
                 <option value="np.visathing.com">Nepal</option>
              </select>
            </div>
            <div class="select-box">
              <label>Travelling to</label>
              <select
                aria-label="select"
                class="form-select select-option"
                v-model="fields.search" @change="findVC"
              >
               <option value="" selected> Select Country </option>
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
              <label>Visa Category</label>
              <select
                aria-label="select"
                class="form-select select-option"
                v-model="fields.v_category" v-if="this.fields.search" onClick={this.onShow.bind(this)}
              >
                <option value="" selected>Choose if you want</option>
                <option
                  v-for="(v_category, vc_key) in country.visacat"
                  :key="vc_key"
                  :value="v_category.id"
                > 
                  {{ v_category.name }}
                </option>
              </select>
               <select
                aria-label="select"
                class="form-select select-option"
                v-model="fields.v_category" v-else
              >
                <option selected>Choose if you want</option>
                <option
                  v-for="(v_category, vc_key) in v_categories"
                  :key="vc_key"
                  :value="v_category.id"
                >
                  {{ v_category.name }}
                </option>
              </select>
            </div>
            <button class="btn-gradient" type="submit">
              Check Requirements
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
              <div v-if="v_category">
                 <div v-for="(vcat, vcat_key) in data.visacat" :key="vcat_key">
                  <h3 class="fs-20" v-if="v_category == vcat.id">{{ vcat.name }} Required</h3>
                  <div class="list-items" v-if="v_category == vcat.id">
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
              <div v-else>
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
              </div>
              <!-- ----------------------------------------------------------------------- -->
              <!--                   Customize my checklist body content                   -->
              <!-- ----------------------------------------------------------------------- -->
            
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
                          <option value="" selected> Select Passport Type </option>
                          <option v-for="(p_type, p_key) in passport_types" :key="p_key" :value="p_type.id">{{p_type.name}}</option>
                          </select>
                      </div>
                      <div class="form-item">
                        <h4 class="fs-16">Visa Type</h4>
                        <select class="form-select"  v-model="fields.visa_type" @change="findFee()">
                        <option value="" selected> Select Visa Type </option>
                           <option v-for="(v_type, v_key) in visa_types" :key="v_key" :value="v_type.id">{{v_type.name}} </option>
                        </select>
                      </div>
                      <div class="form-item">
                        <h4 class="fs-16">Number of Entry</h4>
                        <select class="form-select" v-model="fields.visa_fee">
                          <option value="" selected>  Select Number of Entry </option>
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
      title: `%s ${this.data.name} - VISAThing`,
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
      v_categories: [],
      v_category: {},
      passport_types: [],
      visa_types: [],
      visafees: [],
      image: bgImg,
      fields: {
        country: "",
        search: "",
        v_category: "",
        cityzen_cty: "bangladesh",
        service: "",
        no_of_traveler: "",
        passport_type: "",
        visa_type: "",
      },
      result2: 0,
      selected: 'null',
      selected2: 1,
      country_list: [],
      country: "",
    };
  },

  created() {
    this.$axios
      .get("https://b2bdemo.visathing.in/api/country/" + this.$route.params.slug , {
       // v_category: this.$route.params.v_category,
      })
      .then((response) => {
        this.data = response.data.data;
        this.checklists = response.data.checklists;
        this.appform = response.data.appform;
        this.passport_types = response.data.passport_types;
        this.country_list = response.data.country_list;
        this.v_categories = response.data.v_categories;
        this.visa_types = response.data.visa_types;
        this.country = data.id;
      });
  },
  methods: {
     calculate2() {
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

    async findVC() {
    try {
      const res = await http.get("https://b2bdemo.visathing.in/api/vcategory_search/"+ this.fields.search);
      this.country = res.data.country;
    } catch (error) {
      console.log(error);
    }
    },

   submit() {
      this.$axios
        .get("https://b2bdemo.visathing.in/api/country/" + this.fields.search ,   {
    },)
   .then(
      ({ data }) => (
        (this.fields = {})
      )
    )
    .catch((error) => console.log(error));
      if (this.fields) {
        this.$router
          .push({
            path: "/" + this.fields.search,
           // params: { v_category: this.fields.v_category },
          })
          this.v_category = this.fields.v_category;
          // console.log(this.fields.v_category)
      }
    },
  },
};
</script>
