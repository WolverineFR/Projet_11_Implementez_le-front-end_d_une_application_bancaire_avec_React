import React from "react";
import logo from "../../assets/argentBankLogo.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <nav className="main-nav">
        <NavLink to="/" className="main-nav-logo" href="">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
          <NavLink to="/Login" className="main-nav-item" href="">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Header;
