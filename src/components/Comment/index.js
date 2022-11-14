function Comment({initials, author, content}) {
  return <li >
    <div className= "name-container">
      <div id="initials">
        {initials}
      </div>
      <h4 id="comment-author">
        {author}
      </h4>
    </div>
    
    <p className="content">{content}</p>
  </li>
}

export default Comment;
