import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.scss";
const Navbar = () => {
  return (
    <div className="nav">
      <h3>Gamminghub</h3>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="bestgame">Best Game</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
