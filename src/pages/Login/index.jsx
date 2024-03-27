import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("Data", formData);

    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        alert("Username ou mot de passe incorrect");
      }
      const reponseData = await response.json();

      if (reponseData) {
        const token = reponseData.body.token;
        localStorage.setItem("token", token);
        navigate("/User");
      } else {
        console.log("Connexion raté");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={onSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              name="email"
              type="text"
              id="username"
              value={formData.email}
              onChange={onChange}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              id="password"
              value={formData.password}
              onChange={onChange}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}

export default LoginPage;
