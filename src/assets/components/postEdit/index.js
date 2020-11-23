import React, {Component, useState} from 'react';
import {Link} from 'react-router-dom';
//import './style.css';

class PostEdit extends Component{
  constructor(props){
    super(props);
    this.state = {
    };
  }

  
  render(){
    return(
      <div id="postEdit">
        <textarea>this.props.text</textarea>
        <button></button>
      </div>
    )
  } 
}

export default PostEdit;