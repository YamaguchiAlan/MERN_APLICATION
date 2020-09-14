import React from 'react';
import './Article.css';
import Nav from '../Nav/Nav';
import ArticleBody from './Article-body';
import Footer from '../Footer/Footer';
import Comments from '../Comments/Comments';

const articles = [
    { "img" : "https://sm.ign.com/t/ign_es/screenshot/default/some-gorgeous-artwork-promoting-the-new-sword-and-shield-tcg_sykr.1280.jpg",
    "title": "Todas las generaciones de pokémon, ordenadas de mejor a peor",
    "articleId": "generaciones-de-pokemon"
    },
    {"img":"https://i.blogs.es/1f4641/initiative/840_560.jpeg",
    "title":"The Initiative, ¿quién hay en el Dream Team de Xbox Series X?",
    "articleId": "initiative-xbox-series-x"
    },
    {"img":"https://insights.dice.com/wp-content/uploads/2018/10/shutterstock_624801452.jpg",
    "title":"Profesiones de Videojuego: ¿Qué hace un diseñador (Game Designer) y por qué es tan importante?",
    "articleId": "profesiones-de-videojuegos-game-designer"
    },
    {"img":"https://as01.epimg.net/meristation/imagenes/2019/09/18/header_image/371441561568825955.jpg",
    "title": "El Call of Duty de 2020 podría anunciarse muy pronto, según una misteriosa caja enviada por Activision",
    "articleId": "call-of-duty-2020-anuncio"
    },
    {"img":"https://pl4yers.com/wp-content/uploads/2020/08/Doom-Eternal-The-Ancient-Gods.png",
    "title":"DOOM Eternal muestra un adelanto en vídeo de The Ancient Gods, primera expansión de su brutal campaña",
    "articleId": "doom-eternal-the-ancient-gods-adelanto"
    },
    {"img":"https://www.alfabetajuega.com/wp-content/uploads/2019/06/cvSMJPjdCvYTQ5RbBo7HcG.jpg",
    "title":"Aluvión de videojuego gratis para disfrutar el fin de semana, con Borderlands 3 y Gears 5 entre ellos",
    "articleId": "videojuegos-gratis-borderlands-3-gears-5"
    },
    {"img":"https://media.playstation.com/is/image/SCEA/final-fantasy-vii-remake-normal-hero-background-01-ps4-us-11jun19?$native_nt$",
    "title": "Final Fantasy VII Remake supera los 5 millones de juegos vendidos en todo el mundo",
    "articleId": "final-fantasy-vii-remake-ventas"
    },
    {"img": "https://areajugones.sport.es/wp-content/uploads/2020/08/Fortnite-Apple-2.jpg",
    "title": "Fortnite ha sido retirado de la Google Play Store por los mismos problemas que hubo con Apple",
    "articleId": "fornite-retirado-de-google-play"
    },
    {"img": "https://sm.ign.com/ign_es/screenshot/default/fall-guys-ultimate-knockout_f1vw.jpg",
    "title": "Fall Guys dará recompensas gratis por los problemas con los servidores",
    "articleId": "fall-guys-recompensas-gratis-problemas-con-los-servidores"
    },
    {"img": "https://cnet1.cbsistatic.com/img/IhYCIh0bqjMG8R5K7Lys0opUhyg=/1200x675/2020/06/11/03fe8492-a134-4702-af78-ca2d2ad61f3a/spider-man-miles-morales-01.jpg",
    "title": "Spider-Man Miles Morales concreta nuevos detalles y muestra una imagen luciendo ray-tracing",
    "articleId": "spider-man-miles-morales-ray-tracing"
    },
    {"img":"https://images.dexerto.es/uploads/2020/06/01201825/se-revelara-call-of-duty-2020-en-el-evento-de-playstation-5.jpg",
    "title": "Call of duty 2020 activa su página web secreta y parece confirmar la Guerra Fría como ambientación",
    "articleId": "call-of-duty-2020-pagina-web-secreta-guerra-fria"
    },
    {"img": "https://i11c.3djuegos.com/juegos/16724/fall_guys_ultimate_knockout/fotos/noticias/fall_guys_ultimate_knockout-5237158.jpg",
    "title": "Fall Guys es el juego más descargado de la historia para PlayStation Plus",
    "articleId": "fall-guys-juego-mas-descargado-de-la-historia-PS-plus"
    },
    {"img": "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/05/assassins-creed-valhalla-1935379.jpg",
    "title": "Assassin's Creed Valhalla nos muestra un tráiler con la BSO",
    "articleId": "assassins-creed-valhalla-trailer-BSO"
    },
    {"img": "https://areajugones.sport.es/wp-content/uploads/2020/03/doom-eternal-launch-trailer.png",
    "title": "Doom Eternal y TESO online llegarán a la nueva generación",
    "articleId": "doom-eternal-y-teso-en-nueva-generacion"
    },
    {"img": "https://media.vandal.net/i/1200x630/2-2020/20202261713980_1.jpg",
    "title": "PS PLUS: ¡llévate 3 juegos en agosto para celebrar su 10º aniversario!",
    "articleId": "PS-plus-10-aniversario"
    },
    {"img": "https://store-images.s-microsoft.com/image/apps.40300.13719691835186674.79361d33-7a18-4554-8a50-66b60d3712e6.d7bd4952-930d-4f5e-863b-67bb13f5199d?mode=scale&q=90&h=1080&w=1920",
    "title": "Dead Cells para Android ya se puede descargar",
    "articleId": "dead-cells-para-android"
    },
    {"img": "https://areajugones.sport.es/wp-content/uploads/2020/07/ps5-digital.jpg",
    "title": "Comparten malas noticias sobre el precio que tendra PS5",
    "articleId": "ps5-malas-noticias-sobre-el-precio"
    },
    {"img": "https://i.blogs.es/0bb51c/1366_2000/1366_2000.jpeg",
    "title": "Spelunky 2 presenta nuevo video con gameplay y anuncia su fecha de lanzamiento",
    "articleId": "spelunky-2-nuevo-video-gameplay-fecha-de-lanzamiento"
    },
    {"img": "https://dlprivateserver.com/wp-content/uploads/2020/08/Hood-Outlaws-y-Legends-anunciados-para-PS5-Xbox-Series-X.jpg",
    "title": "Anunciado Hood: Outlaws and Legends para PS5 un juego de sigilo de nueva generación",
    "articleId": "anunciado-hood-outlaws-and-legends-ps5"
    },
    {"img": "https://www.ioi.dk/wp-content/uploads/2020/06/HITMAN3_Article_Tile-1.jpg",
    "title": "Hitman 3 apostará por ofrecer una experiencia VR en consolas PlayStation",
    "articleId": "hitman-3-experiencia-VR-playstation"
    },
    {"img": "https://cnet2.cbsistatic.com/img/jWNqrM9AWKEiuErVAsOibg8S6vw=/940x0/2018/05/04/98bfddf0-95a7-4c31-976c-735bd159c3ea/capture.png",
    "title": "El director de God of War habla de PS5 y la tecnología en la nueva generación",
    "articleId": "director-de-god-of-war-ps5"
    },
    {"img": "https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/08/apex-featured-image-season-6-keyart.jpg.adapt.crop191x100.1200w.jpg",
    "title": "La Temporada 6 de Apex Legends llegará en unos días con nuevas armas y personajes",
    "articleId": "apex-temporada-6"
    },
    {"img": "https://hipertextual.com/files/2016/11/Dishonored-2.jpg",
    "title": "Dishonored 2, Prey y otros juegazos reunidos en un pack para celebrar los 20 años de Arkane Studios",
    "articleId": "pack-arkane-20-años"
    },
    {"img": "https://www.tonica.la/__export/1597510095740/sites/debate/img/2020/08/15/joker-llega-a-fortnite.jpg_1902800913.jpg",
    "title": "Fornite anuncia nuevas skins de DC Comics: Joker, Hiedra Venenosa y Rey Midas llegarán al juego",
    "articleId": "fornite-nuevas-skins-DC-comics"
    }
]

const Article = ({match}) =>{

    /* Filtrando el articulo mediante la url */
    let actualArticle = articles.filter( c => c.articleId == match.params.articleId)[0];

    return(
        /* Verificando si existe */
        actualArticle ? (
        <div className="App">

            <div className="cover">
            <img src={actualArticle.img} alt="Imagen" className="atc-img"/>
            <h1 className="atc-title"><i>{actualArticle.title}</i></h1>
            </div>

            <nav className="app-nav" id="app-nav"> 
                <span className="trending">Trending</span>
                <Nav />
            </nav>

            <ArticleBody content={actualArticle.articleId} />
            
            <Comments />

            <Footer />
            <div id="foot-limit"></div>
        </div>
        )
        : (<div>
            no existe
        </div>

        )
    )
}

export default Article;