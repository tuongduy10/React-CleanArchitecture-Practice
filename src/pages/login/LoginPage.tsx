import React, { Component } from "react";
const LoginPage = (props: any) => {
  function signIn() {
    console.log("loged in");
  }

  return (
      <section className="vh-100 vw-50 bg-image">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Signin Inventory
                    </h2>

                    <form>
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

                      <div className="form-check d-flex justify-content-center mb-3">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="rememberMe"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="rememberMe"
                        >
                          Remember Me! 
                        </label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn-primary"
                        >
                          Login
                        </button>
                      </div>

                      <p className="text-center text-muted mt-2 mb-0">
                        Haven't an account?{" "}
                        <a href="../signup" className="fw-bold text-body">
                          <u>Create Account!</u>
                        </a>
                      </p>
                      <p className="text-center text-muted mt-2 mb-0">
                        <a href="./signup" className="fw-bold text-body">
                          <u>Forgot Password?</u>
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
  );
};
export default LoginPage;
