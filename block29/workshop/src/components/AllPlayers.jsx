import React, { useEffect, useState } from "react";
import FetchPlayers from "../API";
import { useNavigate } from "react-router-dom";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      try {
        const playersData = await FetchPlayers();
        setPlayers(playersData.data.players);
      } catch (error) {
        console.error("Error fetching players", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {players.map((player) => {
        return (
          <li key={player.id}>
            <h4>{player.name}</h4>
            <p><img src={player.imageUrl}></img></p>
            <p>ID: {player.id}</p>
            <p>Breed: {player.breed}</p>
            <div className="navi">
              <button onClick={() => navigate(`/players/${player.id}`)}>Details</button>
            </div>
          </li>
        );
      })}
    </div>
  );
}
