import React, { useState, useEffect } from "react";
import "./App.css";
import PageHeader from "./components/PageHeader";
import ReviewCard from "./components/ReviewCard";
import { getReviews } from "./apis";

function App() {
  const [reviewList, setReviewList] = useState([]);
  useEffect(() => {
    getReviews()
      .then((response) => {
        setReviewList(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="App">
      <PageHeader className="App-header" />
      <ul>
        {reviewList.map((review) => {
          return <ReviewCard key={review.review_id} review={review} />;
        })}
      </ul>
    </div>
  );
}

export default App;
