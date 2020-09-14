import React, { useEffect } from 'react';
import './Header.css';
import User from './User/User';
import { Link } from 'react-router-dom';

const Header = () =>{ 
  useEffect(() => {
    /* Cambiar el elemento activo cuando se le hace click */
    var enlaces = document.querySelectorAll('.header .selector a');

    enlaces.forEach(element => {
        
        element.addEventListener('click', (event) =>{
            
            enlaces.forEach(link =>{
                link.classList.remove('active');
            });
            event.target.classList.add('active');
        });
    });
  });

  return(
    <div className="header">
      <nav>
          <div className="logo">  
              <a href="#"><i>Astro-Gaming</i></a>
          </div>

          <div className="back-search">
          <div className="search">
                  <input placeholder="Buscar" spellCheck="false" type="search" />
                  <button className="icon"><i className="fas fa-search"></i></button>
          </div>
          </div>

            <User className="user"/>
            <hr></hr>

            <div className="selector">
              <Link to={`/`} className="active">
                Inicio
              </Link>
              <a href="#">Noticias</a>
              <a href="#">PC</a>
              <a href="#">PS4</a>
              <a href="#">XboxOne</a>
              <a href="#">Switch</a>
              <a href="#">IOS</a>
              <a href="#">Android</a>
              <a href="#">Foros</a>
              <a href="#">Comunidad</a>
          </div>
      </nav>
    </div>
  )

}

export default Header;