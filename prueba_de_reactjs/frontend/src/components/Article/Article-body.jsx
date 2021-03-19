import React, { useEffect } from 'react';
import {format} from 'timeago.js'
import {connect} from 'react-redux'

const mapStateToProps = state => {
    return { userId: state.userReducer.user._id }
}

const ArticleBody =({article, userId}) =>{
    useEffect(() => {
        if(article) {
            document.getElementById("content").innerHTML = article.content;
            const images = document.querySelectorAll('#content img')

            images.forEach((e, i) => {
                e.src = `${article.imagesUrl[i]}?date=${article.updatedAt}`
            })
        }
    });

    return(
    <div className="article-body" id="article-body">
        <div className="article-author">
            <img src={article ? `${process.env.REACT_APP_API_URL}/api/users/${article.author._id}/image` : `${process.env.REACT_APP_API_URL}/api/users/${userId}/image`}alt="Profile-pic"/>
            <span>By: <strong id="article-author-top">{article && article.author.username}</strong>
             <span id="article-date">{article && format(article.createdAt)}</span></span>
        </div>

        <div className="atc-content" id="content">
        </div>

        <div className="row">
            <div className="article-author-bottom text-right">
                <p id="article-author-bottom">
                    - {article && article.author.username}
                </p>
                <img src="/img/instagram.png" alt="Instagram"/>
                <img src="/img/twitter.png" alt="Twitter"/>
            </div>
        </div>
    </div>
)
}

export default connect(mapStateToProps)(ArticleBody);