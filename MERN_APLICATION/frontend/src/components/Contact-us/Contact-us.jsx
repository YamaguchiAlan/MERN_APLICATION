import React from 'react'
import Header from '../Header/Header'

const ContactUs = () => (
    <>
        <Header/>

        <div className="contact-us-back">
            <div className="contact-us">
                <div>
                    <img src="/img/instagram.png" alt="instagram"/>
                    <a href="https://www.instagram.com/alan_yamaguchi/">@alan_yamaguchi</a>
                </div>
                <div>
                    <img src="/img/Gmail-logo.png" alt="gmail"/>
                    <span>alanyamaguchi10@gmail.com</span>
                </div>
            </div>
        </div>
    </>
)

export default ContactUs