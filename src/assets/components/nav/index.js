import React, { useEffect } from 'react';
import Logo from '../../images/logo.svg';
import M from 'materialize-css';
import HeaderLink from '../headerLink';

export default function Nav() {
  useEffect(() => {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.sidenav');
      M.Sidenav.init(elems);
    });
  })

  return (
    <>
      <nav>
        <div class="nav-wrapper">
          <img src={Logo} alt="Paguru" />
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><HeaderLink destination="/feed" content="Feed" /></li>
            <li><HeaderLink destination="/users" content="Usuários" /></li>
            <li><HeaderLink destination="/" content="Sair" /></li>
          </ul>
        </div>
      </nav>
    </>
  )
};
''