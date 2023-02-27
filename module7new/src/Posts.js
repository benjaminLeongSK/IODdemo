import { useEffect, useState } from "react"
import Divider from '@mui/material/Divider';

const Posts = () => {
    const [postList, setPostList] = useState([]); 

    useEffect(() => {
        // fetching data using json server as makeshift database: npx json-server --watch data/data.json --port 8000
        fetch('http://localhost:8000/posts')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setPostList(data)
            })
    },[])
    return ( 
        <section className="blog-details">
            <h1>List of Posts</h1>
            {postList.map((post) => (
                <div key={ post.id }>
                    <h2>{ post.title }</h2>
                    <p>{ post.body }</p>
                    <h5>Written by: {post.username}</h5>
                    <Divider variant="fullWidth" />
                </div>
            ))}
        </section>
     );
}
 
export default Posts;