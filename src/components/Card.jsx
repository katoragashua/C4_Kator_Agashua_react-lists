import React from "react";

const Card = ({
  company,
  logo,
  logoBackground,
  position,
  contract,
  location,
  postedAt,
}) => {
  return (
    <div className="card">
      <div className="logo" style={{ backgroundColor: logoBackground }}>
        <img src={`${logo}`} alt="" />
      </div>
      <div className="card-info">
        <div className="main-info">
          <div style={{ color: "#6E8098" }}>
            <span>{postedAt}</span>
            <span>.</span>
            <span>{contract}</span>
          </div>
          <h3>{position}</h3>
          <span style={{ color: "#6E8098" }}>{company}</span>
        </div>
        <h4 className="location" style={{ color: "#5964E0" }}>
          {location}
        </h4>
      </div>
    </div>
  );
};

export default Card;
