<template>
  <div>
    <nuxt-child :data="data" />
    <section class="page-name text-center">
      <div class="container">
        <h1>Visa Application Status</h1>
      </div>
    </section>
    <section class="page-content">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="row">
              <div class="col-md-6 col-lg-12">
                <div class=" applicant-details">
                  <h2 class="card-header">Applicant Details</h2>
                  <div id="trackdetails">
									<div class="track_title">
										<h2>Applicant Details</h2>
									</div>
									<div class="track_detail_wrapper row">
										<div class="col-lg-6">
											<span>Applicant Name</span>
										</div>
										<div class="col-lg-1">
											<span class="colon">:</span>
										</div>
										<div class="col-lg-5">
											<span> {{data.name}} </span>
										</div>
									</div>
									<div class="track_detail_wrapper row">
										<div class="col-lg-6">
											<span>Tracking Number</span>
										</div>
										<div class="col-lg-1">
											<span class="colon">:</span>
										</div>
										<div class="col-lg-5">
											<span> {{data.tracking_no}} </span>
										</div>
									</div>
									<div class="track_detail_wrapper row ">
										<div class="col-lg-6">
											<span>Passport Number</span>
										</div>
										<div class="col-lg-1">
											<span class="colon">:</span>
										</div>
										<div class="col-lg-5">
											<span> {{data.current_passport}} </span>
										</div>
									</div>
									<div class="track_detail_wrapper row">
										<div class="col-lg-6">
											<span>Country</span>
										</div>
                    <div class="col-lg-1">
											<span class="colon">:</span>
										</div>
										<div class="col-lg-5">
											<span v-for="(cty, cty_key) in data.countries" :key="cty_key">{{data.countries[0].name}} </span>
										</div>
									</div>
                  <div class="track_detail_wrapper row">
										<div class="col-lg-6">
											<span>Service</span>
										</div>
                    <div class="col-lg-1">
											<span class="colon">:</span>
										</div>
										<div class="col-lg-5">
											<span v-for="(ser, ser_key) in data.services" :key="ser_key"> {{data.services[0].name}} </span>
										</div>
									</div>
                  <div class="track_detail_wrapper row">
										<div class="col-lg-6">
											<span>Visa Category</span>
										</div>
                    <div class="col-lg-1">
											<span class="colon">:</span>
										</div>
										<div class="col-lg-5">
											<span> {{data.visa_category}} </span>
										</div>
									</div>
								</div>
                <div id="trackdetails">
									<div class="track_title">
										<h2>Info</h2>
									</div>
									<div class="track_detail_wrapper row ">

										<div class="track_info_content col-lg-12">
											<span> In case of any urgent issue regarding your <b>Visa Application Status</b>,<hr>Please Call/Mail 
												<br>
												<p>Case Officer: <b v-if="case_officer">{{case_officer.name}} </b></p>
												<p>Case Officer Phone: <b v-if="case_officer">+{{case_officer.phone}}</b></p>
												
												<br>
																								
												<i class="fa fa-phone" aria-hidden="true"></i>
												<b>0196 777 7788</b> || <i class="fa fa-envelope" aria-hidden="true"></i>
												<b>support@visathing.com</b>
											</span>
										</div>
									</div>
								</div>
                </div>
              </div>
           
            </div>
          </div>
          <div class="col-lg-8">
            <div class="application-status">
              <table class="table table-striped">
               <thead>
										<tr>
											<th>Date</th>
											<th>Application Status</th>
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
      title: `Application Status - VISAThing`,
      titleTemplate: `Application Status - VISAThing`,
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
      const options = { day: "numeric", month: "numeric", year: "numeric"};
      return new Date(date).toLocaleDateString("en-us", options);
    },
  },
};
</script>