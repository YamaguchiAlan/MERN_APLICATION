import React, {useEffect} from 'react';
import { Link } from 'react-router-dom'
import onScrollFunction from '../../onScroll'
import User from './User';
import MenuSelector from './Menu-Selector'

const Header = ({editMode}) =>{
  useEffect(() => {
    onScrollFunction()
  }, [])

  return(
    <nav className="navbar" id="header">
      <MenuSelector editMode={editMode}/>

      <Link className="logo" to="/"><i>Astro-Gaming</i></Link>

      <User editMode={editMode}/>

      <hr></hr>

    </nav>
  )
}

export default Header;