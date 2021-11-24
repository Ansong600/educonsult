import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Datafetching() {
    const [posts, setPosts] = useState([])
    
    useEffect(()=>{
        axios.p('https://jsonplaceholder.typicode.com/posts')
        .then(res=> {
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    })

    return (
        <div>
           <ul>
               {
                   posts.map(
                       post => <li key={post.id}>{post.title}</li> )
               }
           </ul>
        </div>
    )
}

export default Datafetching
