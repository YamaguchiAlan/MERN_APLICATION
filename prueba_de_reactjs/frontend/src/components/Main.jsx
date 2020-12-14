import React, {useState, useEffect} from 'react';
import Header from './Header/Header'
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

const Main = () => {
  useEffect(() => {
    fetch("http://localhost:4000/api/news", {method: 'GET'})
    .then(response => response.json())
    .then(data => setNews(data))
  },[]);

  const [News, setNews] = useState([]);

  return(
      <>
          <Header />

          <BodyHead/>

          <Nav/>

          <div id="body">
            <Body news={News} />
          </div>

          {/* Selector de pagina */}
          <div className="page-selector">
            <a href="/" className="anterior">{page.anterior}</a>
            <a href="/" className="primera">{page.primera}</a>
            <a href="/" className="segunda">{page.segunda}</a>
            <a href="/" className="tercera">{page.tercera}</a>
            <a href="/" className="siguiente">{page.siguiente}</a>
          </div>

          <Footer/>
      </>
    )
}

export default Main;