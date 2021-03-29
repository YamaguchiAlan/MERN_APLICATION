import React, {useRef} from 'react';
import { connect } from 'react-redux'
import {setComments} from '../../Redux/actions/comment.Actions'
import axios from 'axios'
import checkMenuBtn from './checkMenuBtn'

const mapStateToProps = state => {
    return {
        userId: state.userReducer.user._id,
        verified: state.userReducer.user.verified,
        comments: state.commentReducer.comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setComments: (comments) => dispatch(setComments(comments))
    }
}

const LikeDislike = ({ Comment, userId, comments, setComments, verified}) =>{
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
        if(verified){
            if(!verifyLike(Comment.dislike)){
                if(!verifyLike(Comment.like)) {
                    const res = await axios.put(`/comment/${Comment._id}/like/increment`, {
                        formatedDate: Comment.formatedDate
                    })

                    if(res.data.success) {
                        mapComments(res.data.comment)
                    }
                } else{
                    const res = await axios.put(`/comment/${Comment._id}/like/decrement`, {
                        formatedDate: Comment.formatedDate
                    })

                    if(res.data.success) {
                        mapComments(res.data.comment)
                    }
                }
            }
        } else{
            alert("You need to login before doing that")
        }
    }

    const dislikeOnClick = async (e) => {
        checkMenuBtn()
        if(verified){
            if(!verifyLike(Comment.like)){
                if(!verifyLike(Comment.dislike)) {
                        const res = await axios.put(`/comment/${Comment._id}/dislike/increment`, {
                            formatedDate: Comment.formatedDate
                        })

                        if(res.data.success) {
                            mapComments(res.data.comment)
                        }
                    } else{
                        const res = await axios.put(`/comment/${Comment._id}/dislike/decrement`, {
                            formatedDate: Comment.formatedDate
                        })

                        if(res.data.success) {
                            mapComments(res.data.comment)
                        }
                }
            }
        } else{
            alert("You need to login before doing that")
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