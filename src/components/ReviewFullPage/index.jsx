import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReviewCard from "../ReviewCard";
import { getReviewById } from "../../utils/apis";
import "./styles.css";

function ReviewFullPage() {
  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(true);

  const reviewId = useParams().review_id;

  useEffect(() => {
    setLoading(true);
    getReviewById(reviewId)
      .then((review) => {
        setReview(review);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [reviewId]);

  if (loading || review === null) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Link className="full-review-button" to={"/reviews"}>
        Back
      </Link>
      <ReviewCard review={review} isFullReview />
      <div className="review-body-container">
        <p className="review-body">{review.review_body}</p>
      </div>
    </div>
  );
}

export default ReviewFullPage;
