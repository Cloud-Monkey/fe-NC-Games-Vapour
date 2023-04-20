import React, { useState, useEffect } from "react";
import { patchVotes } from "../../utils/apis";
import "./styles.css";

function VotesUpDown({ review }) {
  const [count, setCount] = useState(review.votes);
  const handlePlusClick = () => {
    setCount((currentVotes) => currentVotes + 1);
    patchVotes(review.review_id, 1).catch((error) => {
      console.log(error);
      setCount((currentVotes) => currentVotes - 1);
    });
  };
  const handleMinusClick = () => {
    if (count >= 1) setCount((currentVotes) => currentVotes - 1);
    patchVotes(review.review_id, -1).catch((error) => {
      console.log(error);
      setCount((currentVotes) => currentVotes + 1);
    });
  };

  return (
    <div className="votes-button-container">
      <button onClick={handleMinusClick}>-</button>
      <span> Votes: {count} </span>
      <button onClick={handlePlusClick}>+</button>
    </div>
  );
}

export default VotesUpDown;
