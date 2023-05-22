import React from "react";
import { useSelector } from "react-redux";
import { selectMatchedIDs } from "../board/boardSlice";

export const Score = () => {
  var cardsMatched = useSelector(selectMatchedIDs).length;
  var score = cardsMatched / 2;
  let win = "";

  if (score === 8) {
    win = "win";
  }

  return (
    <div className={`score-container ${win}`}>
      {cardsMatched > 15 ? "🎉 🎉 🎉" : `Score: ${score}`}
    </div>
  );
};
