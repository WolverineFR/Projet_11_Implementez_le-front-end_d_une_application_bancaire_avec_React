import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Authentification = (Component) => {
  const Authentification2 = (props) => {
    let navigate = useNavigate();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    if (!isLoggedIn) {
      return navigate("/login");
    }
    return <Component {...props} />;
  };
  return Authentification2;
};
export default Authentification;
