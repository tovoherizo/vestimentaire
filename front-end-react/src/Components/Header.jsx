import React from "react";
import { NavLink } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import "./Header.css";
function Header({ userConnected, deconnexion }) {
  return (
    <>
      <div className="header">
        <span>
          <p className="logo">FASHION</p>
          <p className="logo1">TAGLINE HERE</p>
        </span>
        <ul className="home">
          <NavLink to={"/"}>HOME</NavLink>
          <NavLink to={"/Shop"}>SHOP</NavLink>
          <NavLink>WOMEN</NavLink>
          <NavLink>MEN</NavLink>
          <NavLink>FIND STORES</NavLink>
        </ul>

        <ul className="bars">
          {Object.entries(userConnected).length > 0 ? (
            <p className="Nomclient">{userConnected.name}</p>
          ) : null}
          <NavLink>
            <FaLock className="Barsfa" />
          </NavLink>
          &nbsp;&nbsp;&nbsp;
          <NavLink>
            <FaSearch className="Barsfa" />
          </NavLink>
          <li>
            <FaBars className="Barsfa" />
            
            <div class="dropdown-menu">
              <a
                class="dropdown-item"
                href="#"
                onClick={(e) => {
                  deconnexion();
                }}>
                se deconnecter
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                Separated link
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
