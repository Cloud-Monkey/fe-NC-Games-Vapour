import React, { useState, useEffect } from "react";
import { patchVotes } from "../../utils/apis";
import "./styles.css";

function VotesUpDown({
  review,
  setMinusDisabled,
  setPlusDisabled,
  minusButtonDisabled,
  plusButtonDisabled,
}) {
  const [count, setCount] = useState(review.votes);

  const handlePlusClick = () => {
    setCount((currentVotes) => currentVotes + 1);
    setPlusDisabled(true);
    setMinusDisabled(false);
    patchVotes(review.review_id, 1).catch((error) => {
      console.log(error);
      setCount((currentVotes) => currentVotes - 1);
    });
  };

  const handleMinusClick = () => {
    if (count >= 1) setCount((currentVotes) => currentVotes - 1);
    setMinusDisabled(true);
    setPlusDisabled(false);
    patchVotes(review.review_id, -1).catch((error) => {
      console.log(error);
      setCount((currentVotes) => currentVotes + 1);
    });
  };

  return (
    <div className="votes-button-container">
      <button onClick={handleMinusClick} disabled={minusButtonDisabled}>
        -
      </button>
      <span> Votes: {count} </span>
      <button onClick={handlePlusClick} disabled={plusButtonDisabled}>
        +
      </button>
    </div>
  );
}

export default VotesUpDown;
