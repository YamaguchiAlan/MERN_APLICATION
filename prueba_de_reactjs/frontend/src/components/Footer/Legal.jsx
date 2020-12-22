import React from 'react';

const Legal = () =>(
    <div className="legal-back w-50 float-right d-flex justify-content-center align-items-center">
        <table className="legal">
            <tbody>
                <tr>
                    { /* Clase blue line tienen el borde derecho celeste */ }
                    <td className="blue-line"><a href="/">Contactanos</a></td>
                    <td><a href="/">Aviso Legal</a></td>
                </tr>

                <tr>
                    <td className="blue-line"><a href="/">Política de cookies</a> </td>
                    <td><a href="/">Publicidad/Advertising</a></td>
                </tr>
            </tbody>
        </table>
    </div>
)

export default Legal;