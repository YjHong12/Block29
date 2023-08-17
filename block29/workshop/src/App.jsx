import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import NewPlayerForm from "./components/NewPlayerForm";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  return (
    <div>

      <BrowserRouter>
      <div id="navbar">
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/players/:id" element={<SinglePlayer />} />
        </Routes>
      </BrowserRouter>
 
      <NewPlayerForm />
    </div>
  );
}

export default App;
