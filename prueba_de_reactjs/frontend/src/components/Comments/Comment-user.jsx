import React from 'react';
import {Link} from 'react-router-dom'
import {format} from 'timeago.js'
import {connect} from 'react-redux'

const mapStateToProps = state => {
    return {
        userId: state.userReducer.user._id
    }
}

const CommentUser = ({comment, userId, removeComment}) =>{

    const menu = (e) => {
        let menu = e.target.parentElement.getElementsByClassName('comment-menu')[0]
        if(menu.style.marginBottom === '60px' || menu.style.marginBottom === ""){
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
            <img src={`http://localhost:4000/api/user-image/${comment.user[0]._id}`} alt="user-pic" className="comment-user-pic" />
            <span className="comment-username"> {comment.user[0].username}</span>

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
                        <span className="comment-date" >{format(comment.createdAt)}</span>
                    </div>
                </div>
                <img className="comment-menu-btn" src="/img/Menu.png" alt="menu" onClick={menu}/>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(CommentUser);