import React, { useEffect, useState } from "react";

// const API = fetch(
//   "https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF/"
// );
// const PlayersAPI =
//   "https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF/players";

async function FetchPlayers() {
  try {
    const response = await fetch(
      "https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF/players"
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Trouble fetching players", error);
  }

  return;
}

export default FetchPlayers;
