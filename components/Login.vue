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
      style="padding-right: 15px; display: block" @click.stop
    >
      <div class="modal-dialog cascading-modal" role="document">
        <!--Content-->
        <div class="modal-content">
          <!--Modal cascading tabs-->
          <div class="modal-c-tabs">
            <div class="card mb-0 shadow-none">
              <div class="card-body">
                <div class="px-3">
                  <p class="text-muted text-center">
                    Sign in to continue to VISAThing.
                  </p>
                  <div class="custom-tab tab-profile">
                    <!-- Nav tabs -->
                    <ul class="nav nav-tabs nav-tabs-custom" role="tablist">
                      <li class="nav-item">
                        <a
                          class="nav-link active pb-3 pt-3"
                          data-toggle="tab"
                          href="#projects"
                          role="tab"
                        >
                          Login with phone number
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link pb-3 pt-3"
                          data-toggle="tab"
                          href="#activity"
                          role="tab"
                        >
                          <i class="fas fa-email mr-2"></i>Login with email
                        </a>
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
                          <div class="form-group">
                            <label for="cty_code">Country Code</label>
                            <div class="input-group mb-3">
                              <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1"
                                  ><i class="far fa-user"></i
                                ></span>
                              </div>
                              <select name="cty_code" class="form-control">
                                <option
                                  data-countrycode="BD"
                                  value="+88"
                                  selected=""
                                >
                                  Bangladesh (+88)
                                </option>
                              </select>
                            </div>
                          </div>
                          <div class="form-group">
                            <label for="username">Phone Number</label>
                            <div class="input-group mb-3">
                              <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1"
                                  ><i class="far fa-user"></i
                                ></span>
                              </div>
                              <input
                                id="phone"
                                type="number"
                                class="form-control"
                                name="phone"
                                value=""
                                autocomplete="phone"
                                placeholder="Enter Phone Number"
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
                                class="
                                  btn btn-primary btn-block
                                  waves-effect waves-light
                                "
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
                                class="
                                  btn btn-primary btn-block
                                  waves-effect waves-light
                                "
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