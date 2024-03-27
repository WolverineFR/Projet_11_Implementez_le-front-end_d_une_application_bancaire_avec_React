import React from "react";
import logo from "../../assets/argentBankLogo.png";
import { NavLink } from "react-router-dom";

function Header() {
  const token = localStorage.getItem("token");
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
          <NavLink to="/Login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
          {token && (
            <NavLink className="main-nav-item" to="/">
              <i className="fa fa-sign-out"></i>
              Sign Out
            </NavLink>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
