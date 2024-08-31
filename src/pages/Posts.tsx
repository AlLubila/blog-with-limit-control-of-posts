import '../posts.css'
import PostList from '../components/PostList'
import { useEffect, useState } from 'react'

import { PostData } from '../interfaces/posts'

const Posts = () => {

    const [allPosts, setAllPosts]=useState<PostData[] | null>(null)
    const [numberOfPosts, setNumberOfPosts]=useState<number>(5)
    
    const localNumber = () => localStorage.getItem('number') || numberOfPosts;

    const numberCached = localNumber()

    useEffect(()=>{
        const getPosts = async ()=> {
          const response =  await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${numberCached}`)
          const data: PostData[] = await response.json()
          setAllPosts(data)
          
        }
        getPosts()
        
    },[numberOfPosts])


    const onchange = (e: React.ChangeEvent<HTMLInputElement>)=> {
        setNumberOfPosts(+e.target.value)
        localStorage.setItem('number', e.target.value)

    }
  return (
    <div className='post-container'>
      <h1>Main Page</h1>
      <div style={{display: "flex", flexDirection: 'column'}}>
        <label htmlFor="posts">Number of posts {numberCached}</label>
        <input type="range" min={1} max={20} onChange={onchange} defaultValue={numberCached}/>
        <PostList allPosts = {allPosts}/>
      </div>
    </div>
  )
}

export default Posts
