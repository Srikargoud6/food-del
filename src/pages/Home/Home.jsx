import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import { useState } from "react";

const Home = () => {
  const [category, setCategory] = useState("all");

  return (
    <div className="d-flex flex-column align-items-center">
      <Header />
      <Menu category={category} setCategory={setCategory} />
    </div>
  );
};

export default Home;
