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
        <div className="col-xs-12 col-md-6">
          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="First name"
                />
              </div>
              <div class="form-group col-md-6">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                />
              </div>
              <div class="form-group col-md-6">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="Mobile"
                />
              </div>
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <input
                  type="text"
                  class="form-control"
                  id="inputCity"
                  placeholder="City"
                />
              </div>
              <div class="form-group col-md-4">
                <label for="inputState">State</label>
                <select id="inputState" class="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="form-group col-md-2">
                <input
                  type="text"
                  class="form-control"
                  id="inputZip"
                  placeholder="Zipcode"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="col-xs-12 col-md-6">
          <div className="d-flex col-xs-12 col-md-6 order-2 order-md-1">
            <div className="col-6">
              <p>Subtotal</p>
              <p>Delivery fee</p>
              <p>Total</p>
              <Link to="/order">
                <button className="proceed-button">PROCEED TO CHECKOUT</button>
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
