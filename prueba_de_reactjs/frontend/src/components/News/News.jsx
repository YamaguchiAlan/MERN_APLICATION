import React, { useEffect} from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import {setBodyCard, setBodyCardFailed} from '../../Redux/actions/bodyCardActions'
import {checkWindowSize} from '../../onResize'

import Body from '../Body/Body'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './News.css'

const mapStateToProps = state => {
    return { requestState: state.bodyCardReducer.requestState }
  }

  const mapDispatchToProps = dispatch => {
    return {
        setNews: news => dispatch(setBodyCard(news)),
        setNewsFailed: () => dispatch(setBodyCardFailed())
      }
  }

const News = ({requestState, setNews, setNewsFailed}) =>  {
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
            <Header/>
            <div className="News">
                <Body requestState={requestState} fullWidth={true}/>
                <Footer/>
            </div>
        </>
)
}

export default connect(mapStateToProps, mapDispatchToProps)(News);