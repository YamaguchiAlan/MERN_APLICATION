import React, {useEffect, useState} from 'react';
import BodyGrid from './Body-Grid/Body-Grid';

const Body = () => {
    useEffect(() => {
      fetch("/JSON/Body.json", {method: 'GET'})
      .then(response => response.json())
      .then(data => setNews(data))

      /* Comprobando si hay algun titulo muy largo */
      let length = News.map( element => {
        if(element.title.length > 85){
            return element.titleId
        } 
      });

      /* Filtrando los valores Null del arreglo */
      let title = length.filter(c => {
        if(c != null){
          return c;
        }
      } )
    
      /* Aplicando una fuente mas pequeña */
      title.forEach( c => document.getElementById(c).style.fontSize="35px" );
    });

    const [News, setNews] = useState([]);

    return(
        News.map(c => 
            <BodyGrid img={c.img}
              title={c.title}
              text={c.text}
              url={c.url}
              date={c.date}
              author={c.autor}
              titleId={c.titleId}
            />)
    )
}

export default Body;