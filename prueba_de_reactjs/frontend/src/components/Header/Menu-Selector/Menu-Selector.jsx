import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Menu-Selector.css'

const MenuSelector = () => {
    useEffect(() => {
        /* Cambiar el elemento activo cuando se le hace click */
        var enlaces = document.querySelectorAll('.selector a');

        enlaces.forEach(element => {

            element.addEventListener('click', (event) => {

                enlaces.forEach(link => {
                    link.classList.remove('actual');
                });
                event.target.classList.add('actual');
            });
        });
    });

    return (
        <ul className="nav nav-pills nav-justified selector ">
            <li className="nav-item">
                <Link className="nav-link actual" to="/">Inicio</Link>
            </li>
            <li className="nav-item secondary">
                <Link className="nav-link" to="/news">Noticias</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="#">Articulos</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="#">Reseñas</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="#">Foros</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="#">Comunidad</Link>
            </li>
        </ul>
    )
}

export default MenuSelector;