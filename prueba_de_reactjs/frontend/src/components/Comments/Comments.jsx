import React, { useEffect, useState } from 'react';
import './Comments.css';
import CommentUser from './Comment-user/Comment-user';
import LikeDislike from './Like-Dislike/Like-Dislike';

const Comments = ({articleId}) =>{
    useEffect( ()=>{
        fetch("/JSON/Comments.json", { method: 'GET' } )
        .then( response => response.json() )
        .then( data => {
            data.forEach( c => {
            if(c.articleId === articleId){
                setComments(c.comments)
            }
            })

        })
        return(()=>{
            setComments([])
        })
    },[articleId]);

    const [comments, setComments] = useState([])

    return(
        <div className="comments-back" id="comments">
            {comments.length > 0 ?(
                <>
                    <p className="coments-counter"> Comentarios({comments.length}) </p>

                    <div className="comments">
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
                    <p className="coments-counter"> Haz un comentario </p>
                )}
        </div>


    )
    }

export default Comments;