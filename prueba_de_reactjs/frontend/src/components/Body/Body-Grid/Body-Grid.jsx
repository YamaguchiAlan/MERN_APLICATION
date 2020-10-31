import React from 'react';
import instagram from '../../../img/instagram.png';
import twitter from '../../../img/twitter.png';
import { Link } from 'react-router-dom';
import {format} from 'timeago.js'
import './Body-Grid.css';

const BodyGrid = (props) =>(

    <div className="body-back">
        <div className="body-container">

            <div className="body-image">
                <img src={`http://localhost:4000/api/${props.id}/news-img`} alt="imagen default"/>
            </div>

            <div className="body-text">
                <Link to={`/article/${props.title}`}  className="title" >
                    {props.title}
                </Link>
                <p className="text">{props.text}</p>
                <p className="body-author">Por: {props.author}</p> 
                <p className="body-date">{format(props.date, 'es_ES')}</p>

                <div className="social">
                    <a href={props.twitter} className="twitter"><img src={twitter} alt="twitter"/></a>
                    <a href={props.ig} className="ig"><img src={instagram} alt="instagram"/></a>
                </div>
            </div>
        </div>
    </div>
)

export default BodyGrid;