import axios from "axios";

const ncGamesApi = axios.create({
  baseURL: "https://nc-games-jdro.onrender.com/api",
});

export const getReviews = () => {
  return ncGamesApi.get("/reviews").then(({ data }) => {
    return data.review;
  });
};

export const getReviewById = (reviewId) => {
  return ncGamesApi.get(`/reviews/${reviewId}`).then(({ data }) => {
    console.log(data.review[0]);
    return data.review[0];
  });
};
