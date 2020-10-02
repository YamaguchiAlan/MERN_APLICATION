import React from 'react';
import './Follow-us.css';

const FollowUs = () =>(
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
)

export default FollowUs;