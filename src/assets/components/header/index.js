import React, {Component} from 'react'
import './style.css';
import Logo from '../../images/logo_header.png'

function Header (){

  return(
    <div id='main'>
      <img src={Logo} alt="Paguru"/>
      <div className="navigation">
        <a>Feed</a>
        <a>Usuários</a>
        <a>Sair</a>
      </div>
    </div>
  )
}

export default Header;