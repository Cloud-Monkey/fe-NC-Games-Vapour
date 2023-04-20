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
    return data.review[0];
  });
};

export const getComments = (reviewId, incV) => {
  return ncGamesApi.get(`/reviews/${reviewId}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const patchVotes = (reviewId, incVotes) => {
  return ncGamesApi
    .patch(`/reviews/${reviewId}`, { inc_votes: incVotes })
    .then(({ data }) => {
      return data;
    });
};
