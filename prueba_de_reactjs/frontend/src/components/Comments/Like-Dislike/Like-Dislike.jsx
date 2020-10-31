import React, {useEffect, useState} from 'react';
import './Like-Dislike.css';

const LikeDislike = ({ cmt, index }) =>{
    useEffect(() => {
        /* Agregando la funcion de dar like */
        let likes = document.querySelectorAll(".like-dislike .fa-thumbs-up");
        let likesCounter = document.getElementsByClassName("likes-count");

        likes[index].addEventListener( 'click', (c) => {
                let likeActive = Comments.like.filter( element => element == "ja" ? true : false);
                let dislikeActive = Comments.dislike.filter( element => element == "ja" ? true : false);

                /* Si le diste dislike al comentario no puedes darle like */
                if( dislikeActive == false ){
                    /* Si no has dado like */
                    if( likeActive == false ){
                        let newComent = Comments;
                        newComent.like.push("ja");
                        
                        setComments(newComent);
                        likesCounter[index].innerHTML = Comments.like.length                        

                        c.target.className="fas fa-thumbs-up";
                    }
                    /* Si has dado like */ 
                    else{         
                        let newComent = Comments;
                        let newLikes = newComent.like.filter( element => element != "ja")
                        newComent.like = newLikes;

                        setComments(newComent)
                        likesCounter[index].innerHTML = Comments.like.length 

                        c.target.className="far fa-thumbs-up";
                        }
                }
            })
        
        /* Agregando la funcion de dar dislike */
        let dislikes = document.querySelectorAll(".like-dislike .fa-thumbs-down");
        let dislikesCounter = document.getElementsByClassName("dislikes-count")

        dislikes[index].addEventListener( 'click', (c) => {
            let likeActive = Comments.like.filter( element => element == "ja" ? true : false);
            let dislikeActive = Comments.dislike.filter( element => element == "ja" ? true : false);

            /* Si le diste like al comentario no puedes darle dislike */
            if( likeActive == false ){
                /* Si no has dado dislike */
                if( dislikeActive == false ){
                    let newComent = Comments;
                    newComent.dislike.push("ja");

                    setComments(newComent);
                    dislikesCounter[index].innerHTML = Comments.dislike.length

                    c.target.className="fas fa-thumbs-down";
                }
                /* Si has dado dislike */ 
                else{         
                    let newComent = Comments;
                    let newdisLikes = newComent.dislike.filter( element => element != "ja")
                    newComent.dislike = newdisLikes;

                    setComments(newComent)
                    dislikesCounter[index].innerHTML = Comments.dislike.length

                    c.target.className="far fa-thumbs-down";
                    }
            }
        })
       
    },[]);

    const [Comments, setComments] = useState(cmt);

    return(
        <p className="like-dislike" >
        <i className="far fa-thumbs-up" ></i>
        <span className="likes-count" >{Comments.like.length}</span>
    
        <i  className="far fa-thumbs-down" ></i>
        <span className="dislikes-count" >{Comments.dislike.length}</span>
        </p>
     )
}

export default LikeDislike;