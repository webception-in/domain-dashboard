import React from "react";

const DomainCard = props => {
  return (
    <li className="card domain-card">
      <span className="domain-title">
        {props.title}
        <br />
        <small>{props.url}</small>
      </span>
      <span>
        Last Renewal: <br />
        {props.dates.renewedDate}
      </span>
      <span>
        Expiry: <br />
        {props.dates.expiryDate}
      </span>
    </li>
  );
};

export default DomainCard;
