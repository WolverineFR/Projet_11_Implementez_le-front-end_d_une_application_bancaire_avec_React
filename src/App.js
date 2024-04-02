import React from "react";
import "./utils/style/main.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPage from "./pages/Login";
import User from "./pages/User";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/User" element={<User />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
