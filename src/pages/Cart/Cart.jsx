import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import "bootstrap/dist/css/bootstrap.css";

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
    </div>
  );
};

export default Cart;
