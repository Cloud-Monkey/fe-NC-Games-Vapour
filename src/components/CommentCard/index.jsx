import "./styles.css";

function CommentCard({ comment }) {
  const { author, body, created_at } = comment;
  const dateString = new Date(created_at);
  const formattedDate = dateString.toDateString();

  return (
    <div className="grid-comment-display">
      <div className="comment-body">
        <div className="comment-card-body">comment: {body}</div>
      </div>
      <div className="author-comment">
        <div className="comment-card-author">author: {author}</div>
      </div>
      <div className="created-comment">
        <div className="comment-card-created">{formattedDate}</div>
      </div>
    </div>
  );
}

export default CommentCard;
