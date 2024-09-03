import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";
import "bootstrap/dist/css/bootstrap.css";

const Footer = () => {
  return (
    <div className="footer container-fluid">
      <div className="row">
        <section className="col-6 p-3">
          <div>
            <img src={assets.logo} alt="logo" />
          </div>
          <div>
            <p className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              fuga velit consequatur labore nisi, officia ab adipisci in
              consequuntur? Sed illo placeat reiciendis ab fugit ad quibusdam
              eligendi vel ex?
            </p>
          </div>
          <div className="d-flex">
            <div>
              <img src={assets.facebook_icon} alt="fb" />
            </div>
            <div>
              <img src={assets.twitter_icon} alt="twitter" className="icon" />
            </div>
            <div>
              <img src={assets.linkedin_icon} alt="linkedin" />
            </div>
          </div>
        </section>
        <section className="col-3 d-flex flex-column align-items-start p-3">
          <h2>COMPANY</h2>
          <div>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy policy</li>
            </ul>
          </div>
        </section>
        <section className="col-3 d-flex flex-column align-items-start p-3">
          <h2>GET IN TOUCH</h2>
          <div>
            <ul className="list-unstyled">
              <li>+91 9786437222</li>
              <li>contact@tomato.com</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
