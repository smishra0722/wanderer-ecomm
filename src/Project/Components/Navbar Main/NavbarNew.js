import React, { useContext } from "react";
import "../Navbar Main/style.css";
import { Link } from "react-router-dom";
import { ApiContext } from "../../ApiContext/AllContextApi";

function NavbarNew() {
  const { searchValue, setSearchValue, filterList, handleLogOut } =
    useContext(ApiContext);
  return (
    <>
      <header>
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <h3 className="logo">
          <i className="fa-solid fa-shirt"></i> <span>Wand</span>
          <span>erer</span>
        </h3>
        <nav>
          <div className="cart-wishlist">
            <Link to="/cart">
              <i className="fa-solid fa-cart-shopping" id="cart"></i>
            </Link>
            <Link to="/wishlist">
              <i className="fas fa-heart" id="heart"></i>
            </Link>
          </div>
          <ul>
            <li>
              <Link to="/" className="cont active">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/product" className="cont">
                PRODUCTS
              </Link>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="#footer">Contacts</a>
            </li>
            <li>
              <div className="nav-searchbar">
                <div onClick={() => filterList(searchValue.toLowerCase())}>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <input
                  type="text"
                  placeholder="...search"
                  value={searchValue}
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                  }}
                  onKeyPress={(e) =>
                    e.key === "Enter" && filterList(searchValue.toLowerCase())
                  }
                />
              </div>
            </li>
          </ul>
          <button className="logout-btn " onClick={handleLogOut}>
            Logout
          </button>
        </nav>
        <label htmlFor="nav-toggle" className="nav-toggle-label">
          <span></span>
        </label>
      </header>
    </>
  );
}

export default NavbarNew;
