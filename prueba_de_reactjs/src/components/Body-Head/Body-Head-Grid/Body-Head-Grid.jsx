import React from 'react';
import { Link } from 'react-router-dom';
import './Body-head-Grid.css';

const BodyHeadGrid = (props) =>
(
    /* Cada componente tiene ID unico que luego es modificado en App.css */
    <div className={props.class} id="body-head">
    <Link to={ `/article/${props.url}` } className="img-back">
        <img src={props.img} alt="Body-head image"/>
        <p className="title">{props.title}</p>
    </Link>
    </div>
)

export default BodyHeadGrid;