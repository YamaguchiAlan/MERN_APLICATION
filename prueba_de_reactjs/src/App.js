import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Body from './components/Body';

const bodyArr =[{
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

const navArr =[{
"img":"https://i11a.3djuegos.com/juegos/3405/_articulos_/fotos/articulos/_articulos_-5216104.jpg",
"title":"Todas las generaciones de pokémon, ordenadas de mejor a peor"
},
{"img":"https://i11a.3djuegos.com/juegos/3405/_articulos_/fotos/articulos/_articulos_-5213452.jpg",
"title":"The Initiative, ¿quién hay en el Dream Team de Xbox Series X?"
},{"img":"https://i11a.3djuegos.com/juegos/3405/_articulos_/fotos/articulos/_articulos_-5210552.jpg",
"title":"Profesiones de Videojuego: ¿Qué hace un diseñador (Game Designer) y por qué es tan importante?"
},
{"img":"https://i11a.3djuegos.com/juegos/16372/call_of_duty_2019/fotos/noticias/call_of_duty_2019-5223848.jpg",
"title": "El Call of Duty de 2020 podría anunciarse muy pronto, según una misteriosa caja enviada por Activision"},
{"img":"https://i11d.3djuegos.com/juegos/15953/doom_eternal/fotos/noticias/doom_eternal-5224667.jpg",
"title":"DOOM Eternal muestra un adelanto en vídeo de The Ancient Gods, primera expansión de su brutal campaña"},
{"img":"https://i11a.3djuegos.com/juegos/9610/blizzard_allstars/fotos/noticias/blizzard_allstars-5224436.jpg",
"title":"Aluvión de videojuego gratis para disfrutar el fin de semana, con Borderlands 3 y Gears 5 entre ellos"},
{"img":"https://i11b.3djuegos.com/juegos/12156/final_fantasy_vii_remake/fotos/noticias/final_fantasy_vii_remake-5224421.jpg",
"title": "Final Fantasy VII Remake supera los 5 millones de juegos vendidos en todo el mundo"}
]

function App() {
  return (
    <div className="App">
        <Header/>
        <nav className="app-nav"> <p className="trending">Trending</p> {navArr.map( c => <Nav img={c.img} title={c.title}/>)}
        </nav>
        {bodyArr.map(c => <Body img={c.img}
        title={c.title}
        text={c.text}
        url={c.url}
        date={c.date}
        autor={c.autor}/>)}
    </div>
  );
}

export default App;
