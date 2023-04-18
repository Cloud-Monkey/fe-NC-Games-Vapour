import React, { useState, useEffect } from "react";
import "./App.css";
import { getReviews } from "./apis";
import HomePage from "./components/homePage";
import { Routes, Route } from "react-router-dom";

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
      <Routes>
        <Route
          path="/reviews"
          element={
            <HomePage reviewList={reviewList} setReviewList={setReviewList} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
