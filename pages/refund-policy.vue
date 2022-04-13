<template>
  <div>
   <nuxt-child :data="data" />
     <!-- Page Name -->
    <section class="page-name text-center">
        <div class="container">
            <h1>{{data.name}}</h1>
        </div>
    </section>
    <!-- Page Name -->
    <!-- Page Content Start-->
    <section class="page-content">
        <div class="container">
            <div class="content-box">
            <p v-html="data.body"></p>
              <!--  <h2>Refund Policy</h2>

                <p>For the purposes of this Refund Policy:</p>
                <ul>
                    <li>
                        <p><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;,
                            &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to Visathing, Gulshan-1,
                            Dhaka-1212.</p>
                    </li>
                    <li>
                        <p><strong>Goods</strong> refer to the items offered for sale on the Service.</p>
                    </li>
                    <li>
                        <p><strong>Orders</strong> mean a request by You to purchase Goods from Us.</p>
                    </li>
                    <li>
                        <p><strong>Service</strong> refers to the Website.</p>
                    </li>
                    <li>
                        <p><strong>Website</strong> refers to Visathing, accessible from <a href="https://visathing.com"
                                rel="external nofollow noopener" target="_blank">https://visathing.com</a></p>
                    </li>
                    <li>
                        <p><strong>You</strong> means the individual accessing or using the Service, or the company, or
                            other legal entity on behalf of which such individual is accessing or using the Service, as
                            applicable.</p>
                    </li>
                </ul>
                <p>We reserve the right to refuse returns of any merchandise that does not meet the above return
                    conditions in our sole discretion.</p>
                <p>Only regular priced Goods may be refunded. Unfortunately, Goods on sale cannot be refunded. This
                    exclusion may not apply to You if it is not permitted by applicable law.</p>
                <h2>Returning Goods</h2>
                <p>You are responsible for the cost and risk of returning the Goods to Us. You should send the Goods at
                    the following address:</p>
                <p>1st Floor, Homestead Gulshan Link Tower, Gulshan-Badda link Road, Gulshan-1, Dhaka-1212</p>
                <p>We cannot be held responsible for Goods damaged or lost in return shipment. Therefore, We recommend
                    an insured and trackable mail service. We are unable to issue a refund without actual receipt of the
                    Goods or proof of received return delivery.</p>

                <h2>Contact Us</h2>
                <p>If you have any questions about our Returns and Refunds Policy, please contact us:</p>
                <ul>
                    <li>By visiting this page on our website: <a href="https://visathing.com/contact-us"
                            rel="external nofollow noopener" target="_blank">https://visathing.com/contact-us</a></li>
                </ul>-->
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
      data: [],
      image: bgImg,
    };
  },
  created() {
    this.$axios.get("https://b2bdemo.visathing.in/api/manu_list/").then((response) => {
      this.data = response.data.refund;
     // console.log( response.data.about);
    });
  },
};
</script>