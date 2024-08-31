import { Link } from "react-router-dom"
import { PostData } from "../interfaces/posts"
import '../postDetail.css'

interface PostDetailProps {
    onePost: PostData | null
}

const PostDetail = ({ onePost }: PostDetailProps) => {
  return (
    <div className="post-detail-container">
      <div className="post-detail">
        <h1 className="post-id">Post number: {onePost?.id}</h1>
        <h2 className="post-title">{onePost?.title}</h2>
        <p className="post-body">{onePost?.body}</p>
        <Link to="/" className="back-link">Back to home</Link>
      </div>
    </div>
  )
}

export default PostDetail
