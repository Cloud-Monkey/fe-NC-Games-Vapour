import React, { useState } from "react";
import { patchVotes } from "../../utils/apis";
import "./styles.css";

function VotesUpDown({ review }) {
  const [count, setCount] = useState(review.votes);
  const [error, setError] = useState(null);
  const [plusButtonDisabled, setPlusDisabled] = useState(false);
  const [minusButtonDisabled, setMinusDisabled] = useState(false);

  const handlePlusClick = () => {
    setCount((currentVotes) => currentVotes + 1);
    if (count === review.votes) {
      setPlusDisabled(true);
    }
    setMinusDisabled(false);
    patchVotes(review.review_id, 1).catch((error) => {
      console.log(error);
      setCount((currentVotes) => currentVotes - 1);
      setError("Failed to vote. Please try again later.");
    });
  };

  const handleMinusClick = () => {
    if (count >= 1) setCount((currentVotes) => currentVotes - 1);
    if (count === review.votes) {
      setMinusDisabled(true);
    }
    setPlusDisabled(false);
    patchVotes(review.review_id, -1).catch((error) => {
      console.log(error);
      setCount((currentVotes) => currentVotes + 1);
      setError("Failed to vote. Please try again later.");
    });
  };

  return (
    <div className="votes-button-container">
      {error && <p>{error}</p>}
      <button onClick={handlePlusClick} disabled={plusButtonDisabled}>
        +
      </button>
      <span> Votes: {count} </span>
      <button onClick={handleMinusClick} disabled={minusButtonDisabled}>
        -
      </button>
    </div>
  );
}

export default VotesUpDown;
