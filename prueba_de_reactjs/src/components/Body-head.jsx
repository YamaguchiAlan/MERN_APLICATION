import React from 'react';
import PropTypes from 'prop-types';
import './Body-head.css';
import wpp from '../img/wpp.png';
import facebook from '../img/facebook.png';
import twitter from '../img/twitter.png';

function BodyHead(props){
        return(
    <>
        <div className="body-back">
            <div className="body-image">
              <a className="img" href={props.url}><img src={props.img} alt="imagen default"/></a>
            </div>
            <div className="body-text">
              <a href={props.url} className="titulo">{props.title}</a>
              <p>{props.text}</p>
              <span className="body-autor">{props.autor}</span> 
              <span className="body-date">{props.date}</span>
                <div className="redes-sociales">
                  <a href="#" className="wpp"><img src={wpp} alt="whatsapp"/></a>
                  <a href="#" className="facebook"><img src={facebook} alt="facebook"/></a>
                  <a href="#" className="twitter"><img src={twitter} alt="twitter"/></a>
                </div>
            </div>
        </div>
        <hr className="body-hr"></hr>
    </>
        )
    }

export default BodyHead;

BodyHead.propTypes ={
    img: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string, 
    url: PropTypes.string,
    date: PropTypes.string,
    autor: PropTypes.string
}

BodyHead.defaultProps ={
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAElBMVEXy8vL////6+vr19fX4+Pj8/Px/aeudAAACoklEQVR4nO3c227bMBBF0cgk//+XGwu6kRxeRnFaVGevt8a2AG3QQ0kN8vUFAAAAAAAAAAAAAAAAAAAAAACAv2j5Ba9/fVK/hVgOxHL4Prf0+qD08FgfPbfw8Fjpk8cjlgOxHIjlQCwHYjlIxgoh3DqeXqyQbl+Ky8VK551L9B5PLFb40X2eWKyf3RVrxUpFrMU36KVihbKV88pCKtarfjzlWlpSsepWvh1RPZbr3JVi1SPLObSUYlkri1g7ZpZDGau6zGI3PJWxjKHV+3gqv6NSsXxX8KkqoxWrXFq98R7rkaYVq6jVaxWMpScWK6vVPW9rqKnF2r5e71e6G6G5+vRifZ9zjHFwyZDM9acYayx7PHEOeWIZ4pI5ViGxatW16/UFYlUfsy/HiFUx7iC3oxCrZDx73oc8sQrRarUNeWLlrKepx5AnVqbZaq0lHytmd3/tVu8jqccK2VuMjfA65NVjLdf3mBvhKYjHStuaWTU2wkst6Vj71+64MBiTjXV+7cL2dmK1XJdS+W9i5bI2qfoJsYpXy1rDEa8aq7ymitYPibWqr6nWIT+spRjL+sJNbYmCsexR3n5FOpYdYmZL1IvVmkxrif6WKBerPcXHW6JarN7SGW6JYrH6Q2m0JYrF6rYabolasQatRluiVKzJG5rmXFOKNXhyvOpuiUKxJh4rLP0tUSfW3JPj7ddm1GNNtuptiTKxxsN9194SVWLNDPesifUBkVhzw33X2hI1Ys0O911jS9SI5WzVukuUiDU/3A/vj1XrUSHWjVb2/44JxPJshEWYl/GzJzpieYf7ztgSHx/rbitrS3x8rDsDa7MeJ+0UYn2K9i+zOT09Fn8ueNbCH6Ked3+utxGLWMQCAAAAAAAAAAAAAAAAAAAAAAD4//0BUyATTom0AxcAAAAASUVORK5CYII=",
    title: "Titulo por defecto",
    text: "Texto por defecto",
    url: "#",
    date: "2 horas",
    autor: "___"
}