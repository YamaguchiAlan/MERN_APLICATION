import React, { useEffect, useState } from 'react';
import './Article-body.css';
 
const ArticleBody = (actualArticle) =>{
    useEffect(() => {
        /* Imprimiendo el subtitulo y el contenido */
        document.getElementById("content").innerHTML = actualArticle.article.content;
        document.getElementById("sub-title").innerHTML = actualArticle.article.subTitle;
    });
    
    return(
    <div className="article-body" id="nav-pos">

        <span className="sub-title">
            <h3 id="sub-title"></h3>
        </span>

        <p className="atc-content" id="content">
        </p>
    </div>
)
}

export default ArticleBody;