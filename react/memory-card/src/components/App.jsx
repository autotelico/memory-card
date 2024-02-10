import React, { useState } from "react";
import "../styles/App.css";
import GameBoard from "./Cards";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GameBoard />
    </>
  );
}

export default App;
