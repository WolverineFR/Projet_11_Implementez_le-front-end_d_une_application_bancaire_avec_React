import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "../../components/Card";
import dataAccount from "../../data/dataAccount.json";
import { editUsername } from "../../Reducers/UserSlice";

function User() {
  const userData = useSelector((state) => state.user.data);
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [userName, setUserName] = useState(userData.userName);

  // formulaire visible ou non en fonction du click sur le btn
  const handleClickOpen = () => {
    setVisible(true);
  };
  const handleClickClose = () => {
    setVisible(false);
  };

  // à l'envoie du formulaire
  const onSubmit = async (e) => {
    e.preventDefault();
    const userCredentials = {
      userName,
    };
    dispatch(editUsername(userCredentials)).then((result) => {
      if (result.payload) {
        setUserName(result.payload.userName);
      }
      handleClickClose();
    });
  };

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
