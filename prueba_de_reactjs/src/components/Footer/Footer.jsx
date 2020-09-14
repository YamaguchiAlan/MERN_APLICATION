import React, { useEffect } from 'react';
import './Footer.css';

const Footer = () =>{
   
    useEffect( () =>{
        /* Al hacer click en el boton del footer te lleva hasta el principio de la pagina */
        let goUp = document.getElementById("go-up");

        goUp.addEventListener('click', () =>{
            document.body.scrollTop = 0;
           document.documentElement.scrollTop = 0;
        });
    })

    return(
        <div className="footer" id="footer">
            <p className="about-us"><strong><i>Astro-Gaming</i></strong><br/>
            Todas las noticias sobre el mundo del gaming
            </p>

            <div className="legal-back">
                <table className="legal">
                    <tr>
                        { /* Clase blue line tienen el borde derecho celeste */ }
                        <td className="blue-line"><a href="#">Contactanos</a></td>
                        <td><a href="#">Aviso Legal</a></td>
                    </tr>
                        
                    <tr>
                        <td className="blue-line"><a href="#">Política de cookies</a> </td>
                        <td><a href="#">Publicidad/Advertising</a></td>
                    </tr>
                </table>
            </div>

            <div className="follow-us">
                <p className="siguenos">Síguenos</p>
                <hr/>
                <div className="social">
                    <a href="https://www.facebook.com" target="_blank" className="facebook"> <img src="https://www.vandalimg.com/socialblanco/fblogo.png" alt="facebook" /> </a>
                    <a href="https://www.twitter.com" target="_blank" className="twitter"> <img src="https://www.vandalimg.com/socialblanco/twitterlogo.png" alt="twiter" /> </a>
                    <a href="https://www.instagram.com" target="_blank" className="instagram"> <img src="https://www.vandalimg.com/socialblanco/instagramlogo.png" alt="instagram" /> </a>
                    <a href="https://www.youtube.com" target="_blank" className="youtube"> <img src="https://www.vandalimg.com/socialblanco/youtubelogo.png" alt="youtube" />  </a>
                </div>
            </div>

            {/* Boton para ir al inicio de la pagina */}
            <i id="go-up" className="fas fa-angle-double-up"></i>
        </div>
    )

}

export default Footer;