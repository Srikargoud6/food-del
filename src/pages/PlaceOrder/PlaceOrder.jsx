import React, { useContext, useState } from "react";
import "./PlaceOrder.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const PlaceOrder = () => {
  const { cartTotal, token, food_list, cartItems, url } =
    useContext(StoreContext);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    zipcode: "",
    phone: "",
  });

  const onChaneHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id]) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    console.log(orderItems);

    // let orderData = {
    //   address: data,
    //   items: orderItems,
    //   amount: cartTotal() + 2,
    // };
    // let response = await axios.post(url + "/api/order/place", orderData, {
    //   headers: { token },
    // });
    // if (response.data.success) {
    //   window.location.replace(`http://localhost:3000/order/success`);
    // } else {
    //   alert("Error");
    // }
  };

  return (
    <div className="place-order container">
      <div className="row justify-content-between">
        <div className="col-xs-12 col-md-4 address">
          <form onSubmit={placeOrder}>
            <div class="row form-margin">
              <div class="col-xs-12 col-md-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                  name="firstName"
                  value={data.firstName}
                  onChange={onChaneHandler}
                  required
                />
              </div>
              <div class="col-xs-12 col-md-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                  name="lastName"
                  value={data.lastName}
                  onChange={onChaneHandler}
                  required
                />
              </div>
            </div>
            <div class="row form-margin">
              <div class="col-xs-12 col-md-6">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  name="email"
                  value={data.email}
                  onChange={onChaneHandler}
                  required
                />
              </div>
              <div class="col-xs-12 col-md-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Phone"
                  name="phone"
                  value={data.phone}
                  onChange={onChaneHandler}
                  required
                />
              </div>
            </div>
            <div class="form-group form-margin">
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Street"
                name="street"
                value={data.street}
                onChange={onChaneHandler}
                required
              />
            </div>
            <div class="row form-margin">
              <div class="col-xs-12 col-md-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="City"
                  name="city"
                  value={data.city}
                  onChange={onChaneHandler}
                  required
                />
              </div>
              <div class="col-xs-12 col-md-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Zipcode"
                  name="zipcode"
                  value={data.zipcode}
                  onChange={onChaneHandler}
                  required
                />
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
              <button className="proceed-button" type="submit">
                PROCEED TO PAYMENT
              </button>
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
