import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import "bootstrap/dist/css/bootstrap.css";

const FoodDisplay = () => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display">
      <h2>Top dishes for you</h2>
      <section className="container-fluid">
        <div className="row justify-content-start">
          {food_list.map((item, index) => {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                description={item.description}
                image={item.image}
                className="col-4"
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default FoodDisplay;
