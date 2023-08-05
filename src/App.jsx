import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { NewPlayerForm } from "./components/newplayerform";
import { AllPlayers } from "./components/allplayers";
import { SinglePlayer } from "./components/singleplayer"; // Corrected import

export default function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          {/* Home component */}
          <Route path="/" />
          {/* CreatePlayerForm component */}
          <Route path="/newplayerform" element={<NewPlayerForm />} />
          {/* SinglePlayer component */}
          <Route path="/singleplayer" element={<SinglePlayer />} />
          {/* All Players component */}
          <Route path="/allplayers" element={<AllPlayers />} />
        </Routes>
      </div>
      <div className="homepage">
        <h1>Welcome to the Puppy Bowl LVII</h1>
      </div>
      <div className="team1">
        <h1>Team 1</h1>
        <div className="team1card"></div>
      </div>
      <div className="team2">
        <h1>Team 2</h1>
        <div className="team2card"></div>
      </div>
    </>
  );
}
