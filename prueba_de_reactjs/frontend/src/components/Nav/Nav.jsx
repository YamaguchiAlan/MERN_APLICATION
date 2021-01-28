import React, { useEffect, useState } from 'react';
import NavGrid from './Nav-Grid';
import onScrollFunction from '../../onScroll'
import axios from 'axios'

const Nav = () => {
  const [navArr, setNavArr] = useState([]);

  useEffect(()=>{
    onScrollFunction()

    axios.get("/JSON/Nav.json")
    .then(res => setNavArr(res.data))
  },[]);

  return(
    navArr[0] ?
      <>
        <div id="nav-pos"></div>
        <nav id="app-nav" className="float-right border border-danger mr-1 nav-container">
            <h3 className="text-white text-center py-1 font-weight-bold trending">Trending</h3>
            <NavGrid navArr={navArr}/>
        </nav>
      </>
    : null
  )
}

export default Nav;