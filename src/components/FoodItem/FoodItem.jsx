import React, { useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/frontend_assets/assets";

const FoodItem = ({ id, name, price, description, image }) => {
  const [itemCount, setItemCount] = useState(0);

  return (
    <div class="card food-card" style={{ width: "18rem" }}>
      <img class="card-img-top food-img" src={image} alt="Card image cap" />

      <div class="card-body">
        <section className="d-flex justify-content-between align-items-center">
          <div>
            <h5 class="card-title">{name}</h5>
          </div>
          <div>
            {!itemCount ? (
              <img
                src={assets.add_icon_white}
                alt="add"
                onClick={() => setItemCount((prev) => prev + 1)}
                className="add-icon"
              />
            ) : (
              <div className="d-felx">
                <img
                  src={assets.remove_icon_red}
                  alt="remove"
                  onClick={() => setItemCount((prev) => prev - 1)}
                  className="add-icon mar1"
                />
                {itemCount}
                <img
                  src={assets.add_icon_green}
                  alt="add"
                  onClick={() => setItemCount((prev) => prev + 1)}
                  className="add-icon mar2"
                />
              </div>
            )}
          </div>
        </section>
        <p class="card-text">{description}</p>
        <h5 className="price">{`$${price}`}</h5>
      </div>
    </div>
  );
};

export default FoodItem;
