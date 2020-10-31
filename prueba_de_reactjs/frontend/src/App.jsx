import React from 'react';
import Main from './components/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Article from './components/Article/Article';
import Header from './components/Header/Header';
import News from './components/News/News';
import Register from './components/Register/Register';

function App(){
return(
    <Router>
      <div className="App"> <Header /> </div>
      <Switch>
          <Route path="/" exact component={ Main } />
          <Route path="/article/:title" component={ Article } />
          <Route path="/news" component={ News } />
          <Route path="/signup" component={ Register } />
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