import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import "./utils/style/main.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPage from "./pages/Login";
import User from "./pages/User";

function App() {
  const isConnected = useSelector((state) => state.user.isLoggedIn);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/user"
          element={isConnected ? <User /> : <Navigate to="/login" />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
