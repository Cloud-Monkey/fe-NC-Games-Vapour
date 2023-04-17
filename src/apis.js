import axios from "axios";

const ncGamesApi = axios.create({
  baseURL: "https://nc-games-jdro.onrender.com/api",
});

export const getReviews = () => {
  return ncGamesApi
    .get("/reviews")
    .then(({ data }) => {
      return data.review;
    })
    .catch((error) => {
      console.log(error);
    });
};
