import React, {useState, useEffect}  from 'react';
import Header from '../../assets/components/header';
import apiMock from '../../services/MockAPIs/posts-no-header';
//import api from '../../services/api';


function PostEdit(){
  const [text, setText] = useState('');
  const [displayText, setDisplayText] = useState('');

  useEffect(()=>{
    apiMock.put('posts/1',)
  },[])


  return(
    <div id="postEdit">
      <Header/>
      <textarea></textarea>
    </div>
  )
}

export default PostEdit;