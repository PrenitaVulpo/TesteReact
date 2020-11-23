import React, {Component} from 'react';


class Post extends Component{
  constructor(props){
    super(props);
    this.state = {};
    
  }
  
  render(){
    return(
    <div id="post">
      <h1>{this.props.author_name}</h1>
      <p>{this.props.content}</p>
    </div>
    )
  }
  
}

export default Post;