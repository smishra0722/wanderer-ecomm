import React, { useContext, useState, useEffect, useNavigate } from "react";
import { Link } from "react-router-dom";
import { ApiContext } from "../../ApiContext/AllContextApi";
import "../Navbar/style.css";
import { useAuth } from "../../Pages/Firebase/fire";
import styled from "styled-components";
import RightNavbar from "./RightNavbar";
import Humburger from "./humburger";

const Nav = styled.nav`
  width: 100%;
  height: 65px;
  border-bottom: 2px solid black;
  padding: 0 20px;
  display: flex;
  justify-content: space-around;

  .logo {
    padding: 15px 0;
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
  }
  .logo .fa-shirt {
    font-size: 2rem;
    color: #001aff;
  }
  .logo span:nth-child(2) {
    font-size: 1.5rem;
    color: orangered;
  }
  .logo span:nth-child(3) {
    font-size: 1.5rem;
    color: #001aff;
  }

  button {
    margin-top: 0.4%;
    background-color: orange;
    width: 5%;
    height: 57%;
    font-size: 1rem;
    border-radius: 20px;
    border: none;
    cursor: pointer;
  }
  button:hover {
    color: white;
  }

  @media (max-width: 1440px) {
    button {
      width: 8%;
      height: 60%;
    }
  }

  @media (max-width: 1024px) {
    button {
      width: 8.5%;
      height: 60%;
    }
  }
  @media (max-width: 768px) {
    button {
      width: 12%;
      height: 60%;
    }

    @media (max-width: 648px) {
      button {
        width: 12%;
        height: 50%;
        margin-right: 5px;
        margin-top: 5px;
      }
    }
  }
`;

function Navbar() {
  const [open, setOpen] = useState(false);
  const { handleLogOut } = useContext(ApiContext);

  return (
    <>
      {/* <header className="main-head">
        <Link to="/test">
          <img src="download.png" className="navimg" alt="famms" />
        </Link>
        <nav className="nav-container">
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
          <a href="#contact" className="cont">
            CONTACT
          </a>
          <div className="cart-container">
            <Link to="/cart">
              <i className="fas fa-shopping-cart cont iconstyle"></i>
            </Link>
            <Link to="/wishlist">
              <i className="fas fa-heart"></i>
            </Link>
            <i
              className="fas fa-search cont iconstyle"
              onClick={() => filterList(searchValue)}
            >
              <input
                type="text "
                placeholder="...Search"
                className="cont-input"
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
              />
            </i>
          </div>
        </nav>
        <button onClick={handleLogOut} className="button-logout">
          LogOut
        </button>
      </header> */}

      {/*  */}
      <Nav>
        <div className="logo">
          <i className="fa-solid fa-shirt"></i> <span>Wand</span>
          <span>erer</span>
        </div>
        <div className="humburger" onClick={() => setOpen(true)}>
          <div className="hum " id="hum-b"></div>
          <div className="hum" id="hum-b"></div>
          <div className="hum" id="hum-b"></div>
        </div>
        <Humburger />
        <RightNavbar />
        <button onClick={handleLogOut} className="button-logout">
          LogOut
        </button>
      </Nav>
    </>
  );
}

export default Navbar;
