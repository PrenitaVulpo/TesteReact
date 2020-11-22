import React from 'react';
import Logo from '../../assets/images/logo.png'
import './style.css';
import {Link, useHistory} from 'react-router-dom';


function Cadastro(){
  const {goBack} = useHistory();
  
  
  return(
    <div id="container">
    <form>
      <img src={Logo} alt="Paguru"/>
      <h1>Cadastre-se</h1>
      
      <fieldset>
        <div className="input-block">
          <div className="input-field">
          <label htmlFor="user">Nome de usuário:</label>
          <input type="text" name="user"/>
          </div>
          <div className="input-field">
          <label htmlFor="senha">Senha:</label>
          <input type="password" name="senha"/>
          </div>
          <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" name="email"/>
          </div>
        </div>
      </fieldset>

      <button>Cadastrar</button>

      <Link to="/" id="routeLink">Voltar à tela inicial</Link>
    </form>
    </div>
  )
}

export default Cadastro;