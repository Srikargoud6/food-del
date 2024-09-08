import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  return (
    <div className="d-flex flex-column cart">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {food_list.map((item, index) => {
            if (cartItems[item._id]) {
              return (
                <tr>
                  <th scope="row">{item.name}</th>
                  <td>${item.price}</td>
                  <td>{cartItems[item._id]}</td>
                  <td>{item.price * cartItems[item._id]}</td>
                  <td
                    onClick={() => removeFromCart(item._id)}
                    className="cross-icon"
                  >
                    x
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
      <h3>Cart Total</h3>

      <section className="container">
        <div className="row">
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
              <p>0</p>
              <p>2</p>
              <p>0</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 order-1 order-md-2">
            <div className="d-flex flex-column">
              <div>
                <p>If you have a promo code, enter it here</p>
              </div>
              <div>
                <div class="input-group mb-3 promo">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter promo code"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button class="btn btn-dark" type="button" id="button-addon2">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
