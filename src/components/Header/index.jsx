import React from "react";
import logo from "../../assets/argentBankLogo.webp";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.user.data);

  function logOut() {
    dispatch(isLoggedIn(false));
    localStorage.removeItem("token");
  }
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
        <div className="LogBox">
          {!userData && (
            <NavLink to="/Login" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              Sign In
            </NavLink>
          )}
          {userData && (
            <>
              <NavLink to="/User" className="main-nav-item">
                <i class="fa fa-user-circle"></i>
                {userData.userName}
              </NavLink>
              <NavLink className="main-nav-item" to="/" onClick={logOut}>
                <i className="fa fa-sign-out"></i>
                Sign Out
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
