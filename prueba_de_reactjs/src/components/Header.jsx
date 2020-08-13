import React, {Component} from 'react';
import './Header.css';
import logo from '../img/logo.png';
import User from './User';

class Header extends Component{ 
    render(){
        return(
  <div className="header">
    <nav>
    <div className="menu-bar">
        <i class="fas fa-bars"></i>
      </div>
     <div className="logo">  
        <a href="#"><i>Astro-Gaming</i></a>
     </div>
     <div className="back-search">
     <div className="search">
            <input placeholder="Buscar" spellcheck="false" type="search" />
            <button className="icon"><i className="fas fa-search"></i></button>
     </div>
     </div>
         <User className="user"/>
      <hr></hr>
      <div className="head">
      <a href="#" className="active">Inicio</a>
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

  componentDidMount(){
    var enlaces = document.querySelectorAll('.header .head a');

    enlaces.forEach(element => {
        
        element.addEventListener('click', (event) =>{
            
            enlaces.forEach(link =>{
                link.classList.remove('active');
            });
            event.target.classList.add('active');
        });
    });
  }
}

export default Header;