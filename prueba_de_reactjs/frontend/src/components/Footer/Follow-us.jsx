import React from 'react';

const FollowUs = () =>(
    <div className="follow-us w-50 float-left">
        <p className="siguenos text-center">Síguenos</p>
        <hr className=""/>
        <div className="social text-center">
            <a href="https://www.facebook.com" target="_blank" className="facebook" rel="noopener noreferrer">
                 <img src="https://www.vandalimg.com/socialblanco/fblogo.png" alt="facebook" />
            </a>
            <a href="https://www.twitter.com" target="_blank" className="twitter" rel="noopener noreferrer">
                 <img src="https://www.vandalimg.com/socialblanco/twitterlogo.png" alt="twiter" />
            </a>
            <a href="https://www.instagram.com" target="_blank" className="instagram" rel="noopener noreferrer">
                 <img src="https://www.vandalimg.com/socialblanco/instagramlogo.png" alt="instagram" />
            </a>
            <a href="https://www.youtube.com" target="_blank" className="youtube" rel="noopener noreferrer">
                 <img src="https://www.vandalimg.com/socialblanco/youtubelogo.png" alt="youtube" />
            </a>
        </div>
    </div>
)

export default FollowUs;