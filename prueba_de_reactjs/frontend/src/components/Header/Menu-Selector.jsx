import React from 'react';
import { NavLink } from 'react-router-dom';
import menu from '../../img/table_rows.svg'
import SearchBar from '../Search-Bar/Search-Bar';

import 'bootstrap/dist/js/bootstrap.bundle';

const MenuSelector = ({editMode}) => {
    return (
        editMode ? (
        <div class="dropdown selector">
            <img src={menu} class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" alt="menu"/>
            <div class="dropdown-menu">
                <NavLink className="dropdown-item" activeClassName="actual" exact to="/">
                    Home
                </NavLink>
                <NavLink className="dropdown-item" activeClassName="actual" to="/create-article">
                    Create Article
                </NavLink>
                <div class="dropdown-divider"></div>
                <NavLink className="dropdown-item" activeClassName="actual" to="/edit-articles">
                    Edit Articles
                </NavLink>
                <NavLink className="dropdown-item" activeClassName="actual" to="/edit-news">
                    Edit News
                </NavLink>
                <NavLink className="dropdown-item" activeClassName="actual" to="/edit-reviews">
                    Edit Reviews
                </NavLink>
            </div>
            <SearchBar/>
        </div>
        )
        :
        (
        <div class="dropdown selector">
            <img src={menu} class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" alt="menu"/>
            <div class="dropdown-menu">
                <NavLink className="dropdown-item" activeClassName="actual" exact to="/">
                    Home
                </NavLink>
                <div class="dropdown-divider"></div>
                <NavLink className="dropdown-item" activeClassName="actual" to="/create-article">
                    News
                </NavLink>
                <NavLink className="dropdown-item" activeClassName="actual" to="/create-article">
                    Articles
                </NavLink>
                <NavLink className="dropdown-item" activeClassName="actual" to="/create-article">
                    Reviews
                </NavLink>
                <NavLink className="dropdown-item" activeClassName="actual" to="/create-article">
                    Most Viewed
                </NavLink>
            </div>
            <SearchBar/>
        </div>
        )
    )
}

export default MenuSelector;