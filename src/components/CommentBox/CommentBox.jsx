import { useState } from "react";
import { postComment } from "../../utils/apis";
import "./styles.css";

function CommentBox({ user, reviewId, setCommentList }) {
  const [comment, setComment] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    event.preventDefault();
    const newValue = event.target.value;
    setComment(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (comment.length > 0) {
      const postBody = {
        body: comment,
        username: user.username,
      };
      postComment(reviewId, postBody)
        .then((response) => {
          setCommentList((currentComment) => {
            const newComments = [response.comment, ...currentComment];
            return newComments;
          });
          return response;
        })
        .catch((error) => {
          console.log(error);
          setError("Comment failed, please try again later.");
        });
      setComment("");
    }
  };

  const isDisabled = comment.length === 0;

  return (
    <div className="comment-box-container">
      {error && <p className="error-msg-comment">{error}</p>}
      <form onSubmit={handleSubmit} className="comment-box-container">
        <div>
          <label htmlFor="add-comment-textfield" className="comment-box-label">
            Add comment:
          </label>
        </div>
        <textarea
          id="add-comment-textfield"
          onChange={handleChange}
          value={comment}
          className="text-area-for-post"
        />
        <div className="new-comment-submit">
          <button type="submit" disabled={isDisabled}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CommentBox;
