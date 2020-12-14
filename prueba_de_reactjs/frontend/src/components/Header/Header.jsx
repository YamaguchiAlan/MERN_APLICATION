import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'
import SearchBar from '../Search-Bar/Search-Bar'
import User from './User/User';
import MenuSelector from './Menu-Selector/Menu-Selector'

const Header = ({editMode}) =>(
    <nav className="navbar justify-content-around" id="header">
      <Link className="logo" to="/"><i>Astro-Gaming</i></Link>

      <SearchBar/>

      <User/>

      <hr></hr>

      <MenuSelector editMode={editMode}/>

    </nav>
)

export default Header;