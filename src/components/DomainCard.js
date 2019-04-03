import React from "react";

const DomainCard = props => {
  return (
    <li className="card domain-card">
      <span className="domain-title">{props.title}</span>
      <span>
        Last Renewal Date: <br />
        {props.dates.renewedDate}
      </span>
      <span>
        Expiry Date: <br />
        {props.dates.expiryDate}
      </span>
    </li>
  );
};

export default DomainCard;
