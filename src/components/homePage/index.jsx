import ReviewCard from "../ReviewCard";

function HomePage({ reviewList, loading }) {
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <ul className="review-list">
        {reviewList.map((review) => {
          return <ReviewCard key={review.review_id} review={review} />;
        })}
      </ul>
    </div>
  );
}

export default HomePage;
