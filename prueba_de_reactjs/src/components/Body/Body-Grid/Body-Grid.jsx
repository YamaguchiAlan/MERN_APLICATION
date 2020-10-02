import React from 'react';
import instagram from '../../../img/instagram.png';
import twitter from '../../../img/twitter.png';
import { Link } from 'react-router-dom';
import './Body-Grid.css';

const BodyGrid = (props) =>(
    <div className="body-back">
        <div className="body-container">

            <div className="body-image">
                <img src={props.img} alt="imagen default"/>
            </div>

            <div className="body-text">
                <Link to={`/article/${props.url}`} id={props.titleId} className="title" >
                    {props.title}
                </Link>
                <p className="text">{props.text}</p>
                <p className="body-author">Por: {props.author}</p> 
                <p className="body-date">{props.date}</p>

                <div className="social">
                    <a href={props.twitter} className="twitter"><img src={twitter} alt="twitter"/></a>
                    <a href={props.ig} className="ig"><img src={instagram} alt="instagram"/></a>
                </div>
            </div>
        </div>
    </div>
)

export default BodyGrid;