import React from 'react';
import withLoader from '../HOC-With-Loader/HOC-withLoader';
import instagram from '../../img/instagram.png';
import twitter from '../../img/twitter.png';
import { Link } from 'react-router-dom';
import {format} from 'timeago.js'
import './Body.css';

const Body = ({news}) => (
    news.map(props =>
      <div className="row no-gutters w-75 h-auto mb-3 ml-md-3">
        <div className="col-md-4 body-img-back">
            <img src={props._id ? `http://localhost:4000/api/${props._id}/news-img` : props.image} alt="" className="card-img background-img"/>
            <img src={props._id ? `http://localhost:4000/api/${props._id}/news-img` : props.image} alt="" className="body-img"/>
        </div>
        <div className="col-md-8">
            <div className="card text-white body-card">
                <div className="card-body pb-0 body-card-text">
                    <h2 className="card-title font-weight-bold body-title">
                        <Link to={`/article/${props.title}`}>
                            {props.title}
                        </Link>
                    </h2>
                    <p className="card-text body-text">{props.text}</p>
                </div>
                <div className="card-footer pb-0">
                    <p className="body-author float-left rounded font-weight-bold ">Por: {props.author}</p>
                    <p className="body-date float-left rounded font-weight-bold">{format(props.createdAt, 'es_ES')}</p>

                    <div className="social">
                        <a href={props.twitter} className="twitter float-right"><img src={twitter} alt="twitter"/></a>
                        <a href={props.ig} className="ig float-right"><img src={instagram} alt="instagram"/></a>
                    </div>
                </div>
            </div>
        </div>
      </div>)
    )

export default withLoader(Body, "news", "body-back");