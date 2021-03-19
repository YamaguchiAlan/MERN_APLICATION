import React, { useEffect } from 'react';
import Legal from './Legal'
import FollowUs from './Follow-us';

const Footer = () =>{

    useEffect( () =>{
        let goUp = document.getElementById("go-up");

        goUp.addEventListener('click', () =>{
            document.body.scrollTop = 0;
           document.documentElement.scrollTop = 0;
        });
    })

    return(
        <div className="footer" id="footer">
            <p className="about-us text-center"><strong><i>Astro-Gaming</i></strong><br/>
            All the news about the world of gaming
            </p>

            <div className="d-flex footer-container">
                <FollowUs/>
                <Legal/>
            </div>

            <i id="go-up" className="fas fa-angle-double-up"></i>
        </div>
    )

}

export default Footer;