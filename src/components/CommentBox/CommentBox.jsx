import { useState } from "react";
import { postComment } from "../../utils/apis";
import "./styles.css";

function CommentBox({ user, reviewId }) {
  const [comment, setComment] = useState("");

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
      postComment(reviewId, postBody).catch((error) => {
        console.log(error);
      });
      setComment("");
    }
  };

  const isDisabled = comment.length === 0;

  return (
    <div className="comment-box-container">
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
