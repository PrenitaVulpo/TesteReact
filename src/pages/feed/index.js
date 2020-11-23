import React, {useEffect, useState, Component} from 'react';
import Header from '../../assets/components/header';
import api from '../../services/MockAPIs/Feed';
import './style.css'

class Feed extends Component{

  constructor(props){
    super(props)
    this.state ={
      posts: [
        {
          "author_name": "Loading",
          "content": "Loading"
        }
      ]
    }
  }

  async componentDidMount(){
    await api.get()
      .then(response=>{
        this.setState({posts: response.data.results})
      }).catch(error=>{
        console.log(error.message);
        alert(error.message)
      })
  }

render(){
    return (
      <div id="main">
        <Header/>
        <div id="feed">
          {this.state.posts.map(post=>{
            return(
              <div id="post">
                <h1>{post.author_name}</h1>
                <p>{post.content}</p>
              </div>
            )
            })
          }
        </div>
      </div>
    )
  }
}

export default Feed;