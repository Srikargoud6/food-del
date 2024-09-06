import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/frontend_assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign Up");
  return (
    <div className="login-popup">
      <form className="login-popup-form">
        <div className="d-flex justify-content-between align-items-start text-dark">
          <h2>{currentState}</h2>
          <img
            src={assets.cross_icon}
            alt=""
            onClick={() => setShowLogin(false)}
            className="clickable cross-icon"
          />
        </div>
        <div className="inputs">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" name="" id="" placeholder="Your name" required />
          )}
          <input type="email" name="" id="" placeholder="Your email" required />
          <input
            type="password"
            name=""
            id=""
            placeholder="Enter password"
            required
          />
        </div>
        <button>
          {currentState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className=" d-flex align-items-start gap-2">
          <input
            type="checkbox"
            name=""
            id=""
            required
            className="login-condition"
          />
          <p>By continuing I agree to the terms of use and privacy policy</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span
              onClick={() => setCurrentState("Sign Up")}
              className="clickable"
            >
              click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setCurrentState("Login")}
              className="clickable"
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
