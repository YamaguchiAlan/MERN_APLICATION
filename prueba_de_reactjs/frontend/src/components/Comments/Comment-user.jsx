import React, {useEffect} from 'react';

const CommentUser = ({user}) =>{



    const menu = (e) => {
        let menu = e.target.parentElement.getElementsByClassName('comment-menu')[0]
        if(menu.style.marginBottom == '60px' || menu.style.marginBottom === ""){
            menu.style.marginBottom="0";
            menu.style.marginTop="60px";
            e.target.src="/img/cancel.png"
        } else{
            menu.style.marginTop="0";
            menu.style.marginBottom="60px";
            e.target.src="/img/Menu.png"
        }
    }

    return(
        <div className="comment-profile-back">
            <img src={user.user.pic} alt="user-pic" className="comment-user-pic" />
            <span className="comment-username"> {user.user.name}</span>

            <div className="date-and-menu">
                <div className="comment-menu">
                    <div className="row menu-row">
                        <span className="report"> Reportar </span>
                        <span className="view-profile"> Ver Perfil </span>
                    </div>
                    <div className="row date-row">
                        <span className="comment-date" >{user.date}</span>
                    </div>
                </div>
                <img className="comment-menu-btn" src="/img/Menu.png" alt="menu" onClick={menu}/>
            </div>
        </div>
    )
}

export default CommentUser;