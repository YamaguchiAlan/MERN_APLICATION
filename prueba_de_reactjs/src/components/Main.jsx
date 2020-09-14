import React, { useEffect } from 'react';
import Nav from './Nav/Nav';
import Body from './Body/Body';
import BodyHead from './Body/Body-Head/Body-head';
import Footer from './Footer/Footer';

const bodyArr =[{
  "img":"https://depor.com/resizer/az8pLMm5SRkujv8aKsh_q6tezVc=/580x330/smart/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/MMZVLW64LJHTNHAUGVVHIJNHP4.jpg",
  "title": "Comparten malas noticias sobre el precio que tendra PS5",
  "text": "PlayStation 5 llegará a nuestras manos a finales de año. Sin embargo, por el momento sigue siendo un gran misterio cuándo exactamente sucederá esto, y el precio de la consola.",
  "url": "ps5-malas-noticias-sobre-el-precio",
  "date": "Hace 1 día",
  "autor": "Roberto Quiroga",
  "id": "title-0"
},
{ "img":"https://i11b.3djuegos.com/juegos/15329//fotos/noticias/-5223949.jpg",
"title": "Spelunky 2 presenta nuevo video con gameplay y anuncia su fecha de lanzamiento",
"text": "Derek Yu agradece la paciencia de los seguidores de la serie y ofrece un nuevo vistazo al gameplay del título.",
"url": "spelunky-2-nuevo-video-gameplay-fecha-de-lanzamiento",
"date": "Hace 2 días",
"autor": "Borja Pavon",
"id": "title-1"
},
{ "img":"https://i11a.3djuegos.com/juegos/17478/hood_outlaws_and_legends/fotos/noticias/hood_outlaws_and_legends-5223940.jpg",
"title": "Anunciado Hood: Outlaws and Legends para PS5, un juego de sigilo de nueva generación",
"text": "Home Interactive y Sumo Newcastle presentan el primer tráiler del juego, que incluye un espectacular gameplay.",
"url": "anunciado-hood-outlaws-and-legends-ps5",
"date": "Hace 2 días",
"autor": "Federico Rodriguez",
"id": "title-2"
},
{ "img":"https://i11a.3djuegos.com/juegos/17367/hitman_3/fotos/noticias/hitman_3-5223824.jpg",
"title": "Hitman 3 apostará por ofrecer una experiencia VR en consolas PlayStation",
"text": "Los chicos de IO Interactive han sido uno de los primeros protagonistas del evento State of Play organizado por Sony, y lo han hecho con nueva información de su esperado Hitman 3.",
"url": "hitman-3-experiencia-VR-playstation",
"date": "Hace 3 días",
"autor": "Roberto Quiroga",
"id": "title-3"
},
{ "img":"https://i11b.3djuegos.com/juegos/11552/god_of_war_ps4__nombre_temporal_/fotos/noticias/god_of_war_ps4__nombre_temporal_-5223809.jpg",
"title": "El director de God of War habla de PS5 y la tecnología en la nueva generación",
"text": "La estrategia comercial de Sony y la de Microsoft es la de no mostrar las cartas hasta la última jugada, y eso hace que cualquier pequeño detalle sea más grande.",
"url": "director-de-god-of-war-ps5",
"date": "Hace 3 días",
"autor": "Valentin Acuña",
"id": "title-4"
},
{ "img":"https://i11c.3djuegos.com/juegos/16414/apex_legends/fotos/noticias/apex_legends-5223762.jpg",
"title": "La Temporada 6 de Apex Legends llegará en unos días con nuevas armas y personajes",
"text": "EA y Respawn ya han anunciado todos los detalles de la Temporada 6 de Apex Legends, el battle royale que llegó para quedarse y para conseguir un sitio entre los más grandes del género.",
"url": "apex-temporada-6",
"date": "Hace 4 días",
"autor": "Federico Rodriguez",
"id": "title-5"
},
{ "img":"https://i11c.3djuegos.com/juegos/11182/dishonored_2/fotos/noticias/dishonored_2-5224782.jpg",
"title": "Dishonored 2, Prey y otros juegazos reunidos en un pack para celebrar los 20 años de Arkane Studios",
"text": "En Xbox y PC se puede comprar con un gran descuento de precio, pero solo por tiempo limitado.",
"url": "pack-arkane-20-años",
"date": "Hace 4 días",
"autor": "Gustavo Fernandez",
"id": "title-6"
},
{"img":"https://i11a.3djuegos.com/juegos/8298/fortnite/fotos/noticias/fortnite-5229588.jpg",
"title": "Fortnite anuncia nuevas skins de DC Comics: Joker, Hiedra Venenosa y Rey Midas llegarán al juego",
"text":"Los rumores de las últimas horas se han hecho realidad, tras la confirmación de Epic Games",
"url": "fornite-nuevas-skins-DC-comics",
"date": "Hace 4 días",
"autor": "Federico Rodriguez",
"id":"title-7"
}
]

const BodyHeadArr =[
  {
    "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJX430FKCYaGMEmTXVUUk_PoGwR_V_ZoQskg&usqp=CAU",
    "title":"Dead Cells para Android ya se puede descargar",
    "class":"body-head-1-small",
    "url": "dead-cells-para-android"
  },
{"img":"https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/668x300/public/media/image/2020/07/juegos-ps-plus-agosto-embargo-2010675.jpg?itok=wy7YYfvC",
"title":"PS PLUS: ¡llévate 3 juegos en agosto para celebrar su 10º aniversario!",
"class":"body-head-2-large",
"url": "PS-plus-10-aniversario"
},
{
  "img":"https://vns9.3djuegos.com/videos/mp4/skins/82_cross/300x600.jpg",
  "title":"",
  "class":"body-head-3-advertising",
  "url": ""
},
{
  "img":"https://i11a.3djuegos.com/juegos/15953/doom_eternal/fotos/noticias/doom_eternal-5223620.jpg",
  "title":"Doom Eternal y TESO online llegarán a la nueva generación",
  "class":"body-head-4",
  "url": "doom-eternal-y-teso-en-nueva-generacion"
  },
  {
    "img":"https://www.tuplaystation.es/wp-content/uploads/2020/05/img_mbrugat_20200430-154122_imagenes_lv_terceros_assassins-creed-valhalla-1930577-kw0F-U48847980182HqB-992x558@LaVanguardia-Web-380x240.jpg",
    "title":"Assassin's Creed Valhalla nos muestra un tráiler con la BSO",
    "class":"body-head-5",
    "url": "assassins-creed-valhalla-trailer-BSO"
  },
  {
    "img":"https://vns9.3djuegos.com/videos/mp4/skins/82_cross/300x600.jpg",
    "title":"",
    "class":"body-head-6-white-space",
    "url": ""
  }
] 

let page = {
    "anterior": "",
    "primera": "1",
    "segunda": "2",
    "tercera": "3",
    "siguiente": "Siguiente"
}

/* Comprobando si hay algun titulo muy largo */
let length = bodyArr.map( element => {
  if(element.title.length > 85){
      return element.id
  } 
});

const Main = () => {

    useEffect( () =>{
      /* Filtrando los valores Null del arreglo */
      let title = length.filter(c => {
        if(c != null){
          return c;
        }
      } )
    
      /* Aplicando una fuente mas pequeña */
      title.forEach( c => document.getElementById(c).style.fontSize="35px" );

    });

    return(
      <div className="App">
          {/* Header del body */}
          <div className="body-head">
              {BodyHeadArr.map( c => 
                <BodyHead img={c.img} 
                  title={c.title} 
                  class={c.class} 
                  url={c.url} 
                /> )}
          </div>

          {/* Contenedor del Nav */}
          <div id="nav-pos"></div>
          <nav id="app-nav" className="app-nav">
              <span className="trending">Trending</span>
              <Nav /> 
          </nav>

          {/* Imprimiendo todos los elementos del body */}
          {bodyArr.map(c => 
            <Body img={c.img}
              title={c.title}
              text={c.text}
              url={c.url}
              date={c.date}
              author={c.autor}
              id={c.id}
            />)}

          {/* Selector de pagina */}
          <div className="page-selector">
            <a href="#" className="anterior">{page.anterior}</a>
            <a href="#" className="primera">{page.primera}</a>
            <a href="#" className="segunda">{page.segunda}</a>
            <a href="#" className="tercera">{page.tercera}</a>
            <a href="#" className="siguiente">{page.siguiente}</a>
          </div>

            <Footer/>
          <div id="foot-limit"> </div>

      </div>
    )
}

export default Main;