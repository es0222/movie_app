import React, { useState } from "react";
import "./Authslider.css";

const AuthSlider = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleSignInClick = () => setIsRightPanelActive(false);
  const handleSignUpClick = () => setIsRightPanelActive(true);

  return (
    <div
      className={`container-auth shadow ${
        isRightPanelActive ? "right-panel-active" : ""
      }`}
    >
      {/* Sign Up Form */}
      <div className="form-container sign-up-container text-dark w-50 ">
        <form className=" auth-form form ">
          <h2 className="w-100 fw-bolder">Create Account</h2>

          <span className="fs-6 fw-light">
            {" "}
            use your email for registration
          </span>
          <input className="m-2 form-control" type="text" placeholder="Name" />
          <input
            className="m-2 form-control"
            type="email"
            placeholder="Email"
          />
          <input
            className="m-2 form-control"
            type="password"
            placeholder="Password"
          />
          <button className=" auth-btn ms-3">Sign Up</button>
        </form>
      </div>

      {/* Sign In Form */}
      <div className="form-container sign-in-container">
        <form className="auth-form">
          <h1 className="text-dark fw-bolder">Sign in</h1>

          <span className="fs-6 fw-light text-dark">
            use your email for registration
          </span>
          <span className="text-dark fw-light"> use your account</span>
          <input className="auth-input" type="email" placeholder="Email" />
          <input
            className="auth-input"
            type="password"
            placeholder="Password"
          />
          <a className="text-dark fw-light" href="#">
            Forgot your password?
          </a>
          <button className="auth-btn btn-danger">Sign In</button>
        </form>
      </div>

      {/* Overlay */}
      <div className="overlay-container">
        <div className="overlay ">
          <div className="overlay-panel overlay-left">
            <h2 className=" fw-bold">Welcome Back!</h2>
            <p>Log in to continue watching your favorite titles.</p>
            <button
              className="ghost auth-btn btn-danger"
              onClick={handleSignInClick}
            >
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h2 className=" fw-bold">Hello, Movie Buff</h2>
            <p>Sign up now to explore trending movies, shows, and more!</p>
            <button
              className="ghost auth-btn btn-danger"
              onClick={handleSignUpClick}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthSlider;
