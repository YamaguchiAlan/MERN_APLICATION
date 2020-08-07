import React from 'react';
import './Header.css';

let Header = () =>{
    return(
<div className="back">
    <div className="header">

    <nav>
     <div className="img-head">
        <a href="#"><img src="https://cdn.pixabay.com/photo/2018/09/05/06/19/signal-3655575_960_720.png" alt="logo"></img></a>
     </div>

     <div className="search">
        <form>
            <input type="text" placeholder="Buscar"/>
        </form>
        <i class="fas fa-search"></i>
     </div>

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
      <hr></hr>
    </nav>
    </div>
</div>

    )
}

export default Header;