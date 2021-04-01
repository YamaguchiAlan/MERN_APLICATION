import React, {useEffect} from 'react';
import withLoader from '../HOC-With-Loader/HOC-withLoader';
import { Link } from 'react-router-dom';
import {format} from 'timeago.js'
import {connect} from 'react-redux'
import { deleteBodyCardData} from '../../Redux/actions/bodyCardActions'
import {setHiglightNews} from '../../Redux/actions/higligthsActions'

import instagram from '../../img/instagram.png';
import twitter from '../../img/twitter.png';

const mapStateToProps = state => {
    return { news: state.bodyCardReducer.bodyCard }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteNews: () => dispatch(deleteBodyCardData()),
        setHiglightNews: news => dispatch(setHiglightNews(news))
    }
}

const Body = ({news, deleteNews, editMode, header, selectHiglight, setHiglightNews}) => {
    useEffect(() => {
        const bodyBack = document.getElementById("back-body")

        if(header){
            bodyBack.style.display="flex"
            bodyBack.style.flexDirection="column"
            bodyBack.style.justifyContent="center"
            bodyBack.style.alignItems="center"
        }

        if(selectHiglight){
            const bodyCards = document.querySelectorAll("#back-body .body-card-select-higlight")
            bodyCards.forEach(e => {
                e.style.cursor ="pointer"
            })
        }

        return(() => {
            deleteNews()
            bodyBack.style.display="initial"
            bodyBack.style.flexDirection="initial"
            bodyBack.style.justifyContent="initial"
            bodyBack.style.alignItems="initial"
        })
    },[])

    const selectNews = (props) => {
        if(selectHiglight){
            setHiglightNews(props)
            document.getElementById("select-news").style.display="none"
            document.getElementById("update-higlight-form").style.display="block"
        }
    }

    return(
        <div className="body-container-back ml-3 mr-3 mr-lg-0" id="back-body" style={{transition: "all 0.3s"}}>
        { header && <h2 className="body-header mt-3">{header}</h2> }
        {
        news.map(props =>
            <div className={`row body-back no-gutters h-auto mb-3 ${selectHiglight && "body-card-select-higlight"}`} onClick={() => selectNews(props)}>
                <div className="col-lg-4 col-md-4 body-img-back">
                    <img src={props.defaultImg ? props.defaultImg : `${process.env.REACT_APP_API_URL}/api/news/${props._id}/image`} alt="" className="card-img background-img"/>
                    {
                    editMode || selectHiglight ?
                        <a href="#">
                            <img src={props.defaultImg ? props.defaultImg : `${process.env.REACT_APP_API_URL}/api/news/${props._id}/image`} alt="" className="body-img" id="card-body-img"/>
                        </a>
                    :
                        <Link to={`/article/${props._id}`}>
                            <img src={props.defaultImg ? props.defaultImg : `${process.env.REACT_APP_API_URL}/api/news/${props._id}/image`} alt="" className="body-img" id="card-body-img"/>
                        </Link>
                    }
                </div>
                <div className="col-lg-8 col-md-8">
                    <div className="card text-white body-card">
                        <div className="card-body pb-0 body-card-text">
                            <span className={`body-type ${props.type}`}>{props.type}</span>

                            <span className="card-title font-weight-bold body-title">
                                {editMode || selectHiglight ?
                                    <a href="#">{props.title}</a>
                                :
                                    <Link to={`/article/${props._id}`}>
                                        {props.title}
                                    </Link>
                                }
                            </span>
                            <p className="card-text body-text">{props.text}</p>
                        </div>
                        <div className="card-footer pb-0">
                            <p className="body-author float-left rounded font-weight-bold ">By: {props.author && props.author.username}</p>
                            <p className="body-date float-left rounded font-weight-bold">
                            {
                                props.formatedDate ?
                                    props.formatedDate
                                :
                                    format(props.createdAt)
                            }
                            </p>

                            <div className="social">
                                <a href={props.twitter} className="twitter float-right"><img src={twitter} alt="twitter"/></a>
                                <a href={props.ig} className="ig float-right"><img src={instagram} alt="instagram"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        }
        </div>
    )
}

export default withLoader(connect(mapStateToProps, mapDispatchToProps)(Body));