import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = props => {
  return (
    <nav>
      <h3>Winc Student Dashboard</h3>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>

        <Link to="/students">
          <li>Students</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
