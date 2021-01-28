import React, { useEffect, useRef } from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import {setComments, deleteComments} from '../../Redux/actions/comment.Actions'
import CommentUser from './Comment-user';
import LikeDislike from './Like-Dislike';
import checkMenuBtn from './checkMenuBtn'

const mapStateToProps = state => {
    return {
        userId: state.userReducer.user._id,
        comments: state.commentReducer.comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setComments: (comments) => dispatch(setComments(comments)),
        deleteComments: () => dispatch(deleteComments())
    }
}

const Comments = ({newsId, userId, comments, setComments}) =>{
    useEffect( ()=>{
        axios.get(`http://localhost:4000/api/${newsId}/comments`)
        .then(res => {
            setComments(res.data.reverse())
        })
        return(()=>{
            deleteComments()
        })
    },[newsId]);

    const textAreaAdjust = (e) => {
        e.target.style.height = "1px";
        e.target.style.height = e.target.scrollHeight +"px";
      }

    const textareaRef = useRef(null)

    const commentSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:4000/api/create-comment/${newsId}`, {
            userId: userId,
            comment: textareaRef.current.value
        })
        .then(res => {
            if(res.data.success){
                checkMenuBtn()
                setComments([res.data.comment, ...comments])
            }
        })
    }

    const removeComment = (commentId) => {
        axios.delete(`http://localhost:4000/api/delete-comment/${newsId}`, {
            data: {
                commentId: commentId,
                userId: userId
            }
        })
        .then(res => {
            if(res.data.success) {
                checkMenuBtn()
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
                            <img className="make-comment-user" src={`http://localhost:4000/api/user-image/${userId}`} alt="user-pic"/>
                            <textarea className="form-control px-4" placeholder="Add a comment..." ref={textareaRef} onChange={textAreaAdjust}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary float-right mt-2">Comment</button>
                        </form>

                        {comments.map((c, i) => {

                        return<div key={i}>
                            <CommentUser comment={c} index={i} removeComment={removeComment}/>

                            <p className="comment-text px-5 py-4" >{c.comment}</p>

                            <LikeDislike Comment={c} newsId={newsId}/>
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
                            <img className="make-comment-user" src={`http://localhost:4000/api/user-image/${userId}`} alt="user-pic"/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Comments);