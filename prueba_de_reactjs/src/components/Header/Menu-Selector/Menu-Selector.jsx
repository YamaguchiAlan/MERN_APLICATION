import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Menu-Selector.css'

const MenuSelector = () =>{
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
    <div className="selector">
        <Link to={`/`} className="active">
            Inicio
        </Link>
        <Link to={`/news`}>
            Noticias
        </Link>
        <a href="#">PC</a>
        <a href="#">PS4</a>
        <a href="#">XboxOne</a>
        <a href="#">Switch</a>
        <a href="#">IOS</a>
        <a href="#">Android</a>
        <a href="#">Foros</a>
        <a href="#">Comunidad</a>
    </div>
)
}

export default MenuSelector;