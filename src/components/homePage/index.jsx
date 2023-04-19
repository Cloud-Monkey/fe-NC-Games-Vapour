import ReviewCard from "../ReviewCard";

function HomePage({ reviewList, loading }) {
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <ul className="review-list">
        {reviewList.map((review) => {
          return (
            <li key={review.review_id}>
              <ReviewCard review={review} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default HomePage;
