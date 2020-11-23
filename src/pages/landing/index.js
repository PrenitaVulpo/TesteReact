import React, {useState, useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import './style.css'
import {Context} from '../../assets/context/authContext'

function Landing(){

  const {authenticated, handleLogin} = useContext(Context);
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  let history = useHistory();

  console.log( authenticated)
  async function handleEntrada(){
    await handleLogin(`{"username": "${login}", "password": "${senha}"}`)

  }

  return(
    <div>

    <div id="container">
      <div  className="content">
        <img src={Logo} alt="Paguru"/>
          <div className="inputs">        
            <div className="input-block">
              <label htmlFor="usuario" id="label">Usuário</label><br/>
              <input type="text" name="usuario" id="input"
              onChange={(s)=>setLogin(s.target.value)}/>
            </div>
            <div className="input-block">
              <label htmlFor="senha" id="label">Senha</label><br/>
              <input type="password" name="senha" id="input" 
              onChange={(s)=>setSenha(s.target.value)}/>
            </div>
          </div>
          <button onClick={handleEntrada}>entrar</button>
        <Link to="/cadastro" id="routeLink">Não tem conta? Cadastre-se aqui!</Link>
      </div>
    </div>
    </div>

  )
}

export default Landing;