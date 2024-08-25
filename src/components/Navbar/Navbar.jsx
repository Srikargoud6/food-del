import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/frontend_assets/assets";
import "bootstrap/dist/css/bootstrap.css";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <nav class="navbar navbar-expand-lg bg-body-light navv ">
      <div class="container-fluid d-flex align-items-center">
        <section>
          <a class="navbar-brand" href="/#">
            <img src={assets.logo} alt="logo" className="logo" />
          </a>
        </section>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <section></section>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 pages">
            <li class="nav-item">
              <a
                className={
                  menu === "home" ? "current nav-link" : "nav-link active"
                }
                aria-current="page"
                href="/#"
                onClick={() => setMenu("home")}
              >
                Home
              </a>
            </li>
            <li class="nav-item">
              <a
                className={
                  menu === "menu" ? "current nav-link" : "nav-link active"
                }
                aria-current="page"
                href="/#"
                onClick={() => setMenu("menu")}
              >
                Menu
              </a>
            </li>
            <li class="nav-item">
              <a
                className={
                  menu === "mobile-app" ? "current nav-link" : "nav-link active"
                }
                aria-current="page"
                href="/#"
                onClick={() => setMenu("mobile-app")}
              >
                Mobile app
              </a>
            </li>
            <li class="nav-item">
              <a
                className={
                  menu === "contact-us" ? "current nav-link" : "nav-link active"
                }
                aria-current="page"
                href="/#"
                onClick={() => setMenu("contact-us")}
              >
                Contact us
              </a>
            </li>
          </ul>
          <div class="d-flex justify-content-space-between">
            <section>
              <img src={assets.search_icon} alt="search" />
            </section>
            <section>
              <img src={assets.basket_icon} alt="cart" className="spacing" />
            </section>
            <section>
              <button class="btn btn-outline-success">Sign in</button>
            </section>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
