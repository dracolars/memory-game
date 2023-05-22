import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setBoard } from "../../features/board/boardSlice";

export const Footer = () => {
  const dispatch = useDispatch();
  const [buttonText, setButtonText] = useState("Start Game");

  const startGameHandler = () => {
    dispatch(setBoard());
    setButtonText("Restart");
  };

  return (
    <footer className="footer">
      <button onClick={startGameHandler} className="start-button">
        {buttonText}
      </button>
    </footer>
  );
};
