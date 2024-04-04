import React from "react";
import logo from "../../assets/argentBankLogo.png";
import { NavLink } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { setLoggedIn } from "../../Store/isLoggedIn";

function Header() {
  // const isLoggedIn = useSelector((state) => state.isLoggedIn);
  // const dispatch = useDispatch();

  const token = localStorage.getItem("token");

  const userDataString = localStorage.getItem("user");
  const userData = JSON.parse(userDataString);

  function logOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
    // dispatch(setLoggedIn(false));
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
          {!token && (
            <NavLink to="/Login" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              Sign In
            </NavLink>
          )}
          {token && (
            <>
              <NavLink to="/User" className="main-nav-item">
                <i class="fa fa-user-circle"></i>
                {userData.firstName}
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
