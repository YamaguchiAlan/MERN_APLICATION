import React, { useEffect, useState} from 'react'
import axios from 'axios'
import queryString from 'query-string'
import {connect} from 'react-redux'
import {setBodyCard, setBodyCardFailed, deleteBodyCardData} from '../../Redux/actions/bodyCardActions'

import Header from '../Header/Header'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'
import PageSelector from '../Body/Page-selector'

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

const Search = ({match, requestState, setNews, setNewsFailed, deleteNews, location}) => {
    const searchValue = match.params.searchValue
    const [pagination, setPagination] = useState({})

    const searchQuery = queryString.parse(location.search)

    useEffect(() => {
        deleteNews()
        axios.get(`/news/search/${searchValue}?page=${searchQuery.page ? searchQuery.page : 1}`)
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
    }, [searchValue, location.search])

    return(
        <>
            <Header/>

            <Body requestState={requestState} filter="Result" header="Search Results"/>

            {
                requestState === "Success" &&
                    <PageSelector pagination={pagination} url={match.url}/>
            }

            <Footer/>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)