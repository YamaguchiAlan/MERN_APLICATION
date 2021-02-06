import React, {useEffect} from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import {setBodyCard, setBodyCardFailed} from '../Redux/actions/bodyCardActions'
import {checkWindowSize} from '../onResize'

import Header from './Header/Header'
import Nav from './Nav/Nav';
import Body from './Body/Body';
import BodyHead from './Body-Head/Body-head';
import Footer from './Footer/Footer';

let page = {
    "anterior": "",
    "primera": "1",
    "segunda": "2",
    "tercera": "3",
    "siguiente": "Siguiente"
}

const mapStateToProps = state => {
  return { requestState: state.bodyCardReducer.requestState }
}

const mapDispatchToProps = dispatch => {
  return {
      setNews: news => dispatch(setBodyCard(news)),
      setNewsFailed: () => dispatch(setBodyCardFailed())
    }
}

const Main = ({requestState, setNews, setNewsFailed}) => {
  useEffect(() => {
    axios.get("http://localhost:4000/api/news")
    .then(res => {
        if(res.data[0]){
          setNews(res.data)
        } else{
          setNewsFailed()
        }
        checkWindowSize()
    })
    .catch(err => {
      setNewsFailed()
      checkWindowSize()
    })

  },[]);

  return(
      <>
          <Header />

          <BodyHead/>

          <Nav/>

          <div id="body">
            <Body requestState={requestState}/>
          </div>

          {/* Selector de pagina */}
          <div className="page-selector">
            <a href="/" className="anterior">{page.anterior}</a>
            <a href="/" className="primera">{page.primera}</a>
            <a href="/" className="segunda">{page.segunda}</a>
            <a href="/" className="tercera">{page.tercera}</a>
            <a href="/" className="siguiente">{page.siguiente}</a>
          </div>

          <Footer/>
      </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);