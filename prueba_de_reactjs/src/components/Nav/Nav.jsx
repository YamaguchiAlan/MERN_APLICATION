import React, { useEffect } from 'react';
import './Nav.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const navArr =[{
    "img":"https://i11a.3djuegos.com/juegos/3405/_articulos_/fotos/articulos/_articulos_-5216104.jpg",
    "title":"Todas las generaciones de pokémon, ordenadas de mejor a peor",
    "articleId": "generaciones-de-pokemon"
    },
    {"img":"https://i11a.3djuegos.com/juegos/3405/_articulos_/fotos/articulos/_articulos_-5213452.jpg",
    "title":"The Initiative, ¿quién hay en el Dream Team de Xbox Series X?",
    "articleId": "initiative-xbox-series-x"
    },
    {"img":"https://i11a.3djuegos.com/juegos/3405/_articulos_/fotos/articulos/_articulos_-5210552.jpg",
    "title":"Profesiones de Videojuego: ¿Qué hace un diseñador (Game Designer) y por qué es tan importante?",
    "articleId": "profesiones-de-videojuegos-game-designer"
    },
    {"img":"https://i11a.3djuegos.com/juegos/16372/call_of_duty_2019/fotos/noticias/call_of_duty_2019-5223848.jpg",
    "title": "El Call of Duty de 2020 podría anunciarse muy pronto, según una misteriosa caja enviada por Activision",
    "articleId": "call-of-duty-2020-anuncio"
    },
    {"img":"https://i11d.3djuegos.com/juegos/15953/doom_eternal/fotos/noticias/doom_eternal-5224667.jpg",
    "title":"DOOM Eternal muestra un adelanto en vídeo de The Ancient Gods, primera expansión de su brutal campaña",
    "articleId": "doom-eternal-the-ancient-gods-adelanto"
    },
    {"img":"https://i11a.3djuegos.com/juegos/9610/blizzard_allstars/fotos/noticias/blizzard_allstars-5224436.jpg",
    "title":"Aluvión de videojuego gratis para disfrutar el fin de semana, con Borderlands 3 y Gears 5 entre ellos",
    "articleId": "videojuegos-gratis-borderlands-3-gears-5"
    },
    {"img":"https://i11b.3djuegos.com/juegos/12156/final_fantasy_vii_remake/fotos/noticias/final_fantasy_vii_remake-5224421.jpg",
    "title": "Final Fantasy VII Remake supera los 5 millones de juegos vendidos en todo el mundo",
    "articleId": "final-fantasy-vii-remake-ventas"
    },
    {"img": "https://i11d.3djuegos.com/juegos/8298/fortnite/fotos/noticias/fortnite-5228443.jpg",
    "title": "Fortnite ha sido retirado de la Google Play Store por los mismos problemas que hubo con Apple",
    "articleId": "fornite-retirado-de-google-play"
    },
    {"img": "https://i11a.3djuegos.com/juegos/16724/fall_guys_ultimate_knockout/fotos/noticias/fall_guys_ultimate_knockout-5228380.jpg",
    "title": "Fall Guys dará recompensas gratis por los problemas con los servidores",
    "articleId": "fall-guys-recompensas-gratis-problemas-con-los-servidores"
    },
    {"img": "https://i11c.3djuegos.com/juegos/17362/marvel__039_s_spiderman_2/fotos/noticias/marvel__039_s_spiderman_2-5228046.jpg",
    "title": "Spider-Man Miles Morales concreta nuevos detalles y muestra una imagen luciendo ray-tracing",
    "articleId": "spider-man-miles-morales-ray-tracing"
    },
    {"img":"https://i11a.3djuegos.com/juegos/17202/call_of_duty__2020_/fotos/noticias/call_of_duty__2020_-5229304.jpg",
    "title": "Call of duty 2020 activa su página web secreta y parece confirmar la Guerra Fría como ambientación",
    "articleId": "call-of-duty-2020-pagina-web-secreta-guerra-fria"
    },
    {"img": "https://i11c.3djuegos.com/juegos/16724/fall_guys_ultimate_knockout/fotos/noticias/fall_guys_ultimate_knockout-5237158.jpg",
    "title": "Fall Guys es el juego más descargado de la historia para PlayStation Plus",
    "articleId": "fall-guys-juego-mas-descargado-de-la-historia-PS-plus"
    }
    ]

const Nav = () => {
    
    useEffect( () =>{
        /* Posicionando el Nav segun la ubicacion en la pagina */
        let nav = document.getElementById("app-nav");

        window.onscroll= () =>{
          let navPos = document.getElementById("nav-pos").offsetTop;
          let currentPos = window.pageYOffset;
          let footerPos = document.getElementById("foot-limit").offsetTop;
          let footer = document.getElementById("footer").offsetTop;
      
          /* Al centro de la pagina */
          if(currentPos >= navPos){
            nav.style.position="fixed";
            nav.style.top="-10px";
          }
          /* Al principio de la pagina */
          else{
            nav.style.position="relative";
            nav.style.top="0";
          }
          /* Al final de la pagina */
          if(currentPos >= footerPos){
            nav.style.position="absolute";
            nav.style.top=`calc( ${ footer }px - 100vh - 20px )`;
          }
        }
    }
);

    return(     
        navArr.map( element =>(
            <div className="Nav">
                <div className="image">
                    <img src={ element.img } alt="Default image" className="nav-img"/>
                </div>

                <div className="text">
                    <Link to={ `/article/${ element.articleId }` }>
                    { element.title }
                    </Link>    
                </div>
            </div>
        ))
    )
}

export default Nav;


Nav.propTypes ={
    img: PropTypes.string,
    title: PropTypes.string,
    articleId: PropTypes.string
}

Nav.defaultProps ={
    img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAElBMVEXy8vL////6+vr19fX4+Pj8/Px/aeudAAACoklEQVR4nO3c227bMBBF0cgk//+XGwu6kRxeRnFaVGevt8a2AG3QQ0kN8vUFAAAAAAAAAAAAAAAAAAAAAACAv2j5Ba9/fVK/hVgOxHL4Prf0+qD08FgfPbfw8Fjpk8cjlgOxHIjlQCwHYjlIxgoh3DqeXqyQbl+Ky8VK551L9B5PLFb40X2eWKyf3RVrxUpFrMU36KVihbKV88pCKtarfjzlWlpSsepWvh1RPZbr3JVi1SPLObSUYlkri1g7ZpZDGau6zGI3PJWxjKHV+3gqv6NSsXxX8KkqoxWrXFq98R7rkaYVq6jVaxWMpScWK6vVPW9rqKnF2r5e71e6G6G5+vRifZ9zjHFwyZDM9acYayx7PHEOeWIZ4pI5ViGxatW16/UFYlUfsy/HiFUx7iC3oxCrZDx73oc8sQrRarUNeWLlrKepx5AnVqbZaq0lHytmd3/tVu8jqccK2VuMjfA65NVjLdf3mBvhKYjHStuaWTU2wkst6Vj71+64MBiTjXV+7cL2dmK1XJdS+W9i5bI2qfoJsYpXy1rDEa8aq7ymitYPibWqr6nWIT+spRjL+sJNbYmCsexR3n5FOpYdYmZL1IvVmkxrif6WKBerPcXHW6JarN7SGW6JYrH6Q2m0JYrF6rYabolasQatRluiVKzJG5rmXFOKNXhyvOpuiUKxJh4rLP0tUSfW3JPj7ddm1GNNtuptiTKxxsN9194SVWLNDPesifUBkVhzw33X2hI1Ys0O911jS9SI5WzVukuUiDU/3A/vj1XrUSHWjVb2/44JxPJshEWYl/GzJzpieYf7ztgSHx/rbitrS3x8rDsDa7MeJ+0UYn2K9i+zOT09Fn8ueNbCH6Ked3+utxGLWMQCAAAAAAAAAAAAAAAAAAAAAAD4//0BUyATTom0AxcAAAAASUVORK5CYII=",
    title: "Default Title",
    articleId: "#"
}