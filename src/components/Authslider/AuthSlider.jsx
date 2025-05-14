import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Authslider.css";

export default function AuthSlider() {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });
  const [signUpError, setSignUpError] = useState("");
  const [signInError, setSignInError] = useState("");
  const navigate = useNavigate();

  const cleanMail = (m) => m.trim().toLowerCase();

  /* -------------------------  Sign Up  ------------------------------ */
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = signUpData;
    const hasNumber = /\d/.test(password);

    if (password.length < 8 || !hasNumber) {
      setSignUpError(
        "Password must be at least 8 characters and include a number."
      );
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, cleanMail(email), password);
      alert("Your account has been created successfully. You may now sign in.");
      setSignUpError("");
      setIsRightPanelActive(false);
    } catch (err) {
      let msg = "Unable to create account.";
      switch (err.code) {
        case "auth/email-already-in-use":
          msg = "Email is already in use.";
          break;
        case "auth/weak-password":
          msg = "Password must be at least 6 characters.";
          break;
        case "auth/invalid-email":
          msg = "Please enter a valid email.";
          break;
        default:
          msg = err.message;
      }
      setSignUpError(msg);
    }

    setSignUpData({ name: "", email: "", password: "" });
  };

  /* -------------------------  Sign In  ------------------------------ */
  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    const email = cleanMail(signInData.email);
    const pwd = signInData.password.trim();

    try {
      await signInWithEmailAndPassword(auth, email, pwd);
      navigate("/");
    } catch (err) {
      let msg = "Incorrect email or password.";
      if (err.code === "auth/invalid-email") {
        msg = "Please enter a valid email address.";
      } else if (
        err.code !== "auth/user-not-found" &&
        err.code !== "auth/wrong-password" &&
        err.code !== "auth/invalid-credential"
      ) {
        msg = err.message;
      }
      setSignInError(msg);
    }

    setSignInData({ email: "", password: "" });
  };

  /* ---------------------------- UI ---------------------------- */
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div
        className={`container-auth shadow ${
          isRightPanelActive ? "right-panel-active" : ""
        }`}
      >
        {/* Sign Up */}
        <div className="form-container sign-up-container text-dark">
          <form className="auth-form form" onSubmit={handleSignUpSubmit}>
            <h2 className="fw-bolder">Create Account</h2>
            <span className="fs-6 fw-light">
              Use your email for registration
            </span>

            <input
              className="form-control my-2"
              type="text"
              placeholder="Name"
              value={signUpData.name}
              onChange={(e) =>
                setSignUpData({ ...signUpData, name: e.target.value })
              }
            />
            <input
              className="form-control my-2"
              type="email"
              placeholder="Email"
              value={signUpData.email}
              onChange={(e) =>
                setSignUpData({ ...signUpData, email: e.target.value })
              }
            />
            <input
              className="form-control my-2"
              type="password"
              placeholder="Password"
              value={signUpData.password}
              onChange={(e) =>
                setSignUpData({ ...signUpData, password: e.target.value })
              }
            />
            {signUpError && <p className="text-danger">{signUpError}</p>}
            <button className="auth-btn btn btn-danger mt-2" type="submit">
              Sign Up
            </button>
            <p className="mt-2 text-secondary">
              Already have an account?{" "}
              <a href="#" onClick={() => setIsRightPanelActive(false)}>
                Sign In
              </a>
            </p>
          </form>
        </div>

        {/* Sign In */}
        <div className="form-container sign-in-container">
          <form className="auth-form" onSubmit={handleSignInSubmit}>
            <h1 className="fw-bolder text-dark">Sign In</h1>
            <span className="fs-6 fw-light text-dark">Use your account</span>
            <input
              className="auth-input form-control my-2"
              type="email"
              placeholder="Email"
              value={signInData.email}
              onChange={(e) =>
                setSignInData({ ...signInData, email: e.target.value })
              }
            />
            <input
              className="auth-input form-control my-2"
              type="password"
              placeholder="Password"
              value={signInData.password}
              onChange={(e) =>
                setSignInData({ ...signInData, password: e.target.value })
              }
            />
            {signInError && <p className="text-danger">{signInError}</p>}
            <a className="text-dark fw-light" href="#">
              Forgot your password?
            </a>
            <button className="auth-btn btn btn-danger mt-2" type="submit">
              Sign In
            </button>
            <p className="mt-2 text-secondary">
              Don’t have an account?{" "}
              <a href="#" onClick={() => setIsRightPanelActive(true)}>
                Sign Up
              </a>
            </p>
          </form>
        </div>

        {/* Overlay */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h2 className="fw-bold">Welcome Back!</h2>
              <p>Log in to continue watching your favorite titles.</p>
              <button
                className="ghost auth-btn btn btn-light"
                onClick={() => setIsRightPanelActive(false)}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h2 className="fw-bold">Hello, Movie Buff</h2>
              <p>Sign up now to explore trending movies, shows, and more!</p>
              <button
                className="ghost auth-btn btn btn-light"
                onClick={() => setIsRightPanelActive(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
