import React from 'react';
import { Link } from 'react-router-dom'
import User from './User';
import MenuSelector from './Menu-Selector'

const Header = ({editMode}) =>(
    <nav className="navbar" id="header">
      <MenuSelector editMode={editMode}/>

      <Link className="logo" to="/"><i>Astro-Gaming</i></Link>

      <User/>

      <hr></hr>

    </nav>
)

export default Header;