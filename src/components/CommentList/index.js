import Comment from "../Comment";

function CommentList({newComments}) {
  return <ul id="comments"> 
   {newComments.map((comment)=>{
    let nameArr =comment.author.toUpperCase().split(" ")
    let initial = ""
    for (let i = 0; i<nameArr.length; i++){
      initial += nameArr[i][0]
    }
   // console.log(initial)
     return <Comment key={comment.id} initials={initial} author={comment.author} content={comment.content}></Comment>
   })}
  
  </ul>
}

export default CommentList;

