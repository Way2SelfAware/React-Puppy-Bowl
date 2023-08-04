import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { NewPlayerForm } from "./components/newplayerform";
import { SinglePlayer } from "./components/singleplayer"; // Corrected import

export default function App() {
  return (
      <div>
        <Navbar />
        <Routes>
          {/* Home component */}
          <Route path="/" />
          {/* CreatePlayerForm component */}
          <Route path="/CreatePlayerForm" element={<NewPlayerForm />} />
          {/* SinglePlayer component */}
          <Route path="/PlayerDetails" element={<SinglePlayer />} />
        </Routes>
      </div>
  );
}
