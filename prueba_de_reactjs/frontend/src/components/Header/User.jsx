import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

const mapStateToPops = state => {
    return {user: state.user.user}
}

const User = ({user}) =>(
    <div className="user-profile">
        <img src="/img/profile-pic.png" alt="imagen de usuario" />

        <table className="user-text">
            <tbody>
                {
                    user == undefined || user.error ?
                        <>
                        <tr className="user-name">
                            <td colSpan="2">
                                <Link to="/" className="user-name">
                                    Anonymous
                                </Link>
                            </td>
                        </tr>

                        <tr className="sign">
                            <td>
                                <Link to="/signin" className="sign-in">
                                    Sign-In
                                </Link>
                            </td>
                            <td>
                                <Link to="/signup" className="sign-up">
                                    Sing-Up
                                </Link>
                            </td>
                        </tr>
                        </>
                        :
                        <>
                        <tr className="user-name">
                            <td colSpan="2">
                                <Link to={`/user/${user._id}`} className="user-name">
                                    {user.username}
                                </Link>
                            </td>
                        </tr>
                        <tr className="sign">
                            <td>
                                <Link to="/signin" className="sign-in">
                                    View Profile
                                </Link>
                            </td>
                            <td>
                                <Link to="/edit-news" className="sign-up">
                                    Editor Mode
                                </Link>
                            </td>
                        </tr>
                        </>
                        }
            </tbody>
        </table>
    </div>
    )

export default connect(mapStateToPops)(User);