import React from 'react';
import { Link } from 'react-router-dom';


const NavGrid = ({navArr}) =>(
    <div className="nav-card-container">
    {
        navArr.map( (element, i) =>(
            <div className="card border-0 px-2 nav-card" key={i}>
                <img src={`${process.env.REACT_APP_API_URL}/api/news/${element._id}/image`} alt="Default img" className="card-img nav-img"/>

                <Link to={ `/article/${ element._id }` } className="card-img-overlay d-flex align-items-center nav-text">
                    <span  className="card-text font-weight-bold text-center w-100">
                    { element.title }
                    </span>
                </Link>
            </div>
        ))
    }
    </div>
)

export default NavGrid;