import React from 'react';
import './Header.css';
import SearchBar from '../Search-Bar/Search-Bar'
import User from './User/User';
import MenuSelector from './Menu-Selector/Menu-Selector'

const Header = () =>(
  <div className="header">
    <nav>
        <div className="logo">  
            <a href="/"><i>Astro-Gaming</i></a>
        </div>
        
        <SearchBar/>

        <User/>

        <hr></hr>

        <MenuSelector/>
    </nav>
  </div>
)

export default Header;