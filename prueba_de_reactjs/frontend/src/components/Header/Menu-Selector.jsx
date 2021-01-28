import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import menu from '../../img/table_rows.svg'
import SearchBar from '../Search-Bar/Search-Bar';

import 'bootstrap/dist/js/bootstrap.bundle';


const MenuSelector = ({editMode}) => {
    useEffect(() => {
        // Cambiar el elemento activo cuando se le hace click
        var enlaces = document.querySelectorAll('.selector .dropdown-menu a');

        enlaces.forEach(element => {

            element.addEventListener('click', (event) => {

                enlaces.forEach(link => {
                    link.classList.remove('actual');
                });
                event.target.classList.add('actual');
            });
        });
    });

    return (
        editMode ? (
        <div class="dropdown selector">
            <img src={menu} class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" alt="menu"/>
            <div class="dropdown-menu">
                <Link className="dropdown-item" to="/">Home</Link>
                <Link className="dropdown-item" to="/create-article">Create Article</Link>
                <div class="dropdown-divider"></div>
                <Link className="dropdown-item" to="/edit-news">Edit Articles</Link>
                <Link className="dropdown-item" to="/">Edit News</Link>
                <Link className="dropdown-item" to="/">Edit Reviews</Link>
            </div>
            <SearchBar/>
        </div>
        )
        :
        (
        <div class="dropdown selector">
            <img src={menu} class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" alt="menu"/>
            <div class="dropdown-menu">
                <Link className="dropdown-item" to="/">Home</Link>
                <div class="dropdown-divider"></div>
                <Link className="dropdown-item" to="/create-article">News</Link>
                <Link className="dropdown-item" to="/create-article">Articles</Link>
                <Link className="dropdown-item" to="/create-article">Reviews</Link>
                <Link className="dropdown-item" to="/create-article">Most Viewed</Link>
            </div>
            <SearchBar/>
        </div>
        )
    )
}

export default MenuSelector;