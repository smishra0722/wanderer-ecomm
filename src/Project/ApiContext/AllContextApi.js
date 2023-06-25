import { async } from "@firebase/util";
import React, { useState, useEffect, useRef } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { logOut, signUp, loginIn } from "../Pages/Firebase/fire";
import BlogApi from "../Pages/Blog/BlogApi";

export const ApiContext = React.createContext();

function AllContextApi(props) {
  // Api UseStatess
  const [api, setApi] = useState([]);

  // State for filtering the Cards
  const [filterItem, setFilterItem] = useState([]);
  // Navbar UseStates
  //const [searchValue, setSearchValue] = useState("");

  //   Card UseStates
  const [cartValue, setCartValue] = useState([]);

  //Cart UseStates
  const [counter, setCounter] = useState(1);

  //View Details Usestates
  const [viewDetails, setViewDetails] = useState();

  //WishList UsesStates
  const [wishList, setWishList] = useState([]);

  //
  const [subTotal, setSubTotal] = useState([0]);

  ///////////////// State For adding items ////////////////
  const [item, subItems] = useState([0]);
  const [searchValue, setSearchValue] = useState("");

  // ///////////////////////////////////////////
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, sethasAccount] = useState(false);
  const [paymentId, setPayementId] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const [blog, setblog] = useState(BlogApi);

  async function handleSignUp() {
    setLoading(true);
    try {
      await signUp(emailRef.current.value, passwordRef.current.value);
      localStorage.setItem("email", email);
      setUser(true);
    } catch (error) {
      console.log(error);
      switch (error.code) {
        case "auth/invalid-email":
        case " auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(error.code);
          break;
        case "auth/wrong-password":
        case "auth/weak-password ":
          setPasswordError(error.code);
          break;
      }
    }
    setLoading(false);
  }

  async function handleLogOut() {
    setLoading(true);
    try {
      logOut();
      localStorage.removeItem("email");
      setUser(false);
    } catch (error) {
      alert(error);
    }
    setLoading(false);
  }

  async function handleLogIn() {
    setLoading(true);
    try {
      await loginIn(emailRef.current.value, passwordRef.current.value);
      localStorage.setItem("email", email);
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
        case " auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(error.code);
          break;
        case "auth/wrong-password":
          setPasswordError(error.code);
          break;
      }
    }
    setLoading(false);
  }

  // Filtering List
  const filterList = (category) => {
    const updatedList = api.filter((curElem) => {
      if (searchValue === "" && uniqueList === "") {
        return curElem;
      } else if (curElem.category.toLowerCase().includes(category)) {
        return curElem.category;
      } else if (category === "All") {
        return curElem;
      }
      setSearchValue("");
    });
    setFilterItem(updatedList);
  };

  // Function for increment

  // autoIncrement -> will increment when add to card is clicked
  //
  const handleAddToCart = (curElem, autoIncrement = false, quantity = 1) => {
    const getQuantity = (item) => {
      if (autoIncrement) {
        return item.quantity + 1;
      } else {
        return quantity != 0 ? quantity : 1;
      }
    };

    if (cartValue.length > 0) {
      const ItemExists = cartValue.find((item) => item.id === curElem.id);
      if (ItemExists) {
        const newCartItems = cartValue.map((item) => {
          if (item.id === curElem.id) {
            return {
              ...item,
              quantity: getQuantity(item),
            };
          } else {
            return item;
          }
        });
        setCartValue(newCartItems);
      } else {
        setCartValue((prev) => [...prev, { ...curElem, quantity: 1 }]);
      }
    } else {
      setCartValue([{ ...curElem, quantity: 1 }]);
    }
  };
  const uniqueList = [
    ...new Set(
      api.map((curElem) => {
        return curElem.category;
      })
    ),
    "All",
  ];
  const [open, setOpen] = useState(false);

  return (
    <ApiContext.Provider
      value={{
        api,
        filterItem,
        cartValue,
        setFilterItem,
        setApi,
        setCartValue,
        viewDetails,
        setViewDetails,
        wishList,
        setWishList,
        handleAddToCart,
        subTotal,
        setSubTotal,
        item,
        subItems,
        user,
        setUser,
        // password,
        // setPassword,
        email,
        setEmail,
        emailError,
        // setEmailError,
        passwordError,
        // setPasswordError,
        hasAccount,
        sethasAccount,
        handleLogIn,
        handleSignUp,
        handleLogOut,
        emailRef,
        passwordRef,
        handleSignUp,
        loading,
        setLoading,
        paymentId,
        setPayementId,
        setLoading,
        loading,
        open,
        setOpen,
        searchValue,
        setSearchValue,
        filterList,
        uniqueList,
        // path,
        // setPath,
        setPayementId,
        blog,
        setblog,
      }}
    >
      {props.children}
    </ApiContext.Provider>
  );
}

export default AllContextApi;
