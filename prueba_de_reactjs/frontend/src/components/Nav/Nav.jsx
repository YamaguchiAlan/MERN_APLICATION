import React, { useEffect } from 'react';
import NavGrid from './Nav-Grid/Nav-Grid';
import './Nav.css'

const Nav = () => {
  useEffect(()=>{
    /* Posicionando el Nav segun la ubicacion en la pagina */
    let nav = document.getElementById("app-nav");

    window.onscroll= () =>{
      if(document.getElementById("nav-pos")){
        let navPos = document.getElementById("nav-pos").offsetTop;
        let currentPos = window.pageYOffset;
        let footerPos = document.getElementById("foot-limit").offsetTop;
        let footer = document.getElementById("footer").offsetTop;

        /* Al centro de la pagina */
        if(currentPos >= navPos){
          nav.className= " float-right position-fixed mh-100 border border-danger mr-1 nav-container"
          nav.style.top = "0"
          nav.style.right = "0"
        }
        /* Al principio de la pagina */
        else{
          nav.className= " float-right  position-relative mh-100 border border-danger mr-1  nav-container"
          nav.style.top = "0"
        }
        /* Al final de la pagina */
        if(currentPos >= footerPos){
          nav.className= " float-right position-absolute mh-100 border border-danger mr-1 nav-container"
          nav.style.top=`calc( ${ footer }px - 100vh - 10px )`;
        }}
              }
  })

  return(
      //Contenedor del Nav
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