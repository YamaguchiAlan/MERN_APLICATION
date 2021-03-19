import React, { useEffect, useState } from 'react';
import NavGrid from './Nav-Grid';
import {scrollFunc} from '../../onScroll'
import {Queries} from '../../Media-Queries'
import axios from 'axios'

const Nav = () => {
  const [navArr, setNavArr] = useState([]);

  useEffect(()=>{
    axios.get("/news?filter=trending")
    .then(res => {
        setNavArr(res.data)
        scrollFunc()
      }
    )
    scrollFunc()
    Queries()
  },[]);

  return(
      <>
        <div id="nav-pos"></div>
        <nav id="app-nav" className={`${navArr[0] && "border border-danger mr-1 nav-container"}`}>
            {
              navArr[0] &&
<>
              <h3 className="text-white w-100 text-center py-1 font-weight-bold trending">Trending</h3>

                  <NavGrid navArr={navArr}/>

                </>
            }
        </nav>
      </>
  )
}

export default Nav;