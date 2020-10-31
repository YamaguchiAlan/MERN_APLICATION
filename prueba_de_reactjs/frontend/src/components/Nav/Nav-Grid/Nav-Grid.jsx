import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav-Grid.css';

const NavGrid = () =>{
    useEffect(()=>{
        fetch("/JSON/Nav.json", {method: 'GET'})
        .then(response => response.json())
        .then(data => setNavArr(data))
    },[]);

    const [navArr, setNavArr] = useState([]);
    
    return(     
        navArr.map( (element, i) =>(
            <div className="Nav" key={i}>
                <img src={ element.img } alt="Default img" className="nav-img"/>

                <div className="text">
                    <Link to={ `/article/${ element.articleId }` }>
                    { element.title }
                    </Link>    
                </div>
            </div>
        ))
    )
}

export default NavGrid;