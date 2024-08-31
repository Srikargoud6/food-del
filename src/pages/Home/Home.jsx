import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import { useState } from "react";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";

const Home = () => {
  const [category, setCategory] = useState("all");

  return (
    <div className="d-flex flex-column align-items-center">
      <Header />
      <Menu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
};

export default Home;
