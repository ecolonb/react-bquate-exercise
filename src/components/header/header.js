import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
export default function() {
  return (
    <header className="header">
      <div className="logo">Bquate test</div>
      <div className="options">
        <ul className="ulOptions">
          <li>
            <NavLink exact to="/tracks" activeStyle={{ color: "#4ea7f5" }}>
              Tracks
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/albums" activeStyle={{ color: "#4ea7f5" }}>
              Albums
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/artists" activeStyle={{ color: "#4ea7f5" }}>
              Artists
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
