import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Link to="/">Home </Link>
      {/* <Link to="/players/:id">Player</Link> */}
    </div>
  );
}
