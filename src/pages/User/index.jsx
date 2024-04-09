import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Card from "../../components/Card";
import dataAccount from "../../data/dataAccount.json";
import { editUsername } from "../../Reducers/UserSlice";

function User() {
  const userData = useSelector((state) => state.user.data);
  const token = localStorage.getItem("token");

  // formulaire visible ou non en fonction du click sur le btn
  const [visible, setVisible] = useState(false);
  const handleClickOpen = () => {
    setVisible(true);
    console.log(token);
  };
  const handleClickClose = () => {
    setVisible(false);
  };

  const [userName, setUserName] = useState(userData.userName);

  const dispatch = useDispatch();

  // à l'envoie du formulaire
  const onSubmit = async (e) => {
    e.preventDefault();
    const userCredentials = {
      userName,
    };

    // voir pour corriger le probleme avec le body et le token (object object)
    const update = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userCredentials),
    });
    dispatch(editUsername({ update })).then((result) => {
      if (result.payload) {
        setUserName("");
      }
      handleClickClose();
    });
  };

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
        {/* quand le btn editName est cliqué */}
        {visible ? (
          <div className="formEditUsername">
            <form onSubmit={onSubmit}>
              <div>
                <label htmlFor="username">User name:</label>
                <input
                  name="username"
                  type="text"
                  id="username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
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
