import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <div className="navbar">Navbar</div>
      </Routes>
    </>
  );
}

export default App;
