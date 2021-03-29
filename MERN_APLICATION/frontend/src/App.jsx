import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import {verifyUser} from './Redux/actions/UserActions'

import Main from './components/Main';
import Article from './components/Article/Article';
import FilterNews from './components/Main-Variants/Filter-News';
import Search from './components/Main-Variants/Search'
import Signin from './components/Register/Signin';
import Signup from './components/Register/Signup';
import CreateArticle from './components/Edit/Article/Create-Article';
import EditorMode from './components/Edit/Editor-Mode';
import UpdateArticle from './components/Edit/Article/Update-Article';
import UserProfile from './components/Profile/User-profile';
import MyProfile from './components/Profile/My-profile';
import onResize from './onResize'
import EditHighlights from './components/Edit/Higlight/Edit-higlights';
import ContactUs from './components/Contact-us/Contact-us';

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
            <Route path="/filter-news/:filter" component={ FilterNews } />
            <Route path="/search/:searchValue" component={ Search } />
            <Route path="/signin" component={ Signin } />
            <Route path="/signup" component={ Signup } />
            <Route path="/edit-articles/:filter" exact component={ EditorMode } />
            <Route path="/create-article" component={ CreateArticle } />
            <Route path="/edit-articles/update/:id" component={ UpdateArticle } />
            <Route path="/update-higlights" component={EditHighlights} />
            <Route path="/my-profile" component={MyProfile} />
            <Route path="/user/:id" component={UserProfile} />
            <Route path="/contact-us" component={ContactUs} />
            <Route component={() =>(
              <div className="error-404 d-flex justify-content-center align-items-center">
                  <h1 className="display-1">404</h1>
                  <h1 >Sorry, Page Not Found</h1>
              </div>
              )} />
        </Switch>
      </Router>
  )
}

export default connect(null, mapDispatchToProps)(App);