import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import menu from '../../img/table_rows.svg'
import SearchBar from '../Search-Bar/Search-Bar';

const MenuSelector = ({editMode}) => {
    useEffect(() => {
        // Cambiar el elemento activo cuando se le hace click
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
        editMode ? (
            <ul className="nav nav-pills nav-justified selector ">
                <li className="nav-item">
                    <Link className="nav-link" to="/create-article">Crear Articulo</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link actual" to="/edit-news">Editar Noticias</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/">Editar Articulos</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/">Editar Reseñas</Link>
                </li>
            </ul>
        )
        :
        (
        <div class="dropdown selector d-flex">
            <img src={menu} class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" alt="menu"/>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="/">Action</a>
                <a class="dropdown-item" href="/">Another action</a>
                <a class="dropdown-item" href="/">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/">Separated link</a>
            </div>
            <SearchBar/>
        </div>
        )
    )
}

export default MenuSelector;