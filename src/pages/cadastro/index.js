import React, {useState} from 'react';
import apiMock from '../../services/MockAPIs/posts-no-header';
//import api from '../../services/api';
import Logo from '../../assets/images/logo.png';
import './style.css';
import {Link, useHistory} from 'react-router-dom';



function Cadastro(){
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [senha2, setSenha2] = useState('');
  const [email, setEmail] = useState('');
  let history = useHistory();

  async function handleSignUp(){
    if(senha===senha2){
      let credentialsString = `{"username": ${login}, "password": "${senha}", "email": ${email}}`;
      
      /*await api.post('users', credentialsString)
      .then((response) => {
        console.log(response);
        alert("Sucesso!");
        history.push("/")
      })
      .catch(error=>{
        console.log(error)
        alert(error.message)
      })*/

      await apiMock.post('/users', credentialsString)
        .then((response) => {
          console.log(response);
          alert("Sucesso!");
          history.push("/");
        })
        .catch(error=>{
          console.log(error)
          alert(error.message)
        })
    } else {
      alert("as senhas precisam ser iguais")
    }
  } 
  
  return(
    <div id="container">
    <form>
      <img src={Logo} alt="Paguru"/>
      <h1>Cadastre-se</h1>
      
      <fieldset>
        <div className="input-block">
          <div className="input-field">
            <label htmlFor="user">Nome de usuário:</label>
            <input type="text" name="user"
            onChange={(s)=>setLogin(s.target.value)}/>
          </div>
          <div className="input-field">
            <label htmlFor="senha">Senha:</label>
            <input type="password" name="senha"
            onChange={(s)=>setSenha(s.target.value)}/>
          <div className="input-field">
            <label htmlFor="senha">Confirme a sua senha:</label>
            <input type="password" name="senha"
            onChange={(s)=>setSenha2(s.target.value)}/>
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" name="email"
            onChange={(s)=>setEmail(s.target.value)}/>
          </div>
          </div>
        </div>
      </fieldset>

      <button type="button" onClick={handleSignUp}>Cadastrar</button>

      <Link to="/" id="routeLink">Voltar à tela inicial</Link>
    </form>
    </div>
  )
}

export default Cadastro;