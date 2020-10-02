import React from 'react';
import Nav from './Nav/Nav';
import Body from './Body/Body';
import BodyHead from './Body-Head/Body-head';
import Footer from './Footer/Footer';

let page = {
    "anterior": "",
    "primera": "1",
    "segunda": "2",
    "tercera": "3",
    "siguiente": "Siguiente"
}

const Main = () => (
    <div className="App">
        <BodyHead/>

        <Nav/>

        <Body/>

        {/* Selector de pagina */}
        <div className="page-selector">
          <a href="#" className="anterior">{page.anterior}</a>
          <a href="#" className="primera">{page.primera}</a>
          <a href="#" className="segunda">{page.segunda}</a>
          <a href="#" className="tercera">{page.tercera}</a>
          <a href="#" className="siguiente">{page.siguiente}</a>
        </div>

        <Footer/>
    </div>
  )

export default Main;