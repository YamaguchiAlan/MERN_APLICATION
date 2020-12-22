import React, {useEffect} from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import {verifyUser} from './Redux/actions/UserActions'

import Main from './components/Main';
import Article from './components/Article/Article';
import News from './components/News/News';
import Signin from './components/Register/Signin';
import Signup from './components/Register/Signup';
import CreateArticle from './components/Create/Create-Article';
import EditorMode from './components/Editor-Mode/Editor-Mode';
import UpdateArticle from './components/Create/Update-Article';
import Profile from './components/Profile/Profile';

function mapDispatchToProps(dispatch) {
  return {
    verifyUser: user => dispatch(verifyUser(user))
  }
}

function App({verifyUser}){
  useEffect(() => {
    axios.get("http://localhost:4000/api/authenticate", {
      withCredentials: true
    })
    .then(res => {
      verifyUser(res.data)
    })
  }, [])

  return(
      <Router>
        <Switch>
            <Route path="/" exact component={ Main } />
            <Route path="/article/:id" component={ Article } />
            <Route path="/news" component={ News } />
            <Route path="/signin" component={ Signin } />
            <Route path="/signup" component={ Signup } />
            <Route path="/edit-news" component={ EditorMode } />
            <Route path="/create-article" component={ CreateArticle } />
            <Route path="/update-article/:id" component={ UpdateArticle } />
            <Route path="/user/:id" component={Profile} />
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

export default connect(null, mapDispatchToProps)(App);