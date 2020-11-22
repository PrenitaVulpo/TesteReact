import React, {Component} from 'react'
import './style.css';

function appButton(){

    return(
      <button className="main" >{this.props.children}</button>
    )
}

export default appButton;