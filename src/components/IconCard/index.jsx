import React from "react";
import PropTypes from "prop-types";

function IconCard({ data }) {
  return (
    <div className="feature-item">
      <img src={data.img} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{data.title}</h3>
      <p>{data.description}</p>
    </div>
  );
}

IconCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IconCard;
