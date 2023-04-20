import FullReviewButton from "../FullReviewButton";
import "./styles.css";

function ReviewCard({ review, isFullReview }) {
  const {
    review_id,
    category,
    title,
    created_at,
    designer,
    owner,
    review_img_url,
  } = review;

  const dateString = new Date(created_at);
  const formattedDate = dateString.toDateString();

  return (
    <div className="grid-review-display">
      <div className="title-review">
        <h2 className="review-card-title">{title}</h2>
      </div>
      <div className="designer-review">
        <div className="review-card-designer">{designer}</div>
      </div>

      <div className="pic-review">
        <img src={review_img_url} alt={`gameplay of ${title}`} />
      </div>
      <div className="created-review">
        <div className="review-card-created">Created: {formattedDate}</div>
      </div>
      <div className="owner-review">
        <div className="review-card-owner">Owner: {owner}</div>
      </div>
      <div className="category-review">
        <div className="review-card-category">Category: {category}</div>
      </div>
      <div className="link-review">
        {!isFullReview && <FullReviewButton reviewId={review_id} />}
      </div>
    </div>
  );
}

export default ReviewCard;
