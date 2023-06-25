import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ApiContext } from "../../ApiContext/AllContextApi";
import "../Card/style.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
function Card() {
  const {
    cartValue,
    setCartValue,
    handleAddToCart,
    filterItem,
    setViewDetails,
    wishList,
    setWishList,
    open,
    setOpen,
  } = useContext(ApiContext);

  const myParams = useParams();

  useEffect(() => {}, [filterItem]);

  return (
    <>
      <section className="main-container">
        <div className="container">
          {filterItem?.map((curElem) => {
            const { id, title, description, image, price } = curElem;
            return (
              <div className="card" key={id}>
                <div className="imgBx">
                  <img src={image} alt="" />
                  <ul className="action">
                    <li onClick={() => setWishList((prev) => [...prev, id])}>
                      <i className="fas fa-heart"></i>
                      <span>Add To Wishlist</span>
                    </li>
                    <li onClick={() => handleAddToCart(curElem, true)}>
                      <i className="fas fa-shopping-cart"></i>
                      <span>Add To Cart</span>
                    </li>
                    <Link to="/viewdetails" params={myParams}>
                      <li onClick={() => setViewDetails(id)}>
                        <i className="fas fa-eye"></i>
                        <span>View Details</span>
                      </li>
                    </Link>
                  </ul>
                </div>
                <div className="content">
                  <div className="productName">
                    <span>{title}</span>
                  </div>
                  <div className="price_rating">
                    <span>${price}</span>
                    <div className="rating">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star-half-stroke"></i>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Card;
