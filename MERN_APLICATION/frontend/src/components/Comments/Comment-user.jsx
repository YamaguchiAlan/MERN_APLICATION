import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const mapStateToProps = state => {
    return {
        userId: state.userReducer.user._id
    }
}

const CommentUser = ({comment, userId, removeComment}) =>{
    const menu = (e) => {
        const btn = document.getElementsByClassName("comment-menu-btn")

        for(let i=0; i < btn.length; i++){
            if(btn[i].active = true) {
                btn[i].active = false
            }
            if(btn[i].clickFlag === true) {
                let menu = btn[i].parentElement.getElementsByClassName('comment-menu-active')[0]
                menu.classList.replace("comment-menu-active", "comment-menu")
                btn[i].src="/img/Menu.png"
                btn[i].clickFlag = false
                btn[i].active = true
            }
        }

        let menu = e.target.parentElement.getElementsByClassName('comment-menu')[0]
        if(menu.style.marginBottom === '60px' && !e.target.active || menu.style.marginBottom === "" && !e.target.active){
            menu.classList.replace("comment-menu", "comment-menu-active")
            e.target.src="/img/cancel.png"
            e.target.clickFlag = true
        } else{
            menu.classList.replace("comment-menu-active", "comment-menu")
            e.target.src="/img/Menu.png"
            e.target.clickFlag = false
            e.target.active = false
        }
    }

    return(
        <div className="comment-profile-back">
            <img src={`${process.env.REACT_APP_API_URL}/api/users/${comment.user[0]._id}/image`} alt="user-pic" className="comment-user-pic" />
            <div className="comment-username-back">
                <span className="comment-username"> {comment.user[0].username}</span>
            </div>

            <div className="date-and-menu">
                <div className="comment-menu">
                    <div className="row menu-row">
                        {
                            userId === comment.user[0]._id ?
                            <>
                                <span className="report" onClick={() => removeComment(comment._id)}>Remove Comment</span>
                                <Link to="/my-profile" className="view-profile">
                                    View Profile
                                </Link>
                            </>
                            :
                            <>
                                <span className="report">Report</span>
                                <Link to={`/user/${comment.user[0]._id}`} className="view-profile">
                                    View Profile
                                </Link>
                            </>
                        }
                    </div>
                    <div className="row date-row">
                        <span className="comment-date">{comment.formatedDate}</span>
                    </div>
                </div>
                <img className="comment-menu-btn" src="/img/Menu.png" alt="menu" onClick={menu} clickFlag={false} active={false}/>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(CommentUser);