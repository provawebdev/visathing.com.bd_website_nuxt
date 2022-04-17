<template>
  <div>
   <nuxt-child :data="data" />
     <!-- Page Name -->
    <section class="page-name text-center">
        <div class="container">
            <h1>Contact Us</h1>
        </div>
    </section>
    <!-- Page Name -->
    <!-- Page Content Start-->
    <section class="page-content contact-information">
        <div class="container">

            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 col-12">
                    <div class="contact-info-item">
                        <div class="contact-info-icon">
                            <svg width="18" height="22" viewBox="0 0 18 22" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9 21.728L2.636 15.364C1.37734 14.1053 0.520187 12.5017 0.172928 10.7559C-0.17433 9.01004 0.00390685 7.20044 0.685099 5.55591C1.36629 3.91139 2.51984 2.50579 3.99988 1.51686C5.47992 0.52793 7.21998 9.15527e-05 9 9.15527e-05C10.78 9.15527e-05 12.5201 0.52793 14.0001 1.51686C15.4802 2.50579 16.6337 3.91139 17.3149 5.55591C17.9961 7.20044 18.1743 9.01004 17.8271 10.7559C17.4798 12.5017 16.6227 14.1053 15.364 15.364L9 21.728ZM13.95 13.95C14.9289 12.971 15.5955 11.7237 15.8656 10.3659C16.1356 9.00804 15.9969 7.60061 15.4671 6.32157C14.9373 5.04253 14.04 3.94932 12.8889 3.18018C11.7378 2.41104 10.3844 2.00052 9 2.00052C7.61557 2.00052 6.26222 2.41104 5.11109 3.18018C3.95996 3.94932 3.06275 5.04253 2.53292 6.32157C2.00308 7.60061 1.86442 9.00804 2.13445 10.3659C2.40449 11.7237 3.07111 12.971 4.05 13.95L9 18.9L13.95 13.95ZM9 11C8.46957 11 7.96086 10.7893 7.58579 10.4142C7.21072 10.0392 7 9.53045 7 9.00001C7 8.46958 7.21072 7.96087 7.58579 7.5858C7.96086 7.21073 8.46957 7.00001 9 7.00001C9.53044 7.00001 10.0391 7.21073 10.4142 7.5858C10.7893 7.96087 11 8.46958 11 9.00001C11 9.53045 10.7893 10.0392 10.4142 10.4142C10.0391 10.7893 9.53044 11 9 11Z"
                                    fill="#09121F" />
                            </svg>

                        </div>
                        <div class="contact-info-content">
                            <h3 class="title">Address</h3>
                            <p>1st Floor, Homestead Gulshan Link Tower</p>
                            <p>Gulshan-Badda link Road, Gulshan-1, Dhaka-1212</p>
                            <a class="link"
                                href="https://www.google.com/maps/place/VISAThing/@23.7806109,90.4232463,19.25z"
                                target="_blank">Directions</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-12">
                    <div class="contact-info-item">
                        <div class="contact-info-icon">
                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1 0H19C19.2652 0 19.5196 0.105357 19.7071 0.292893C19.8946 0.48043 20 0.734784 20 1V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0ZM18 4.238L10.072 11.338L2 4.216V16H18V4.238ZM2.511 2L10.061 8.662L17.502 2H2.511Z"
                                    fill="#09121F" />
                            </svg>

                        </div>
                        <div class="contact-info-content">

                            <h3 class="title">Email</h3>
                            <a href="mailto:cr@visathing.com">cr@visathing.com</a>
                            <a class="link" href="mailto:cr@visathing.com" target="_blank">Send a
                                Message</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-12">
                    <div class="contact-info-item">
                        <div class="contact-info-icon">
                            <svg width="16" height="21" viewBox="0 0 16 21" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0 21C0 18.8783 0.842855 16.8434 2.34315 15.3431C3.84344 13.8429 5.87827 13 8 13C10.1217 13 12.1566 13.8429 13.6569 15.3431C15.1571 16.8434 16 18.8783 16 21H0ZM9 15.083V19H13.659C13.3015 17.9914 12.6812 17.0966 11.8621 16.408C11.0431 15.7193 10.055 15.2619 9 15.083ZM7 19V15.083C5.945 15.2619 4.95691 15.7193 4.13785 16.408C3.31879 17.0966 2.69847 17.9914 2.341 19H7ZM8 12C4.685 12 2 9.315 2 6C2 2.685 4.685 0 8 0C11.315 0 14 2.685 14 6C14 9.315 11.315 12 8 12ZM8 10C10.21 10 12 8.21 12 6C12 3.79 10.21 2 8 2C5.79 2 4 3.79 4 6C4 8.21 5.79 10 8 10Z"
                                    fill="#09121F" />
                            </svg>

                        </div>
                        <div class="contact-info-content">

                            <h3 class="title">Support</h3>
                            <a href="tel:+8801967777788">(+88) 0196 777 7788 (Hotline)</a>
                            <a class="link" href="#" target="_blank">Open a Ticket</a>
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