import React, { useEffect } from 'react';
import './Article-body.css';

const ArticleBody =({article}) =>{
    useEffect(() => {
        /* Imprimiendo el subtitulo y el contenido */
        if(article) {
            document.getElementById("content").innerHTML = article.content;
            const images = document.querySelectorAll('#content img')
            images.forEach((e, i) => {
                e.src = article.imagesUrl[i]
            })
        }
    });

    return(
    <div className="article-body" id="article-body">
        <div className="article-author">
            <img src="/img/katana_zero.jpg" alt="Profile-pic"/>
            <span>Por: <strong>Alan Yamaguchi</strong> 14/11/20</span>
        </div>

        <div className="atc-content" id="content">
        </div>

        <div className="row">
            <div className="article-author-bottom text-right">
                <p >
                    - Alan Yamaguchi
                </p>
                <img src="/img/instagram.png" alt="Instagram"/>
                <img src="/img/twitter.png" alt="Twitter"/>
            </div>
        </div>
    </div>
)
}

export default ArticleBody;