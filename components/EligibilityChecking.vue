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
                    <select class="form-select ques-select">
                        <option selected>Questionnaire Option</option>
                        <option value="1">One</option>
                    </select>
                    <div class="ques-box">
                        <div id="tabs">
                            <ul class="d-none">
                                <li><a href="#tabs-1">Tab 1</a></li>
                                <li><a href="#tabs-2">Tab 2</a></li>
                                <li><a href="#tabs-3">Tab 3</a></li>
                                <li><a href="#tabs-4">Tab 4</a></li>
                            </ul>
                            <!-- Form Section Here -->
                            <div id="tabs-1" v-if="show1">
                                <h3>01. What is Your Purpose Of Visit?</h3>
                                <div class="form-check ques-option">
                                    <input class="form-check-input" id="one"
                                            v-model="q1"
                                            value="1"
                                           type="radio">
                                    <label class="form-check-label" for="sate_1_checkbox_one">
                                        To join a study program 
                                    </label>
                                </div>
                                <div class="form-check ques-option">
                                    <input class="form-check-input" id="sate_1_checkbox_two" name="checkbox"
                                     v-model="q1"
                                            value="2"
                                           type="radio">
                                    <label class="form-check-label" for="sate_1_checkbox_two">
                                        To join my wife
                                    </label>
                                </div>
                                <div class="form-check ques-option">
                                    <input class="form-check-input" id="sate_1_checkbox_three" name="checkbox"
                                     v-model="q1"
                                            value="3"
                                           type="radio">
                                    <label class="form-check-label" for="sate_1_checkbox_three">
                                        To join spouse
                                    </label>
                                </div>
                                <div class="form-check ques-option">
                                    <input class="form-check-input" id="sate_1_checkbox_four" name="checkbox"
                                     v-model="q1"
                                            value="4"
                                           type="radio">
                                    <label class="form-check-label" for="sate_1_checkbox_four">
                                        Others
                                    </label>
                                </div>
                                   <!-- Next Prev Button Here -->
                        <div class="d-flex gap-4 mt-4">
                            <input type="button" id="btnPrevious" value="Bank" class="list-form-btn"/>
                            <button @click.prevent="point1" type="button" id="btnNext" value="Next" class="list-form-btn">Next </button>
                        </div>
                            </div>
                            <div id="tabs" v-if="show2">
                                <h3>02. What is Your Purpose Of Visit?</h3>
                                <div class="form-check ques-option">
                                    <input class="form-check-input" id="sate_2_checkbox_one"
                                           name="checkbox" value="5" v-model="q2"
                                           type="radio">
                                    <label class="form-check-label" for="sate_2_checkbox_one">
                                        To join a study program
                                    </label>
                                </div>
                                <div class="form-check ques-option">
                                    <input class="form-check-input" id="sate_2_checkbox_two"
                                           name="checkbox" value="6" v-model="q2"
                                           type="radio">
                                    <label class="form-check-label" for="sate_2_checkbox_two">
                                        To join my wife
                                    </label>
                                </div>
                                <div class="form-check ques-option">
                                    <input class="form-check-input" id="sate_2_checkbox_three" name="checkbox"
                                    value="7" v-model="q2"
                                           type="radio">
                                    <label class="form-check-label" for="sate_2_checkbox_three">
                                        To join spouse
                                    </label>
                                </div>
                                <div class="form-check ques-option">
                                    <input class="form-check-input" id="sate_2_checkbox_four" name="checkbox"
                                    value="8" v-model="q2"
                                           type="radio">
                                    <label class="form-check-label" for="sate_2_checkbox_four">
                                        Others
                                    </label>
                                </div>
                                   <!-- Next Prev Button Here -->
                        <div class="d-flex gap-4 mt-4">
                            <input type="button" id="btnPrevious" value="Bank" class="list-form-btn"/>
                            <button @click.prevent="point2" type="button" id="btnNext" value="Next" class="list-form-btn">Next </button>
                        </div>
                            </div>
                            <div id="tabs-3" v-if="show3">
                                <h3>03. What is Your Purpose Of Visit?</h3>
                                <div class="form-check ques-option">
                                    <input class="form-check-input" id="sate_3_checkbox_one"
                                           name="checkbox" value="9" v-model="q3"
                                           type="radio">
                                    <label class="form-check-label" for="sate_3_checkbox_one">
                                        To join a study program
                                    </label>
                                </div>
                                <div class="form-check ques-option">
                                    <input class="form-check-input" id="sate_3_checkbox_two" name="checkbox"
                                    value="10" v-model="q3"
                                           type="radio">
                                    <label class="form-check-label" for="sate_3_checkbox_two">
                                        To join my wife
                                    </label>
                                </div>
                                <div class="form-check ques-option">
                                    <input class="form-check-input" id="sate_3_checkbox_three"
                                           name="checkbox" value="11" v-model="q3"
                                           type="radio">
                                    <label class="form-check-label" for="sate_3_checkbox_three">
                                        To join spouse
                                    </label>
                                </div>
                                <div class="form-check ques-option">
                                    <input class="form-check-input" id="sate_3_checkbox_four" name="checkbox" 
                                    value="12" v-model="q3"
                                           type="radio">
                                    <label class="form-check-label" for="sate_3_checkbox_four">
                                        Others
                                    </label>
                                </div>
                                   <!-- Next Prev Button Here -->
                        <div class="d-flex gap-4 mt-4">
                            <input type="button" id="btnPrevious" value="Bank" class="list-form-btn"/>
                            <button @click.prevent="point3" type="button" id="btnNext" value="Next" class="list-form-btn">Next </button>
                        </div>
                            </div>
                            <div id="tabs-4" v-if="show4">
                                <h3>04. What is Your Purpose Of Visit?</h3>
                                <div class="form-check ques-option">
                                    <input class="form-check-input" id="sate_4_checkbox_one"
                                           name="checkbox"
                                           v-model="q4"
                                           type="radio" value="13">
                                    <label class="form-check-label" for="sate_4_checkbox_one">
                                        To join a study program
                                    </label>
                                </div>
                                <div class="form-check ques-option">
                                    <input class="form-check-input" id="sate_4_checkbox_two" name="checkbox"
                                      v-model="q4"
                                           type="radio" value="14">
                                    <label class="form-check-label" for="sate_4_checkbox_two">
                                        To join my wife
                                    </label>
                                </div>
                                <div class="form-check ques-option">
                                    <input class="form-check-input" id="sate_4_checkbox_three" name="checkbox"
                                      v-model="q4"
                                           type="radio" value="15">
                                    <label class="form-check-label" for="sate_4_checkbox_three">
                                        To join spouse
                                    </label>
                                </div>
                                <div class="form-check ques-option">
                                    <input class="form-check-input" id="sate_4_checkbox_four"
                                           name="checkbox"
                                            v-model="q4"
                                           type="radio" value="16">
                                    <label class="form-check-label" for="sate_4_checkbox_four">
                                        Others
                                    </label>
                                </div>
                                   <!-- Next Prev Button Here -->
                        <div class="d-flex gap-4 mt-4">
                            <input type="button" id="btnPrevious" value="Bank" class="list-form-btn"/>
                            <button @click.prevent="point4" type="button" id="btnNext" value="Next" class="list-form-btn">Submit </button>
                        </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="check-progress">
                    <div class="position-relative" id="circle"><span>{{percent}}%</span></div>
                    <button class="btn-gradient">Download PDF {{result}}<span class="fas fa-download"></span></button>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Eligibility  Checking Section End-->
</template>

<script>
import axios from "axios";

export default {
  components: {
  //  EligibilityChecking,
  },

  data() {
    return {
      show1: true,
      show2: false,
      show3: false,
      show4: false,
      q1: [],
      q2: [],
      q3: [],
      q4: [],
      percent: 0,
      result: 0,
    };
  },

  methods: {
    point1() {
      this.show1 = false;
      this.show2 = true;
      this.show3 = false;
      this.show4 = false;
      this.percent = 25;
    },
    point2() {
      this.show1 = false;
      this.show2 = false;
      this.show3 = true;
      this.show4 = false;
      this.percent = 50;
      this.result = parseInt(this.q1, 10) + parseInt(this.q2, 10);
    },
    point3() {
      this.show1 = false;
      this.show2 = false;
      this.show3 = false;
      this.show4 = true;
      this.percent = 75;
      this.result =
        parseInt(this.q1, 10) + parseInt(this.q2, 10) + parseInt(this.q3, 10);
    },
    point4() {
      this.show1 = false;
      this.show2 = false;
      this.show3 = false;
      this.show4 = true;
      this.percent = 100;
      this.result =
        parseInt(this.q1, 10) +
        parseInt(this.q2, 10) +
        parseInt(this.q3, 10) +
        parseInt(this.q4, 10);
    },
  },
};
</script>