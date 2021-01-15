import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import CommentUser from './Comment-user';
import LikeDislike from './Like-Dislike';

const mapStateToProps = state => {
    return {user: state.userReducer.user}
}

const Comments = ({newsId, user}) =>{
    useEffect( ()=>{
        axios.get(`http://localhost:4000/api/${newsId}/comments`)
        .then(res => {
            setComments(res.data)
        })
        return(()=>{
            setComments([])
        })
    },[newsId]);

    const [comments, setComments] = useState([])

    const textAreaAdjust = (e) => {
        e.target.style.height = "1px";
        e.target.style.height = e.target.scrollHeight +"px";
      }

    const textareaRef = useRef(null)

    const commentSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:4000/api/create-comment/${newsId}`, {
            userId: user._id,
            comment: textareaRef.current.value
        })
        .then(res => {
            if(res.data.success){
                setComments([...comments, res.data.comment])
            }
        })
    }

    const removeComment = (commentId) => {
        axios.delete(`http://localhost:4000/api/delete-comment/${newsId}`, {
            data: {
                commentId: commentId,
                userId: user._id
            }
        })
        .then(res => {
            if(res.data.success) {
                let newComments = comments.filter(e => e._id !== commentId)
                setComments(newComments)
            }
        })
    }

    return(
        <div className="comments-back" id="comments">
            {comments.length > 0 ?(
                <>
                    <p className="coments-counter"> Comentarios({comments.length}) </p>
                    <div className="comments">

                        <form className=" make-comment" onSubmit={commentSubmit}>
                            <div className="d-flex">
                            <img className="make-comment-user" src={`http://localhost:4000/api/user-image/${user._id}`} alt="user-pic"/>
                            <textarea className="form-control px-4" placeholder="Add a comment..." ref={textareaRef} onChange={textAreaAdjust}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary float-right mt-2">Comment</button>
                        </form>

                        {comments.map((c, i) => {

                        return<div key={i}>
                            <CommentUser comment={c} removeComment={removeComment}/>

                            <p className="comment-text px-5 py-4" >{c.comment}</p>

                            <LikeDislike cmt={c} newsId={newsId}/>
                        </div>
                        })}
                    </div>
                </>
                )
                :(
                <>
                    <p className="coments-counter"> There are no comments yet </p>
                    <div className="comments">
                        <form className=" make-comment" onSubmit={commentSubmit}>
                            <div className="d-flex">
                            <img className="make-comment-user" src={`http://localhost:4000/api/user-image/${user._id}`} alt="user-pic"/>
                            <textarea className="form-control px-4" placeholder="Add a comment..." ref={textareaRef} onChange={textAreaAdjust}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary float-right mt-2">Comment</button>
                        </form>
                    </div>
                </>
                )}
        </div>


    )
    }

export default connect(mapStateToProps)(Comments);