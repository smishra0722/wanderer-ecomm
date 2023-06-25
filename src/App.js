import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Card from "./Project/Components/Card/Card";
import Cart from "./Project/Pages/Cart/Cart";
import Navbar from "./Project/Components/Navbar/Navbar";
import CommonContext, { ApiContext } from "./Project/ApiContext/AllContextApi";
import WishList from "./Project/Pages/WishList/WishList";
import ViewDetails from "./Project/Pages/ViewDetails/ViewDetails";
import Home from "./Project/Pages/HomePage/Home";
import Products from "./Project/Pages/Products/Products";
import Validation from "./Project/Pages/Validation/Validation";
import OrderConfirmed from "./Project/Pages/OrderConfirmed/OrderConfirmed";
import Blog from "./Project/Pages/Blog/Blog";

function App() {
  const {
    api,
    setApi,
    filterItem,
    setFilterItem,
    user,
    paymentId,
    setLoading,
    loading,
    setPayementId,
  } = useContext(ApiContext);

  const getData = async () => {
    try {
      let url = "https://fakestoreapi.com/products";
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setApi(data);
      setFilterItem(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    setInterval(() => {
      if (paymentId) {
        window.location.reload();
        localStorage.removeItem("rzp_device_id");
      }
    }, 2000);
  }, [paymentId]);

  return (
    <div className="App">
      <Routes>
        {paymentId ? (
          <Route
            path="/cart"
            element={<Navigate replace to="/order-confirm" />}
          />
        ) : (
          <Route
            path="/order-confirm"
            element={<Navigate replace to="/cart" />}
          />
        )}

        <Route path="/" element={user ? <Home /> : <Validation />} />
        <Route
          path="/product"
          element={user ? <Products /> : <Navigate replace to="/" />}
        />
        <Route path={"/order-confirm"} element={<OrderConfirmed />} />

        <Route
          path="/cart"
          element={user ? <Cart /> : <Navigate replace to="/" />}
        />
        <Route
          path="/wishlist"
          element={user ? <WishList /> : <Navigate replace to="/" />}
        />
        <Route
          path="/viewdetails"
          element={user ? <ViewDetails /> : <Navigate replace to="/" />}
        />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
