import React, { useEffect ,useState} from 'react'
import axios from 'axios'
import queryString from 'query-string'
import {connect} from 'react-redux'
import {setBodyCard, setBodyCardFailed, deleteBodyCardData} from '../../Redux/actions/bodyCardActions'
import {checkWindowSize} from '../../onResize'
import {useHistory} from 'react-router-dom'

import EditBody from '../Body/Edit-Body'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import PageSelector from '../Body/Page-selector'

const mapStateToProps = state => {
    return {
      requestState: state.bodyCardReducer.requestState,
      verified: state.userReducer.user.verified
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
        setNews: news => dispatch(setBodyCard(news)),
        setNewsFailed: () => dispatch(setBodyCardFailed()),
        deleteNews: () => dispatch(deleteBodyCardData())
      }
  }

const EditorMode = ({match, requestState, setNews, setNewsFailed, deleteNews, location, verified}) => {
    const filter = match.params.filter
    const [pagination, setPagination] = useState({})

    const searchQuery = queryString.parse(location.search)

    const history = useHistory()

    useEffect(() => {
        if(verified){
            deleteNews()
            axios.get(`/my-news/type/${filter}?page=${searchQuery.page ? searchQuery.page : 1}`)
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
                checkWindowSize()
            })
            .catch(err => {
              setNewsFailed()
              checkWindowSize()
            })
        } else{
            history.push("/")
        }
    }, [filter, location.search])

    return(
        <>
            <Header editMode={true}/>

            <EditBody requestState={requestState} filter={filter} header={filter === "News" ? filter : `${filter}s`}/>

            {
              requestState === "Success" &&
                <PageSelector pagination={pagination} url={match.url}/>
            }

            <Footer/>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(EditorMode)