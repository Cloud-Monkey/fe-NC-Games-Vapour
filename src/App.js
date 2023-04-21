import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getReviews } from "./utils/apis";
import PageHeader from "./components/PageHeader";
import HomePage from "./components/homePage";
import ReviewFullPage from "./components/ReviewFullPage";
import "./App.css";

const happyUser = {
  username: "happyamy2016",
  name: "Amy Happy",
  avatar_url:
    "https://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729",
};

function App() {
  const [reviewList, setReviewList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(happyUser);

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
          element={<ReviewFullPage user={user} />}
        />
      </Routes>
    </div>
  );
}

export default App;
