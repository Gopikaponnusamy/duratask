import React from "react";

const Navbar = ({ user, onHome }) => (
  <div className="navbar">
    <span className="logo"> DuraTask </span>
    <span>Welcome, {user.name}</span>
    <button onClick={onHome}>Dashboard</button>
  </div>
);

export default Navbar;
