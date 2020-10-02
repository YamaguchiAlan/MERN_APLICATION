import React from 'react';
import './Legal.css';

const Legal = () =>(
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
)

export default Legal;