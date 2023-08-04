import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    // navbar
    <div className="navbar">
      {/* links */}
      <div className="links">
        {/* home */}
        <Link to="/">Home</Link>
        {/* new player form */}
        <Link to="/newplayerform">Add New Player</Link>
        {/* single player */}
        <Link to="/singleplayer">View Player Details</Link>
      </div>
    </div>
  );
};
