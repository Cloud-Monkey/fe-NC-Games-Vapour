import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getReviewById, getComments } from "../../utils/apis";
import ReviewCard from "../ReviewCard";
import CommentCard from "../CommentCard";
import VotesUpDown from "../VotesButtons/VotesUpDown";
import CommentBox from "../CommentBox/CommentBox";

import "./styles.css";

function ReviewFullPage({ user }) {
  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [commentList, setCommentList] = useState([]);
  const [loadingComments, setLoadingComments] = useState(true);
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

  useEffect(() => {
    setLoadingComments(true);
    getComments(reviewId)
      .then((comments) => {
        setCommentList(comments);
        setLoadingComments(false);
      })
      .catch((error) => {
        console.log(error);
        setLoadingComments(false);
      });
  }, [reviewId]);
  if (loading || review === null) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Link className="full-review-button" to={"/reviews"}>
        Back
      </Link>
      <ReviewCard review={review} isFullReview />
      <div>
        <VotesUpDown review={review}>Votes</VotesUpDown>
      </div>
      <div className="review-body-container">
        <p className="review-body">{review.review_body}</p>
      </div>
      <CommentBox user={user} reviewId={reviewId} />
      {loadingComments ? (
        <div>Loading comments...</div>
      ) : (
        <div>
          {commentList.length === 0 ? (
            <div></div>
          ) : (
            commentList.map((comment) => {
              return <CommentCard comment={comment} />;
            })
          )}
        </div>
      )}
    </>
  );
}

export default ReviewFullPage;
