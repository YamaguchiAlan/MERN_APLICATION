import React from 'react';
import { Link } from 'react-router-dom'
import SearchBar from '../Search-Bar/Search-Bar'
import User from './User';
import MenuSelector from './Menu-Selector'

const Header = ({editMode}) =>(
    <nav className="navbar justify-content-around" id="header">
      <MenuSelector editMode={editMode}/>

      <SearchBar/>

      <Link className="logo" to="/"><i>Astro-Gaming</i></Link>

      <User/>

      <hr></hr>

    </nav>
)

export default Header;