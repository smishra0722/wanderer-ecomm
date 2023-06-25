import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ApiContext } from "../../ApiContext/AllContextApi";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Ul = styled.ul`
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: bisque;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    font-size: 1.5rem;
    transition: transform 0.5s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
  .nav-image {
    display: ${({ open }) => (open ? "static" : "none")};
    width: 100%;
    position: relative;
  }
  .nav-image img {
    position: absolute;
    bottom: 280px;
    right: 0;
    width: 100%;
  }

  li:hover {
    border-bottom: 4px solid orange;
    padding: 15px 10px;
    color: red;
    padding: 0.5%;
  }
`;
function RightNavbar() {
  const { open, searchValue, setSearchValue, filterList, getPaths } =
    useContext(ApiContext);

  const usePathname = () => {
    const location = useLocation();
    return console.log(location.pathname);
  };

  useEffect(() => {}, []);

  return (
    <>
      <Ul open={open} className="nav-ul">
        <div className="nav-image">
          <img src="NavImage.jpg" alt="image" />
        </div>
        <Link to="/home" className="cont active">
          HOME
        </Link>
        <a href="#pages" className="cont">
          PAGES
        </a>
        <Link to="/product" className="cont">
          PRODUCTS
        </Link>
        <a href="#blog" className="cont">
          BLOG
        </a>
        <a href="#footer" className="cont">
          CONTACT
        </a>
      </Ul>
      <div>
        <div className="search-bar">
          <div onClick={() => filterList(searchValue)}>
            <i className="fa-solid fa-magnifying-glass "></i>
          </div>
          <input
            type="text "
            placeholder="...Search"
            className="search-input"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping" id="cart"></i>
          </Link>
          <Link to="/wishlist">
            <i className="fas fa-heart"></i>
          </Link>
        </div>
      </div>
    </>
  );
}

export default RightNavbar;
