import React, {useEffect, useState} from 'react';
import axios from 'axios'
import queryString from 'query-string'
import {connect} from 'react-redux'
import {setBodyCard, setBodyCardFailed, deleteBodyCardData} from '../Redux/actions/bodyCardActions'

import Header from './Header/Header'
import Nav from './Nav/Nav';
import Body from './Body/Body';
import Higlights from './Higlights/Higlights';
import Footer from './Footer/Footer';
import PageSelector from './Body/Page-selector';
import MostViewed from './Most-Viewed/Most-Viewed';

const mapStateToProps = state => {
  return { requestState: state.bodyCardReducer.requestState }
}

const mapDispatchToProps = dispatch => {
  return {
      setNews: news => dispatch(setBodyCard(news)),
      setNewsFailed: () => dispatch(setBodyCardFailed()),
      deleteNews: () => dispatch(deleteBodyCardData())
    }
}

const Main = ({requestState, setNews, setNewsFailed, deleteNews, location}) => {
  const [pagination, setPagination] = useState({})

  const searchQuery = queryString.parse(location.search)

  useEffect(() => {
    deleteNews()
    axios.get(`/news?page=${searchQuery.page ? searchQuery.page : 1}`)
    .then(res => {
        if(res.data.docs[0]){
          setNews(res.data.docs)

          setPagination({
            ...res.data,
            docs: []
          })
        } else{
          setNewsFailed()
        }
    })
    .catch(err => {
      setNewsFailed()
    })

  },[location.search]);

  return(
      <div id="main">
          <Header />

          <Higlights/>

          <Nav/>

          <div id="body">
            <Body requestState={requestState}/>
          </div>
          {
            requestState === "Success" &&
              <PageSelector pagination={pagination} url="/"/>
          }

          <div id="most-viewed-back">
            <MostViewed main={true}/>
          </div>

          <Footer/>
      </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);