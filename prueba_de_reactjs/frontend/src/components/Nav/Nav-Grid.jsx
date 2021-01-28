import React from 'react';
import { Link } from 'react-router-dom';


const NavGrid = ({navArr}) =>(
    navArr.map( (element, i) =>(
        <div className="card border-0 px-2 nav-card" key={i}>
            <img src={ element.img } alt="Default img" className="card-img nav-img"/>

            <div className="card-img-overlay d-flex align-items-center nav-text">
                <Link to={ `/article/${ element.title }` } className="card-text font-weight-bold text-center">
                { element.title }
                </Link>
            </div>
        </div>
    ))
)

export default NavGrid;