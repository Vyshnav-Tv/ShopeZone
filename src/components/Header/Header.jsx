import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <h1 style={{ textDecoration: "none", color: "beige" }}>ShopeZone</h1>
      </Link>

      <Link to="/logout">
        <button className="logout">Logout</button>
      </Link>
    </header>
  );
};

export default Header;
