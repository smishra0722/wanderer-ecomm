import React, { useContext, useEffect, useReducer, useState } from "react";
import { ApiContext } from "../../ApiContext/AllContextApi";
import "../Cart/style.css";
import useRazorpay from "react-razorpay";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { IntlProvider, FormattedNumber } from "react-intl";
import NavbarNew from "../../Components/Navbar Main/NavbarNew";
////////Function for the counters in the cart/////////
function Cart() {
  const {
    cartValue,
    setCartValue,
    handleAddToCart,
    subTotal,
    setSubTotal,
    item,
    subItems,
    user,
    emailRef,
    email,
    paymentId,
    setPayementId,
  } = useContext(ApiContext);

  const [number, setNumber] = useState(1);
  const Razorpay = useRazorpay();

  /////////////// Function for removing items from the cart//////////////////
  const removeItem = (category) => {
    const filterCartItems = cartValue.filter((curElem) => {
      return curElem.id === category ? "" : curElem;
    });
    setCartValue(filterCartItems);
  };

  // Function to remove all the Items from the cart
  const removeAllItem = () => {
    return setCartValue([]);
  };

  // Arrays
  const priceArr = [0];
  const items = [0];
  /////////// Calculating OverAll Total////////////////
  const total = cartValue.map((curElem) => {
    return priceArr.push(curElem.price * curElem.quantity);
  });

  const overAllTotal = priceArr.reduce((acc, curVal) => {
    return Math.trunc(curVal + acc);
  });

  /////////// Adding total items ///////////////
  const totalitems = cartValue.map((curElem) => {
    return items.push(curElem.quantity);
  });

  const itemOverAll = items.reduce((acc, curVal) => {
    return curVal + acc;
  });

  // Razor Pay
  const paise = parseInt(overAllTotal * 75 * 100 + 30);
  const formatter = Intl.NumberFormat("en-IN", {
    maximumSignificantDigits: 5,
  });

  const ruppee = formatter.format(paise);

  const emailId = localStorage.getItem("email");

  const displayRazorPay = async () => {
    const options = {
      key: "rzp_test_ZLUarWYff88w8V",
      amount: paise,
      currency: "INR",
      name: "Wanderer",
      description: "Test Transaction",
      image: "download.png",
      handler: function (response) {
        if (response.razorpay_payment_id) setPayementId(true);
      },
      prefill: {
        name: "Piyush Garg",
        email: emailId,
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new Razorpay(options);

    rzp1.on("payment.failed", function (response) {
      alert(response.error.description);
      alert(response.error.reason);
    });

    rzp1.open();
  };

  useEffect(() => {
    subItems(itemOverAll);
    setSubTotal(paise);
  }, [overAllTotal, itemOverAll, number]);

  return (
    <>
      <NavbarNew />
      <div className="main__cart__container">
        <h1>Shopping Cart</h1>

        <div className="shopping-cart">
          <div className="column-labels">
            <label className="product-image">Image</label>
            <label className="product-details">Product</label>
            <label className="product-price">Price</label>
            <label className="product-quantity">Quantity</label>
            <label className="product-removal">Remove</label>
            <label className="product-line-price">Total</label>
          </div>

          {/* Mapping Items */}

          {cartValue >= 0 ? (
            <>
              <div className="cart-empty">
                <span>
                  Your Cart is Empty. Please go to
                  <Link to="/" className="cart-link">
                    Home
                  </Link>
                </span>
              </div>
            </>
          ) : (
            cartValue.map((curElem) => {
              const { id, title, image, price, quantity, description } =
                curElem;
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
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) =>
                        handleAddToCart(curElem, false, e.target.value)
                      }
                    />
                  </div>
                  <div className="product-removal">
                    <button
                      className="remove-product"
                      onClick={() => removeItem(id)}
                    >
                      Remove
                    </button>
                  </div>
                  <div className="product-line-price">${quantity * price}</div>
                </div>
              );
            })
          )}

          {cartValue >= 0 ? (
            ""
          ) : (
            <>
              <div className="totals">
                <div className="totals-item">
                  <label>Subtotal</label>
                  <div className="totals-value" id="cart-subtotal">
                    ₹{ruppee}
                  </div>
                </div>
                <div className="totals-item">
                  <label>Shipping</label>
                  <div className="totals-value" id="cart-shipping">
                    ₹30.00
                  </div>
                </div>
                <div className="totals-item totals-item-total">
                  <label>Grand Total</label>
                  <div className="totals-value" id="cart-total">
                    ₹{ruppee}
                  </div>
                </div>
              </div>

              <button className="checkout" onClick={() => displayRazorPay()}>
                Checkout
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
