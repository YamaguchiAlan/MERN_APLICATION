import React, {useEffect} from 'react';
import withLoader from '../HOC-With-Loader/HOC-withLoader';
import { Link } from 'react-router-dom';
import {format} from 'timeago.js'
import {connect} from 'react-redux'
import { deleteBodyCardData} from '../../Redux/actions/bodyCardActions'

import instagram from '../../img/instagram.png';
import twitter from '../../img/twitter.png';

const mapStateToProps = state => {
    return { news: state.bodyCardReducer.bodyCard }
}

const mapDispatchToProps = dispatch => {
    return { deleteNews: () => dispatch(deleteBodyCardData()) }
}

const Body = ({news, deleteNews, editMode, fullWidth}) => {
    useEffect(() => {
        const bodyBack = document.getElementById("back-body")
        if(fullWidth){
            bodyBack.style.display="flex"
            bodyBack.style.width="100%"
            bodyBack.style.flexDirection="column"
            bodyBack.style.justifyContent="center"
            bodyBack.style.justifyContent="center"
            bodyBack.style.alignItems="center"
        }
        return(() => {
            deleteNews()
            bodyBack.style.display="initial"
            bodyBack.style.width="initial"
            bodyBack.style.flexDirection="initial"
            bodyBack.style.justifyContent="initial"
            bodyBack.style.justifyContent="initial"
            bodyBack.style.alignItems="initial"
        })
    },[])

    return(
        <div className="body-container-back  ml-md-3" id="back-body" style={{transition: "all 0.3s"}}>
        <h2 className="body-header w-75 ">The lastest articles</h2>
        {
        news.map(props =>
            <div className="row no-gutters w-75 h-auto mb-3">
                <div className="col-md-4 body-img-back">
                    <img src={props.defaultImg ? props.defaultImg : `http://localhost:4000/api/news-img/${props._id}`} alt="" className="card-img background-img"/>
                    {
                    editMode ?
                        <a href="#">
                            <img src={props.defaultImg ? props.defaultImg : `http://localhost:4000/api/news-img/${props._id}`} alt="" className="body-img" id="card-body-img"/>
                        </a>
                    :
                        <Link to={`/article/${props._id}`}>
                            <img src={props.defaultImg ? props.defaultImg : `http://localhost:4000/api/news-img/${props._id}`} alt="" className="body-img" id="card-body-img"/>
                        </Link>
                    }
                </div>
                <div className="col-md-8">
                    <div className="card text-white body-card">
                        <div className="card-body pb-0 body-card-text">
                            <h2 className="card-title font-weight-bold body-title">
                                {editMode ?
                                    <a href="#">{props.title}</a>
                                :
                                    <Link to={`/article/${props._id}`}>
                                        {props.title}
                                    </Link>
                                }
                            </h2>
                            <p className="card-text body-text">{props.text}</p>
                        </div>
                        <div className="card-footer pb-0">
                            <p className="body-author float-left rounded font-weight-bold ">Por: {props.author && props.author.username}</p>
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

export default withLoader(connect(mapStateToProps, mapDispatchToProps)(Body), "body-back");