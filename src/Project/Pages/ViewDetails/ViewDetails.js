import React, { useContext } from "react";
import "../ViewDetails/style.css";
import { ApiContext } from "../../ApiContext/AllContextApi";
import { useParams } from "react-router-dom";
import FooterMain from "../../Components/Footer/Footermain";
import NavbarNew from "../../Components/Navbar Main/NavbarNew";

function ViewDetails() {
  const {
    api,
    viewDetails,
    setViewDetails,
    cartValue,
    setCartValue,
    wishList,
    setWishList,
    handleAddToCart,
  } = useContext(ApiContext);
  console.log(viewDetails);
  return (
    <>
      <NavbarNew />
      {api.map((curElem) => {
        const { id, image, category, description, title, price } = curElem;
        if (viewDetails === id) {
          return (
            <div className="view-main" key={id}>
              <div className="view-image">
                <img src={image} alt="" />
              </div>
              <div className="view-details">
                <span>{category}</span>
                <span> {title}</span>
                <p className="view-description">{description}</p>
                <span>rating</span>
                <span> Price: ${price}</span>
                <div className="view-buttons">
                  <button onClick={() => handleAddToCart(curElem)}>
                    Add to Cart
                  </button>
                  <button onClick={() => setWishList((prev) => [...prev, id])}>
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          );
        }
      })}
      <FooterMain />
    </>
  );
}

export default ViewDetails;
