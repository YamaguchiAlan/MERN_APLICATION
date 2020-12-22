import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import CommentUser from './Comment-user';
import LikeDislike from './Like-Dislike';

const mapStateToProps = state => {
    return {user: state.user.user}
}

const Comments = ({articleId, user}) =>{
    useEffect( ()=>{
        axios.get(`http://localhost:4000/api/${articleId}/comments`)
        .then(res => {
            setComments(res.data)
        })
        return(()=>{
            setComments([])
        })
    },[articleId]);

    const [comments, setComments] = useState([])

    const textAreaAdjust = (e) => {
        e.target.style.height = "1px";
        e.target.style.height = e.target.scrollHeight +"px";
      }

    const textareaRef = useRef(null)

    const commentSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:4000/api/create-comment/${articleId}`, {
            userId: user._id,
            comment: textareaRef.current.value
        })
    }

    return(
        <div className="comments-back" id="comments">
            {comments.length > 0 ?(
                <>
                    <p className="coments-counter"> Comentarios({comments.length}) </p>
                    <div className="comments">

                        <form className="mb-5 make-comment" onSubmit={commentSubmit}>
                            <div className="d-flex">
                            <img className="make-comment-user" src="https://www.3djuegos.com/img3/piezas/iconos/avatars/usuario/74.png" alt="user-pic"/>
                            <textarea className="form-control px-4" placeholder="Add a comment..." ref={textareaRef} onChange={textAreaAdjust}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary float-right mt-2">Comment</button>
                        </form>
                        <hr/>
                        {comments.map((c, i) => {

                        return<div key={i}>
                            <CommentUser user={c} />

                            <p className="comment-text px-5 py-4" >{c.comment}</p>

                            <LikeDislike cmt={c} index={i} />
                        </div>
                        })}
                    </div>
                </>
                )
                :(
                <>
                    <p className="coments-counter"> There are no comments yet </p>
                    <div className="comments">
                        <form className="">
                            <div className="d-flex make-comment">
                            <img className="make-comment-user" src="https://i11a.3djuegos.com/files_comunidad/4184/img/avatars/13434336-1681.jpg" alt="user-pic"/>
                            <textarea className="form-control" placeholder="Add a comment..."></textarea>
                            </div>
                            <button className="btn btn-primary float-right">Comment</button>
                        </form>
                    </div>
                </>
                )}
        </div>


    )
    }

export default connect(mapStateToProps)(Comments);