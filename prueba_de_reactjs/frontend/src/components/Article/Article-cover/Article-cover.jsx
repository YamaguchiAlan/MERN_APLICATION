import React from 'react'

const ArticleCover = ({article}) => (
    <div className="cover card border-0">
        <img id="article-cover-img" src={article.img ? article.img : `http://localhost:4000/api/article-cover-img/${article._id}`} alt="Article img" className="atc-img card-img"/>
        <div className="card-img-overlay">
            <h1 className="atc-title card-text text-center"><i>{article.title}</i></h1>
        </div>
    </div>
)

export default ArticleCover;