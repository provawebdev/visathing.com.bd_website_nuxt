<template>
  <div>
   <nuxt-child :data="data" />
   <!-- Page Name -->
    <section class="page-name text-center">
        <div class="container">
            <h1>Appointment</h1>
        </div>
    </section>
    <!-- Page Name -->
    <!-- Page Content Start-->
    <section class="page-content contact-information appointment">
        <div class="container">
            <form>
                <div class="row">
                    <div class="col-sm-6 col-12">
                        <div class="form-field">
                            <label for="your-name" class="form-label">Your Name (required)</label>
                            <input type="text" class="form-control" id="your-name">
                        </div>
                    </div>
                    <div class="col-sm-6 col-12">
                        <div class="form-field">
                            <label for="your-email" class="form-label">Your Email (required)</label>
                            <input type="text" class="form-control" id="your-email">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 col-12">
                        <div class="form-field">
                            <label for="your-occupation" class="form-label">Your Occupation(required)</label>
                            <input type="text" class="form-control" id="your-occupation">
                        </div>
                    </div>
                    <div class="col-sm-6 col-12">
                        <div class="form-field">
                            <label for="your-number" class="form-label">Your Cell Number (required) </label>
                            <input type="text" class="form-control" id="your-number">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 col-12">
                        <div class="form-field">
                            <label for="your-country" class="form-label">Country you wish to visit (required)</label>
                            <input type="text" class="form-control" id="your-country">
                        </div>
                    </div>
                    <div class="col-sm-6 col-12">
                        <div class="form-field">
                            <label for="prospective" class="form-label">Prospective Travel Date</label>
                            <input type="date" class="form-control" id="prospective">
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-6 col-12">
                        <div class="form-field">
                            <h6 class="form-label fw-bold fs-16"><strong>Purpose of the visit</strong></h6>
                            <div class="d-flex align-items-center">
                                <div class="form-check me-3">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="Business"
                                        checked>
                                    <label class="form-check-label" for="Business">
                                        Business
                                    </label>
                                </div>
                                <div class="form-check me-3">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="Tourist">
                                    <label class="form-check-label" for="Tourist">
                                        Tourist
                                    </label>
                                </div>
                                <div class="form-check me-3">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="Others">
                                    <label class="form-check-label" for="Others">
                                        Others
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 col-12">
                        <div class="form-field">
                            <label for="travel_history" class="form-label">Travel History (Countries previously
                                visited)</label>
                            <textarea class="form-control" style="height: 150px" id="travel_history"></textarea>
                        </div>
                    </div>
                    <div class="col-sm-6 col-12">
                        <div class="form-field">
                            <label for="list-documents" class="form-label">List of Documents you already have to apply
                                for the visa
                            <textarea class="form-control" style="height: 150px" id="list-documents"></textarea>
                            </label>
                        </div>
                    </div>
                </div>


                <button type="submit" class="btn signin-submit-btn">Confirm Appointment</button>
            </form>
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