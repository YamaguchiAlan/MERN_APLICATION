import React, {Component} from 'react';
import './Header.css';
import logo from '../img/logo.png';
import User from './User';

class Header extends Component{
    render(){
        return(
  <div className="header">
    <nav>
     <div className="img-head">  
        <a href="#"><img src={logo} alt="logo"></img></a>
     </div>
     <div className="search">
        <form>
            <input type="text" placeholder="Buscar"/>
        </form>
        <i class="fas fa-search"></i>
     </div>
     <div className="user">
         <User/>
     </div>
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