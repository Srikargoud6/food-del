import React, { useContext } from "react";
import "./PlaceOrder.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { cartTotal } = useContext(StoreContext);

  return (
    <div className="place-order container">
      <div className="row justify-content-between">
        <div className="col-xs-12 col-md-4 address">
          <form>
            <div class="row form-margin">
              <div class="col-xs-12 col-md-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                />
              </div>
              <div class="col-xs-12 col-md-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div class="row form-margin">
              <div class="col-xs-12 col-md-6">
                <input type="email" class="form-control" placeholder="Email" />
              </div>
              <div class="col-xs-12 col-md-6">
                <input type="text" class="form-control" placeholder="Mobile" />
              </div>
            </div>
            <div class="form-group form-margin">
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <div class="form-group form-margin">
              <input
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div class="row form-margin">
              <div class="col-xs-12 col-md-6">
                <input type="text" class="form-control" placeholder="City" />
              </div>
              <div class="col-xs-12 col-md-6">
                <input type="text" class="form-control" placeholder="Zipcode" />
              </div>
            </div>
          </form>
        </div>
        <div className="col-xs-12 col-md-4">
          <div className="d-flex col-xs-12 col-md-6 order-2 order-md-1">
            <div className="col-6">
              <p>Subtotal</p>
              <p>Delivery fee</p>
              <p>Total</p>
              <Link to="/order">
                <button className="proceed-button">PROCEED TO PAYMENT</button>
              </Link>
            </div>
            <div className="col-6">
              <p>${cartTotal()}</p>
              <p>$2</p>
              <p>${cartTotal() + 2}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
