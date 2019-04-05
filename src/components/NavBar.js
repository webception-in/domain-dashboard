import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  //TODO display login or logout links conditionally
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/app" className="brand-logo">
          Dashboard
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
