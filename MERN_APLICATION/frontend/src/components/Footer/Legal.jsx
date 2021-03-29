import React from 'react';
import {Link} from 'react-router-dom'

const Legal = () =>(
    <div className="legal-back w-50 d-flex justify-content-center align-items-center">
        <table className="legal">
            <tbody>
                <tr>
                    <td className="blue-line pr-2"><Link to="/contact-us">CONTACT US</Link></td>
                    <td className="pl-2"><a href="#">LEGAL WARNING</a></td>
                </tr>

                <tr>
                    <td className="blue-line pr-2"><a href="#">COOKIES POLICY</a> </td>
                    <td className="pl-2"><a href="#">ADVERTISING</a></td>
                </tr>
            </tbody>
        </table>
    </div>
)

export default Legal;