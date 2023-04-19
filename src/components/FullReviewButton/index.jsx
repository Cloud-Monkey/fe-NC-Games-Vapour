import { Link } from "react-router-dom";
import "./styles.css";

function FullReviewButton({ reviewId }) {
  return (
    <div className="full-review-button-container">
      <Link className="full-review-button" to={`/reviews/${reviewId}`}>
        View Review
      </Link>
    </div>
  );
}

export default FullReviewButton;
