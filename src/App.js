import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getReviews } from "./utils/apis";
import PageHeader from "./components/PageHeader";
import HomePage from "./components/homePage";
import ReviewFullPage from "./components/ReviewFullPage";
import "./App.css";

function App() {
  const [reviewList, setReviewList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [plusButtonDisabled, setPlusDisabled] = useState(false);
  const [minusButtonDisabled, setMinusDisabled] = useState(false);

  useEffect(() => {
    setLoading(true);
    getReviews()
      .then((response) => {
        setReviewList(response);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <PageHeader className="App-header" />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              reviewList={reviewList}
              setReviewList={setReviewList}
              loading={loading}
            />
          }
        ></Route>
        <Route
          path="/reviews"
          element={
            <HomePage
              reviewList={reviewList}
              setReviewList={setReviewList}
              loading={loading}
            />
          }
        />
        <Route
          path="/reviews/:review_id"
          element={
            <ReviewFullPage
              plusButtonDisabled={plusButtonDisabled}
              minusButtonDisabled={minusButtonDisabled}
              setMinusDisabled={setMinusDisabled}
              setPlusDisabled={setPlusDisabled}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
