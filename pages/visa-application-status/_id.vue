<template>
  <div>
    <nuxt-child :data="data" />
    <section class="page-name text-center">
      <div class="container">
        <h1>{{ data.name }}</h1>
      </div>
    </section>
    <section class="page-content">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="row">
              <div class="col-md-6 col-lg-12">
                <div class="card applicant-details">
                  <h2 class="card-header">Applicant Details</h2>
                  <div class="card-body">
                    <table class="table table-borderless mb-0">
                      <tbody>
                        <tr>
                          <td>Applicant Name</td>
                          <td>: &nbsp; {{data.name}}</td>
                        </tr>
                        <tr>
                          <td>Tracking Number</td>
                          <td>: &nbsp; {{data.tracking_no}}</td>
                        </tr>
                        <tr>
                          <td>Passport Number</td>
                          <td>: &nbsp; {{data.current_passport}}</td>
                        </tr>
                        <tr>
                          <td>Country</td>
                          <td v-for="(cty, cty_key) in data.countries" :key="cty_key">: &nbsp; {{data.countries[0].name}}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-12">
                <div class="case-officer card applicant-details">
                  <h2 class="card-header">Dedicated Case Officer</h2>
                  <div class="card-body d-flex align-items-center">
                    <img src="" alt="" />
                    <div class="case-officer-info">
                      <h3>{{case_officer.name}}</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-12">
                <div class="card applicant-details">
                  <h2 class="card-header">Emergency Contact</h2>
                  <div class="card-body">
                    <table class="table table-borderless mb-0">
                      <tbody>
                        <tr>
                          <td>Mobile Number</td>
                          <td>: &nbsp; +{{case_officer.phone}}</td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td>: &nbsp; support@visathing.com</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="application-status">
              <table class="table table-borderless mb-0">
                <thead>
                  <tr>
                    <th class="col-2">Date</th>
                    <th class="col-10">Applications Status</th>
                    <th>Remarks</th>
                  </tr>
                </thead>
                <tbody v-if="cc_update">
                  <tr v-for="(cc, cc_key) in cc_update" :key="cc_key">
                    <td v-if="cc.created_at"> {{ formatDate(cc.created_at) }}</td>
                    <td colspan="2" v-if="cc.client_status">{{cc.client_status}}</td> <td colspan="2" v-else>{{cc.custom_status}}</td>
                    <td colspan="2" v-if="cc.remark"> {{ cc.remark }} </td>
                  </tr>
                </tbody>
                <tbody v-else>
                  <tr><td colspan="2">No data found</td> </tr>
                </tbody>
              </table>
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
  baseURL: "https://visathing.com.bd/api",

  adapter: throttleAdapterEnhancer(axios.defaults.adapter, {
    threshold: 10 * 1000,
  }),
});
export default {
  head() {
    return {
      title: "",
      titleTemplate: `Visa Application - VISAThing`,
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
      data: {},
      case_officer:[],
      cc_update: [],
      fields: {
        status: "",
      },
    };
  },
   created() {
    this.$axios
      .get("https://visathing.com.bd/api/track_website/" + this.$route.params.id)
      .then((response) => {
        this.data = response.data.data;
        this.case_officer = response.data.case_officer;
        this.cc_update = response.data.cc_update;
        // console.log(response.data.data);
      });
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en-us", options);
    },
  },
};
</script>