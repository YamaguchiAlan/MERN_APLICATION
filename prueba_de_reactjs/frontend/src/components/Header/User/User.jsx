import React from 'react';
import './User.css';
import { Link } from 'react-router-dom'

const User = () =>(
    <div className="user-profile">
        <img src="data:image/png;base64,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" alt="imagen de usuario" />

        <table className="user-text">
            <tbody>
                <tr className="user-name">
                    <td colSpan="2">
                        <Link to="/" className="user-name">
                            Yamaguchi_
                        </Link></td>
                </tr>

                <tr className="sign">
                    <td>
                        <Link to="/signin" className="sign-in">
                            Ver Perfil
                        </Link>
                    </td>
                    <td>
                        <Link to="/edit-news" className="sign-up">
                            Modo Editor
                        </Link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    )

export default User;