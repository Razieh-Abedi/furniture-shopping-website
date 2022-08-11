import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

function Login() {
  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow-2-strong" id="loginCard">
            <div className="card-body p-5 text-center">
              <h3 className="mb-5 fs-1">Sign in</h3>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Password</label>
              </div>
              <div className="form-check d-flex justify-content-start mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="form1Example3"
                />
                <label className="form-check-label ms-2 " for="form1Example3">
                  {" "}
                  Remember password{" "}
                </label>
              </div>
              <button
                className="btn btn-primary btn-lg btn-block"
                type="submit"
              >
                Login
              </button>
              <hr className="my-4" />
              <button
                className="btn btn-lg btn-block w-100 mb-2"
                type="submit"
                id="googleBtn"
              >
                <i className="bi bi-google me-2"></i> Sign in with google
              </button>
              <button
                className="btn btn-lg btn-block w-100 mb-2"
                type="submit"
                id="facebookBtn"
              >
                <i className="bi bi-facebook me-2"></i>
                Sign in with facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
