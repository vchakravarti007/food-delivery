import React from "react";
// import { Link } from 'react-router-dom';
import "./SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <div className="design">
        <div className="container shadow-lg">
          <div className="row">
            <div className="col" id="cont3">
              <form>
                <h2 className=" heading text-center">Register User</h2>

                <div className>
                  <label for="exampleInputEmail1" className="form-label">
                    Contact No.
                  </label>
                  <input
                    type="numeric"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Contact No."
                  />
                </div>
                <div className>
                  <label for="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="email@example.com"
                  />
                </div>
                <div className>
                  <label for="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                {/* <div className id="row2">
                <div>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" for="exampleCheck1">
                    Remember Me
                  </label>
                </div>
              </div> */}
                <button type="submit" className="btn5 btn-primary" id="button1">
                  Register
                </button>

                <p id ="login-user">
                  Already a Customer? &nbsp;{" "}
                  <Link to="/login">Back to Login</Link>
                </p>
              </form>
            </div>
            <div className="col-md-7" id="cont2">
              <img src="/images/motoboy.jpg" alt="motoboy.jpg" id ="login-image"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
