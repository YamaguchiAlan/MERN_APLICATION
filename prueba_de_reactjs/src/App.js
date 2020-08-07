import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import BodyHead from './components/Body-head';

const bodyHead =[{
  "img":"https://depor.com/resizer/az8pLMm5SRkujv8aKsh_q6tezVc=/580x330/smart/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/MMZVLW64LJHTNHAUGVVHIJNHP4.jpg",
  "title": "Comparten malas noticias sobre el precio que tendra PS5",
  "text": "PlayStation 5 llegará a nuestras manos a finales de año. Sin embargo, por el momento sigue siendo un gran misterio cuándo exactamente sucederá esto, y el precio de la consola.",
  "url": "#",
  "date": "Hace 1 día",
  "autor": "Roberto Quiroga"
},
{ "img":"https://i11b.3djuegos.com/juegos/15329//fotos/noticias/-5223949.jpg",
"title": "Spelunky 2 presenta nuevo video con gameplay y anuncia su fecha de lanzamiento",
"text": "Derek Yu agradece la paciencia de los seguidores de la serie y ofrece un nuevo vistazo al gameplay del título.",
"url": "#",
"date": "Hace 2 días",
"autor": "Borja Pavon"
},
{ "img":"https://i11a.3djuegos.com/juegos/17478/hood_outlaws_and_legends/fotos/noticias/hood_outlaws_and_legends-5223940.jpg",
"title": "Anunciado Hood: Outlaws and Legends para PS5, un juego de sigilo de nueva generación",
"text": "Home Interactive y Sumo Newcastle presentan el primer tráiler del juego, que incluye un espectacular gameplay.",
"url": "#",
"date": "Hace 2 días",
"autor": "Federico Rodriguez"
},
{ "img":"https://i11a.3djuegos.com/juegos/17367/hitman_3/fotos/noticias/hitman_3-5223824.jpg",
"title": "Hitman 3 apostará por ofrecer una experiencia VR en consolas PlayStation",
"text": "Los chicos de IO Interactive han sido uno de los primeros protagonistas del evento State of Play organizado por Sony, y lo han hecho con nueva información de su esperado Hitman 3.",
"url": "#",
"date": "Hace 3 días",
"autor": "Roberto Quiroga"
},
{ "img":"https://i11b.3djuegos.com/juegos/11552/god_of_war_ps4__nombre_temporal_/fotos/noticias/god_of_war_ps4__nombre_temporal_-5223809.jpg",
"title": "El director de God of War habla de PS5 y la tecnología en la nueva generación",
"text": "La estrategia comercial de Sony y la de Microsoft es la de no mostrar las cartas hasta la última jugada, y eso hace que cualquier pequeño detalle sea más grande.",
"url": "#",
"date": "Hace 3 días",
"autor": "Valentin Acuña"
},
{ "img":"https://i11c.3djuegos.com/juegos/16414/apex_legends/fotos/noticias/apex_legends-5223762.jpg",
"title": "La Temporada 6 de Apex Legends llegará en unos días con nuevas armas y personajes",
"text": "EA y Respawn ya han anunciado todos los detalles de la Temporada 6 de Apex Legends, el battle royale que llegó para quedarse y para conseguir un sitio entre los más grandes del género.",
"url": "#",
"date": "Hace 4 días",
"autor": "Federico Rodriguez"
}
]

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
        <Nav/>
        {bodyHead.map(c => <BodyHead img={c.img}
        title={c.title}
        text={c.text}
        url={c.url}
        date={c.date}
        autor={c.autor}/>)}
      </header>
    </div>
  );
}

export default App;
