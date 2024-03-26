import React from "react";
import { BrowserRouter as Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/Login";

const Authentification = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
};

export default Authentification;
