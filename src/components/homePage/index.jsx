import PageHeader from "../PageHeader";
import ReviewCard from "../ReviewCard";

function HomePage({ reviewList }) {
  return (
    <div>
      <PageHeader className="App-header" />
      <ul>
        {reviewList.map((review) => {
          return <ReviewCard key={review.review_id} review={review} />;
        })}
      </ul>
    </div>
  );
}

export default HomePage;
