import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Card from "../../components/Card";
import dataAccount from "../../data/dataAccount.json";

function User() {
  const userData = useSelector((state) => state.user.data);

  // formulaire visible ou non en fonction du click sur le btn
  const [visible, setVisible] = useState(false);
  const handleClickOpen = () => {
    setVisible(true);
  };
  const handleClickClose = () => {
    setVisible(false);
  };

  const [userName, setUserName] = useState("");
  const token = userData.token;
  const dispatch = useDispatch();

  // à l'envoie du formulaire
  const onSubmit = async (e) => {
    e.preventDefault();
    let userCredentials = {
      userName,
    };
    dispatch(userCredentials).then((result) => {
      if (result.payload) {
        setUserName("");
      }
    });
    if (token) {
      const update = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userCredentials),
      };
      await fetch("http://localhost:3001/api/v1/user/profile", update)
        .then((response) => response.json())
        .then((data) => this.setState({ postId: data.id }));
    }
  };

  // fonciton du formulaire pour changer username
  function editUsername() {
    return (
      <div className="formEditUsername">
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="username">User name:</label>
            <input
              name="username"
              type="text"
              id="username"
              value={userData.userName}
            ></input>
          </div>
          <div>
            <label htmlFor="firstname">First name:</label>
            <input
              name="firstname"
              type="text"
              id="firstname"
              disabled="disabled"
              value={userData.firstName}
            ></input>
          </div>
          <div>
            <label htmlFor="lastname">Last name:</label>
            <input
              name="lastname"
              type="text"
              id="lastname"
              disabled="disabled"
              value={userData.lastName}
            ></input>
          </div>
          <div className="btn-box">
            <button className="edit-button">Save</button>
            <button className="edit-button" onClick={handleClickClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }

  // verification si l'utilisateur est connecté
  if (!userData) {
    return <Navigate to="/login"></Navigate>;
  }

  // si oui afficher la page
  return (
    <main className="main bg-dark">
      <div className="header">
        {userData && (
          <h1>
            Welcome back
            <br />
            {userData.firstName} {userData.lastName}
          </h1>
        )}

        {visible ? (
          editUsername()
        ) : (
          <button className="edit-button" onClick={handleClickOpen}>
            Edit Name
          </button>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <div className="cardBox">
        {dataAccount.map((data) => (
          <Card key={data.id} data={data} className />
        ))}
      </div>
    </main>
  );
}

export default User;
