import "./App.css";
import React from "react";
import { Board } from "./features/board/Board";
import { Score } from "./features/score/Score";

function App() {
  return (
    <main className="App">
      <Score />
      <Board />
    </main>
  );
}

export default App;
