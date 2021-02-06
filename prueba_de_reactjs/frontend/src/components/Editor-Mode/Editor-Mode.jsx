import React, { useEffect } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {setBodyCard, setBodyCardFailed} from '../../Redux/actions/bodyCardActions'
import {checkWindowSize} from '../../onResize'

import EditBody from '../Body/Edit-Body'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const mapStateToProps = state => {
    return { requestState: state.bodyCardReducer.requestState }
  }

  const mapDispatchToProps = dispatch => {
    return {
        setNews: news => dispatch(setBodyCard(news)),
        setNewsFailed: () => dispatch(setBodyCardFailed())
      }
  }

const EditorMode = ({requestState, setNews, setNewsFailed}) => {
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
    }, [])

    return(
        <>
            <Header editMode={true}/>
            <div className="edit-body w-100 d-flex flex-column align-items-center pr-md-3 mt-2">
                <EditBody requestState={requestState}/>
            </div>
            <Footer/>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(EditorMode)