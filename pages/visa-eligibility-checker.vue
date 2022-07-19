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
                       <select
              @change="getCountries($event)"
              class="form-select ques-select"
              name="country"
              v-model="country"
              required
            >
              <option value="0">Select Country</option>
              <option
                v-for="(cty, key) in country_list"
                :value="cty"
                :key="key"
                :v-bind="cty.id"
              >
                {{ cty.name }}
              </option>
            </select>
                    </div>
                   
                    <div class="list-form-plan">
                        <div id="tabs">
                          <ul class="d-none">
                            <li><a href="#tabs-1">Tab 1</a></li>
                            <li><a href="#tabs-2">Tab 2</a></li>
                          </ul>
                          <div v-bind:id="'tabs-' + 0">
                  <div v-if="checker_question != null">
                    <h3>{{ key + 1 }}. {{ checker_question[key].question }}</h3>
                    <div
                      v-for="(ans, ans_key) in country_answers"
                      :key="ans_key"
                      v-show="
                        ans.checker_question_id == checker_question[key].id
                      "
                      class="form-check ques-option"
                    >
                    <label class="form-check-label" for="sate_1_checkbox_one">
                      <input
                        class="form-check-input"
                        id="sate_1_checkbox_one"
                        name="'question' + key"
                        v-model="question[key]"
                        :value="ans.point"
                        type="radio"
                        required
                      />
                      
                        {{ ans.answer }}
                      </label>
                    </div>

                    <div class="mt-4">
                    <input type="button" id="btnPrevious" value="Bank" class="form-previous-btn"/>
                      <button v-if="key +1 === total"
                        @click.prevent="nextQst()"
                        type="button"
                        id="btnNext"
                        value="Check Score"
                        class="form-next-btn"
                        >
                        Check Score
                      </button>
                       <button v-if="key + 1 < total"
                        @click.prevent="nextQst()"
                        type="button"
                        id="btnNext"
                        value="Next"
                        class="form-next-btn"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
                        </div>
                      
                    </div>
                  </form>
                </div>
                <div class="col-lg-6 col-md-9 col-sm-12 mt-4">
                  <div class="check-progress">
                    <div id="circle" class="position-relative"><span>{{ result}}%</span></div>
                    <button class="btn-gradient">Score {{ percent}} </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  </div>
</template>
<script>
import axios from "axios";
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
    //  EligibilityChecking,
  },

  data() {
    return {
      key: 0,
      total: null,
      percent: 0,
      result: 0,
      country: 0,
      country_list: [],
      // question: [],
      checker_question: null,
      question_answers: "",
      country_questions: [],
      country_answers: [],
      question: {},
    };
  },

  created: function () {
    this.getCountries();
  },
  methods: {
    getCountries(event) {
      this.key = 0;
      this.question = [this.question[this.key]];
      this.result = 0;
      axios.get("https://b2bdemo.visathing.in/api/eligibility_cheker_qus").then(
        function (response) {
          this.country = this.country;
          this.country_list = response.data.country_list;
          this.checker_question = this.country.country_questions;
          this.country_answers = this.country.country_answers;
          this.total = this.country.country_questions.length;
        }.bind(this)
      );
    },

    nextQst() {
      let newTotal = this.total - 1;
      let result = 0;

      let question = [this.question[this.key]];

      if (this.key < newTotal) {
        this.key++;
        let countPercent = 100/newTotal;
        this.percent += Math.round(countPercent);

        this.result += question[0];
       // console.log(this.percent);
      }
    },
  },
};
</script>