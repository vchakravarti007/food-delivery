import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="login-class">
        <div className="container shadow-lg">
          <div className="row">
            <div className="col-md-7" id="cont2">
              <img src="/images/motoboy.jpg" alt="motoboy.jpg" id ="login-image" />
            </div>
            <div className="col" id="cont3">
              <form>
                <h2 className=" heading text-center">User Login</h2>
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
                <div className id="row2">
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
                  <div>
                    <Link to="forget-password">Forgot Your Password?</Link>
                  </div>
                </div>
                <button type="submit" className="btn5 btn-primary" id="button1">
                  Login
                </button>

                <p id ="login-user">
                  Don't have a account? &nbsp;
                  <Link to="signUp" id="register1">
                    Register Here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
