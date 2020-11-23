import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class User extends Component{
  constructor(props){
    super(props);
    this.state = {};
    
  }
  
  render(){
    return(
    <Link to={`/user/${this.props.id}`} id="Main">
      <h1>{this.props.author_name}</h1>
      <p>{this.props.content}</p>
    </Link>
    )
  }
  
}

export default User;