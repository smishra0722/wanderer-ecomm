import React, { useContext } from "react";
// import "./style.css";
import { ApiContext } from "../../ApiContext/AllContextApi";
import { Link } from "react-router-dom";
import NavbarNew from "../../Components/Navbar Main/NavbarNew";
import FooterMain from "../../Components/Footer/Footermain";
import "../Cart/style.css";
function WishList() {
  const { api, wishList, setWishList, setCartValue, handleAddToCart } =
    useContext(ApiContext);

  // Function to Remove Items from wishList
  const removewishItem = (category) => {
    const filterWishItems = wishList.filter((curElem) => {
      return curElem === category.id ? "" : curElem;
    });
    setWishList(filterWishItems);
  };

  return (
    <>
      <NavbarNew />
      <div className="main__cart__container">
        <h1>Wishlist</h1>
        <div className="wishlist-main">
          <div className="column-labels">
            <label className="product-image">Image</label>
            <label className="product-details">Product</label>
            <label className="product-price">Price</label>
            <label className="product-quantity">Stock</label>
            <label className="product-removal">Remove</label>
          </div>

          {wishList <= 1 ? (
            <>
              <div className="wishlist-empty">
                <span>
                  Your Wishlist is Empty. Please go to -
                  <Link to="/" className="cart-link">
                    Home
                  </Link>
                </span>
              </div>
            </>
          ) : (
            api.map((curElem) => {
              const { id, description, price, image, title } = curElem;
              if (wishList.includes(id)) {
                return (
                  <div className="product" key={id}>
                    <div className="product-image">
                      <img src={image} alt="" />
                    </div>
                    <div className="product-details">
                      <div className="product-title">{title}</div>
                      <p className="product-description"> {description}</p>
                    </div>
                    <div className="product-price">${price}</div>
                    <div className="product-quantity">
                      <span className="product__stock">IN STOCK</span>
                    </div>
                    <div className="product-removal">
                      <button
                        className="remove-product"
                        onClick={() => removewishItem(id)}
                      >
                        Remove
                      </button>
                    </div>
                    {/* <div className="product-line-price">${quantity * price}</div> */}
                    <button
                      className="checkout"
                      onClick={() => handleAddToCart(curElem)}
                    >
                      Add To Cart
                    </button>
                  </div>
                );
              }
            })
          )}
        </div>
      </div>
      <FooterMain />
    </>
  );
}

export default WishList;
