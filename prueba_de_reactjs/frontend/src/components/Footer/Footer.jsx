import React, { useEffect } from 'react';
import Legal from './Legal/Legal'
import './Footer.css';
import FollowUs from './Follow-us/Follow-us';

const Footer = () =>{
   
    useEffect( () =>{
        /* Al hacer click en el boton del footer te lleva hasta el principio de la pagina */
        let goUp = document.getElementById("go-up");

        goUp.addEventListener('click', () =>{
            document.body.scrollTop = 0;
           document.documentElement.scrollTop = 0;
        });
    })

    return(<>
        <div className="footer" id="footer">
            <p className="about-us text-center"><strong><i>Astro-Gaming</i></strong><br/>
            Todas las noticias sobre el mundo del gaming
            </p>

            <Legal/>

            <FollowUs/>

            {/* Boton para ir al inicio de la pagina */}
            <i id="go-up" className="fas fa-angle-double-up"></i>
        </div>
        <div id="foot-limit"> </div>
        </>
    )

}

export default Footer;