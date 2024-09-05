import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/frontend_assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign Up");
  return (
    <div>
      <form className="login-popup">
        <div>
          <h2>{currentState}</h2>
          <img
            src={assets.cross_icon}
            alt=""
            onClick={() => setShowLogin(false)}
          />
        </div>
        <div>
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
            placeholder="enter password"
            required
          />
        </div>
        <button>
          {currentState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-condition">
          <input type="checkbox" name="" id="" required />
          <p>By continuing I agree to the terms of use and privacy policy</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrentState("Sign Up")}>click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrentState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
