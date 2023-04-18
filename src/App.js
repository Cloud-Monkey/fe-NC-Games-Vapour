import React, { useState, useEffect } from "react";
import "./App.css";
import { getReviews } from "./utils/apis";
import PageHeader from "./components/PageHeader";
import HomePage from "./components/homePage";
import { Routes, Route } from "react-router-dom";

function App() {
  const [reviewList, setReviewList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    getReviews().then((response) => {
      setLoading(false);
      setReviewList(response);
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
      </Routes>
    </div>
  );
}

export default App;
