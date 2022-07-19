<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      Save
      <h6>Saved!</h6>
      <p>Your Details have been saved Successfully</p>
      <button>Go Home</button>
    </div>
    <div
      class="modal fade show"
      id="applyOnline"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      style="padding-right: 15px; display: block"
      @click.stop
    >
      <div class="modal-dialog cascading-modal" role="document">
        <!--Content-->
        <div class="modal-content">
          <!--Modal cascading tabs-->
          <div class="modal-c-tabs">
            <div class="card mb-0 shadow-none">
              <div class="card-body">
                <div class="px-3">
                  <h3 class="text-muted text-center pb-3 pb-3">
                    Sign in to continue to VISAThing.
                  </h3>
                  <div class="custom-tab tab-profile">
                    <!-- Nav tabs -->
                    <ul class="nav nav-tabs nav-tabs-custom" role="tablist">
                      <li class="nav-item">
                        <button
                          class="nav-link active"
                          id="basic-info-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#projects"
                          type="button"
                          role="tab"
                          aria-controls="projects"
                          aria-selected="true"
                        >
                          Login with phone number
                        </button>
                      </li>
                      <li class="nav-item">
                        <button
                          class="nav-link"
                          id="basic-info-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#activity"
                          type="button"
                          role="tab"
                          aria-controls="activity"
                          aria-selected="true"
                        >
                          Login with email
                        </button>
                      </li>
                    </ul>
                    <!-- Tab panes -->
                    <div class="tab-content pt-4">
                      <div
                        class="tab-pane active"
                        id="projects"
                        role="tabpanel"
                      >
                        <form
                          class="form-horizontal my-4"
                          method="POST"
                          action="https://visathing.org/b2cuser"
                        >
                          <input
                            type="hidden"
                            name="_token"
                            value="1d5ynl0GaeAvl3MbuClfQO4bwYeeOXwXEyspXeRW"
                          />
                          <div class="form-field">
                            <label for="inputUsername" class="form-label"
                              >Country Code</label
                            >
                            <select
                              name="cty_code"
                              aria-label="Default select example"
                              class="form-select"
                            >
                              <option
                                data-countrycode="BD"
                                value="+88"
                                selected="selected"
                              >
                                Bangladesh (+88)
                              </option>
                            </select>
                          </div>
                          <div class="form-field">
                            <label for="inputUsername" class="form-label"
                              >Phone Number</label
                            >
                            <div class="input-field d-flex align-items-center">
                              <svg
                                width="10"
                                height="12"
                                viewBox="0 0 10 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M2.08366 1.33332V10.6667H7.91699V1.33332H2.08366ZM1.50033 0.166656H8.50033C8.65504 0.166656 8.80341 0.228115 8.91281 0.337511C9.0222 0.446907 9.08366 0.59528 9.08366 0.74999V11.25C9.08366 11.4047 9.0222 11.5531 8.91281 11.6625C8.80341 11.7719 8.65504 11.8333 8.50033 11.8333H1.50033C1.34562 11.8333 1.19724 11.7719 1.08785 11.6625C0.97845 11.5531 0.916992 11.4047 0.916992 11.25V0.74999C0.916992 0.59528 0.97845 0.446907 1.08785 0.337511C1.19724 0.228115 1.34562 0.166656 1.50033 0.166656ZM5.00033 8.91666C5.15504 8.91666 5.30341 8.97812 5.41281 9.08751C5.5222 9.19691 5.58366 9.34528 5.58366 9.49999C5.58366 9.6547 5.5222 9.80307 5.41281 9.91247C5.30341 10.0219 5.15504 10.0833 5.00033 10.0833C4.84562 10.0833 4.69724 10.0219 4.58785 9.91247C4.47845 9.80307 4.41699 9.6547 4.41699 9.49999C4.41699 9.34528 4.47845 9.19691 4.58785 9.08751C4.69724 8.97812 4.84562 8.91666 5.00033 8.91666Z"
                                  fill="#86868B"
                                ></path>
                              </svg>
                              <input
                                type="number"
                                name="phone"
                                id="inputUsername"
                                placeholder="Type your phone number"
                                class="form-control"
                              />
                            </div>
                          </div>

                          <div class="form-group sorted-data">
                            <div class="input-group mb-3">
                              <input
                                id="citizen"
                                name="citizen"
                                type="hidden"
                                class="form-control"
                                value="bangladesh"
                              />
                              <input
                                id="countries"
                                name="countries"
                                type="hidden"
                                class="form-control"
                                value="afghanistan"
                              />
                              <input
                                id="visacategories"
                                name="visacategories"
                                type="hidden"
                                class="form-control"
                                value="all"
                              />
                            </div>
                          </div>
                          <div class="form-group row mt-4">
                            <div class="col-sm-6">
                              <div class="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  id="email_chk"
                                  name="remember"
                                />
                                <label
                                  class="custom-control-label"
                                  for="email_chk"
                                  >Remember me
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="form-group mb-0 row">
                            <div class="col-12 mt-2">
                              <button
                                class="btn signin-submit-btn"
                                type="submit"
                              >
                                Log In <i class="fas fa-sign-in-alt ml-1"></i>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div class="tab-pane" id="activity" role="tabpanel">
                        <form
                          class="form-horizontal my-4"
                          method="POST"
                          action="https://visathing.org/b2cuser"
                        >
                          <input
                            type="hidden"
                            name="_token"
                            value="1d5ynl0GaeAvl3MbuClfQO4bwYeeOXwXEyspXeRW"
                          />
                          <div class="form-group">
                            <label for="email">Email</label>
                            <div class="input-group mb-3">
                              <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1"
                                  ><i class="far fa-user"></i
                                ></span>
                              </div>
                              <input
                                id="email"
                                type="email"
                                class="form-control"
                                name="email"
                                value=""
                                autocomplete="phone"
                                placeholder="Enter Email"
                              />
                            </div>
                          </div>
                          <div class="form-group sorted-data">
                            <div class="input-group mb-3">
                              <input
                                id="citizen"
                                name="citizen"
                                type="hidden"
                                class="form-control"
                                value="bangladesh"
                              />
                              <input
                                id="countries"
                                name="countries"
                                type="hidden"
                                class="form-control"
                                value="afghanistan"
                              />
                              <input
                                id="visacategories"
                                name="visacategories"
                                type="hidden"
                                class="form-control"
                                value="all"
                              />
                            </div>
                          </div>
                          <div class="form-group row mt-4">
                            <div class="col-sm-6">
                              <div class="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  id="email_chk2"
                                  name="remember"
                                />
                                <label
                                  class="custom-control-label"
                                  for="email_chk2"
                                  >Remember me
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="form-group mb-0 row">
                            <div class="col-12 mt-2">
                              <button
                                class="btn signin-submit-btn"
                                type="submit"
                              >
                                Log In <i class="fas fa-sign-in-alt ml-1"></i>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--/.Content-->
      </div>
    </div>
    <div class="close" @click="$emit('close-modal')">close X</div>
  </div>
</template>

<script>
export default {};
</script>