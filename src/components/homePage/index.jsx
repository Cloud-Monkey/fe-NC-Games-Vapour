import ReviewCard from "../ReviewCard";
import FullReviewButton from "../FullReviewButton";

function HomePage({ reviewList, loading }) {
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <ul className="review-list">
        {reviewList.map((review) => {
          return (
            <div>
              <ReviewCard key={review.review_id} review={review} />
              <FullReviewButton></FullReviewButton>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default HomePage;
