import React from 'react';

const Legal = () =>(
    <div className="legal-back w-50 float-right d-flex justify-content-center align-items-center">
        <table className="legal">
            <tbody>
                <tr>
                    { /* Clase blue line tienen el borde derecho celeste */ }
                    <td className="blue-line"><a href="/">CONTACT US</a></td>
                    <td className="pl-2"><a href="/">LEGAL WARNING</a></td>
                </tr>

                <tr>
                    <td className="blue-line"><a href="/">COOKIES POLICY</a> </td>
                    <td className="pl-2"><a href="/">ADVERTISING</a></td>
                </tr>
            </tbody>
        </table>
    </div>
)

export default Legal;