import React from "react";
import "./FoodItem.css";

const FoodItem = ({ id, name, price, description, image }) => {
  return (
    <div class="card food-card" style={{ width: "18rem" }}>
      <img class="card-img-top food-img" src={image} alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{description}</p>
        <h5 className="price">{`$${price}`}</h5>
      </div>
    </div>
  );
};

export default FoodItem;
