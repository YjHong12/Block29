import React, { useEffect, useState } from "react";

export default function NewPlayerForm() {
  const [inputs, setInputs] = useState();

  async function handleSubmit(event) {
    event.preventDefault();
  }
  const addDog = () => {
    const [showDog, setshowDog] = useState(false);

  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>New Player Form 🐾</h3>
      <label>Name:</label>
      <input type="text" name="name" id="name"></input>
      <br />

      <label>Player ID:</label>
      <input type="text" name="id" id="id"></input>
      <br />

      <label>Breed:</label>
      <input type="text" name="breed" id="breed"></input>
      <br />

      <label>Image URL:</label>
      <input
        type="text"
        name="imageUrl"
        id="imageUrl"
        placeholder="image URL"
      ></input>
      <br />

      <label>Team:</label>
      <input type="text" name="team" id="team"></input>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}
