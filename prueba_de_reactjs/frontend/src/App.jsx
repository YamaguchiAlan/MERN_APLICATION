import React from 'react';
import Main from './components/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Article from './components/Article/Article';
import Header from './components/Header/Header';
import News from './components/News/News';
import Signin from './components/Register/Signin';
import Signup from './components/Register/Signup';
import CreateArticle from './components/Create/Create-Article/Create-Article';

function App(){
return(
    <Router>
        <Header />
      <Switch>
          <Route path="/" exact component={ Main } />
          <Route path="/article/:title" component={ Article } />
          <Route path="/news" component={ News } />
          <Route path="/signin" component={ Signin } />
          <Route path="/signup" component={ Signup } />
          <Route path="/create-article" component={ CreateArticle } />
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