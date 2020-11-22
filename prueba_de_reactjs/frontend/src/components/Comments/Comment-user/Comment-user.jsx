import React, {useEffect} from 'react';
import './Comment-user.css';

const CommentUser = ({user}) =>{

    useEffect(() => {
/* Al presionar el boton baja o sube el menu del comentario */

        /* Solo hay uno de cada uno por cada componente asi que comparten indice de los arreglos */
        let button = document.querySelectorAll(".profile-back .comment-menu");
        let menu = document.querySelectorAll(".profile-back .menu");
        let date = document.querySelectorAll(".profile-back .date");

        let active = [];
        button.forEach( (element, i) => {
            active[i] = false;

            element.addEventListener( 'click', (c) =>{
                if(active[i] === false ){
                    /* Se esconde la fecha */
                    date[i].style.position="relative";
                    date[i].style.top="60px";
                    date[i].style.transition="0s";

                    /* Baja el menu */
                    menu[i].style.transition="0.6s";
                    menu[i].style.position="relative";
                    menu[i].style.bottom="13px";
                    active[i] = true;
                }
                else{
                    /* Sube la fecha */
                    date[i].style.transition="0.6s";
                    date[i].style.top="0";

                    /* Se esconde el menu */
                    menu[i].style.transition="0s";
                    menu[i].style.position="absolute";
                    menu[i].style.bottom="75px";
                    active[i] = false;
                }
            })
        })
    });

    return(
        <div className="profile-back">
            <img src={user.user.pic} alt="user-pic" className="user-pic" />
            <p className="name"> {user.user.name}</p>

            <p className="date-and-menu" >
                <span className="date" >{user.date}</span>
                <div className="menu">
                    <span className="report"> Reportar </span>
                    <span className="view-profile"> Ver Perfil </span>
                </div>
                <img className="comment-menu" src="/img/Menu.png" alt="menu"/>
            </p>
        </div>
    )
}

export default CommentUser;