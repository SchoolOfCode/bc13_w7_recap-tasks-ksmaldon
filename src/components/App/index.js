
import BlogPost from "../BlogPost";
import CommentList from "../CommentList";
import CommentForm from "../CommentForm";
import {useState, React} from "react"
import { comments } from "../../data/comments";
import { v4 as uuidv4 } from 'uuid';



function App() {
  
  const[commentsList, setCommentsList]= useState(comments)

  const [formData, setformData]= useState({author:"Anon Author", content:""})

  const[isDisabled, setIsDisabled] = useState(true)
  

  function handleChange(event) {
    const author = event.target.form.author.value
    const content = event.target.form.comment.value
    
    setformData({author:author||"Anon Author", content:content})
    if(content.length>0){
      setIsDisabled(false)
    } else{
      setIsDisabled(true)
    }
  }

  function onSubmit(event){
    event.preventDefault()
    const newComment =[...commentsList, {id:uuidv4(), author:formData.author,content:formData.content }]
    setCommentsList(newComment)
    event.target.form.author.value=""
    event.target.form.comment.value=""
  }

  return <div id="blog-post-container"><BlogPost 
  title="My First Post" 
  author="Chris Meah"
  datePosted="20/11/2019"
  content="A structure used in most apps and games.
        It's a way to keep doing the same.
        While a condition is true,
        Or for one to twenty-two.
        If endless, for errors we blame
        ..........
        Loop "
  imageSrc= "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  imageAlt="A couple of coders.">
  </BlogPost>
  <CommentList newComments={commentsList}/>
  <CommentForm  disabled={isDisabled} onSubmit={onSubmit} onChange={handleChange} />
  </div>
}

export default App;
