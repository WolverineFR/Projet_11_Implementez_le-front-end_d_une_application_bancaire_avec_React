import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Card from "../../components/Card";
import dataAccount from "../../data/dataAccount.json";

function User() {
  const userData = useSelector((state) => state.user.data);

  if (!userData) {
    return <Navigate to="/login"></Navigate>;
  }
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
        <button className="edit-button">Edit Name</button>
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
