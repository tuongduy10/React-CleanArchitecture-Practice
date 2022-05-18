import { url } from "inspector";
import React, { Component } from "react";
import BfLayout from "../../layouts/BeforeLayout";
const SignupPage = (props: any) => {
  return (
    <BfLayout>
      <section
        className="vh-100 bg-image"
      >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-4">
                    <h2 className="text-uppercase text-center mb-5">
                      Create an account
                    </h2>

                    <form>
                      <div className="form-outline mb-2">
                        <label className="form-label" htmlFor="yourName">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="yourName"
                          className="form-control form-control-lg"
                        />
                      </div>

                      <div className="form-outline mb-2">
                        <label className="form-label" htmlFor="yourEmail">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="yourEmail"
                          className="form-control form-control-lg"
                        />
                      </div>

                      <div className="form-outline mb-2">
                        <label className="form-label" htmlFor="yourPhone">
                          Your Phone
                        </label>
                        <input
                          type="tel"
                          id="yourPhone"
                          className="form-control form-control-lg"
                        />
                      </div>

                      <div className="form-outline mb-2">
                        <label className="form-label" htmlFor="userName">
                          User Name
                        </label>
                        <input
                          type="text"
                          id="userName"
                          className="form-control form-control-lg"
                        />
                      </div>

                      <div className="form-outline mb-2">
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          className="form-control form-control-lg"
                        />
                      </div>

                      <div className="form-outline mb-2">
                        <label
                          className="form-label"
                          htmlFor="re-password"
                        >
                          Repeat your password
                        </label>
                        <input
                          type="password"
                          id="re-password"
                          className="form-control form-control-lg"
                        />
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="termOfService"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="termOfService"
                        >
                          I agree all statements in{" "}
                          <a href="#!" className="text-body">
                            <u>Terms of service</u>
                          </a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Register
                        </button>
                      </div>

                      <p className="text-center text-muted mt-5 mb-0">
                        Have already an account?{" "}
                        <a href="./login" className="fw-bold text-body">
                          <u>Login here</u>
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BfLayout>
  );
};
export default SignupPage;
