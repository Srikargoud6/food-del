import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/frontend_assets/assets";
import "bootstrap/dist/css/bootstrap.css";
import { Link, useNavigate } from "react-router-dom";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { StoreContext } from "../../context/StoreContext";
// import { toast } from "react-toastify";

const Navbar = ({ setShowLogin }) => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState("home");
  const { cartTotal, token, setToken } = useContext(StoreContext);

  const logout = () => {
    localStorage.removeItem("");
    setToken("");
    navigate("/");
  };

  const showAlert = () => {
    if (cartTotal() === 0) {
      window.alert("Cart is empty :(");
    }
  };

  return (
    <nav class="navbar navbar-expand-lg bg-body-light navv ">
      <div class="container-fluid d-flex align-items-center">
        <section>
          <a class="navbar-brand" href="/">
            <img src={assets.logo} alt="logo" className="logo" />
          </a>
        </section>
        <section className="d-block d-md-none">
          {!token ? (
            <button
              class="btn btn-outline-success"
              onClick={() => setShowLogin(true)}
            >
              Log in
            </button>
          ) : (
            <div className="profile">
              <img src={assets.profile_icon} alt="profile" srcset="" />
              <ul className="profile-dropdown">
                <li className="d-flex justify-content-center gap-1">
                  <img src={assets.bag_icon} alt="bag" srcset="" />
                  <p>Orders</p>
                </li>
                <hr />
                <li
                  className="d-flex justify-content-center gap-1"
                  onClick={logout}
                >
                  <img src={assets.logout_icon} alt="logout" srcset="" />
                  <p>Log out</p>
                </li>
              </ul>
            </div>
          )}
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
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 pages">
            <Link class="nav-items" to="/">
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
            </Link>
            <a
              className={
                menu === "menu"
                  ? "current nav-link nav-items"
                  : "nav-link active nav-items"
              }
              aria-current="page"
              href="#explore-menu"
              onClick={() => setMenu("menu")}
            >
              Menu
            </a>

            <a
              className={
                menu === "mobile-app"
                  ? "current nav-link nav-items"
                  : "nav-link active nav-items"
              }
              aria-current="page"
              href="/#"
              onClick={() => setMenu("mobile-app")}
            >
              Mobile app
            </a>

            <a
              className={
                menu === "contact-us"
                  ? "current nav-link nav-items"
                  : "nav-link active nav-items"
              }
              aria-current="page"
              href="#contact-us"
              onClick={() => setMenu("contact-us")}
            >
              Contact us
            </a>
          </ul>
          <div class="d-flex justify-content-space-between">
            <section>
              <img src={assets.search_icon} alt="search" />
            </section>
            <section>
              {cartTotal() === 0 ? (
                <RiShoppingBag3Fill className="cart-icon" onClick={showAlert} />
              ) : (
                <Link to="/cart">
                  <RiShoppingBag3Fill className="cart-iconn" />
                </Link>
              )}
            </section>
          </div>
        </div>
        <section className="d-md-block d-none">
          {!token ? (
            <button
              class="btn btn-outline-success"
              onClick={() => setShowLogin(true)}
            >
              Log in
            </button>
          ) : (
            <div className="profile">
              <img src={assets.profile_icon} alt="profile" srcset="" />
              <ul className="profile-dropdown">
                <li className="d-flex justify-content-center gap-1">
                  <img src={assets.bag_icon} alt="bag" srcset="" />
                  <p>Orders</p>
                </li>
                <hr />
                <li
                  className="d-flex justify-content-center gap-1"
                  onClick={logout}
                >
                  <img src={assets.logout_icon} alt="logout" srcset="" />
                  <p>Log out</p>
                </li>
              </ul>
            </div>
          )}
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
