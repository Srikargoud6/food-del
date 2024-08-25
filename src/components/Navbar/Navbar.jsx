import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/frontend_assets/assets";
import "bootstrap/dist/css/bootstrap.css";

const Navbar = () => {
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
              <a class="nav-link active" aria-current="page" href="/#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/#">
                Menu
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/#">
                Mobile app
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/#">
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
