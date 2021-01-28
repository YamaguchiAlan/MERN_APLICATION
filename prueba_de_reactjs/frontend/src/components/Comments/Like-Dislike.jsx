import React, {useRef} from 'react';
import { connect } from 'react-redux'
import {setComments} from '../../Redux/actions/comment.Actions'
import axios from 'axios'
import checkMenuBtn from './checkMenuBtn'

const mapStateToProps = state => {
    return {
        userId: state.userReducer.user._id,
        comments: state.commentReducer.comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setComments: (comments) => dispatch(setComments(comments))
    }
}

const LikeDislike = ({ Comment, userId, comments, setComments}) =>{
    const likeRef = useRef(null)
    const dislikeRef = useRef(null)

    const verifyLike = (arr) => {
        return arr.includes(userId)
    }

    const mapComments = (cmt) => {
        const newComment = comments.map(e => e._id === cmt._id ? cmt : e)
        setComments(newComment)
    }

    const likeOnClick = async (e) => {
        checkMenuBtn()
        if(!verifyLike(Comment.dislike)){
            if(!verifyLike(Comment.like)) {
                const res = await axios.put(`http://localhost:4000/api/like-comment/${Comment._id}/increment`, {userId: userId})

                if(res.data.success) {
                    mapComments(res.data.comment)
                }
            } else{
                const res = await axios.put(`http://localhost:4000/api/like-comment/${Comment._id}/decrement`, {userId: userId})

                if(res.data.success) {
                    mapComments(res.data.comment)
                }
            }
        }
    }

    const dislikeOnClick = async (e) => {
        checkMenuBtn()
        if(!verifyLike(Comment.like)){
            if(!verifyLike(Comment.dislike)) {
                    const res = await axios.put(`http://localhost:4000/api/dislike-comment/${Comment._id}/increment`, {userId: userId})

                    if(res.data.success) {
                        mapComments(res.data.comment)
                    }
                } else{
                    const res = await axios.put(`http://localhost:4000/api/dislike-comment/${Comment._id}/decrement`, {userId: userId})

                    if(res.data.success) {
                        mapComments(res.data.comment)
                    }
            }
        }
    }

    return(
        <p className="like-dislike" >
        <i
            className={verifyLike(Comment.like) ? "fas fa-thumbs-up" : "far fa-thumbs-up"}
            ref={likeRef}
            onClick={() => likeOnClick()}>
        </i>
        <span className="likes-count" >{Comment.like.length}</span>

        <i
            className={verifyLike(Comment.dislike) ? "fas fa-thumbs-down" : "far fa-thumbs-down"}
            ref={dislikeRef}
            onClick={() => dislikeOnClick()}>
        </i>
        <span className="dislikes-count" >{Comment.dislike.length}</span>
        </p>
     )
}

export default connect(mapStateToProps, mapDispatchToProps)(LikeDislike);