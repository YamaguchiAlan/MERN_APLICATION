import React from 'react';
import './Comment-user.css';
import withMenu from './HOC-Menu';

const CommentUser = ({user}) =>{

    const connect = user.user.connect ? 
    <ul className="connect"><li></li></ul> : 
    <ul className="disconnect"><li></li></ul>;

    return(
        <div className="profile-back">
            <img src={user.user.pic} alt="user-pic" className="user-pic" />
            <p className="name"> {user.user.name} {connect}</p>

            <p className="date-and-menu" > 
                <span className="date" >{user.date}</span>
                <div className="menu">
                    <span className="report"> Reportar </span>
                    <span className="view-profile"> Ver Perfil </span>
                </div>
                <i class="fas fa-ellipsis-v"></i>
            </p>
        </div>
    )    
}

export default withMenu(CommentUser);