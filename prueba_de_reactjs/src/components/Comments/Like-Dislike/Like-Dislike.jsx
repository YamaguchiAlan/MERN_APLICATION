import React, {useEffect} from 'react';
import './Like-Dislike.css';

const likeActive = new Array(5);
const dislikeActive = new Array(5);
likeActive.fill(false);
dislikeActive.fill(false);

const LikeDislike = ({ c, comments }) =>{

    useEffect(() => {
        /* Agregando la funcion de dar like */
        let likes = document.querySelectorAll(".like-dislike .fa-thumbs-up");
        let likesCounter = document.querySelectorAll(".like-dislike .likes-count");

        likes.forEach( (element, index) =>{

            element.addEventListener( 'click', (c) => {
                /* Obteniendo el ID del usuario mediante el atributo ID del boton */
                let likeId = parseInt(c.target.id.slice(5));

                /* Obteniendo el indice del comentario */ 
                let commentIndex ;
                comments.forEach( ( element, i) => { 
                    if( element.userId == likeId ){
                        commentIndex = i;
                    }
                });

                /* Si le diste dislike al comentario no puedes darle like */
                if( dislikeActive[index] == false ){
                    
                    /* Si no has dado like */
                    if( likeActive[index] == false ){
                        comments[commentIndex].like += 1;

                        likesCounter[index].innerHTML = comments[commentIndex].like;
                        c.target.className="fas fa-thumbs-up";

                        likeActive[index] = true;
                    }
                    /* Si has dado like */ 
                    else{         
                        comments[commentIndex].like -= 1;
        
                        likesCounter[index].innerHTML = comments[commentIndex].like;
                        c.target.className="far fa-thumbs-up";
        
                        likeActive[index] = false;
                        }
                }
            })
        })
        
        /* Agregando la funcion de dar dislike */
        let dislikes = document.querySelectorAll(".like-dislike .fa-thumbs-down");
        let dislikesCounter = document.querySelectorAll(".like-dislike .dislikes-count");

        dislikes.forEach( ( element, index ) =>(

            element.addEventListener( 'click', (c) => {
                /* Obteniendo el ID del usuario mediante el atributo ID del boton */
                let dislikeId = parseInt(c.target.id.slice(8));

                /* Obteniendo el indice del comentario */
                let commentIndex ;
                comments.forEach( ( element, i) => { 
                    if( element.userId == dislikeId ){
                        commentIndex = i;
                    }
                });

                /* Si le diste like al comentario no puedes darle dislike */
                if(likeActive[index] == false){

                    /* Si no has dado dislike */
                    if(dislikeActive[index] == false){
                        comments[commentIndex].dislike += 1;

                        dislikesCounter[index].innerHTML = comments[commentIndex].dislike;
                        c.target.className="fas fa-thumbs-down";

                        dislikeActive[index] = true;
                    }
                    /* Si has dado dislike */ 
                    else{         
                        comments[commentIndex].dislike -= 1;
        
                        dislikesCounter[index].innerHTML = comments[commentIndex].dislike;
                        c.target.className="far fa-thumbs-down";
        
                        dislikeActive[index] = false;
                        }
                }
            })
        ))

    });

    /* Creando ID unicos para cada boton de like y dislike segun el usuario */
    let likeId = `like-${c.userId}`;
    let dislikeId = `dislike-${c.userId}`;

    /* Creando ID unicos para cada contador de likes y dislikes segun el usuario */
    let likesCounterId = `likes-counter-${c.userId}`;
    let dislikesCounterId = `dislikes-counter-${c.userId}`;

    return(
        <p className="like-dislike" >
        <i id={likeId} className="far fa-thumbs-up" ></i>
        <span id={likesCounterId} className="likes-count" >{c.like}</span>
    
        <i id={dislikeId} className="far fa-thumbs-down" ></i>
        <span id={dislikesCounterId} className="dislikes-count" >{c.dislike}</span>
        </p>
     )
}

export default LikeDislike;