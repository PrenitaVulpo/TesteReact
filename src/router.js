import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './pages/landing';
import Cadastro from './pages/cadastro';
import Erro404 from './pages/Erro404';
import Feed from './pages/feed'


const Router = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/cadastro" component={Cadastro}/>
        <Route exact path="/feed" component={Feed}/>
        <Route component={Erro404}/> 
      </Switch>
    </BrowserRouter>
  )
}

export default Router;