import React, {useEffect, useState} from 'react';
import Header from '../../assets/components/header'
import api from '../../services/MockAPIs/user';

function User(){
  const [posts, setPosts] = useState();

  useEffect(()=>{
    api.get()
      .then(response=>{
        setPosts(response.data.results)
        console.log(posts)
      })
  },[]);
  return (
    <div>
      <Header/>
      <h1>User</h1>
      {posts.map(post=>{
        return(
          <div id="post">
            <h1>{post.author_name}</h1>
            <p>{post.content}</p>
          </div>
        )
        })
      }
    </div>
  )
}

export default User;