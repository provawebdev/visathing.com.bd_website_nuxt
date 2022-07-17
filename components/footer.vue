<template>
  <div>
    <!-- Footer Start -->
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 col-md-6 col-12">
              <div class="footer-item item-1">
                <h3>Disclaimer</h3>
                <ul class="item-1-content">
                  <li>
                    Due to the periodic changes of information/ requirement/
                    document, VISAThing doesn’t provide any confirmation,
                    guarantee or representation, express or implied, that the
                    information contained or referenced herein is completely
                    accurate or final. VISAThing also doesn’t assure the grant
                    of visa for its ‘Visa logistics support’. Visa grant is the
                    distinct decision of embassy or consulate of the respective
                    countries.
                  </li>
                  <li>
                    <ul class="d-flex">
                      <li>
                        <a
                          href="https://www.facebook.com/VisaThing/"
                          target="_blank"
                          ><span class="fab fa-facebook-f"></span
                        ></a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/"
                          target="_blank"
                          ><span class="fab fa-instagram"></span
                        ></a>
                      </li>
                      <li>
                        <a href="https://twitter.com/visathing?lang=en" target="_blank"
                          ><span class="fab fa-twitter"></span
                        ></a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/c/visathingbd" target="_blank"
                          ><span class="fab fa-youtube"></span
                        ></a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-6 col-6">
              <div class="footer-item item-2">
                <h3>Menu</h3>
                <ul class="item-2-content">
                  <li>
                    <nuxt-link to="/about"
                      ><span class="fas fa-long-arrow-alt-right"></span>About Us</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link to="/services"
                      ><span class="fas fa-long-arrow-alt-right"></span>Services</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link to="/appointment"
                      ><span class="fas fa-long-arrow-alt-right"></span>Appointment</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link to="/contacts"
                      ><span class="fas fa-long-arrow-alt-right"></span>Contact Us</nuxt-link
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-6 col-6">
              <div class="footer-item item-3">
                <h3>Quick Links</h3>
                <ul class="item-3-content">
                  <li>
                    <nuxt-link to="/signin"
                      ><span class="fas fa-long-arrow-alt-right"></span>Sign In/Sign
                      Up</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link to="/terms-and-conditions"
                      ><span class="fas fa-long-arrow-alt-right"></span>Terms &
                      Conditions</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link to="/privacy-policy"
                      ><span class="fas fa-long-arrow-alt-right"></span>Privacy &
                      Policy</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link to="/refund-policy"
                      ><span class="fas fa-long-arrow-alt-right"></span>Refund
                      Policy</nuxt-link
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <div class="footer-item item-4">
                <h3>Newsletter</h3>
                <ul class="item-4-content">
                  <li>
                    <form class="footer-newsletter border-radius-5">
                      <label>
                        <input
                          class="footer-newsletter-input"
                          v-model="email"
                          placeholder="Enter your mail"
                          type="search"
                        />
                      </label>
                      <button
                        class="
                          footer-newsletter-icon
                          bgc-gradient
                          border-radius-5 btn
                        "
                        type="submit"
                        @click.prevent="send"
                      >
                        <svg
                          fill="none"
                          height="22"
                          viewBox="0 0 20 22"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.741 0.408106L19.203 10.5621C19.2814 10.6053 19.3468 10.6687 19.3923 10.7457C19.4378 10.8228 19.4618 10.9106 19.4618 11.0001C19.4618 11.0896 19.4378 11.1774 19.3923 11.2545C19.3468 11.3315 19.2814 11.3949 19.203 11.4381L0.741 21.5921C0.664873 21.634 0.579148 21.6553 0.492273 21.654C0.405398 21.6526 0.320372 21.6287 0.245577 21.5844C0.170781 21.5402 0.108797 21.4773 0.0657334 21.4018C0.0226703 21.3264 1.48755e-05 21.241 0 21.1541V0.846106C1.48755e-05 0.75922 0.0226703 0.673839 0.0657334 0.598376C0.108797 0.522913 0.170781 0.459974 0.245577 0.415763C0.320372 0.371552 0.405398 0.347594 0.492273 0.346251C0.579148 0.344908 0.664873 0.366227 0.741 0.408106ZM2 12.0001V18.6171L15.85 11.0001L2 3.38311V10.0001H7V12.0001H2Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                    </form>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <div class="row justify-content-between align-items-center">
            <div class="col-lg-7 col-md-6 order-1 order-md-0">
              <div class="copyright">
                <p class="fs-14">
                  <a href="#">VISAThing</a> © 2022 . All Rights Reserved.   |  VISAThing is a registered Trademark of Your Trip Mate Ltd.
                </p>
              </div>
            </div>
            <div class="col-lg-5 col-md-6">
              <div
                class="
                  payment-methods
                  d-flex
                  justify-content-end
                  align-items-center
                "
              >
                <span>We Accept</span>
                <span class="payment-methods-icons"
                  ><img
                    alt=""
                    class="img-fluid"
                    src="~~/assets/img/payment-methods.png"
                /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- Footer End -->

    <!-- Back to top -->
    <nuxt-link class="back-to-top" to="#">
      <svg
        fill="none"
        height="8"
        viewBox="0 0 14 8"
        width="14"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          d="M6.99928 2.82783L2.04928 7.77783L0.635281 6.36383L6.99928 -0.000168403L13.3633 6.36383L11.9493 7.77783L6.99928 2.82783Z"
          fill="#2B2B2B"
        />
      </svg>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: "",
    message: "",
  }),
  methods: {
    send() {
      this.$mail.send({
        from: this.email,
        subject: "Contact form message",
        text: this.message,
      });
    },
  },
};
</script>

<style>
</style>