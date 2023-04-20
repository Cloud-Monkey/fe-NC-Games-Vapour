import "./styles.css";

function CommentBox() {
  return (
    <div className="comment-box-container">
      <form>
        <label className="comment-box-label">
          <textarea className="text-area-for-post">Add comment here!</textarea>
        </label>{" "}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CommentBox;
