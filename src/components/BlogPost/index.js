function BlogPost({title, author, datePosted, imageSrc, imageAlt, content}) {
  return <div id="blog-post">
    <h2>{title}</h2>
    <h3>by {author}</h3>
    <sub>{datePosted}</sub>
    <span></span>
    <img src={imageSrc} alt={imageAlt}></img>
    <figcaption>{imageAlt}</figcaption>
    <p>{content}</p>
  </div>
}

export default BlogPost;
