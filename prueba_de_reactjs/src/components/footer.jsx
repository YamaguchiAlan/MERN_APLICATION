import React from 'react';
import './Footer.css';

function Footer(){
    return(
        <div className="footer">
            <p className="about-us"><strong><i>Astro-Gaming</i></strong><br/>
            Todas las noticias sobre el mundo del gaming
            </p>
            <div className="legal-back">
            <table className="legal">
                <tr>
                    <td className="td-b"><a href="#">Contactanos</a></td>
                    <td><a href="#">Aviso Legal</a></td>
                </tr>
                <tr>
                    <td className="td-b"><a href="#">Política de cookies</a> </td>
                    <td><a href="#">Publicidad/Advertising</a></td>
                </tr>
            </table>
            </div>
            <div className="follow-us">
                <p className="siguenos">Síguenos</p>
                <hr/>
                <div className="redes">
                <a href="#" className="facebook"><img src="https://www.vandalimg.com/socialblanco/fblogo.png" alt="facebook" /></a>
                <a href="#" className="twitter"><img src="https://www.vandalimg.com/socialblanco/twitterlogo.png" alt="twiter" /></a>
                <a href="#" className="instagram"><img src="https://www.vandalimg.com/socialblanco/instagramlogo.png" alt="instagram" /></a>
                <a href="#" className="youtube"><img src="https://www.vandalimg.com/socialblanco/youtubelogo.png" alt="youtube" /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;