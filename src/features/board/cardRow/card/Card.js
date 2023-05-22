import React from "react";
import { useSelector } from "react-redux";
import {
  selectVisibleIDs,
  selectMatchedIDs,
  resetCards,
  flipCard,
} from "../../boardSlice";
import { useDispatch } from "react-redux";

export const Card = ({ id, contents }) => {
  // Add selected data and dispatch variables below
  const visibleIDs = useSelector(selectVisibleIDs);
  const matchedIDs = useSelector(selectMatchedIDs);

  var dispatch = useDispatch();

  // flip card action
  const flipHandler = (id) => {
    dispatch(flipCard(id));
  };

  const resetCardsHandler = () => {
    dispatch(resetCards());
  };

  let cardStyle = "resting";
  let click = () => flipHandler(id);

  let cardText = "";

  // 1st if statement
  // if card is visible or matched, do nothing on click
  if (visibleIDs.indexOf(id) !== -1 || matchedIDs.indexOf(id) !== -1) {
    cardText = contents;
    click = () => {};
  }

  // 2nd if statement
  // if a card is matched, update status to show content
  if (matchedIDs.indexOf(id) !== -1) {
    cardStyle = "matched";
  }

  // 3rd if statement
  // implement number of flipped cards check
  if (visibleIDs.length === 2) {
    click = () => {
      resetCardsHandler();
      flipHandler(id);
    };
  }

  return (
    <button onClick={click} className={`card ${cardStyle}`}>
      {cardText}
    </button>
  );
};
