import React, {useEffect, useState} from 'react'
import axios from 'axios'
import queryString from 'query-string'
import {connect} from 'react-redux'
import {setBodyCard, setBodyCardFailed, deleteBodyCardData} from '../../../Redux/actions/bodyCardActions'

import Body from '../../Body/Body'
import PageSelector from '../../Body/Page-selector'

const mapStateToProps = state => {
    return { requestState: state.bodyCardReducer.requestState }
  }

  const mapDispatchToProps = dispatch => {
    return {
        setNews: news => dispatch(setBodyCard(news)),
        setNewsFailed: () => dispatch(setBodyCardFailed()),
        deleteAllNewsData: () => dispatch(deleteBodyCardData())
      }
  }

const SelectNews = ({requestState, setNews, setNewsFailed, deleteAllNewsData, location, match}) => {
    const [filter, setFilter] = useState("Article")
    const [pagination, setPagination] = useState({})

    const searchQuery = queryString.parse(location.search)

    useEffect(() => {
        deleteAllNewsData()
        axios.get(`/news/type/${filter}?page=${searchQuery.page ? searchQuery.page : 1}`)
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

      },[filter, location.search]);

    const typeBtnClick = (e) => {
      const actives = document.querySelectorAll("#select-news .card-header .btn-group button.active")
      actives.forEach(btn => {
          btn.classList.remove("active")
      })

      e.target.classList.add("active")

      setFilter(e.target.innerHTML)
    }

    const backBtnClick = () => {
      document.getElementById("update-higlight-form").style.display="block"
      document.getElementById("select-news").style.display="none"
    }

    return(
        <div className="card bg-none" id="select-news" style={{background: "rgb(0,0,0,0)"}}>
            <div className="card-header d-flex ml-md-3 justify-content-center flex-row">
                <i class="fas fa-chevron-left" id="select-news-back-btn" onClick={backBtnClick}></i>

                <div className="btn-group w-75 ">
                  <button className="btn btn-outline-info active py-2" onClick={typeBtnClick} style={{fontSize: "1.2rem"}}>
                      Article
                  </button>
                  <button className="btn btn-outline-info py-2" onClick={typeBtnClick} style={{fontSize: "1.2rem"}}>
                      News
                  </button>
                  <button className="btn btn-outline-info py-2" onClick={typeBtnClick} style={{fontSize: "1.2rem"}}>
                      Review
                  </button>
                </div>
            </div>
            <div className="card-body px-0">
              <Body requestState={requestState} filter={filter} header={`Select the ${filter}`}  selectHiglight={true}/>

              {
                requestState === "Success" &&
                  <PageSelector pagination={pagination} url={match.url}/>
              }

            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectNews)