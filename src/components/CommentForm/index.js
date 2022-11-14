function CommentForm({onChange, onSubmit, disabled}) {
  return <form  onChange={onChange} className="comment-form">
    <label>Author:</label>
    <input id="input-author" name="author" ></input>
    <label>Comment:</label>
    <textarea id="input-comment"name="comment"></textarea>
    <input id="submit-button" onClick={onSubmit} type="submit"  value="Submit" disabled={disabled}></input>
  </form>
}

export default CommentForm;
