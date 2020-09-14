import React from 'react';
import './App.css';
import Main from './components/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Article from './components/Article/Article';
import Header from '../src/components/Header/Header';

function App(){
return(
    <Router>
      <div className="App"> <Header /> </div>
      <Switch>
          <Route path="/" exact component={ Main } />
          <Route path="/article/:articleId" component={ Article } />
          <Route component={() =>(
            <div>
                <h1>Error 404</h1>
                <span>Página no encontrada</span>
            </div>
)} />
      </Switch>
    </Router>
)
}

export default App;