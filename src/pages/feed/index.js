import React, {useEffect, useState} from 'react';
import api from '../../services/api';

function Feed(){
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    fetch('https://paguru-challenge.herokuapp.com/api/v1/posts/', {
          method: "GET", 
          mode: 'no-cors',
          headers: {
            Authorization: 'token 8e81fe11efe2e9f25c29f2304971e633fbf1d405'
          }
          }).then(response=> {
           // setPosts(response.data.results);
            console.log(response)})
          .catch(error=>console.log(error))
    /*api.get('posts/')
            .then(response=>{
              setPosts(response.data.results)
            })*/
  },[]);
  return (
    <div>
      
    </div>
  )
}

export default Feed;