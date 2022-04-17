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
                          <td>: &nbsp; Mirza Niaz Zaman Elin</td>
                        </tr>
                        <tr>
                          <td>Tracking Number</td>
                          <td>: &nbsp; 2009210859</td>
                        </tr>
                        <tr>
                          <td>Passport Number</td>
                          <td>: &nbsp; EG018474745</td>
                        </tr>
                        <tr>
                          <td>Country</td>
                          <td>: &nbsp; Bangladesh</td>
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
                      <h3>Shakil Khan</h3>
                      <p>info@youremail.com</p>
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
                          <td>: &nbsp; +880 123 4567 890</td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td>: &nbsp; info@youremail.com</td>
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
                <tbody>
                  <tr>
                    <td>03/11/2020</td>
                    <td colspan="2">New Appoinment Date 10/11/2020</td>
                  </tr>
                  <tr>
                    <td>27/10/2020</td>
                    <td colspan="2">
                      NOC affidavit on parental cosent is reuired
                    </td>
                  </tr>
                  <tr>
                    <td>27/10/2020</td>
                    <td colspan="2">
                      Updated bank statement ( original ) is required
                    </td>
                  </tr>
                  <tr>
                    <td>27/10/2020</td>
                    <td colspan="2">
                      Travel Health insurance with COVID cover is required
                    </td>
                  </tr>
                  <tr>
                    <td>27/10/2020</td>
                    <td colspan="2">
                      Submission attempt was not successful updated documents
                      required
                    </td>
                  </tr>
                  <tr>
                    <td>27/10/2020</td>
                    <td colspan="2">
                      VFS appointment arranged on22 OCtobor 2020
                    </td>
                  </tr>
                  <tr>
                    <td>27/10/2020</td>
                    <td colspan="2">
                      Original invitation letter reached delhi from ukraine on
                      19 October 2020
                    </td>
                  </tr>
                  <tr>
                    <td>17/10/2020</td>
                    <td colspan="2">
                      Application submission pending original invitation letter
                      required.
                    </td>
                  </tr>
                  <tr>
                    <td>24/09/2020</td>
                    <td colspan="2">Document dispatched from office</td>
                  </tr>
                  <tr>
                    <td>24/09/2020</td>
                    <td colspan="2">Final review</td>
                  </tr>
                  <tr>
                    <td>24/09/2020</td>
                    <td colspan="2">
                      File submission appointment date 5/10/2020
                    </td>
                  </tr>
                  <tr>
                    <td>22/09/2020</td>
                    <td colspan="2">Full application receive</td>
                  </tr>
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
  baseURL: "https://visathing.com.bd/",

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
      
      fields: {
        search: "",
      },
      
    };
  },

  created() {
    this.$axios
      .get("https://visathing.com.bd/track/status?status=" + this.$route.params.id)
      .then((response) => {
        this.data = response.data.data;
        // console.log( response.data.checklists);
      });
  },
  methods: {
    
  },
};
</script>