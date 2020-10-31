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
        nav.style.position="fixed";
        nav.style.top="0";
        }
        /* Al principio de la pagina */
        else{
        nav.style.position="relative";
        nav.style.top="0";
        }
        /* Al final de la pagina */
        if(currentPos >= footerPos){
        nav.style.position="absolute";
        nav.style.top=`calc( ${ footer }px - 100vh - 10px )`;
        }}
              }
  })

  return(     
      //Contenedor del Nav
      <>
          <div id="nav-pos"></div>
          <nav id="app-nav" className="app-nav">
              <span className="trending">Trending</span>
              <NavGrid /> 
          </nav>
      </>
  )
}

export default Nav;