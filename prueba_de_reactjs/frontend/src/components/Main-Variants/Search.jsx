import React, { useEffect} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {setBodyCard, setBodyCardFailed, deleteBodyCardData} from '../../Redux/actions/bodyCardActions'

import Header from '../Header/Header'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'
import {checkWindowSize} from '../../onResize'

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

const Search = ({match, requestState, setNews, setNewsFailed, deleteNews}) => {
    const searchValue = match.params.searchValue

    useEffect(() => {
        deleteNews()
        axios.get(`http://localhost:4000/api/search-bar/${searchValue}`)
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
    }, [searchValue])

    return(
        <>
            <Header/>

            <Body requestState={requestState} fullWidth={true}/>

            <Footer/>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)