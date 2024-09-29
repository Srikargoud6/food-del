import React from "react";
import "./Menu.css";
import { menu_list } from "../../assets/frontend_assets/assets";
import "bootstrap/dist/css/bootstrap.css";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Menu = ({ category, setCategory }) => {
  return (
    <div className="menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <div className="menu-list">
        {menu_list.map((item) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "all" : item.menu_name
                )
              }
              className="menu-item d-flex flex-column align-items-center"
            >
              <img
                src={item.menu_image}
                alt="menu"
                className={category === item.menu_name ? "activeMenu" : ""}
              />
              <h5>{item.menu_name}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
