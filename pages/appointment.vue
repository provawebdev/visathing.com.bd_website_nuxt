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
            <form action="https://b2bdemo.visathing.in/api/appointment" method="post">
                <div class="row">
                    <div class="col-sm-6 col-12">
                        <div class="form-field">
                            <label for="your-name" class="form-label">Your Name (required)</label>
                            <input type="text" class="form-control" id="your-name" name="name" v-model="name">
                        </div>
                    </div>
                    <div class="col-sm-6 col-12">
                        <div class="form-field">
                            <label for="your-email" class="form-label">Your Email (required)</label>
                            <input type="text" class="form-control" id="your-email" name="email" v-model="email">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 col-12">
                        <div class="form-field">
                            <label for="your-occupation" class="form-label">Your Occupation(required)</label>
                            <input type="text" class="form-control" id="your-occupation" name="occupation" v-model="occupation">
                        </div>
                    </div>
                    <div class="col-sm-6 col-12">
                        <div class="form-field">
                            <label for="your-number" class="form-label">Your Cell Number (required) </label>
                            <input type="text" class="form-control" id="your-number" name="phone" v-model="phone">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 col-12">
                        <div class="form-field">
                            <label for="your-country" class="form-label">Country you wish to visit (required)</label>
                            <input type="text" class="form-control" id="your-country" name="country" v-model="country">
                        </div>
                    </div>
                    <div class="col-sm-6 col-12">
                        <div class="form-field">
                            <label for="prospective" class="form-label">Prospective Travel Date</label>
                            <input type="date" class="form-control" id="prospective" name="tvl_date" v-model="tvl_date">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 col-12">
                        <div class="form-field">
                            <h6 class="form-label fw-bold fs-16"><strong>Purpose of the visit</strong></h6>
                            <div class="d-flex align-items-center">
                                <div class="form-check me-3">
                                    <input class="form-check-input" type="radio" name="tvl_purpose" id="Business" v-model="tvl_purpose"
                                        checked>
                                    <label class="form-check-label" for="Business">
                                        Business
                                    </label>
                                </div>
                                <div class="form-check me-3">
                                    <input class="form-check-input" type="radio" name="tvl_purpose" id="Tourist" v-model="tvl_purpose">
                                    <label class="form-check-label" for="Tourist">
                                        Tourist
                                    </label>
                                </div>
                                <div class="form-check me-3">
                                    <input class="form-check-input" type="radio" name="tvl_purpose" id="Others" v-model="tvl_purpose">
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
                            <textarea class="form-control" style="height: 150px" id="travel_history" name="travel_history" v-model="travel_history"></textarea>
                        </div>
                    </div>
                    <div class="col-sm-6 col-12">
                        <div class="form-field">
                            <label for="list-documents" class="form-label">List of Documents you already have to apply
                                for the visa
                            <textarea class="form-control" style="height: 150px" id="list-documents" name="list_documents" v-model="list_documents"></textarea>
                            </label>
                        </div>
                    </div>
                </div>
                 <input name="submit" class="btn signin-submit-btn" type="submit" value="Confirm Appointment">
                <!-- <button type="button" class="btn signin-submit-btn" @click.prevent="products">Confirm Appointment</button> -->
            </form>
        </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";
export default {
   head() {
    return {
      title: `${this.data.name}`,
      titleTemplate: `${this.data.meta_title}`,
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
  asyncData({ req, res }) {
     if (process.server) {
        const qs = require('querystring');
        var body = '';
        var temp = '';
        while(temp = req.read()) {
            body += temp;
        }  
        var post = qs.parse(body);
        return {data: post};
    }
  },
  data() {
     return {
          data: '',
     }
  },
  // mounted() {
  //     console.log(this.data['email']);
  // },
}
</script>
<!-- https://stackoverflow.com/questions/59478989/vue-nuxt-js-how-to-read-post-request-parameters-received-from-an-external-re
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
      title: `${this.data.name}`,
      titleTemplate: `${this.data.meta_title}`,
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
      data: [],
      datas: [],
      name: '',
      email: '',
      phone: '',
      country: '',
      tvl_date: '',
      tvl_purpose: '',
      list_documents: '',
      occupation: '',
      travel_history: '',
    };
  },
  created() {
    this.$axios.get("https://b2bdemo.visathing.in/api/appoint/").then((response) => {
      this.data = response.data.contact;
    //  console.log( response.data.about);
    });
  },
  asyncData({ req, res }) {
     if (process.server) {
        const qs = require('querystring');
        var body = '';
        var temp = '';
        while(temp = req.read()) {
            body += temp;
        }  
        var post = qs.parse(body);
        return {datas: post};
    }
  },
   mounted() {
      console.log(this.datas['email']);
  },
    methods: {
    send() {
      this.$mail.send({
        from: this.email,
        subject: 'Contact form message',
        text: this.message,
      })
    },
    products() {
      this.$axios({
        method: 'post',
        url: 'https://b2bdemo.visathing.in/api/appointment',
        datas: {
          name: this.name,
          email: this.email,
          phone: this.phone,
          country: this.country,
          tvl_date: this.tvl_date,
          tvl_purpose: this.tvl_purpose,
          list_documents: this.list_documents,
          occupation: this.occupation,
          travel_history: this.travel_history,
          _token    :'{{csrf_token()}}',
        }
      })
      console.log(this.name);
    }
  },
};
</script>-->