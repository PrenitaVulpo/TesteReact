import React, {useContext} from 'react';
import HeaderLink from '../headerLink';
import './style.css';
import Logo from '../../images/logo_header.png';
import {Context} from '../../context/authContext';

function Header (){
  const {handleLogout} = useContext(Context);
  
  return(
    <div id='main'>
      <img src={Logo} alt="Paguru"/>
      <div className="navigation">
        <HeaderLink destination="/feed" content="Feed"/>
        <HeaderLink destination="/users" content="Usuários"/>
        <HeaderLink destination="/" content="Sair" onClick={handleLogout}/>
      </div>
    </div>
  )
}

export default Header;