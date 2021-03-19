import React, { useEffect } from 'react';
import withLoader from '../HOC-With-Loader/HOC-withLoader';
import { Link } from 'react-router-dom';
import {format} from 'timeago.js'
import axios from 'axios'
import {connect} from 'react-redux'
import {checkWindowSize} from '../../onResize'
import { deleteBodyCardData, setBodyCard, setBodyCardFailed} from '../../Redux/actions/bodyCardActions'

import instagram from '../../img/instagram.png';
import twitter from '../../img/twitter.png';
import edit from '../../img/edit.svg';
import remove from '../../img/trash-2.svg'

const mapStateToProps = state => {
    return { news: state.bodyCardReducer.bodyCard }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteNews: () => dispatch(deleteBodyCardData()),
        setNews: news => dispatch(setBodyCard(news)),
        setNewsFailed: () => dispatch(setBodyCardFailed())
    }
}

const EditBody = ({news, deleteNews, setNews, setNewsFailed, header}) => {
    useEffect(() => {
        const bodyBack = document.getElementById("back-body")

        bodyBack.style.display="flex"
        bodyBack.style.flexDirection="column"
        bodyBack.style.justifyContent="center"
        bodyBack.style.alignItems="center"

        return(() => {
            deleteNews()
            bodyBack.style.display="initial"
            bodyBack.style.flexDirection="initial"
            bodyBack.style.justifyContent="initial"
            bodyBack.style.alignItems="initial"
        })
    },[])

    const onRemoveClick = (id) => {
        axios.delete(`/news/${id}`)
        .then(res => {
            if(res.data.success){
                const filterNews = news.filter(e => e._id !== id)
                if(filterNews[0]){
                    setNews(filterNews)
                    checkWindowSize()
                }else{
                    deleteNews()
                    setNewsFailed()
                    checkWindowSize()
                }
            }
        })
    }

    return(
        <div className="body-container-back  ml-md-3" id="back-body" style={{transition: "all 0.3s"}}>
            <h2 className="body-header w-75 mt-3">Edit {header}</h2>
            {news.map(props =>
                <div className="row no-gutters w-75 h-auto mb-3">
                    <div className="col-md-4 body-img-back">
                        <img src={`${process.env.REACT_APP_API_URL}/api/news/${props._id}/image`} alt="" className="card-img background-img"/>
                        <Link to={`/update-article/${props._id}`} >
                            <img src={`${process.env.REACT_APP_API_URL}/api/news/${props._id}/image`} alt="" className="body-img"/>
                        </Link>
                    </div>
                    <div className="col-md-8">
                        <div className="card text-white body-card">
                            <div className="card-body pb-0 body-card-text">
                                <div className="d-flex justify-content-between card-body-edit pb-2">
                                    <div className="d-flex align-items-end">
                                        <Link to={`/edit-articles/update/${props._id}`} >
                                            <img src={edit} alt="Editar"/>
                                        </Link>
                                        <div className="span-container">
                                            <span>Edit</span>
                                        </div>
                                    </div>
                                    <div className="remove-div">
                                        <img src={remove} alt="Remover" onClick={() => onRemoveClick(props._id)}/>
                                        <div className="span-container">
                                            <span>Remove</span>
                                        </div>
                                    </div>
                                </div>
                                <h2 className="card-title font-weight-bold body-title">
                                    <Link to={`/article/${props._id}`}>
                                        {props.title}
                                    </Link>
                                </h2>
                                <p className="card-text body-text">{props.text}</p>
                            </div>
                            <div className="card-footer pb-0">
                                <p className="body-author float-left rounded font-weight-bold ">By: {props.author.username}</p>
                                <p className="body-date float-left rounded font-weight-bold">{format(props.createdAt, 'es_ES')}</p>

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

export default withLoader(connect(mapStateToProps, mapDispatchToProps)(EditBody));