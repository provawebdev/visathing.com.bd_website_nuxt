<template>
  <!-- Eligibility  Checking Section Start-->
  <section id="eligibility-checking">
    <div class="container">
      <div class="section-header text-white">
        <h2>Visa Eligibility Checker</h2>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="check-ques">
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
            <div class="ques-box" name="question">
              <div id="tabs">
                <ul class="d-none">
                  <li><nuxt-link to="#tabs-0">Tab 0</nuxt-link></li>
                  <li><nuxt-link to="#tabs-1">Tab 1</nuxt-link></li>
                  <li><nuxt-link to="#tabs-2">Tab 2</nuxt-link></li>
                  <li><nuxt-link to="#tabs-3">Tab 3</nuxt-link></li>
                  <li><nuxt-link to="#tabs-4">Tab 4</nuxt-link></li>
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
                      <input
                        class="form-check-input"
                        id="sate_1_checkbox_one"
                        name="'question' + key"
                        v-model="question[key]"
                        :value="ans.point"
                        type="radio"
                        required
                      />
                      <label class="form-check-label" for="sate_1_checkbox_one">
                        {{ ans.answer }}
                      </label>
                    </div>

                    <div class="d-flex gap-4 mt-4">
                      <button v-if="key +1 === total"
                        @click.prevent="nextQst()"
                        type="button"
                        id="btnNext"
                        value="Check Score"
                        class="list-form-btn"
                        >
                        Check Score
                      </button>
                       <button v-if="key + 1 < total"
                        @click.prevent="nextQst()"
                        type="button"
                        id="btnNext"
                        value="Next"
                        class="list-form-btn"
                      >
                        Next {{key + 1}} {{total}}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="check-progress">
            <div class="position-relative" id="circle">
              <span>{{ result}}%</span>
            </div>
            <button class="btn-gradient">
               Score Percent : {{ percent}}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Eligibility  Checking Section End-->
</template>

<script>
import axios from "axios";
require("jquery-circle-progress/dist/circle-progress");
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
      // console.log(event.target.value);
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
      // let question = "q" + this.key;

      let question = [this.question[this.key]];

      if (this.key < newTotal) {
        this.key++;
        let countPercent = 100/newTotal;
        this.percent += Math.round(countPercent);

        this.result += question[0];
        console.log(this.percent);

        // console.log(result);
      }
    },
  },
};
</script>
