import React, {Component} from 'react';
import HeaderLink from '../headerLink';
import './style.css';
import Logo from '../../images/logo_header.png';

function Header (){

  return(
    <div id='main'>
      <img src={Logo} alt="Paguru"/>
      <div className="navigation">
        <HeaderLink destination="/feed" content="Feed"/>
        <HeaderLink destination="/users" content="Usuários"/>
        <HeaderLink destination="/" content="Sair"/>
      </div>
    </div>
  )
}

export default Header;