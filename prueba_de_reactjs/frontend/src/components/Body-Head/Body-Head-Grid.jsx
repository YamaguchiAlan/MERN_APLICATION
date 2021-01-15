import React from 'react';
import { Link } from 'react-router-dom';

const BodyHeadGrid = (props) =>
(
    /* Cada componente tiene clase unica que luego es modificado en css */
    <div className={props.className} id="body-head-grid">
    <Link to={ `/article/${props.title}` } className="img-back">
        <img src={props.image} alt="Body-head-img"/>
        <p className="title">{props.title}</p>
    </Link>
    </div>
)

export default BodyHeadGrid;