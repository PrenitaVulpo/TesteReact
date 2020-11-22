import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import apiFetch from '../../services/api copy';
import api from '../../services/api';
import Header from '../../assets/components/header';
import appButton from '../../assets/components/button';
import Logo from '../../assets/images/logo.png';
import './style.css'

function Landing(){

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit =  () => {
    console.log(`${login} e ${senha}`)
  }

  async function handleLogin(){
    let credentialsString = `{"username": "amargo", "password": "amargo"}`;
    let credentials = JSON.parse(credentialsString);
    
  
    await api.post('auth', credentialsString)
      .then((response) => console.log(response))
      .catch(error=>{
        console.log(error)
      })
     await apiFetch('auth', credentialsString);
  } 

  return(
    <div>
      <Header/>

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
        <button onClick={handleLogin}>entrar</button>
        <Link to="/cadastro" id="routeLink">Não tem conta? Cadastre-se aqui!</Link>
      </div>
    </div>
    </div>

  )
}

export default Landing;