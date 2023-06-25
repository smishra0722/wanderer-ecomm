import React, { useContext, useState } from "react";
import { ApiContext } from "../../ApiContext/AllContextApi";
import Card from "../../Components/Card/Card";
import Footer from "../../Components/Footer/Footer";
import Footermain from "../../Components/Footer/Footermain";
import NavbarNew from "../../Components/Navbar Main/NavbarNew";
import Navbar from "../../Components/Navbar/Navbar";
import "../Products/style.css";
function Products() {
  const { api, filterList, uniqueList } = useContext(ApiContext);

  return (
    <div>
      <NavbarNew />
      <nav className="navbar">
        <div className="btn-group">
          {uniqueList.map((curElem, index) => {
            return (
              <button
                key={index}
                className="btn-group__item"
                onClick={() => filterList(curElem)}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
      <Card />
      <Footermain />
    </div>
  );
}

export default Products;
