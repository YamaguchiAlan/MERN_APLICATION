import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import {verifyUser} from './Redux/actions/UserActions'

import Main from './components/Main';
import Article from './components/Article/Article';
import News from './components/News/News';
import Search from './components/Main-Variants/Search'
import Signin from './components/Register/Signin';
import Signup from './components/Register/Signup';
import CreateArticle from './components/Create/Create-Article';
import EditorMode from './components/Editor-Mode/Editor-Mode';
import UpdateArticle from './components/Create/Update-Article';
import UserProfile from './components/Profile/User-profile';
import MyProfile from './components/Profile/My-profile';
import onResize from './onResize'

function mapDispatchToProps(dispatch) {
  return {
    verifyUser: () => dispatch(verifyUser())
  }
}

function App({verifyUser}){
  useEffect(() => {
    onResize()
    verifyUser()
  }, [])

  return(
      <Router >
        <Switch>
            <Route path="/" exact component={ Main } />
            <Route path="/article/:id" component={ Article } />
            <Route path="/news" component={ News } />
            <Route path="/search/:searchValue" component={ Search } />
            <Route path="/signin" component={ Signin } />
            <Route path="/signup" component={ Signup } />
            <Route path="/edit-articles" exact component={ EditorMode } />
            <Route path="/create-article" component={ CreateArticle } />
            <Route path="/edit-articles/update/:id" component={ UpdateArticle } />
            <Route path="/my-profile" component={MyProfile} />
            <Route path="/user/:id" component={UserProfile} />
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