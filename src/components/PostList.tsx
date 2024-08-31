import { useNavigate } from 'react-router-dom'
import { PostData } from '../interfaces/posts'
import '../postList.css'

interface PostsListProps {
    allPosts: PostData[] | null
}

const PostList: React.FC<PostsListProps> = ({allPosts}) => {

    const navigate =useNavigate()

  return (
    <ul className="posts">
        {
            allPosts?.map(post => (
                <li key={post.id} className="post" onClick={()=> navigate(`/${post.id}`)}>
                    <h2 className="post-title">{post.title}</h2>
                    <p className="post-link">Lire l'article</p>
                </li>
            ))
        }
    </ul>
  )
}

export default PostList
