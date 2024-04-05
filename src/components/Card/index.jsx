import React from "react";
import PropTypes from "prop-types";

function Card({ data }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{data.accountTitle}</h3>
        <p className="account-amount">{data.amount}</p>
        <p className="account-amount-description">{data.amountDescription}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Card;
