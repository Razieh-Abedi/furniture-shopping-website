import React from "react";

function Login() {
  return (
    <div className="container form-container">
      <div className="row justify-content-between row-cols-1 ">
        <div className="col-lg-5 facebook-login bg-primary">
          <div>
            <div>
              <h3>Log in with Facebook</h3>
            </div>
            <div type="submit" className="btn btn-primary">
              Connect to facebook
            </div>
          </div>
        </div>
        <div className="col-lg-5 email-login bg-danger">
          <form action="">
            <div className="mb-3">
              <h3>Log in with email</h3>
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <a href="">Have you forgotten your password?</a>
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Keep me logged in
              </label>
            </div>
            <div type="submit" className="btn btn-primary">
              Log in
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
