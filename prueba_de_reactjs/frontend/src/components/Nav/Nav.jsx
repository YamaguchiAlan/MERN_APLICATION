import React, { useEffect } from 'react';
import NavGrid from './Nav-Grid';

const Nav = () => {
  useEffect(()=>{
    /* Posicionando el Nav segun la ubicacion en la pagina */
    let nav = document.getElementById("app-nav");

    window.onscroll = () => {
      if(document.getElementById('nav-pos')){
        let navPos = document.getElementById('nav-pos');
        let currentPos = window.pageYOffset;

        let limit = 0;
        if(document.getElementById("comments")) {
          limit = document.getElementById('comments')
          let articleBody = document.getElementById('article-body').offsetHeight

          nav.style.height=`${limit.offsetHeight + articleBody - 10}px`
        } else {
          if(document.getElementById('article-body')) {
            limit = document.getElementById('article-body')

            nav.style.height = `${limit.offsetHeight - 10}px`
          }
        }
        if(document.getElementById('body')) {
          limit = document.getElementById('body')

          nav.style.height = `${limit.offsetHeight - 10}px`
        }


        //Al centro de la pagina
        if(currentPos >= navPos.offsetTop){
          nav.className= " float-right position-fixed mh-100 border border-danger mr-1 nav-container"
          nav.style.top = "0"
          nav.style.right = "0"
        }
        // Al principio de la pagina
        else{
          nav.className= " float-right  position-relative mh-100 border border-danger mr-1  nav-container"
          nav.style.top = "0"
          nav.style.right="0"
        }
        // Al final de la pagina
        if(currentPos >= limit.offsetTop + limit.offsetHeight - getComputedStyle(navPos).height.slice(0, -2) - 10){
          nav.className= " float-right position-absolute mh-100 border border-danger mr-1 nav-container"
          nav.style.top=`calc(${(limit.offsetTop + limit.offsetHeight) - getComputedStyle(nav).height.slice(0, -2)}px - 10px)`;
          nav.style.right="0"
        }
      }
    }
  },[])

  return(
      <>
          <div id="nav-pos"></div>
          <nav id="app-nav" className="float-right border border-danger mr-1 nav-container">
              <h3 className="text-white text-center py-1 font-weight-bold trending">Trending</h3>
              <NavGrid />
          </nav>
      </>
  )
}

export default Nav;