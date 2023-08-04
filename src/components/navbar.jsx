import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    // navbar
    <div className="navbar">
      {/* links */}
      <div className="links">
        {/* Home */}
        <Link to="/">Home</Link>
        {/* New Player Form */}
        <Link to="/newplayerform">Add New Player</Link>
        {/* Single Player */}
        <Link to="/singleplayer">View Player Details</Link>
        {/* All Players */}
        <Link to="/allplayers">View All Players</Link>
      </div>
    </div>
  );
};
